/**
 * Вставляет немецкие статьи блога прямо в blog.html.
 *
 * Зачем: статьи живут в blog-content.js и раньше появлялись только после
 * выполнения JavaScript. Поисковый робот видел на странице 71 слово вместо
 * пятисот — а это тексты под запросы вроде «Was kostet eine Website».
 *
 * Разметка строится теми же функциями, что и в браузере, поэтому статический
 * вариант совпадает с тем, что потом отрисует JS. При смене языка скрипт
 * по-прежнему подменяет содержимое — видимой разницы нет.
 *
 *   node scripts/prerender-blog.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const noop = () => {};
const stubEl = {
    addEventListener: noop, setAttribute: noop, getAttribute: () => null,
    hasAttribute: () => false, classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
    style: {}, dataset: {}, querySelector: () => null, querySelectorAll: () => [], appendChild: noop
};
const win = {
    addEventListener: noop, removeEventListener: noop, dispatchEvent: noop,
    matchMedia: () => ({ matches: false, addEventListener: noop, addListener: noop }),
    location: { hostname: 'localhost', search: '', href: '' },
    requestAnimationFrame: noop, setTimeout: noop, innerWidth: 1280, scrollY: 0
};
const doc = {
    querySelector: () => null, querySelectorAll: () => [], getElementById: () => null,
    addEventListener: noop, createElement: () => stubEl, body: { dataset: {} },
    documentElement: stubEl, readyState: 'complete', title: ''
};
const storage = { getItem: () => null, setItem: noop };

const run = (file) =>
    new Function('window', 'document', 'localStorage', readFileSync(path.join(root, file), 'utf8'))
        (win, doc, storage);

run('script.js');        // переводы + window.getBlogCtaHtml
run('blog-content.js');  // window.blogArticles

const lang = 'de';
const order = ['kosten', 'baukasten', 'handwerker'];
const readTimeLabel = win.translations[lang].blog.readTime;
const cta = win.getBlogCtaHtml(lang);

const html = order
    .map((id) => {
        const article = win.blogArticles[id][lang];
        if (!article) throw new Error(`Статья «${id}» отсутствует в языке «${lang}»`);
        // Время чтения в браузере проставляет renderBlogArticles — здесь делаем то же самое.
        return article.replace(
            /(<span class="blog-read-time" data-read-min="(\d+)">)(<\/span>)/,
            (_m, open, min, close) => open + readTimeLabel.replace('%n', min) + close
        ) + cta;
    })
    .join('\n');

const blogPath = path.join(root, 'blog.html');
const before = readFileSync(blogPath, 'utf8');
const re = /(<div id="blog-articles" class="blog-articles">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/section>)/;

if (!re.test(before)) {
    console.error('✗ Не найден контейнер #blog-articles в blog.html');
    process.exit(1);
}

const after = before.replace(re, (_m, open, tail) => `${open}\n${html}\n            ${tail}`);
writeFileSync(blogPath, after);

const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
console.log(`✓ blog.html: вставлено ${order.length} статьи, ~${words} слов немецкого текста`);
