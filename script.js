// =============================================================
// AY · Personal portfolio (DE primary)
// Strategy: honest portfolio, NOT a commercial offer.
// No prices, no maintenance plans, no package up-sell.
// =============================================================

const translations = {
    de: {
        meta: {
            title: 'Anatolii Yastrebov – Portfolio Frontend-Entwickler',
            description: 'Persönliches Portfolio von Anatolii Yastrebov – Frontend-Entwickler aus NRW, Deutschland. HTML, CSS, JavaScript, moderne Web-Entwicklung.'
        },
        nav: {
            projects: 'Projekte',
            skills: 'Kompetenzen',
            about: 'Über mich',
            blog: 'Notizen',
            contact: 'Kontakt'
        },
        ui: {
            themeToggle: 'Design umschalten',
            menu: 'Menü',
            logoHome: 'Zum Seitenanfang',
            photoAlt: 'Anatolii Yastrebov – Frontend-Entwickler'
        },
        hero: {
            eyebrow: 'Frontend-Entwickler · NRW · Deutschland',
            headline: 'Anatolii Yastrebov — Frontend-Entwickler.',
            subtitle: 'Persönliches Portfolio: ausgewählte Projekte, eingesetzte Technologien und ein bisschen über mich. HTML, CSS, JavaScript, moderne Web-Entwicklung.',
            ctaPrimary: 'Projekte ansehen',
            ctaSecondary: 'Schreib mir'
        },
        cases: {
            title: 'Projekte & Live-Demos',
            subtitle: 'Zehn Live-Demos — kompakte Vorschau hier, vollständige Beschreibung und Tech-Stack auf der Detailseite.',
            labelSummary: 'Überblick',
            labelImplemented: 'Umgesetzt',
            labelPlanned: 'Geplant / Anbindung',
            labelStack: 'Technologie-Stack',
            labelStyles: 'Gestaltung & Oberfläche',
            demoBadge: 'Live-Demo',
            viewLive: 'Live-Demo öffnen ↗',
            viewCase: 'Details öffnen'
        },
        skills: {
            title: 'Kompetenzen & Technologien',
            subtitle: 'Technologien, mit denen ich am häufigsten arbeite.',
            frontend: {
                title: 'Frontend',
                p1: 'HTML5, CSS3, modernes JavaScript (ES2020+)',
                p2: 'Responsive Design, Mobile-First',
                p3: 'CSS Grid, Flexbox, Animationen',
                p4: 'Accessibility & semantisches HTML'
            },
            tools: {
                title: 'Tools & Workflow',
                p1: 'Git & GitHub',
                p2: 'Vite / npm-Skripte',
                p3: 'VS Code, Chrome DevTools',
                p4: 'Figma zum Lesen von Designs'
            },
            lang: {
                title: 'Sprachen',
                p1: 'Deutsch — Arbeitssprache',
                p2: 'Englisch — fließend',
                p3: 'Russisch — Muttersprache'
            }
        },
        about: {
            title: 'Über mich',
            p1: '<strong>Anatolii Yastrebov</strong> — Frontend-Entwickler aus Nordrhein-Westfalen. Diese Seite ist mein persönliches Portfolio – kein Angebot, sondern eine Sammlung von Projekten und Lernschritten.',
            p2: 'Ich beschäftige mich mit moderner Web-Entwicklung: sauberes HTML, durchdachtes CSS, JavaScript für sinnvolle Interaktionen. Mir wichtig: lesbarer Code, Performance und Zugänglichkeit.',
            p3: 'Außerhalb des Codes lese ich, lerne weiter und experimentiere mit kleinen Side-Projects. Wenn dich etwas hier interessiert oder du einfach Hallo sagen willst – schreib mir gerne.',
            point1: '📍 Standort: NRW · Deutschland',
            point2: '💬 Sprachen: Deutsch, Englisch, Russisch',
            point3: '📚 Aktuell: Vertiefung in moderne JavaScript-Patterns',
            cta: 'Schreib mir'
        },
        blog: {
            title: 'Notizen zur Web-Entwicklung',
            subtitle: 'Gedanken zur Web-Entwicklung, Notizen aus dem Lernprozess.',
            pageTitle: 'Notizen · Web-Entwicklung — Anatolii Yastrebov',
            pageDescription: 'Persönliche Notizen zur Web-Entwicklung: Preisrahmen von Websites, Baukasten vs. eigener Code, kleine lokale Websites.',
            projectsTitle: 'Meine Live-Projekte',
            projectsSubtitle: 'Alle zehn Demo-Websites mit Screenshot, Technologie-Stack und Umsetzungsdetails — konzeptionelle Portfolio-Arbeit, keine echten Unternehmen.',
            allProjects: 'Alle Live-Demos im Blog →',
            readTime: 'Lesezeit: ca. %n Min.',
            read: 'Weiterlesen →',
            cat1: 'Notiz',
            cat2: 'Strategie',
            cat3: 'Web',
            a1: { title: 'Was kostet eine Website in Deutschland?', excerpt: 'Überblick über realistische Preisrahmen für Web-Projekte – als Lese-Notiz, nicht als Angebot.' },
            a2: { title: 'Baukasten vs. eigener Code', excerpt: 'Wann lohnt sich ein Website-Baukasten, und wann ist eine eigene Lösung besser? Eine ehrliche Übersicht.' },
            a3: { title: 'Websites lokaler Betriebe', excerpt: 'Was kleine Websites gut macht: Klarheit, Schnelligkeit, Mobile-First.' }
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Schreib mir – ich antworte gewöhnlich innerhalb von ein paar Tagen.',
            gdpr: 'Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
            email: { label: 'E-Mail' },
            region: { label: 'Region', value: 'Nordrhein-Westfalen · Deutschland' },
            form: {
                name: 'Ihr Name',
                email: 'E-Mail',
                message: 'Worum geht es? Eine kurze Nachricht reicht.',
                submit: 'Nachricht senden',
                submitted: 'Gesendet! ✓',
                sending: 'Wird gesendet…',
                sendingLong: 'Server wird gestartet, einen Moment…',
                error: 'Sendefehler',
                consent: 'Ich stimme der Verarbeitung meiner personenbezogenen Daten gemäß der <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zu.',
                consentError: 'Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.'
            }
        },
        footer: {
            name: 'Anatolii Yastrebov',
            role: 'Frontend-Entwickler · NRW',
            impressum: 'Impressum',
            datenschutz: 'Datenschutzerklärung'
        },
        project: {
            back: '← Zurück zur Übersicht',
            notFoundTitle: '—',
            notFoundText: 'Projekt nicht gefunden.',
            metaTitle: 'Projekt · Anatolii Yastrebov',
            metaDescription: 'Portfolio-Projekt im Detail: Umsetzung, Technologien und geplante Erweiterungen.'
        }
    },

    en: {
        meta: {
            title: 'Anatolii Yastrebov – Frontend Developer Portfolio',
            description: 'Personal portfolio of Anatolii Yastrebov – frontend developer based in NRW, Germany. HTML, CSS, JavaScript, modern web development.'
        },
        nav: { projects: 'Projects', skills: 'Skills', about: 'About', blog: 'Notes', contact: 'Contact' },
        ui: {
            themeToggle: 'Toggle theme',
            menu: 'Menu',
            logoHome: 'Back to top',
            photoAlt: 'Anatolii Yastrebov – frontend developer'
        },
        hero: {
            eyebrow: 'Frontend developer · NRW · Germany',
            headline: 'Anatolii Yastrebov — frontend developer.',
            subtitle: 'Personal portfolio: selected projects, technologies I use and a few words about me. HTML, CSS, JavaScript, modern web development.',
            ctaPrimary: 'See projects',
            ctaSecondary: 'Get in touch'
        },
        cases: {
            title: 'Projects & live demos',
            subtitle: 'Ten live demos — compact preview here; full description and tech stack on the detail page.',
            labelSummary: 'Overview',
            labelImplemented: 'Implemented',
            labelPlanned: 'Planned / integrations',
            labelStack: 'Tech stack',
            labelStyles: 'Styling & UI',
            demoBadge: 'Live demo',
            viewLive: 'Open live demo ↗',
            viewCase: 'Open details'
        },
        skills: {
            title: 'Skills & Stack',
            subtitle: 'Technologies I work with most often.',
            frontend: { title: 'Frontend', p1: 'HTML5, CSS3, modern JavaScript (ES2020+)', p2: 'Responsive design, mobile-first', p3: 'CSS Grid, Flexbox, animations', p4: 'Accessibility & semantic HTML' },
            tools: { title: 'Tools & Workflow', p1: 'Git & GitHub', p2: 'Vite / npm scripts', p3: 'VS Code, Chrome DevTools', p4: 'Figma for reading designs' },
            lang: { title: 'Languages', p1: 'German — working language', p2: 'English — fluent', p3: 'Russian — native' }
        },
        about: {
            title: 'About me',
            p1: '<strong>Anatolii Yastrebov</strong> — frontend developer from North Rhine-Westphalia, Germany. This page is my personal portfolio – not an offer, just a collection of projects and learning steps.',
            p2: 'I focus on modern web development: clean HTML, considered CSS, JavaScript for meaningful interactions. What matters to me: readable code, performance and accessibility.',
            p3: 'Outside of code I read, keep learning and tinker with small side-projects. If something here interests you or you just want to say hi – feel free to drop me a line.',
            point1: '📍 Location: NRW · Germany',
            point2: '💬 Languages: German, English, Russian',
            point3: '📚 Currently: deeper dive into modern JavaScript patterns',
            cta: 'Get in touch'
        },
        blog: {
            title: 'Notes on web development',
            subtitle: 'Thoughts on web development, notes from my learning process.',
            pageTitle: 'Notes · web development — Anatolii Yastrebov',
            pageDescription: 'Personal notes on web development: website price ranges, site builders vs custom code, small local business sites.',
            projectsTitle: 'My live projects',
            projectsSubtitle: 'All ten demo sites with screenshots, tech stack and implementation notes — portfolio concepts, not real businesses.',
            allProjects: 'All live demos on the blog →',
            readTime: 'Reading time: ~%n min',
            read: 'Read more →',
            cat1: 'Note', cat2: 'Strategy', cat3: 'Web',
            a1: { title: 'What does a website cost in Germany?', excerpt: 'An overview of realistic price ranges for web projects – as a reading note, not as a quote.' },
            a2: { title: 'Site builder vs. own code', excerpt: 'When does a website builder make sense, and when is custom code the better choice? An honest overview.' },
            a3: { title: 'Websites of small local businesses', excerpt: 'What makes small websites good: clarity, speed, mobile-first.' }
        },
        contact: {
            title: 'Contact',
            subtitle: 'Drop me a line – I usually reply within a few days.',
            gdpr: 'Your data is used exclusively to respond to your inquiry. For more information, please see our <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
            email: { label: 'Email' },
            region: { label: 'Region', value: 'North Rhine-Westphalia · Germany' },
            form: {
                name: 'Your name',
                email: 'Email',
                message: 'What is it about? A short message is enough.',
                submit: 'Send message',
                submitted: 'Sent! ✓',
                sending: 'Sending…',
                sendingLong: 'Server is starting up, one moment…',
                error: 'Sending error',
                consent: 'I agree to the processing of my personal data in accordance with the <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
                consentError: 'Please agree to the processing of your data.'
            }
        },
        footer: { name: 'Anatolii Yastrebov', role: 'Frontend developer · NRW', impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' },
        project: {
            back: '← Back to overview',
            notFoundTitle: '—',
            notFoundText: 'Project not found.',
            metaTitle: 'Project · Anatolii Yastrebov',
            metaDescription: 'Portfolio project in detail: implementation, technologies and planned extensions.'
        }
    },

    ru: {
        meta: {
            title: 'Anatolii Yastrebov – портфолио фронтенд-разработчика',
            description: 'Личное портфолио Анатолия Ястребова — фронтенд-разработчика из NRW, Германия. HTML, CSS, JavaScript, современная веб-разработка.'
        },
        nav: { projects: 'Проекты', skills: 'Навыки', about: 'Обо мне', blog: 'Заметки', contact: 'Контакт' },
        ui: {
            themeToggle: 'Сменить тему',
            menu: 'Меню',
            logoHome: 'Наверх',
            photoAlt: 'Анатолий Ястребов — фронтенд-разработчик'
        },
        hero: {
            eyebrow: 'Фронтенд-разработчик · NRW · Германия',
            headline: 'Anatolii Yastrebov — фронтенд-разработчик.',
            subtitle: 'Личное портфолио: избранные проекты, технологии и немного о себе. HTML, CSS, JavaScript, современная веб-разработка.',
            ctaPrimary: 'Посмотреть проекты',
            ctaSecondary: 'Написать мне'
        },
        cases: {
            title: 'Проекты и live-демо',
            subtitle: 'Десять live-демо — здесь краткая карточка, полное описание и стек на странице проекта.',
            labelSummary: 'Обзор',
            labelImplemented: 'Реализовано',
            labelPlanned: 'Планируется / интеграции',
            labelStack: 'Стек',
            labelStyles: 'Стили и UI',
            demoBadge: 'Live-демо',
            viewLive: 'Открыть live-демо ↗',
            viewCase: 'Открыть подробности'
        },
        skills: {
            title: 'Навыки и стек',
            subtitle: 'Технологии, с которыми работаю чаще всего.',
            frontend: { title: 'Фронтенд', p1: 'HTML5, CSS3, современный JavaScript (ES2020+)', p2: 'Адаптивная вёрстка, mobile-first', p3: 'CSS Grid, Flexbox, анимации', p4: 'Доступность и семантический HTML' },
            tools: { title: 'Инструменты', p1: 'Git и GitHub', p2: 'Vite / npm-скрипты', p3: 'VS Code, Chrome DevTools', p4: 'Figma для чтения дизайнов' },
            lang: { title: 'Языки', p1: 'Немецкий — рабочий', p2: 'Английский — свободно', p3: 'Русский — родной' }
        },
        about: {
            title: 'Обо мне',
            p1: '<strong>Anatolii Yastrebov</strong> — фронтенд-разработчик из земли Северный Рейн-Вестфалия. Эта страница — моё личное портфолио, не коммерческое предложение, а подборка проектов и шагов в обучении.',
            p2: 'Занимаюсь современной веб-разработкой: чистый HTML, продуманный CSS, JavaScript для осмысленных взаимодействий. Что важно для меня: читаемый код, производительность и доступность.',
            p3: 'Вне кода читаю, продолжаю учиться и пилю небольшие пет-проекты. Если что-то здесь зацепило или просто хочется поздороваться — напиши.',
            point1: '📍 Локация: NRW · Германия',
            point2: '💬 Языки: немецкий, английский, русский',
            point3: '📚 Сейчас: углубляюсь в современные JavaScript-паттерны',
            cta: 'Написать мне'
        },
        blog: {
            title: 'Заметки о веб-разработке',
            subtitle: 'Мысли о веб-разработке и заметки из процесса обучения.',
            pageTitle: 'Заметки · веб-разработка — Anatolii Yastrebov',
            pageDescription: 'Личные заметки о веб-разработке: цены на сайты, конструктор vs свой код, сайты локального бизнеса.',
            projectsTitle: 'Мои live-проекты',
            projectsSubtitle: 'Все десять демо-сайтов со скриншотами, стеком и деталями реализации — учебные концепты, не реальные компании.',
            allProjects: 'Все live-демо в блоге →',
            readTime: 'Время чтения: ~%n мин.',
            read: 'Читать дальше →',
            cat1: 'Заметка', cat2: 'Стратегия', cat3: 'Веб',
            a1: { title: 'Сколько стоит сайт в Германии?', excerpt: 'Обзор реалистичных ценовых диапазонов веб-проектов — как заметка к размышлению, а не как предложение.' },
            a2: { title: 'Конструктор vs собственный код', excerpt: 'Когда есть смысл в конструкторе, а когда лучше собственное решение. Честный обзор.' },
            a3: { title: 'Сайты небольших локальных бизнесов', excerpt: 'Что делает маленькие сайты хорошими: ясность, скорость, mobile-first.' }
        },
        contact: {
            title: 'Контакт',
            subtitle: 'Напиши мне — обычно отвечаю в течение нескольких дней.',
            gdpr: 'Ваши данные используются исключительно для ответа на ваш запрос. Подробнее в <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
            email: { label: 'E-mail' },
            region: { label: 'Регион', value: 'Северный Рейн-Вестфалия · Германия' },
            form: {
                name: 'Ваше имя',
                email: 'E-mail',
                message: 'О чём речь? Достаточно короткого сообщения.',
                submit: 'Отправить',
                submitted: 'Отправлено! ✓',
                sending: 'Отправка…',
                sendingLong: 'Сервер просыпается, секунду…',
                error: 'Ошибка отправки',
                consent: 'Я согласен на обработку моих персональных данных в соответствии с <a href="datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.',
                consentError: 'Подтвердите согласие на обработку данных.'
            }
        },
        footer: { name: 'Anatolii Yastrebov', role: 'Фронтенд-разработчик · NRW', impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' },
        project: {
            back: '← К списку проектов',
            notFoundTitle: '—',
            notFoundText: 'Проект не найден.',
            metaTitle: 'Проект · Anatolii Yastrebov',
            metaDescription: 'Портфолио-проект подробно: реализация, технологии и планируемые доработки.'
        }
    }
};

// Live portfolio projects: portfolio-projects.js → window.portfolioProjects / window.casesData

window.translations = translations;

// ============================================================
// State
// ============================================================
let currentLanguage = localStorage.getItem('language') || 'de';
if (!['de', 'en', 'ru'].includes(currentLanguage)) currentLanguage = 'de';

// ============================================================
// i18n helpers
// ============================================================
function getTranslation(key, dict) {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), dict);
}


