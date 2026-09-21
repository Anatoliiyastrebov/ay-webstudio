/**
 * Генерирует scripts/sanity-seed.ndjson из текущего статического контента
 * (portfolio-projects.js + blog-content.js) для импорта в Sanity:
 *
 *   node scripts/sanity-seed.mjs
 *   cd studio && npx sanity dataset import ../scripts/sanity-seed.ndjson production --replace
 */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Оба файла — обычные браузерные скрипты, вешающие данные на window.
const windowStub = {};
globalThis.window = windowStub;
new Function('window', readFileSync(path.join(root, 'portfolio-projects.js'), 'utf8'))(windowStub);
new Function('window', readFileSync(path.join(root, 'blog-content.js'), 'utf8'))(windowStub);

const projects = windowStub.portfolioProjects || [];
const blogArticles = windowStub.blogArticles || {};
const blogOrder = ['kosten', 'baukasten', 'handwerker'];

let keyCounter = 0;
const key = () => `k${(keyCounter++).toString(36).padStart(6, '0')}`;

function decodeEntities(s) {
    return s
        .replace(/&nbsp;/g, ' ')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&');
}

// Инлайн-разметка (strong/em) → spans с marks.
function inlineToSpans(html) {
    const spans = [];
    const re = /<(strong|em)>([\s\S]*?)<\/\1>/g;
    let last = 0;
    let m;
    while ((m = re.exec(html)) !== null) {
        if (m.index > last) {
            spans.push({ _type: 'span', _key: key(), text: decodeEntities(html.slice(last, m.index)), marks: [] });
        }
        spans.push({ _type: 'span', _key: key(), text: decodeEntities(m[2]), marks: [m[1]] });
        last = re.lastIndex;
    }
    if (last < html.length) {
        spans.push({ _type: 'span', _key: key(), text: decodeEntities(html.slice(last)), marks: [] });
    }
    return spans.filter((s) => s.text.length);
}

function block(style, html, listItem) {
    const b = {
        _type: 'block',
        _key: key(),
        style,
        markDefs: [],
        children: inlineToSpans(html.trim().replace(/\s+/g, ' '))
    };
    if (listItem) {
        b.listItem = listItem;
        b.level = 1;
    }
    return b;
}

// Тело статьи (p / h3 / ul>li) → Portable Text.
function htmlToBlocks(html) {
    const blocks = [];
    const re = /<(p|h3|ul)>([\s\S]*?)<\/\1>/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const [, tag, inner] = m;
        if (tag === 'ul') {
            const liRe = /<li>([\s\S]*?)<\/li>/g;
            let li;
            while ((li = liRe.exec(inner)) !== null) {
                blocks.push(block('normal', li[1], 'bullet'));
            }
        } else {
            blocks.push(block(tag === 'h3' ? 'h3' : 'normal', inner));
        }
    }
    return blocks;
}

// Из полного HTML <article> вытаскиваем метку, время чтения, заголовок и тело.
function parseArticle(html) {
    const meta = (html.match(/<span>([\s\S]*?)<\/span>/) || [])[1] || '';
    const readMin = parseInt((html.match(/data-read-min="(\d+)"/) || [])[1] || '5', 10);
    const title = (html.match(/<h2>([\s\S]*?)<\/h2>/) || [])[1] || '';
    const bodyHtml = (html.match(/<\/h2>([\s\S]*?)<\/article>/) || [])[1] || '';
    return {
        meta: decodeEntities(meta.trim()),
        readMin,
        title: decodeEntities(title.trim()),
        body: htmlToBlocks(bodyHtml)
    };
}

const docs = [];

projects.forEach((p, i) => {
    docs.push({
        _id: `project-${p.id}`,
        _type: 'project',
        slug: { _type: 'slug', current: p.id },
        order: (i + 1) * 10,
        liveUrl: p.liveUrl,
        previewPath: p.preview,
        title: p.title,
        category: p.category,
        summary: p.summary,
        techStack: p.techStack || [],
        styles: p.styles || [],
        implemented: p.implemented,
        planned: p.planned
    });
});

blogOrder.forEach((id, i) => {
    const langs = blogArticles[id];
    if (!langs) return;
    const parsed = {};
    ['de', 'en', 'ru'].forEach((lang) => {
        if (langs[lang]) parsed[lang] = parseArticle(langs[lang]);
    });
    const first = parsed.de || parsed.en || parsed.ru;
    docs.push({
        _id: `blogPost-${id}`,
        _type: 'blogPost',
        slug: { _type: 'slug', current: id },
        order: (i + 1) * 10,
        readMin: first.readMin,
        meta: Object.fromEntries(Object.entries(parsed).map(([l, v]) => [l, v.meta])),
        title: Object.fromEntries(Object.entries(parsed).map(([l, v]) => [l, v.title])),
        body: Object.fromEntries(Object.entries(parsed).map(([l, v]) => [l, v.body]))
    });
});

const outPath = path.join(root, 'scripts', 'sanity-seed.ndjson');
writeFileSync(outPath, docs.map((d) => JSON.stringify(d)).join('\n') + '\n');
console.log(`Written ${docs.length} documents (${projects.length} projects, ${docs.length - projects.length} blog posts) → ${path.relative(root, outPath)}`);
