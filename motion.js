/**
 * Premium motion layer — GSAP + ScrollTrigger
 * Section-specific reveals; respects prefers-reduced-motion
 */
(function () {
    const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
    if (!hasGsap) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
        document.documentElement.classList.add('reduce-motion');
        gsap.set('[data-motion], .motion-will-reveal', { clearProps: 'all', autoAlpha: 1, y: 0 });
        return;
    }

    let motionInitialized = false;
    let projectCardTriggers = [];

    function getProjectCards() {
        return gsap.utils.toArray(
            '#cases-container .portfolio-card--compact, #blog-projects-container .portfolio-card--compact'
        );
    }

    function resetProjectCards(cards) {
        (cards || getProjectCards()).forEach((card) => {
            gsap.killTweensOf(card);
            gsap.set(card, {
                clearProps: 'opacity,visibility,transform',
                autoAlpha: 1,
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0
            });
        });
    }

    function killProjectTriggers() {
        projectCardTriggers.forEach((t) => t.kill());
        projectCardTriggers = [];
        resetProjectCards();
    }

    function initHero() {
        const hero = document.querySelector('#home.hero');
        if (!hero || hero.dataset.motionInit) return;
        hero.dataset.motionInit = '1';

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.hero-eyebrow', { y: 24, autoAlpha: 0, duration: 0.7 })
            .from('.hero-name-line, .hero-role-line', { y: 40, autoAlpha: 0, duration: 0.85, stagger: 0.1 }, '-=0.45')
            .from('.hero-subtitle', { y: 32, autoAlpha: 0, duration: 0.85 }, '-=0.55')
            .from('.hero-buttons .btn', { y: 20, autoAlpha: 0, duration: 0.65, stagger: 0.1 }, '-=0.5')
            .from('.hero-photo-wrapper', { x: 40, autoAlpha: 0, scale: 0.96, duration: 1.1, ease: 'power2.out' }, '-=0.9');

        gsap.to('.orb-1', {
            y: 120,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.2 }
        });
        gsap.to('.orb-2', {
            y: -80,
            x: 40,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.4 }
        });
        gsap.to('.hero-photo-wrapper', {
            y: -48,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 }
        });
    }

    function revealSection(selector, vars) {
        const el = document.querySelector(selector);
        if (!el) return;
        gsap.from(el.querySelectorAll('.section-title, .section-description, .section-kicker'), {
            y: 36,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                toggleActions: 'play none none reverse'
            },
            ...vars
        });
    }

    function initSections() {
        revealSection('#projekte.cases-section');
        revealSection('#skills.services-section');

        const about = document.querySelector('#ueber-mich.about-trust');
        if (about) {
            gsap.from('.about-trust-photo', {
                x: -48,
                autoAlpha: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: { trigger: about, start: 'top 78%' }
            });
            gsap.from('.about-trust-text > *', {
                y: 28,
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.07,
                ease: 'power3.out',
                scrollTrigger: { trigger: about, start: 'top 75%' }
            });
        }

        const blog = document.querySelector('#blog-teaser.blog-teaser');
        if (blog) {
            gsap.from('.blog-teaser .blog-card', {
                x: (i) => (i % 2 === 0 ? -32 : 32),
                autoAlpha: 0,
                duration: 0.85,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: blog, start: 'top 78%' }
            });
        }

        const contact = document.querySelector('#kontakt.contact');
        if (contact) {
            gsap.from('.contact-info .contact-item', {
                x: -24,
                autoAlpha: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: { trigger: contact, start: 'top 80%' }
            });
            gsap.from('.contact-form .form-group, .contact-form .contact-submit-btn', {
                y: 24,
                autoAlpha: 0,
                duration: 0.65,
                stagger: 0.06,
                ease: 'power2.out',
                scrollTrigger: { trigger: '.contact-form', start: 'top 85%' }
            });
        }

        gsap.utils.toArray('.services-section .service-card').forEach((card, i) => {
            gsap.from(card, {
                y: 48,
                autoAlpha: 0,
                rotation: (i - 1) * 1.5,
                duration: 0.85,
                ease: 'power3.out',
                scrollTrigger: { trigger: card, start: 'top 88%' }
            });
            gsap.to(card, {
                y: (i % 2 === 0 ? -6 : 6),
                duration: 2.8 + i * 0.3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                scrollTrigger: { trigger: '#skills', start: 'top bottom', end: 'bottom top', toggleActions: 'play pause resume pause' }
            });
        });
    }

    function initProjectCards() {
        killProjectTriggers();

        ['#cases-container', '#blog-projects-container'].forEach((containerSel) => {
            const container = document.querySelector(containerSel);
            if (!container) return;

            const cards = gsap.utils.toArray('.portfolio-card--compact', container);
            if (!cards.length) return;

            resetProjectCards(cards);

            const tween = gsap.from(cards, {
                y: 32,
                opacity: 0,
                duration: 0.7,
                stagger: 0.06,
                ease: 'power3.out',
                immediateRender: false,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 90%',
                    once: true,
                    invalidateOnRefresh: true
                }
            });

            if (tween.scrollTrigger) {
                projectCardTriggers.push(tween.scrollTrigger);
            }
        });

        ScrollTrigger.refresh();

        // Safety: if ScrollTrigger missed (re-render / layout), force visible
        requestAnimationFrame(() => {
            getProjectCards().forEach((card) => {
                const opacity = parseFloat(getComputedStyle(card).opacity);
                const visibility = getComputedStyle(card).visibility;
                if (opacity < 0.05 || visibility === 'hidden') {
                    gsap.set(card, { autoAlpha: 1, opacity: 1, y: 0, clearProps: 'transform' });
                }
            });
        });
    }

    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .magnetic-btn');
        buttons.forEach((btn) => {
            if (btn.dataset.magnetic) return;
            btn.dataset.magnetic = '1';
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.18, y: y * 0.22, duration: 0.35, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.5)' });
            });
        });
    }

    function initCursor() {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        let dot = document.querySelector('.cursor-glow');
        if (!dot) {
            dot = document.createElement('div');
            dot.className = 'cursor-glow';
            document.body.appendChild(dot);
        }

        gsap.set(dot, { xPercent: -50, yPercent: -50 });
        window.addEventListener('mousemove', (e) => {
            gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' });
            dot.classList.add('is-visible');
        });
        document.querySelectorAll('a, button, .portfolio-card--compact').forEach((el) => {
            el.addEventListener('mouseenter', () => dot.classList.add('is-hover'));
            el.addEventListener('mouseleave', () => dot.classList.remove('is-hover'));
        });
    }

    function initSubpages() {
        const blog = document.querySelector('.blog-page');
        if (blog) {
            gsap.from('.blog-page .section-title, .blog-page-intro', {
                y: 32,
                autoAlpha: 0,
                duration: 0.85,
                stagger: 0.1,
                ease: 'power3.out'
            });
            gsap.from('.blog-article', {
                y: 40,
                autoAlpha: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: '#blog-articles', start: 'top 85%' }
            });
        }

        const projectPage = document.querySelector('.project-page');
        if (projectPage) {
            gsap.from('.project-page .back-link', {
                x: -16,
                autoAlpha: 0,
                duration: 0.55,
                ease: 'power2.out'
            });
        }
    }

    function animateProjectDetail() {
        const root = document.querySelector('#project-content');
        if (!root || !root.children.length) return;
        gsap.from(root.children, {
            y: 36,
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out'
        });
    }

    function init() {
        if (motionInitialized) {
            initProjectCards();
            ScrollTrigger.refresh();
            return;
        }
        motionInitialized = true;
        initHero();
        initSections();
        initSubpages();
        initProjectCards();
        initMagneticButtons();
        initCursor();
        ScrollTrigger.refresh();
    }

    window.initPremiumMotion = init;
    window.initProjectCardsMotion = initProjectCards;
    window.animateProjectDetail = animateProjectDetail;
    window.addEventListener('casesrendered', initProjectCards);
})();
