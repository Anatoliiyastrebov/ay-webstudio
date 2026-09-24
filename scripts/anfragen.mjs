/**
 * Показывает заявки, сохранённые воркером в Cloudflare KV.
 *
 * Почта — только канал доставки. Каждая заявка записывается в хранилище
 * до отправки письма, поэтому здесь видно всё, что прислали клиенты,
 * даже если письмо не дошло.
 *
 *   npm run anfragen          последние 20
 *   npm run anfragen -- 50    последние 50
 *   npm run anfragen -- 5 -v  с полным текстом сообщений
 */
import { execFileSync } from 'child_process';

const args = process.argv.slice(2);
const limit = Number(args.find((a) => /^\d+$/.test(a)) || 20);
const verbose = args.includes('-v') || args.includes('--voll');

function wrangler(cmdArgs) {
    return execFileSync('npx', ['--yes', 'wrangler@4', ...cmdArgs], {
        encoding: 'utf8',
        maxBuffer: 32 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'pipe']
    });
}

let keys;
try {
    keys = JSON.parse(wrangler(['kv', 'key', 'list', '--binding', 'ANFRAGEN', '--remote']));
} catch (err) {
    console.error('Не удалось прочитать хранилище. Нужен вход: npx wrangler login');
    console.error(String(err.stderr || err.message).split('\n').slice(0, 4).join('\n'));
    process.exit(1);
}

// Ключ начинается с метки времени, поэтому обратная сортировка = свежие сверху.
const recent = keys
    .map((k) => k.name)
    .filter((n) => n.startsWith('anfrage:'))
    .sort()
    .reverse()
    .slice(0, limit);

if (!recent.length) {
    console.log('Заявок пока нет.');
    process.exit(0);
}

console.log(`Заявок в хранилище: ${keys.length}. Показаны последние ${recent.length}.\n`);

for (const key of recent) {
    let rec;
    try {
        rec = JSON.parse(wrangler(['kv', 'key', 'get', key, '--binding', 'ANFRAGEN', '--remote']));
    } catch {
        console.log(`${key} — не удалось прочитать`);
        continue;
    }
    const when = new Date(rec.receivedAt).toLocaleString('de-DE');
    // Статус письма: sent:… — ушло, failed:… — не ушло, причина рядом.
    const mail = String(rec.mail || '—');
    const mark = mail.startsWith('sent') ? '✓' : mail.startsWith('failed') ? '✗' : '·';
    console.log(`${mark} ${when}  ${rec.name} <${rec.email}>`);
    console.log(`   Пакет: ${rec.projectType || '—'}   Письмо: ${mail}`);
    const text = String(rec.message || '').replace(/\s+/g, ' ');
    console.log(`   ${verbose ? rec.message : text.slice(0, 120) + (text.length > 120 ? '…' : '')}`);
    console.log('');
}
