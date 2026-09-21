/**
 * Проверяет целостность переводов и текстов на страницах:
 *   1. каждый data-i18n ключ из HTML существует во всех трёх языках;
 *   2. статический текст в HTML совпадает с немецким переводом
 *      (иначе посетитель видит один текст до загрузки скриптов и другой после);
 *   3. в переводах нет ключей-«сирот», не используемых ни на одной странице.
 *
 *   node scripts/check-i18n.mjs
 */
import { readFileSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// script.js — браузерный файл; выполняем его с заглушками.
const noop = () => {};
const win = {
    addEventListener: noop, removeEventListener: noop, dispatchEvent: noop,
    matchMedia: () => ({ matches: false, addEventListener: noop, addListener: noop }),
    location: { hostname: 'localhost', search: '', href: '' },
    requestAnimationFrame: noop, setTimeout: noop, innerWidth: 1280, scrollY: 0
};
const el = { addEventListener: noop, classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    setAttribute: noop, getAttribute: () => null, hasAttribute: () => false, style: {}, dataset: {},
    querySelector: () => null, querySelectorAll: () => [], textContent: '', appendChild: noop };
const ctx = { window: win,
    document: { querySelectorAll: () => [], querySelector: () => null, getElementById: () => null,
        addEventListener: noop, createElement: () => el, body: { dataset: {} },
        documentElement: el, readyState: 'complete', title: '' },
    localStorage: { getItem: () => null, setItem: noop } };
new Function('window', 'document', 'localStorage', readFileSync(path.join(root, 'script.js'), 'utf8'))
    (ctx.window, ctx.document, ctx.localStorage);

const t = win.translations;
if (!t) { console.error('translations не найдены'); process.exit(1); }
const langs = ['de', 'en', 'ru'];

const get = (obj, key) => key.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);

const htmlFiles = readdirSync(root).filter((f) => f.endsWith('.html'));
const problems = { missing: [], drift: [], orphan: [] };
const usedKeys = new Set();

for (const file of htmlFiles) {
    const html = readFileSync(path.join(root, file), 'utf8');
    // Плейсхолдеры объявляются отдельным атрибутом — тоже считаем использованием.
    for (const ph of html.matchAll(/data-i18n-placeholder="([^"]+)"/g)) {
        usedKeys.add(ph[1]);
        for (const l of langs) {
            if (get(t[l], ph[1]) === undefined) problems.missing.push(`${file}: ${ph[1]} (placeholder) → нет в «${l}»`);
        }
    }

    const re = /data-i18n="([^"]+)"([^>]*)>([^<]*)/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const [, key, attrs, staticText] = m;
        usedKeys.add(key);

        for (const l of langs) {
            if (get(t[l], key) === undefined) problems.missing.push(`${file}: ${key} → нет в «${l}»`);
        }

        // Сравниваем только простой текст: элементы с data-i18n-attr задают атрибут,
        // а не содержимое, и HTML-разметку внутри значения не сверяем.
        if (attrs.includes('data-i18n-attr')) continue;
        const de = get(t.de, key);
        if (typeof de !== 'string' || /<[a-z]/i.test(de)) continue;
        const norm = (x) => x.replace(/&amp;/g, '&').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ').trim();
        if (staticText.trim() && norm(staticText) !== norm(de)) {
            problems.drift.push(`${file}: ${key}\n      HTML: ${norm(staticText).slice(0, 80)}\n      DE:   ${norm(de).slice(0, 80)}`);
        }
    }
}

// Ключи-сироты ищем только среди листьев-строк.
// Тексты сообщений WhatsApp подставляются в href через data-wa-msg,
// а не через data-i18n, поэтому в разметке их не видно.
// services.pN.price не размечены в HTML, пока идёт акция: карточки берут
// цену из services.promo.pN. Ключи нужны для состояния «акция выключена»,
// поэтому в списке исключений — иначе их удалят как ненужные.
const leaves = (obj, prefix = '') => Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? leaves(v, `${prefix}${k}.`) : [`${prefix}${k}`]);
const skip = /^(meta\.|project\.|cases\.|contact\.(whatsapp\.msg|form\.(submitted|sending|sendingLong|error|consentError))|blog\.(pageTitle|pageDescription|readTime|cta\.)|services\.(pageTitle|pageDescription|p[0-9]\.price|whatsappMsg)|ui\.(personName|photoAlt)|nav\.skills|study\.(disclaimer|detailsHide|c[0-9]\.alt)|footer\.)/;
for (const key of leaves(t.de)) {
    if (!usedKeys.has(key) && !skip.test(key)) problems.orphan.push(key);
}

let bad = 0;
for (const [name, title] of [['missing', 'Ключи, которых нет в каком-то языке'],
                             ['drift', 'Текст в HTML разошёлся с немецким переводом'],
                             ['orphan', 'Ключи в переводах, не используемые ни на одной странице']]) {
    const list = problems[name];
    if (!list.length) { console.log(`✓ ${title}: не найдено`); continue; }
    console.log(`\n✗ ${title} (${list.length}):`);
    list.forEach((x) => console.log('   • ' + x));
    if (name !== 'orphan') bad += list.length;
}

console.log(`\nПроверено страниц: ${htmlFiles.length}, ключей в работе: ${usedKeys.size}`);
if (bad) process.exitCode = 1;
