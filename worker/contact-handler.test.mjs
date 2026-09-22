/**
 * Проверка обработчика формы без деплоя: SendGrid подменён заглушкой,
 * письма никуда не уходят.
 *
 *   npm run test-worker
 */
import { handleContact } from './contact-handler.mjs';

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
await check('honeypot заполнен — тихий успех', post({ ...ok, website: 'bot' }, null), 200,
    (b, s) => s ? 'письмо всё-таки ушло' : null);
await check('короткое сообщение', post({ ...ok, message: 'привет' }, null), 400);
await check('кривая почта', post({ ...ok, email: 'не-почта' }, null), 400);
await check('пустое имя', post({ ...ok, name: '' }, null), 400);
await check('чужой домен (CORS)', post(ok, 'https://evil.example'), 403);
await check('GET вместо POST', post(null, null, 'GET'), 405);
await check('OPTIONS (preflight)', post(null, 'https://www.ay-webstudio.de', 'OPTIONS'), 204);
sendStatus = 500;
await check('SendGrid лежит', post(ok, null), 502);
sendStatus = 202;
const noSecrets = await handleContact(post(ok, null), {});
console.log(`${noSecrets.status === 500 ? '✓' : '✗'} ${'нет ключей в окружении'.padEnd(46)} ${noSecrets.status} (ждали 500)`);
if (noSecrets.status !== 500) fails++;
console.log(fails ? `\n✗ провалов: ${fails}` : '\n✓ все проверки пройдены');
process.exit(fails ? 1 : 0);
