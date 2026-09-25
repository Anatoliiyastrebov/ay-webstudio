/**
 * Обработчик контактной формы для Cloudflare.
 *
 * Honeypot, проверка полей, закрытый список пакетов, письмо. В Workers нет
 * Node API, поэтому SendGrid вызывается обычным fetch к их HTTP-интерфейсу,
 * а не через пакет @sendgrid/mail.
 *
 * Точка входа одна: src/index.js — статика плюс этот обработчик.
 *
 * Письмо уходит одним из двух способов — что настроено, то и берётся:
 *
 *   1. Cloudflare Email Routing (рекомендуется): привязка SEND_EMAIL в
 *      wrangler.jsonc. Ключи не нужны, сторонний почтовый сервис не нужен.
 *      Отправлять можно только на адрес, подтверждённый в Email Routing.
 *   2. SendGrid: секреты SENDGRID_API_KEY, EMAIL_FROM, EMAIL_TO.
 *
 * Общие переменные:
 *   EMAIL_FROM — адрес отправителя на собственном домене
 *   EMAIL_TO   — куда приходят заявки
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Значение приходит от клиента и попадает в тему письма — только из списка.
const ALLOWED_TYPES = [
    'Landingpage',
    'Basis-Website',
    'Erweiterte Website',
    'Wartung',
    'Bestehende Website überarbeiten',
    'Hosting und Domain'
];

// Адреса, с которых можно слать форму помимо собственного: второй вариант
// того же сайта (www и без www — формально разные origin), старый домен и
// локальная разработка.
const CORS_ORIGINS = [
    'https://ay-webstudio.de',
    'https://www.ay-webstudio.de',
    'https://anatolii-yastrebov.top',
    'https://www.anatolii-yastrebov.top',
    'http://localhost:4321',
    'http://localhost:8000',
    'http://127.0.0.1:8000'
];

function corsHeaders(request) {
    const origin = request.headers.get('Origin');
    // Запрос с той же страницы приходит без Origin — это норма.
    if (!origin) return {};
    // При POST браузер шлёт Origin даже на собственный домен. Поэтому свой
    // адрес разрешаем всегда: иначе форма замолкает с 403 при каждой смене
    // адреса сайта — так и случилось на ay-webstudio.anatoliiyastrebov.workers.dev.
    const eigene = new URL(request.url).origin;
    if (origin !== eigene && !CORS_ORIGINS.includes(origin)) return null;
    return {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        Vary: 'Origin'
    };
}

function json(body, status, extraHeaders) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=utf-8', ...(extraHeaders || {}) }
    });
}

function validate(data) {
    const errors = [];
    if (!data || typeof data !== 'object') return { valid: false, errors: ['Invalid payload'] };

    const name = typeof data.name === 'string' ? data.name.trim() : '';
    if (name.length < 2 || name.length > 100) errors.push('name: length must be 2–100 characters');

    const email = typeof data.email === 'string' ? data.email.trim() : '';
    if (!email || email.length > 200 || !EMAIL_RE.test(email)) errors.push('email: must be a valid address');

    const message = typeof data.message === 'string' ? data.message.trim() : '';
    if (message.length < 10 || message.length > 5000) errors.push('message: length must be 10–5000 characters');

    const rawType = typeof data.projectType === 'string' ? data.projectType.trim() : '';
    const projectType = ALLOWED_TYPES.includes(rawType) ? rawType : '';

    return { valid: errors.length === 0, errors, clean: { name, email, message, projectType } };
}

export function buildMail({ name, email, message, projectType }) {
    const subject = projectType
        ? `Anfrage: ${projectType} — ${name}`
        : `Anfrage über das Kontaktformular — ${name}`;

    const text =
        'Neue Anfrage über das Kontaktformular.\n\n' +
        `Name:   ${name}\n` +
        `E-Mail: ${email}\n` +
        `Paket:  ${projectType || '— nicht angegeben —'}\n\n` +
        `Nachricht:\n${message}\n\n--\nGesendet vom Kontaktformular auf ay-webstudio.de.`;

    return { subject, text };
}

// Тема письма и адреса в MIME должны быть в ASCII. Умляуты и кириллицу
// кодируем по RFC 2047, тело — base64: иначе почтовые серверы ломают текст.
function encodeHeader(value) {
    if (/^[\x20-\x7E]*$/.test(value)) return value;
    const bytes = new TextEncoder().encode(value);
    let bin = '';
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return `=?UTF-8?B?${btoa(bin)}?=`;
}

function base64Utf8(value) {
    const bytes = new TextEncoder().encode(value);
    let bin = '';
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return btoa(bin);
}

// Date обязателен по RFC 5322, Message-ID ожидают почти все приёмники.
// Без них Cloudflare письмо принимает, но дальше оно молча пропадает —
// именно поэтому первые заявки не дошли даже в папку «Спам».
function rfc5322Date(now = new Date()) {
    return now.toUTCString().replace(/GMT$/, '+0000');
}

function messageId(from) {
    const domain = String(from).split('@')[1] || 'localhost';
    const rand = typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    return `<${rand}@${domain}>`;
}

export function buildMime({ from, to, replyTo, replyName, subject, text, now }) {
    return [
        `From: ${from}`,
        `To: ${to}`,
        `Reply-To: ${encodeHeader(replyName)} <${replyTo}>`,
        `Subject: ${encodeHeader(subject)}`,
        `Date: ${rfc5322Date(now)}`,
        `Message-ID: ${messageId(from)}`,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        base64Utf8(text)
    ].join('\r\n');
}

// Способ 1: Cloudflare Email Routing — без сторонних сервисов и ключей.
async function sendViaEmailRouting(env, data) {
    const { EmailMessage } = await import('cloudflare:email');
    const { subject, text } = buildMail(data);
    const raw = buildMime({
        from: env.EMAIL_FROM,
        to: env.EMAIL_TO,
        replyTo: data.email,
        replyName: data.name,
        subject,
        text
    });
    await env.SEND_EMAIL.send(new EmailMessage(env.EMAIL_FROM, env.EMAIL_TO, raw));
}

async function sendMail(env, { name, email, message, projectType }) {
    const { subject, text } = buildMail({ name, email, message, projectType });

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [{ to: [{ email: env.EMAIL_TO }] }],
            from: { email: env.EMAIL_FROM },
            reply_to: { email, name },
            subject,
            content: [{ type: 'text/plain', value: text }]
        })
    });

    if (!res.ok) {
        const detail = await res.text().catch(() => '');
        throw new Error(`SendGrid ${res.status}: ${detail.slice(0, 300)}`);
    }
}

// Заявка сохраняется до отправки письма. Почта — канал доставки, а не
// хранилище: если письмо потеряется, обращение клиента останется здесь.
// Смотреть: npm run anfragen
async function storeSubmission(env, data) {
    if (!env.ANFRAGEN) return null;
    const id = `${new Date().toISOString().replace(/[:.]/g, '-')}_${Math.random().toString(16).slice(2, 8)}`;
    const record = { id, receivedAt: new Date().toISOString(), ...data, mail: 'pending' };
    // Год хранения: дольше не нужно, срок ответа на запрос давно вышел.
    await env.ANFRAGEN.put(`anfrage:${id}`, JSON.stringify(record), { expirationTtl: 60 * 60 * 24 * 365 });
    return { id, record };
}

async function markSubmission(env, stored, mail) {
    if (!env.ANFRAGEN || !stored) return;
    await env.ANFRAGEN.put(
        `anfrage:${stored.id}`,
        JSON.stringify({ ...stored.record, mail }),
        { expirationTtl: 60 * 60 * 24 * 365 }
    );
}

export async function handleContact(request, env) {
    const cors = corsHeaders(request);
    if (cors === null) {
        return json({ success: false, message: 'Origin not allowed' }, 403);
    }

    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
        return json({ success: false, message: 'Method not allowed' }, 405, { ...cors, Allow: 'POST, OPTIONS' });
    }

    const canRoute = Boolean(env.SEND_EMAIL) && env.EMAIL_FROM && env.EMAIL_TO;
    const canSendGrid = Boolean(env.SENDGRID_API_KEY) && env.EMAIL_FROM && env.EMAIL_TO;
    // Без почты, но с хранилищем работать можно: заявка сохранится.
    if (!canRoute && !canSendGrid && !env.ANFRAGEN) {
        console.error(
            'Kein Versandweg konfiguriert: entweder Bindung SEND_EMAIL (Cloudflare Email ' +
            'Routing) oder SENDGRID_API_KEY — dazu immer EMAIL_FROM und EMAIL_TO.'
        );
        return json({ success: false, message: 'Email service is not configured.' }, 500, cors);
    }

    let data;
    try {
        data = await request.json();
    } catch (e) {
        return json({ success: false, message: 'Invalid JSON' }, 400, cors);
    }

    // Honeypot: боты заполняют все поля, человек этого поля не видит.
    // Отвечаем «успешно», чтобы бот не подбирал обход, но пишем в лог —
    // иначе потерянную заявку потом не отличить от доставленной.
    const trap = [data?.hp_ref, data?.website].find((v) => typeof v === 'string' && v.trim() !== '');
    if (trap) {
        console.warn('Honeypot ausgelöst, keine E-Mail verschickt. Feldinhalt:', trap.slice(0, 80));
        return json({ success: true, message: 'OK' }, 200, cors);
    }

    const result = validate(data);
    if (!result.valid) {
        return json({ success: false, message: 'Validation error', errors: result.errors }, 400, cors);
    }

    // Сначала сохраняем — заявка не должна зависеть от того, дойдёт ли письмо.
    let stored = null;
    try {
        stored = await storeSubmission(env, result.clean);
    } catch (err) {
        console.error('Speichern fehlgeschlagen:', err?.message || err);
    }

    // Порядок попыток: Email Routing, затем SendGrid. Один путь отказал —
    // пробуем второй, а не теряем обращение.
    const attempts = [];
    if (canRoute) attempts.push(['email-routing', () => sendViaEmailRouting(env, result.clean)]);
    if (canSendGrid) attempts.push(['sendgrid', () => sendMail(env, result.clean)]);

    let delivered = null;
    const failures = [];
    for (const [name, run] of attempts) {
        try {
            await run();
            delivered = name;
            break;
        } catch (err) {
            const reason = err?.message || String(err);
            failures.push(`${name}: ${reason}`);
            console.error(`Mailversand über ${name} fehlgeschlagen:`, reason);
        }
    }

    await markSubmission(env, stored, delivered ? `sent:${delivered}` : `failed:${failures.join(' | ')}`);

    if (!delivered) {
        // Заявка сохранена — для посетителя запрос принят. Если ничего не
        // сохранилось, честно сообщаем об ошибке, чтобы он написал напрямую.
        if (!stored) {
            return json(
                { success: false, message: 'Email service temporarily unavailable. Please try again later.' },
                502,
                cors
            );
        }
        console.error('Anfrage gespeichert, aber kein Versandweg hat funktioniert:', stored.id);
    }

    return json({ success: true, message: 'Message sent successfully.' }, 200, cors);
}