const LEGAL_LABELS = { impressum: 'Impressum', datenschutz: 'Datenschutzerklärung' };

function pickLocalizedList(field, lang) {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    return field[lang] || field.de || [];
}

function applyLegalLabels() {
    document.querySelectorAll('[data-i18n="footer.impressum"]').forEach((el) => {
        el.textContent = LEGAL_LABELS.impressum;
    });
    document.querySelectorAll('[data-i18n="footer.datenschutz"]').forEach((el) => {
        el.textContent = LEGAL_LABELS.datenschutz;
    });
}

window.getSiteLanguage = () => currentLanguage;

function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const value = getTranslation(key, dict);
        if (value === null || value === undefined) return;
        const attr = el.getAttribute('data-i18n-attr');
        if (attr) {
            attr.split(',').map((a) => a.trim()).forEach((name) => {
                if (name) el.setAttribute(name, value);
            });
        } else if (/<[a-z][\s\S]*>/i.test(value)) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = getTranslation(key, dict);
        if (value) el.placeholder = value;
    });

    const titleVal = getTranslation('meta.title', dict);
    if (titleVal) document.title = titleVal;

    const metaDesc = document.querySelector('meta[name="description"]');
    const descVal = getTranslation('meta.description', dict);
    if (metaDesc && descVal) metaDesc.setAttribute('content', descVal);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    applyLegalLabels();

    if (typeof renderCases === 'function') renderCases();

    if (typeof window.renderBlogArticles === 'function') {
        const readTime = getTranslation('blog.readTime', dict) || 'ca. %n Min.';
        window.renderBlogArticles(lang, readTime);
    }

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

