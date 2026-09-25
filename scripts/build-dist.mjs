/**
 * Собирает в dist/ только то, что можно публиковать.
 *
 * Зачем: хостинг раздаёт папку целиком. Если раздавать корень проекта,
 * наружу уходят package.json, scripts/, worker/, site.config.json и всё,
 * что случайно окажется рядом. Поэтому здесь белый список: новый файл
 * попадёт на сайт, только если его явно разрешить.
 *
 * Папка годится и для Cloudflare Workers (assets.directory в wrangler.jsonc),
 * и для заливки по FTP на обычный хостинг вроде ALL-INKL.
 *
 *   node scripts/build-dist.mjs
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

// Корневые файлы: страницы, клиентский JS, стили, иконки, файлы для роботов.
const ROOT_EXTENSIONS = ['.html', '.js', '.css', '.svg', '.ico', '.webmanifest', '.txt', '.xml'];

// Файлы с «публичным» расширением, которым на сайте всё равно не место.
const ROOT_DENY = new Set(['package.json', 'package-lock.json']);

// Исходник стиля рядом с его .min-версией: страницы подключают только
// минифицированную, так что несжатую копию на сайт не кладём.
function hasMinifiedTwin(name) {
    return name.endsWith('.css')
        && !name.endsWith('.min.css')
        && existsSync(path.join(root, `${name.slice(0, -4)}.min.css`));
}

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
    if (hasMinifiedTwin(name)) continue;
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

// ---------- _headers ----------
// Заголовки ответа для Cloudflare. Раньше их источником был vercel.json;
// сайт живёт только на Workers, поэтому правила описаны здесь — сразу в том
// виде, в каком попадут в файл.
//
// Шаблон по расширению («все .css») в _headers не поддерживается: там работает
// только звёздочка в конце пути. Кеш для стилей и скриптов Cloudflare
// выставляет сам, а папки с неизменяемым содержимым перечислены ниже.
const IMMUTABLE = 'public, max-age=31536000, immutable';

const HEADERS = [
    ['/*', [
        ['X-Frame-Options', 'DENY'],
        ['X-Content-Type-Options', 'nosniff'],
        ['Referrer-Policy', 'strict-origin-when-cross-origin'],
        ['Permissions-Policy', 'camera=(), microphone=(), geolocation=()'],
        ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'],
        // Всё своё: сторонних скриптов, шрифтов и запросов на сайте нет.
        ['Content-Security-Policy',
            "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; " +
            "script-src 'self' 'unsafe-inline'; font-src 'self'; connect-src 'self'; frame-ancestors 'none';"]
    ]],
    ['/fonts/*', [['Cache-Control', IMMUTABLE]]],
    ['/images/projects/*', [['Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400']]],
    ['/vendor/*', [['Cache-Control', IMMUTABLE]]]
];

const headersFile = HEADERS
    .map(([source, list]) => `${source}\n${list.map(([key, value]) => `  ${key}: ${value}`).join('\n')}`)
    .join('\n\n');
writeFileSync(path.join(dist, '_headers'), `${headersFile}\n`);
files += 1;
console.log(`✓ dist/_headers: ${HEADERS.length} правил`);

console.log(`✓ dist/: ${files} файлов, ${(bytes / 1024 / 1024).toFixed(1)} МБ`);
