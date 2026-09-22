import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// CORS — explicit whitelist
// ============================================
// The form has no business needing wildcard CORS. We list the
// production domain (apex + www), localhost dev origins, and an
// optional FRONTEND_URL override for staging.
const allowedOrigins = [
    // Основной домен с сентября 2026. Без этих строк форма на новом
    // сайте получала 403: браузер отправлял запрос, бэкенд его отклонял.
    'https://ay-webstudio.de',
    'https://www.ay-webstudio.de',
    // Прежний домен — пока он жив, форма должна работать и там.
    'https://anatolii-yastrebov.top',
    'https://www.anatolii-yastrebov.top',
    // Локальная разработка: npm run dev (4321) и старый порт.
    'http://localhost:4321',
    'http://localhost:8000',
    'http://127.0.0.1:8000'
];
if (process.env.FRONTEND_URL && !allowedOrigins.includes(process.env.FRONTEND_URL)) {
    allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
    origin: function (origin, callback) {
        // No Origin header → same-origin requests, curl, server-to-server, SSR.
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error(`CORS: origin not allowed: ${origin}`));
    },
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
    maxAge: 86400
}));

// JSON body parser with a tight payload limit — guards against
// absurdly large bodies even before validation runs.
app.use(express.json({ limit: '20kb' }));

// Trust proxy header from Render so rate-limit sees the real
// client IP rather than the internal proxy IP. The "loopback,
// linklocal, uniquelocal" preset is the recommended default for
// PaaS in front of an Express app.
app.set('trust proxy', 1);

if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
        next();
    });
}

// ============================================
// SendGrid configuration
// ============================================
const requiredEnvVars = ['SENDGRID_API_KEY', 'EMAIL_FROM', 'EMAIL_TO'];
const missingVars = requiredEnvVars.filter((name) => !process.env[name]);
if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach((name) => console.error(`   - ${name}`));
    process.exit(1);
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

if (process.env.NODE_ENV !== 'production') {
    console.log('✅ SendGrid configured');
    console.log(`📧 From: ${process.env.EMAIL_FROM}`);
    console.log(`📬 To:   ${process.env.EMAIL_TO}`);
}

// ============================================
// Validation
// ============================================
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateContactForm(data) {
    const errors = [];
    if (!data || typeof data !== 'object') {
        return { valid: false, errors: ['Invalid payload'] };
    }

    const name = typeof data.name === 'string' ? data.name.trim() : '';
    if (name.length < 2 || name.length > 100) {
        errors.push('name: length must be 2–100 characters');
    }

    const email = typeof data.email === 'string' ? data.email.trim() : '';
    if (!email || email.length > 200 || !EMAIL_RE.test(email)) {
        errors.push('email: must be a valid address');
    }

    const message = typeof data.message === 'string' ? data.message.trim() : '';
    if (message.length < 10 || message.length > 5000) {
        errors.push('message: length must be 10–5000 characters');
    }

    // Пакет — из закрытого списка: значение приходит от клиента и попадает
    // в тему письма, поэтому произвольную строку туда пускать нельзя.
    const ALLOWED_TYPES = [
        'Landingpage',
        'Basis-Website',
        'Erweiterte Website',
        'Wartung',
        'Bestehende Website überarbeiten',
        'Hosting und Domain'
    ];
    const rawType = typeof data.projectType === 'string' ? data.projectType.trim() : '';
    const projectType = ALLOWED_TYPES.includes(rawType) ? rawType : '';

    return { valid: errors.length === 0, errors, clean: { name, email, message, projectType } };
}

// ============================================
// Rate limiter — 3 requests / 15 minutes per IP on the contact route.
// ============================================
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 3,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: {
        success: false,
        message: 'Too many requests. Please try again later.'
    }
});

// ============================================
// Routes
// ============================================
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
    try {
        // Honeypot — bots fill every field, humans never see this one.
        // Quietly return 200 so the bot thinks it succeeded.
        if (typeof req.body?.website === 'string' && req.body.website.trim() !== '') {
            return res.status(200).json({ success: true, message: 'OK' });
        }

        const validation = validateContactForm(req.body);
        if (!validation.valid) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: validation.errors
            });
        }

        const { name, email, message, projectType } = validation.clean;

        const msg = {
            to: process.env.EMAIL_TO,
            from: process.env.EMAIL_FROM,
            replyTo: email,
            // Пакет в теме: так в почте сразу видно, о чём запрос.
            subject: projectType
                ? `Anfrage: ${projectType} — ${name}`
                : `Anfrage über das Kontaktformular — ${name}`,
            text: `Neue Anfrage über das Kontaktformular.\n\n`
                + `Name:   ${name}\n`
                + `E-Mail: ${email}\n`
                + `Paket:  ${projectType || '— nicht angegeben —'}\n\n`
                + `Nachricht:\n${message}\n\n--\nGesendet vom Kontaktformular auf ay-webstudio.de.`
        };

        try {
            await sgMail.send(msg);
        } catch (sendErr) {
            console.error('❌ SendGrid error:', sendErr?.message || sendErr);
            if (sendErr?.response?.body?.errors) {
                sendErr.response.body.errors.forEach((e) => console.error(`   - ${e.message}`));
            }
            return res.status(502).json({
                success: false,
                message: 'Email service temporarily unavailable. Please try again later.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully.'
        });
    } catch (error) {
        console.error('❌ Unhandled /api/contact error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal error. Please try again later.'
        });
    }
});

// 404
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Not found' });
});

// Final error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    console.error('❌ Unhandled error:', err);
    if (err && /CORS/.test(err.message || '')) {
        return res.status(403).json({ success: false, message: 'Origin not allowed' });
    }
    res.status(500).json({ success: false, message: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log('\n🚀 Server running');
    console.log(`📡 Port: ${PORT}`);
    console.log(`📧 Endpoint: POST /api/contact`);
    console.log(`🌐 Allowed origins: ${allowedOrigins.join(', ')}`);
    console.log('');
});
