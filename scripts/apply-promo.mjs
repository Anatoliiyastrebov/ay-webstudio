/**
 * Разносит акцию из site.config.json по карточкам пакетов:
 * бейдж, зачёркнутая старая цена, новая цена и правовая сноска —
 * в leistungen.html и в переводы de/en/ru в script.js.
 *
 * Включить/выключить = одна правка в site.config.json + `npm run build`.
 * Скрипт идемпотентен: пишет только между маркерами, поэтому повторный
 * запуск ничего не дублирует, а active:false полностью убирает акцию —
 * и разметку, и ключи переводов, так что несуществующая скидка не может
 * «залипнуть» на сайте.
 *
 *   node scripts/apply-promo.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(readFileSync(path.join(root, 'site.config.json'), 'utf8'));
const promo = cfg.promo || {};

const warnings = [];

// Акция живёт, только пока верны все условия сразу. Реклама скидки,
// которой уже нет, — это то, за что в Германии прилетает Abmahnung.
const endsOn = promo.endsOn ? new Date(`${promo.endsOn}T23:59:59`) : null;
const expired = endsOn ? endsOn.getTime() < Date.now() : false;
const slotsLeft = Number(promo.slotsLeft ?? 0);
const active = Boolean(promo.active) && slotsLeft > 0 && !expired;

if (promo.active && !active) {
    warnings.push(
        expired
            ? `Дата окончания ${promo.endsOn} уже прошла — акция снята с сайта.`
            : 'slotsLeft = 0 — свободных мест нет, акция снята с сайта.'
    );
}

// ---------- Форматирование цен ----------

// Скидка округляется до десятков вниз: «419 €» в прайсе выглядит как ошибка.
const discounted = (value) => Math.floor((value * (100 - promo.percent)) / 100 / 10) * 10;

const FORMATS = {
    de: { sep: ' ', money: (n) => `${n} €` },
    ru: { sep: ' ', money: (n) => `${n} €` },
    en: { sep: ',', money: (n) => `€${n}` }
};

function group(value, sep) {
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
}

function range(from, to, lang) {
    const f = FORMATS[lang];
    // У en валюта стоит перед числом — знак пишем один раз перед диапазоном.
    return lang === 'en'
        ? `€${group(from, f.sep)}–${group(to, f.sep)}`
        : `${group(from, f.sep)}–${group(to, f.sep)} €`;
}

// ---------- Тексты ----------

const TEXTS = {
    de: {
        badge: (p, n) => `−${p} % für die ersten ${n} Kunden`,
        was: (r) => `statt ${r}`,
        note: (p, total, left, until) =>
            `Aktion: ${p} % Rabatt auf Landingpage, Basis-Website und Erweiterte Website — ` +
            `für die ersten ${total} Neukunden, die bis zum ${until} einen Auftrag erteilen. ` +
            `Aktuell ${left === 1 ? 'ist noch 1 Platz' : `sind noch ${left} Plätze`} frei. ` +
            `Der Rabatt gilt im Gegenzug für eine Referenz und eine öffentliche Bewertung. ` +
            `Bezugspreis ist der reguläre Festpreis des jeweiligen Pakets. ` +
            `Danach gelten wieder die regulären Preise.`
    },
    en: {
        badge: (p, n) => `−${p}% for the first ${n} clients`,
        was: (r) => `instead of ${r}`,
        note: (p, total, left, until) =>
            `Promotion: ${p}% off the Landing page, Basic website and Extended website packages — ` +
            `for the first ${total} new clients who place an order by ${until}. ` +
            `${left === 1 ? '1 slot is' : `${left} slots are`} still available. ` +
            `The discount is granted in exchange for a reference and a public review. ` +
            `The reference price is the regular fixed price of each package. ` +
            `After that the regular prices apply again.`
    },
    ru: {
        badge: (p, n) => `−${p} % для первых ${n} клиентов`,
        was: (r) => `вместо ${r}`,
        note: (p, total, left, until) =>
            `Акция: скидка ${p} % на пакеты «Landingpage», «Basis-Website» и «Erweiterte Website» — ` +
            `для первых ${total} новых клиентов, оформивших заказ до ${until}. ` +
            `Сейчас свободно мест: ${left}. ` +
            `Скидка предоставляется в обмен на отзыв и публичную оценку. ` +
            `Базой для скидки служит обычная фиксированная цена пакета. ` +
            `После этого действуют обычные цены.`
    }
};

const DATE_FORMATS = {
    de: (d) => `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(0, 4)}`,
    ru: (d) => `${d.slice(8, 10)}.${d.slice(5, 7)}.${d.slice(0, 4)}`,
    en: (d) => d
};

// Порядок карточек на странице: p1/p2/p3 ↔ первые три пакета из offers.
const PACKAGES = ['Landingpage', 'Basis-Website', 'Erweiterte Website'];
const applies = new Set(promo.appliesTo || PACKAGES);

const offerFor = (name) => (cfg.offers || []).find((o) => o.name === name);

function buildStrings(lang) {
    const t = TEXTS[lang];
    const out = {
        badge: t.badge(promo.percent, promo.slotsTotal),
        note: t.note(
            promo.percent,
            promo.slotsTotal,
            slotsLeft,
            DATE_FORMATS[lang](promo.endsOn)
        )
    };
    PACKAGES.forEach((name, i) => {
        if (!applies.has(name)) return;
        const offer = offerFor(name);
        if (!offer) {
            warnings.push(`Пакета «${name}» нет в offers — карточка p${i + 1} осталась без скидки.`);
            return;
        }
        out[`p${i + 1}`] = {
            price: range(discounted(offer.priceFrom), discounted(offer.priceTo), lang),
            was: t.was(range(offer.priceFrom, offer.priceTo, lang))
        };
    });
    return out;
}

const strings = { de: buildStrings('de'), en: buildStrings('en'), ru: buildStrings('ru') };


// Бегущая строка: дорожка из двух одинаковых групп, которая едет на -50 %.
// В этот момент вторая группа встаёт ровно туда, где была первая, — шов
// не виден. Трёх повторов хватает, чтобы группа была шире самой карточки
// на любом из трёх языков.
const MARQUEE_REPEATS = 3;

function band(text, ind) {
    const item = `<span class="price-promo-item" data-i18n="services.promo.badge">${text}</span>`;
    const group = `${ind}        <div class="price-promo-group">${item.repeat(MARQUEE_REPEATS)}</div>`;
    return (
        `\n${ind}    <div class="price-promo-band">\n` +
        // Дорожка скрыта от скринридеров: иначе текст читается шесть раз подряд.
        `${ind}        <span class="sr-only" data-i18n="services.promo.badge">${text}</span>\n` +
        `${ind}        <div class="price-promo-track" aria-hidden="true">\n` +
        `${group}\n${group}\n` +
        `${ind}        </div>\n` +
        `${ind}    </div>\n${ind}`
    );
}

// ---------- leistungen.html ----------

function between(source, name, replacement) {
    const re = new RegExp(`(<!-- promo:${name}:start -->)[\\s\\S]*?(<!-- promo:${name}:end -->)`);
    if (!re.test(source)) {
        warnings.push(`Маркер promo:${name} не найден в leistungen.html.`);
        return source;
    }
    return source.replace(re, `$1${replacement}$2`);
}

const htmlPath = path.join(root, 'leistungen.html');
const htmlBefore = readFileSync(htmlPath, 'utf8');
let html = htmlBefore;

PACKAGES.forEach((name, i) => {
    const n = i + 1;
    const on = active && applies.has(name) && strings.de[`p${n}`];
    const ind = '                    ';

    html = between(html, `p${n}:badge`, on ? band(strings.de.badge, ind) : '');

    // Регулярная цена остаётся в разметке как зачёркнутый Bezugspreis:
    // без неё скидка не проверяема и рекламировать её нельзя.
    const priceBlock = on
        ? `\n${ind}<p class="price-tag" data-i18n="services.promo.p${n}.price">${strings.de[`p${n}`].price}</p>\n` +
          `${ind}<p class="price-was"><s data-i18n="services.promo.p${n}.was">${strings.de[`p${n}`].was}</s></p>\n${ind}`
        : `\n${ind}<p class="price-tag" data-i18n="services.p${n}.price">${
              (offerFor(name) && range(offerFor(name).priceFrom, offerFor(name).priceTo, 'de')) || ''
          }</p>\n${ind}`;
    html = between(html, `p${n}:price`, priceBlock);
});

html = between(
    html,
    'note',
    active ? `<p class="price-promo-note" data-i18n="services.promo.note">${strings.de.note}</p>` : ''
);

if (html !== htmlBefore) {
    writeFileSync(htmlPath, html);
    console.log('✓ leistungen.html');
}

// ---------- Переводы ----------

function block(lang) {
    // Возвращаем всё содержимое между маркерами вместе с отступом перед
    // закрывающим маркером — так выключенная акция оставляет их аккуратно
    // на двух строках, а не склеивает в одну.
    if (!active) return '\n            ';
    const s = strings[lang];
    const q = (v) => `'${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
    const lines = [
        '            promo: {',
        `                badge: ${q(s.badge)},`,
        `                note: ${q(s.note)},`
    ];
    PACKAGES.forEach((name, i) => {
        const key = `p${i + 1}`;
        if (!s[key]) return;
        lines.push(`                ${key}: { price: ${q(s[key].price)}, was: ${q(s[key].was)} },`);
    });
    lines.push('            },');
    return `\n${lines.join('\n')}\n            `;
}

const scriptPath = path.join(root, 'script.js');
const scriptBefore = readFileSync(scriptPath, 'utf8');
let script = scriptBefore;

for (const lang of ['de', 'en', 'ru']) {
    const re = new RegExp(
        `(/\\* promo:${lang}:start \\*/)[\\s\\S]*?(/\\* promo:${lang}:end \\*/)`
    );
    if (!re.test(script)) {
        warnings.push(`Маркер promo:${lang} не найден в script.js.`);
        continue;
    }
    script = script.replace(re, `$1${block(lang)}$2`);
}

if (script !== scriptBefore) {
    writeFileSync(scriptPath, script);
    console.log('✓ script.js (de/en/ru)');
}

// ---------- Итог ----------

if (active) {
    console.log(
        `Акция: −${promo.percent} % · свободно мест ${slotsLeft} из ${promo.slotsTotal} · до ${promo.endsOn}`
    );
} else {
    console.log('Акция выключена — на сайте её нет.');
}

if (warnings.length) {
    console.log('\n⚠  Требует внимания:');
    warnings.forEach((w) => console.log(`   • ${w}`));
}
