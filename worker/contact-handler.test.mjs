/**
 * Проверка обработчика формы без деплоя: SendGrid подменён заглушкой,
 * письма никуда не уходят.
 *
 *   npm run test-worker
 */
import { handleContact, buildMail, buildMime } from './contact-handler.mjs';

const ENV = { SENDGRID_API_KEY: 'SG.test', EMAIL_FROM: 'from@x.de', EMAIL_TO: 'to@x.de' };
let sent = null, sendStatus = 202;
globalThis.fetch = async (url, init) => {
    sent = JSON.parse(init.body);
    return new Response(sendStatus === 202 ? '' : 'bad', { status: sendStatus });
};
const post = (body, origin, method = 'POST') => new Request('https://ay-webstudio.de/api/contact', {
    method, headers: { 'Content-Type': 'application/json', ...(origin ? { Origin: origin } : {}) },
    body: method === 'POST' ? JSON.stringify(body) : undefined
});
const ok = { name: 'Max Mustermann', email: 'max@example.de', message: 'Ich brauche eine Website für meine Werkstatt.', projectType: 'Basis-Website' };
let fails = 0;
async function check(label, req, expectStatus, extra) {
    sent = null;
    const res = await handleContact(req, ENV);
    const body = await res.clone().json().catch(() => ({}));
    let note = '';
    if (extra) { const e = extra(body, sent); if (e) { note = ' — ' + e; fails++; } }
    const good = res.status === expectStatus && !note;
    if (!good && res.status !== expectStatus) fails++;
    console.log(`${good ? '✓' : '✗'} ${label.padEnd(46)} ${res.status} (ждали ${expectStatus})${note}`);
}

await check('обычная заявка', post(ok, 'https://www.ay-webstudio.de'), 200,
    (b, s) => !s ? 'письмо не отправлено'
        : s.subject !== 'Anfrage: Basis-Website — Max Mustermann' ? 'тема: ' + s.subject
        : s.reply_to.email !== ok.email ? 'reply-to не тот' : null);
await check('без пакета — общая тема', post({ ...ok, projectType: '' }, null), 200,
    (b, s) => s.subject.startsWith('Anfrage über das Kontaktformular') ? null : 'тема: ' + s.subject);
await check('чужой пакет в поле (подмена)', post({ ...ok, projectType: '<script>' }, null), 200,
    (b, s) => s.subject.includes('script') ? 'подстановка попала в тему!' : null);
await check('honeypot (hp_ref) — тихий успех', post({ ...ok, hp_ref: 'bot' }, null), 200,
    (b, s) => s ? 'письмо всё-таки ушло' : null);
await check('honeypot (старое имя website)', post({ ...ok, website: 'bot' }, null), 200,
    (b, s) => s ? 'письмо всё-таки ушло' : null);
await check('пустая ловушка не мешает отправке', post({ ...ok, hp_ref: '' }, null), 200,
    (b, s) => s ? null : 'письмо не отправлено');
await check('короткое сообщение', post({ ...ok, message: 'привет' }, null), 400);
await check('кривая почта', post({ ...ok, email: 'не-почта' }, null), 400);
await check('пустое имя', post({ ...ok, name: '' }, null), 400);
await check('чужой домен (CORS)', post(ok, 'https://evil.example'), 403);
// Свой адрес разрешён всегда, каким бы он ни был: браузер шлёт Origin
// и при запросе на собственный домен, если метод POST.
await check('свой домен, любой хост', post(ok, 'https://ay-webstudio.de'), 200);
await check('GET вместо POST', post(null, null, 'GET'), 405);
await check('OPTIONS (preflight)', post(null, 'https://www.ay-webstudio.de', 'OPTIONS'), 204);
sendStatus = 500;
await check('SendGrid лежит', post(ok, null), 502);
sendStatus = 202;
const noSecrets = await handleContact(post(ok, null), {});
console.log(`${noSecrets.status === 500 ? '✓' : '✗'} ${'нет ключей в окружении'.padEnd(46)} ${noSecrets.status} (ждали 500)`);
if (noSecrets.status !== 500) fails++;

