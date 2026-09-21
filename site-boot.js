/**
 * Deferred script loader — critical app scripts first, GSAP/motion after paint.
 */
(function () {
    const page = document.body.dataset.page || 'home';

    // Локальная разработка: обходим кеш браузера, чтобы правки были видны сразу.
    // На боевом домене версия не добавляется — кеширование работает как обычно.
    const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
    const bust = isLocal ? `?t=${Date.now()}` : '';

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const existing = document.querySelector(`script[data-src="${src}"]`);
            if (existing) {
                if (existing.dataset.loaded === '1') resolve();
                else existing.addEventListener('load', resolve, { once: true });
                return;
            }
            const el = document.createElement('script');
            el.src = /^https?:/.test(src) ? src : src + bust;
            el.dataset.src = src;
            el.defer = true;
            el.onload = () => {
                el.dataset.loaded = '1';
                resolve();
            };
            el.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.body.appendChild(el);
        });
    }

    async function loadSequential(urls) {
        for (const url of urls) {
            await loadScript(url);
        }
    }

    async function loadMotion() {
        if (!['home', 'blog', 'project'].includes(page)) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // GSAP wird selbst gehostet (vendor/): keine Verbindung zu einem
        // fremden CDN, damit ohne Einwilligung keine IP-Adresse abfließt.
        await loadSequential([
            'vendor/gsap.min.js',
            'vendor/ScrollTrigger.min.js',
            'motion.js'
        ]);
    }

    async function loadApp() {
        const scripts = ['assets.js'];

        if (page === 'legal') {
            scripts.push('script.js', 'legal.js');
            await loadSequential(scripts);
            return;
        }

        scripts.push('portfolio-projects.js', 'portfolio-i18n.js');
        if (page === 'blog') scripts.push('blog-content.js');
        scripts.push('script.js');
        if (page === 'project') scripts.push('project.js');
        scripts.push('sanity-config.js', 'sanity-content.js');
        await loadSequential(scripts);
    }

    function startMotion() {
        if (typeof window.initPremiumMotion === 'function') {
            requestAnimationFrame(() => window.initPremiumMotion());
        }
    }

    function scheduleMotion() {
        if (!['home', 'blog', 'project'].includes(page)) {
            return Promise.resolve();
        }
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return Promise.resolve();
        }

        const run = () => loadMotion();

        return new Promise((resolve) => {
            const start = () => run().then(resolve);
            const afterLoad = () => {
                if ('requestIdleCallback' in window) {
                    requestIdleCallback(start, { timeout: 2500 });
                } else {
                    setTimeout(start, 1);
                }
            };

            if (document.readyState === 'complete') {
                afterLoad();
            } else {
                window.addEventListener('load', afterLoad, { once: true });
            }
        });
    }

    Promise.all([loadApp(), scheduleMotion()])
        .then(() => {
            startMotion();
            window.dispatchEvent(new Event('appready'));
        })
        .catch((err) => {
            console.error('[site-boot]', err);
        });
})();
