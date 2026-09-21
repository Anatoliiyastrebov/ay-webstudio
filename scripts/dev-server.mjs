/**
 * Статический dev-сервер без кеширования.
 * Нужен, чтобы правки в CSS/JS были видны сразу, без ручного сброса кеша.
 * Продакшен обслуживается Vercel — этот файл только для локальной работы.
 */
import { createServer } from 'http';
import { readFile, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT) || 4321;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.webmanifest': 'application/manifest+json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8'
};

createServer(async (req, res) => {
    const urlPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
    let filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath);

    // Не выпускаем запросы за пределы каталога проекта.
    if (!filePath.startsWith(root)) {
        res.writeHead(403).end('Forbidden');
        return;
    }

    try {
        const info = await stat(filePath);
        if (info.isDirectory()) filePath = path.join(filePath, 'index.html');
        const ext = path.extname(filePath).toLowerCase();
        let body = await readFile(filePath);

        // В HTML дописываем версию к локальным css/js, иначе браузер
        // продолжает отдавать статические теги из своего кеша.
        if (ext === '.html') {
            const v = Date.now();
            body = body
                .toString('utf8')
                .replace(/(<script[^>]+src=")(?!https?:)([^"?]+)(")/g, `$1$2?t=${v}$3`)
                .replace(/(<link[^>]+href=")(?!https?:)([^"?]+\.css)(")/g, `$1$2?t=${v}$3`);
        }

        res.writeHead(200, {
            'Content-Type': MIME[ext] || 'application/octet-stream',
            'Cache-Control': 'no-store, must-revalidate'
        });
        res.end(body);
    } catch {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end('<h1>404</h1>');
    }
}).listen(port, () => {
    console.log(`dev server (no-cache) → http://localhost:${port}`);
});
