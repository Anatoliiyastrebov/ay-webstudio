/**
 * Разносит домен и контактные данные из site.config.json по всему сайту:
 * canonical, og:url, og:image, разметку LocalBusiness, sitemap.xml и robots.txt.
 *
 * Смена домена = одна правка в site.config.json + `npm run set-domain`.
 * Скрипт идемпотентен: значения перезаписываются целиком, а не «дописываются».
 *
 *   node scripts/set-domain.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(readFileSync(path.join(root, 'site.config.json'), 'utf8'));

const siteUrl = cfg.siteUrl.replace(/\/+$/, '');
const ogImage = `${siteUrl}/images/photo-og.webp`;
const today = new Date().toISOString().slice(0, 10);

// Zuordnung für schema.org: alles ohne Eintrag gilt als Stadt.
const AREA_TYPES = {
    'Nordrhein-Westfalen': 'State',
    'Deutschland': 'Country'
};

const warnings = [];
let changedFiles = 0;

function setMeta(html, selectorAttr, attrValue, targetAttr, value) {
    // Заменяем значение только у тега, где selectorAttr === attrValue.
    const re = new RegExp(
        `(<(?:meta|link)[^>]*${selectorAttr}=["']${attrValue}["'][^>]*${targetAttr}=["'])([^"']*)(["'])`,
        'i'
    );
    if (re.test(html)) return html.replace(re, `$1${value}$3`);

    // Порядок атрибутов может быть обратным (target перед selector).
    const reSwapped = new RegExp(
        `(<(?:meta|link)[^>]*${targetAttr}=["'])([^"']*)(["'][^>]*${selectorAttr}=["']${attrValue}["'])`,
        'i'
    );
    return html.replace(reSwapped, `$1${value}$3`);
}

function buildLocalBusiness() {
    const a = cfg.address || {};
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: cfg.businessName,
        description:
            'Websites für kleine Betriebe in Leverkusen, Köln und ganz NRW. Festpreis ab 600 €.',
        url: siteUrl,
        email: cfg.email,
        image: ogImage,
        priceRange: cfg.priceRange,
        availableLanguage: ['de', 'uk', 'ru', 'en'],
        // Bundesland ist kein Ort — sonst behauptet die Auszeichnung,
        // Nordrhein-Westfalen sei eine Stadt.
        areaServed: (cfg.areaServed || []).map((name) => ({
            '@type': AREA_TYPES[name] || 'City',
            name
        }))
    };

    if (cfg.phone) schema.telephone = cfg.phone;

    // Каталог услуг: поисковик видит не только диапазон, но и сами пакеты.
    if (cfg.offers && cfg.offers.length) {
        schema.hasOfferCatalog = {
            '@type': 'OfferCatalog',
            name: 'Website-Pakete',
            itemListElement: cfg.offers.map((o) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: o.name },
                // Фиксированная цена — price, диапазон — minPrice/maxPrice.
                // Цена за период (unit) по schema.org — UnitPriceSpecification:
                // unitCode у обычного PriceSpecification не предусмотрен.
                priceSpecification: {
                    '@type': o.unit ? 'UnitPriceSpecification' : 'PriceSpecification',
                    ...(o.priceFrom === o.priceTo
                        ? { price: o.priceFrom }
                        : { minPrice: o.priceFrom, maxPrice: o.priceTo }),
                    priceCurrency: 'EUR',
                    ...(o.unit ? { unitCode: o.unit } : {})
                }
            }))
        };
    }

    // Адрес добавляем только целиком — частичный адрес в разметке хуже, чем его отсутствие.
    if (a.street && a.postalCode && a.city) {
        schema.address = {
            '@type': 'PostalAddress',
            streetAddress: a.street,
            postalCode: a.postalCode,
            addressLocality: a.city,
            addressCountry: a.countryCode || 'DE'
        };
    } else {
        warnings.push(
            'Адрес в site.config.json не заполнен → в разметке LocalBusiness нет PostalAddress, ' +
            'а в Impressum остаются плейсхолдеры. По § 5 DDG публиковать сайт в таком виде нельзя.'
        );
    }

    return JSON.stringify(schema, null, 2);
}

const localBusinessJson = buildLocalBusiness();

for (const page of cfg.pages) {
    const file = path.join(root, page.file);
    if (!existsSync(file)) {
        warnings.push(`Страница ${page.file} указана в конфиге, но файла нет.`);
        continue;
    }

    const before = readFileSync(file, 'utf8');
    const absolute = page.path === '/' ? `${siteUrl}/` : `${siteUrl}${page.path}`;
    let html = before;

    html = setMeta(html, 'rel', 'canonical', 'href', absolute);
    html = setMeta(html, 'property', 'og:url', 'content', absolute);
    html = setMeta(html, 'property', 'og:image', 'content', ogImage);

    html = html.replace(
        /(<script type="application\/ld\+json" data-schema="localbusiness">)[\s\S]*?(<\/script>)/,
        (_m, open, close) => `${open}\n${localBusinessJson}\n    ${close}`
    );

    if (html !== before) {
        writeFileSync(file, html);
        changedFiles += 1;
        console.log(`✓ ${page.file}`);
    }
}

// Контактный блок в правовых текстах — из того же конфига.
const legalPath = path.join(root, 'legal.js');
const legalBefore = readFileSync(legalPath, 'utf8');
const a = cfg.address || {};
const contactBlock = `/* set-domain:contact-start */
const CONTACT = {
    name: ${JSON.stringify(cfg.ownerName)},
    street: ${JSON.stringify(a.street || '[STRASSE HAUSNUMMER]')},
    postal: ${JSON.stringify([a.postalCode, a.city].filter(Boolean).join(' ') || '[PLZ ORT]')},
    country: 'Deutschland',
    email: ${JSON.stringify(cfg.email)},
    phone: ${JSON.stringify(cfg.phone || '')}
};
/* set-domain:contact-end */`;

const legalAfter = legalBefore.replace(
    /\/\* set-domain:contact-start \*\/[\s\S]*?\/\* set-domain:contact-end \*\//,
    contactBlock
);
if (legalAfter !== legalBefore) {
    writeFileSync(legalPath, legalAfter);
    changedFiles += 1;
    console.log('✓ legal.js (Impressum/Datenschutz)');
}


// ============================================================
// Кнопки WhatsApp
// Номер живёт в site.config.json. Пусто — кнопок нет нигде:
// лучше не показать канал, чем показать нерабочую ссылку.
// Текст по-немецки: без JS страница остаётся на немецком,
// на других языках его подменяет applyTranslations в script.js.
// ============================================================
const WA_NUMBER = String(cfg.whatsapp || '').replace(/[^0-9]/g, '');

// Пакеты идут в том же порядке, что карточки на странице услуг.
const WA_PACKAGES = ['Landingpage', 'Basis-Website', 'Erweiterte Website', 'Wartung', 'Hosting und Domain'];
const WA_MSG = 'Guten Tag! Ich interessiere mich für das Paket %s.';
const WA_MSG_GENERAL = 'Guten Tag! Ich habe eine Frage zu einer Website.';

function waHref(text) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

// name — полное имя маркера, например whatsapp:p1 или phone:contact.
function fillMarker(source, name, replacement, file) {
    const re = new RegExp(`(<!-- ${name}:start -->)[\\s\\S]*?(<!-- ${name}:end -->)`);
    if (!re.test(source)) {
        warnings.push(`Маркер ${name} не найден в ${file}.`);
        return source;
    }
    return source.replace(re, `$1${replacement}$2`);
}

function applyWhatsApp() {
    // --- карточки пакетов ---
    const servicesPath = path.join(root, 'leistungen.html');
    if (existsSync(servicesPath)) {
        const before = readFileSync(servicesPath, 'utf8');
        let html = before;
        WA_PACKAGES.forEach((pkg, i) => {
            const link = WA_NUMBER
                ? `\n                    <a class="price-whatsapp" href="${waHref(WA_MSG.replace('%s', pkg))}"`
                  + ` target="_blank" rel="noopener noreferrer"`
                  + ` data-wa-msg="services.whatsappMsg" data-wa-arg="${pkg}"`
                  + ` data-i18n="services.whatsappCta">Per WhatsApp fragen</a>\n                    `
                : '';
            html = fillMarker(html, `whatsapp:p${i + 1}`, link, 'leistungen.html');
        });
        if (html !== before) {
            writeFileSync(servicesPath, html);
            changedFiles += 1;
            console.log('✓ leistungen.html (WhatsApp)');
        }
    }

    // --- телефон в блоке контактов ---
    const indexPathPhone = path.join(root, 'index.html');
    if (existsSync(indexPathPhone)) {
        const before = readFileSync(indexPathPhone, 'utf8');
        // Пусто в конфиге — блока нет: лучше без телефона, чем с чужим.
        const tel = String(cfg.phone || '').trim();
        const block = tel
            ? `\n                    <div class="contact-item">\n`
              + `                        <div class="contact-icon-wrapper"><div class="contact-icon" aria-hidden="true">📞</div></div>\n`
              + `                        <div class="contact-details">\n`
              + `                            <h3 data-i18n="contact.phone.label">Telefon</h3>\n`
              + `                            <p><a href="tel:${tel.replace(/[^+0-9]/g, '')}" class="contact-link contact-link--big">${tel}</a></p>\n`
              + `                            <p class="contact-note" data-i18n="contact.phone.hint">Anruf oder Nachricht — auch am Wochenende</p>\n`
              + `                        </div>\n`
              + `                    </div>\n                    `
            : '';
        const html = fillMarker(before, 'phone:contact', block, 'index.html');
        if (html !== before) {
            writeFileSync(indexPathPhone, html);
            changedFiles += 1;
            console.log('✓ index.html (Telefon)');
        }
    }

    // --- блок контактов на главной ---
    const indexPath = path.join(root, 'index.html');
    if (existsSync(indexPath)) {
        const before = readFileSync(indexPath, 'utf8');
        const block = WA_NUMBER
            ? `\n                    <div class="contact-item">\n`
              + `                        <div class="contact-icon-wrapper"><div class="contact-icon" aria-hidden="true">💬</div></div>\n`
              + `                        <div class="contact-details">\n`
              + `                            <h3 data-i18n="contact.whatsapp.label">WhatsApp</h3>\n`
              + `                            <p><a href="${waHref(WA_MSG_GENERAL)}" target="_blank" rel="noopener noreferrer"`
              + ` class="contact-link contact-link--big" data-wa-msg="contact.whatsapp.msg"`
              + ` data-i18n="contact.whatsapp.hint">Schreiben Sie mir direkt</a></p>\n`
              + `                        </div>\n`
              + `                    </div>\n                    `
            : '';
        const html = fillMarker(before, 'whatsapp:contact', block, 'index.html');
        if (html !== before) {
            writeFileSync(indexPath, html);
            changedFiles += 1;
            console.log('✓ index.html (WhatsApp)');
        }
    }

    if (!WA_NUMBER) {
        console.log('WhatsApp: номер не задан — кнопок на сайте нет.');
    } else {
        console.log(`WhatsApp: +${WA_NUMBER}`);
    }
}

applyWhatsApp();

// Адрес бэкенда формы — из того же конфига, что и домен.
const scriptPath = path.join(root, 'script.js');
const scriptBefore = readFileSync(scriptPath, 'utf8');
const apiBlock = `/* set-domain:api-start */\nconst API_BASE_CONFIGURED = ${JSON.stringify(cfg.apiBaseUrl || '')};\n/* set-domain:api-end */`;
const scriptAfter = scriptBefore.replace(
    /\/\* set-domain:api-start \*\/[\s\S]*?\/\* set-domain:api-end \*\//,
    apiBlock
);
if (scriptAfter !== scriptBefore) {
    writeFileSync(scriptPath, scriptAfter);
    changedFiles += 1;
    console.log(`✓ script.js (Formular-Backend: ${cfg.apiBaseUrl || 'gleiche Domain'})`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cfg.pages
    .map((p) => {
        const loc = p.path === '/' ? `${siteUrl}/` : `${siteUrl}${p.path}`;
        return `    <url>
        <loc>${loc}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${p.changefreq}</changefreq>
        <priority>${p.priority}</priority>
    </url>`;
    })
    .join('\n')}
</urlset>
`;
writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
console.log('✓ sitemap.xml');

// project.html показывает проект по ?id=… — отдельной индексируемой страницы нет.
const robots = `User-agent: *
Allow: /
Disallow: /server/
Disallow: /project.html
Sitemap: ${siteUrl}/sitemap.xml
`;
writeFileSync(path.join(root, 'robots.txt'), robots);
console.log('✓ robots.txt');

console.log(`\nДомен: ${siteUrl} — обновлено файлов: ${changedFiles + 2}`);
if (warnings.length) {
    console.log('\n⚠  Требует внимания:');
    warnings.forEach((w) => console.log(`   • ${w}`));
    process.exitCode = 1;
}
