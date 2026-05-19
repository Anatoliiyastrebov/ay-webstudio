// Case detail page (uses window.portfolioProjects + window.translations from script.js)

(function () {
    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    function getLang() {
        if (typeof window.getSiteLanguage === 'function') {
            return window.getSiteLanguage();
        }
        const stored = localStorage.getItem('language');
        return ['de', 'en', 'ru'].includes(stored) ? stored : 'de';
    }

    function getCases() {
        return Array.isArray(window.portfolioProjects)
            ? window.portfolioProjects
            : Array.isArray(window.casesData)
              ? window.casesData
              : [];
    }

    function t(lang) {
        return (window.translations && window.translations[lang]) || (window.translations && window.translations.de) || {};
    }

    function pickLocalized(item, lang, key) {
        if (!item[key]) return '';
        if (typeof item[key] === 'string') return item[key];
        return item[key][lang] || item[key].de || '';
    }

    function pickLocalizedList(field, lang) {
        if (!field) return [];
        if (Array.isArray(field)) return field;
        return field[lang] || field.de || [];
    }

    function listBlock(label, items) {
        if (!items || !items.length) return '';
        return `
            <section class="case-detail-block">
                <div class="case-label">${label}</div>
                <ul class="portfolio-list case-detail-text">${items.map((i) => `<li>${i}</li>`).join('')}</ul>
            </section>
        `;
    }

    function notFound(lang) {
        const dict = t(lang);
        const project = dict.project || {};
        const back = project.back || '← Back';
        const title = project.notFoundTitle || '—';
        const text = project.notFoundText || 'Case not found.';
        document.getElementById('project-content').innerHTML = `
            <div class="project-not-found">
                <h1>${title}</h1>
                <p>${text}</p>
                <a href="index.html#projekte" class="btn btn-primary">${back}</a>
            </div>
        `;
    }

    function render(caseItem, lang) {
        const dict = t(lang);
        const cases = dict.cases || {};
        const isPortfolio = Boolean(caseItem.summary);

        const title = isPortfolio
            ? pickLocalized(caseItem, lang, 'title')
            : pickLocalized(caseItem, lang, 'client');
        const category = isPortfolio
            ? pickLocalized(caseItem, lang, 'category')
            : pickLocalized(caseItem, lang, 'industry');

        const summary = isPortfolio ? pickLocalized(caseItem, lang, 'summary') : pickLocalized(caseItem, lang, 'problem');
        const implemented = isPortfolio
            ? pickLocalizedList(caseItem.implemented, lang)
            : [pickLocalized(caseItem, lang, 'solution')];
        const planned = isPortfolio
            ? pickLocalizedList(caseItem.planned, lang)
            : [pickLocalized(caseItem, lang, 'result')];

        const lSummary = cases.labelSummary || cases.labelProblem || 'Overview';
        const lImplemented = cases.labelImplemented || cases.labelSolution || 'Implemented';
        const lPlanned = cases.labelPlanned || cases.labelResult || 'Planned';
        const lStack = cases.labelStack || 'Stack';
        const lStyles = cases.labelStyles || 'Styling';
        const viewLive = cases.viewLive || 'Open live demo ↗';

        const preview = caseItem.preview
            ? `<a class="project-detail-preview" href="${caseItem.liveUrl}" target="_blank" rel="noopener noreferrer">
                <img src="${caseItem.preview}" alt="${title}" width="1280" height="800" loading="lazy" decoding="async">
               </a>`
            : '';

        const liveBtn = caseItem.liveUrl
            ? `<a class="btn btn-primary" href="${caseItem.liveUrl}" target="_blank" rel="noopener noreferrer">${viewLive}</a>`
            : '';
        const ghBtn = caseItem.githubUrl
            ? `<a class="btn btn-secondary" href="${caseItem.githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>`
            : '';
        const buttons = liveBtn || ghBtn
            ? `<div class="project-detail-buttons">${liveBtn}${ghBtn}</div>`
            : '';

        const styles = pickLocalizedList(caseItem.styles, lang);
        const techStack = pickLocalizedList(caseItem.techStack, lang);
        const stylesBlock = styles.length
            ? `<section class="case-detail-block">
                <div class="case-stack-label">${lStyles}</div>
                <div class="case-stack case-stack-styles">${styles.map((s) => `<span class="case-stack-tag case-stack-tag-style">${s}</span>`).join('')}</div>
               </section>`
            : '';

        document.getElementById('project-content').innerHTML = `
            ${preview}
            <header class="project-detail-header">
                <div class="case-industry" style="margin-bottom: 8px;">${category}</div>
                <h1 class="project-detail-title">${title}</h1>
                ${buttons}
            </header>

            <section class="case-detail-block">
                <div class="case-label">${lSummary}</div>
                <p class="case-detail-text">${summary}</p>
            </section>

            ${listBlock(lImplemented, implemented)}
            ${listBlock(lPlanned, planned)}

            <section class="case-detail-block">
                <div class="case-stack-label">${lStack}</div>
                <div class="case-stack">${techStack.map((s) => `<span class="case-stack-tag">${s}</span>`).join('')}</div>
            </section>

            ${stylesBlock}
        `;

        const metaTitle = dict.project && dict.project.metaTitle;
        const metaDesc = dict.project && dict.project.metaDescription;
        if (title) document.title = `${title} · Anatolii Yastrebov`;
        const metaDescEl = document.querySelector('meta[name="description"]');
        if (metaDescEl && metaDesc) metaDescEl.setAttribute('content', metaDesc);
    }

    function init() {
        const id = new URLSearchParams(window.location.search).get('id');
        const lang = getLang();
        const cases = getCases();
        if (!id) {
            notFound(lang);
            return;
        }
        const item = cases.find((c) => c.id === id);
        if (!item) {
            notFound(lang);
            return;
        }
        render(item, lang);
    }

    function waitForCases(attempts) {
        if (window.portfolioProjects && window.translations) {
            init();
            return;
        }
        if (attempts <= 0) {
            init();
            return;
        }
        setTimeout(() => waitForCases(attempts - 1), 50);
    }

    ready(() => waitForCases(40));

    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            setTimeout(init, 50);
        });
    });

    window.addEventListener('languagechange', () => init());
})();