// ============================================================
// Portfolio rendering
// ============================================================
function getPortfolioProjects() {
    return Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];
}

function buildPortfolioCardsHtml(dict) {
    const c = dict.cases || {};
    const lang = currentLanguage;
    const projects = getPortfolioProjects();

    return projects.map((p) => {
        const title = p.title[lang] || p.title.de;
        const category = p.category[lang] || p.category.de;
        const summary = p.summary[lang] || p.summary.de;
        const previewAlt = `${title} — ${c.demoBadge || 'Live-Demo'}`;
        const stackPreview = pickLocalizedList(p.techStack, lang).slice(0, 4);

        return `
            <article class="case-card portfolio-card portfolio-card--compact">
                <a class="portfolio-preview" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="${c.viewLive || 'Live'} — ${title}">
                    <img src="${p.preview}" alt="${previewAlt}" width="640" height="360" loading="lazy" decoding="async">
                    <span class="portfolio-preview-badge">${c.demoBadge || 'Live-Demo'}</span>
                </a>
                <div class="portfolio-card-body">
                    <div class="case-industry">${category}</div>
                    <h3 class="case-client portfolio-card-title">
                        <a href="project.html?id=${p.id}">${title}</a>
                    </h3>
                    <p class="portfolio-card-excerpt">${summary}</p>
                    <div class="case-stack portfolio-card-stack">${stackPreview.map((t) => `<span class="case-stack-tag">${t}</span>`).join('')}</div>
                    <div class="portfolio-card-actions">
                        <a class="btn btn-primary btn-sm" href="project.html?id=${p.id}">${c.viewCase || 'Details öffnen'}</a>
                        <a class="btn btn-secondary btn-sm" href="${p.liveUrl}" target="_blank" rel="noopener noreferrer">${c.viewLive || 'Live-Demo ↗'}</a>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

function renderCases() {
    const dict = translations[currentLanguage] || translations.de;
    const html = buildPortfolioCardsHtml(dict);
    ['cases-container', 'blog-projects-container'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    });
}


// ============================================================
// Mobile menu
// ============================================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================================
// Smooth scroll & navbar effects
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        if (href === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.pageYOffset > 24);
}, { passive: true });

// ============================================================
// Scroll reveal
// ============================================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-in, .fade-in-up, .section-title, .service-card, .package-card, .case-card, .wartung-card, .process-step, .blog-card, .faq-item').forEach((el) => {
    observer.observe(el);
});

// ============================================================
// Year in footer
// ============================================================
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================================
// Contact form
// ============================================================
const API_BASE_URL = (() => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:3001';
    }
    return 'https://portfolio-backend-db2d.onrender.com';
})();

// Render free tier sleeps after inactivity; first request can take 30+ s.
// Use a 35 s overall timeout and a "warming up" hint after 15 s.
const REQUEST_TIMEOUT_MS = 35000;
const COLD_START_HINT_AFTER_MS = 15000;

async function sendContactForm(payload) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
        const res = await fetch(`${API_BASE_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return { success: false, message: data.message || `Error ${res.status}` };
        }
        return { success: !!data.success, message: data.message };
    } catch (err) {
        clearTimeout(timeoutId);
        return { success: false, message: err.name === 'AbortError' ? 'Timeout' : err.message };
    }
}

function setFormStatus(el, text, kind) {
    if (!el) return;
    el.textContent = text || '';
    el.classList.remove('is-info', 'is-success', 'is-error');
    if (kind) el.classList.add(`is-${kind}`);
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const statusEl = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const dict = translations[currentLanguage] || translations.de;
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const consent = contactForm.querySelector('#gdpr-consent');
        const button = contactForm.querySelector('button[type="submit"]');
        const btnText = button.querySelector('.btn-text');
        const btnIcon = button.querySelector('.btn-icon');

        if (!consent || !consent.checked) {
            setFormStatus(statusEl, dict.contact.form.consentError, 'error');
            return;
        }
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            return;
        }

        button.disabled = true;
        const originalText = btnText.textContent;
        btnText.textContent = dict.contact.form.sending;
        btnIcon.textContent = '⏳';
        setFormStatus(statusEl, dict.contact.form.sending, 'info');

        // After 15 s show a "server warming up" hint (Render cold-start).
        const coldStartTimer = setTimeout(() => {
            setFormStatus(statusEl, dict.contact.form.sendingLong || dict.contact.form.sending, 'info');
        }, COLD_START_HINT_AFTER_MS);

        const result = await sendContactForm({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
            // Honeypot — must remain empty. If a bot filled it, the
            // server quietly returns success without sending email.
            website: contactForm.querySelector('input[name="website"]')?.value || ''
        });

        clearTimeout(coldStartTimer);

        if (result && result.success) {
            btnText.textContent = dict.contact.form.submitted;
            btnIcon.textContent = '✓';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            setFormStatus(statusEl, dict.contact.form.submitted, 'success');
            contactForm.reset();
        } else {
            btnText.textContent = dict.contact.form.error;
            btnIcon.textContent = '!';
            button.style.background = '';
            setFormStatus(statusEl, (result && result.message) || dict.contact.form.error, 'error');
        }

        setTimeout(() => {
            button.disabled = false;
            btnText.textContent = originalText;
            btnIcon.textContent = '→';
            button.style.background = '';
        }, 2400);
    });
}

// ============================================================
// Init
// ============================================================
applyTranslations(currentLanguage);
renderCases();
