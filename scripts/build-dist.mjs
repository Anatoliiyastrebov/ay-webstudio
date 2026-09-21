/**
 * Собирает в dist/ только то, что можно публиковать.
 *
 * Зачем: хостинг раздаёт папку целиком. Если раздавать корень проекта,
 * наружу уходят package.json, scripts/, server/, site.config.json и всё,
 * что случайно окажется рядом. Поэтому здесь белый список: новый файл
 * попадёт на сайт, только если его явно разрешить.
 *
 * Одна и та же папка годится для Vercel (outputDirectory в vercel.json)
 * и для заливки по FTP на обычный хостинг вроде ALL-INKL.
 *
 *   node scripts/build-dist.mjs
 */
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

// Корневые файлы: страницы, клиентский JS, стили, иконки, файлы для роботов.
const ROOT_EXTENSIONS = ['.html', '.js', '.css', '.svg', '.ico', '.webmanifest', '.txt', '.xml'];

// Файлы с «публичным» расширением, которым на сайте всё равно не место.
const ROOT_DENY = new Set(['package.json', 'package-lock.json']);

// Папки целиком.
const DIRS = ['fonts', 'images', 'vendor'];

// Внутри разрешённых папок — всё, кроме служебного.
const DENY_IN_DIRS = [
    /\.md$/i,
    /(^|\/)\.DS_Store$/,
    // Мастер портрета без потерь, 2 МБ: нужен только scripts/prepare-photo.py.
    /^images\/photo\.jpg$/
];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);

let files = 0;
let bytes = 0;

for (const name of readdirSync(root)) {
    const full = path.join(root, name);
    if (!statSync(full).isFile()) continue;
    if (ROOT_DENY.has(name)) continue;
    if (!ROOT_EXTENSIONS.includes(path.extname(name).toLowerCase())) continue;
    cpSync(full, path.join(dist, name));
    files += 1;
    bytes += statSync(full).size;
}

for (const dir of DIRS) {
    const src = path.join(root, dir);
    if (!existsSync(src)) continue;
    cpSync(src, path.join(dist, dir), {
        recursive: true,
        filter: (from) => {
            const rel = path.relative(root, from).split(path.sep).join('/');
            if (DENY_IN_DIRS.some((re) => re.test(rel))) return false;
            if (statSync(from).isFile()) {
                files += 1;
                bytes += statSync(from).size;
            }
            return true;
        }
    });
}

// ---------- _headers для Cloudflare ----------
// Cloudflare не читает vercel.json, поэтому переводим его заголовки в
// формат _headers. Источник правды остаётся один — vercel.json.
// Переносим только правила вида «/папка/(.*)»: их Cloudflare понимает
// как «/папка/*». Правила по расширению (/(.*).css) пропускаем — такой
// шаблон в _headers не поддерживается, а кеш для них Cloudflare и так
// выставляет сам.
const vercelPath = path.join(root, 'vercel.json');
if (existsSync(vercelPath)) {
    const vercel = JSON.parse(readFileSync(vercelPath, 'utf8'));
    const blocks = [];
    const skipped = [];
    for (const rule of vercel.headers || []) {
        const m = /^(.*)\(\.\*\)$/.exec(rule.source);
        if (!m || m[1].includes('(')) {
            skipped.push(rule.source);
            continue;
        }
        const lines = rule.headers.map((h) => `  ${h.key}: ${h.value}`);
        blocks.push(`${m[1]}*\n${lines.join('\n')}`);
    }
    writeFileSync(path.join(dist, '_headers'), `${blocks.join('\n\n')}\n`);
    files += 1;
    console.log(`✓ dist/_headers: ${blocks.length} правил из vercel.json` +
        (skipped.length ? ` (пропущены по расширению: ${skipped.join(', ')})` : ''));
}

console.log(`✓ dist/: ${files} файлов, ${(bytes / 1024 / 1024).toFixed(1)} МБ`);