// --- заявка сохраняется до отправки письма ---
const kv = new Map();
const ENV_KV = { ...ENV, ANFRAGEN: {
    put: async (k, v) => { kv.set(k, v); },
    get: async (k) => kv.get(k) || null
} };
sent = null; sendStatus = 202;
let res = await handleContact(post(ok, null), ENV_KV);
let rec = JSON.parse([...kv.values()].pop());
console.log(`${res.status === 200 && rec.name === ok.name ? '✓' : '✗'} ${'заявка сохранена в хранилище'.padEnd(46)} ${res.status}`);
if (res.status !== 200 || rec.name !== ok.name) fails++;
console.log(`${rec.mail.startsWith('sent:') ? '✓' : '✗'} ${'отмечено, что письмо ушло'.padEnd(46)} ${rec.mail}`);
if (!rec.mail.startsWith('sent:')) fails++;

// письмо падает — заявка всё равно сохранена, посетитель видит успех
kv.clear(); sendStatus = 500;
res = await handleContact(post(ok, null), { ...ENV_KV, SEND_EMAIL: undefined });
rec = JSON.parse([...kv.values()].pop());
console.log(`${res.status === 200 ? '✓' : '✗'} ${'письмо не ушло — заявка не потеряна'.padEnd(46)} ${res.status}`);
if (res.status !== 200) fails++;
console.log(`${rec.mail.startsWith('failed:') ? '✓' : '✗'} ${'причина сбоя записана'.padEnd(46)} ${rec.mail.slice(0, 40)}`);
if (!rec.mail.startsWith('failed:')) fails++;
sendStatus = 202;

// --- сборка письма для Cloudflare Email Routing ---
const mail = buildMail({ name: 'Jürgen Groß', email: 'j@example.de', message: 'Grüße aus Köln', projectType: 'Basis-Website' });
const mime = buildMime({ from: 'formular@ay-webstudio.de', to: 'info@example.com', replyTo: 'j@example.de', replyName: 'Jürgen Groß', subject: mail.subject, text: mail.text });
function expect(label, cond) { console.log(`${cond ? '✓' : '✗'} ${label}`); if (!cond) fails++; }
const header = mime.slice(0, mime.indexOf('\r\n\r\n'));
const body = mime.slice(mime.indexOf('\r\n\r\n') + 4);
expect('тема с умляутом закодирована по RFC 2047'.padEnd(46), /Subject: =\?UTF-8\?B\?/.test(header));
expect('заголовки остались в ASCII'.padEnd(46), /^[\x20-\x7E\r\n]*$/.test(header));
expect('Reply-To — адрес посетителя'.padEnd(46), header.includes('<j@example.de>'));
expect('тело раскодируется обратно в UTF-8'.padEnd(46),
    new TextDecoder().decode(Uint8Array.from(atob(body), (c) => c.charCodeAt(0))).includes('Grüße aus Köln'));
expect('пакет попал в тему'.padEnd(46), mail.subject === 'Anfrage: Basis-Website — Jürgen Groß');
expect('есть Date по RFC 5322'.padEnd(46), /\r\nDate: \w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} \+0000\r\n/.test(mime));
expect('есть Message-ID на домене отправителя'.padEnd(46), /\r\nMessage-ID: <[^>]+@ay-webstudio\.de>\r\n/.test(mime));
expect('Message-ID не повторяется'.padEnd(46),
    buildMime({ from: 'a@ay-webstudio.de', to: 'b@c.de', replyTo: 'x@y.de', replyName: 'X', subject: 's', text: 't' })
    !== buildMime({ from: 'a@ay-webstudio.de', to: 'b@c.de', replyTo: 'x@y.de', replyName: 'X', subject: 's', text: 't' }));

console.log(fails ? `\n✗ провалов: ${fails}` : '\n✓ все проверки пройдены');
process.exit(fails ? 1 : 0);
