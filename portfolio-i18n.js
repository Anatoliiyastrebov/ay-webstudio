// Localized techStack & styles for portfolio projects (loaded after portfolio-projects.js).
(function () {
    const L = {
        friseursalon: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Semantic HTML', 'CSS Grid & Flexbox', 'Mobile-first', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Семантический HTML', 'CSS Grid и Flexbox', 'Mobile-first', 'Vercel']
            },
            styles: {
                en: ['Premium look', 'CSS custom properties', 'Scroll animations', 'Glassmorphism accents', 'Dark/light-ready layout'],
                ru: ['Премиум-стиль', 'CSS-переменные', 'Анимации при скролле', 'Акценты glassmorphism', 'Поддержка тёмной/светлой темы']
            }
        },
        'doner-hazel': {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Mobile-first', 'CSS animations', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Mobile-first', 'CSS-анимации', 'Vercel']
            },
            styles: {
                en: ['Dark street-food theme', 'Neon accents', 'Hero with CTA', 'Card layout for menu'],
                ru: ['Тёмная тема стритфуда', 'Неоновые акценты', 'Hero с CTA', 'Карточки меню']
            }
        },
        barbershop: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Intersection Observer', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Intersection Observer', 'Vercel']
            },
            styles: {
                en: ['Masculine premium design', 'High-contrast typography', 'Subtle hover states', 'Section pinning / scroll effects'],
                ru: ['Мужской премиум-дизайн', 'Контрастная типографика', 'Hover-состояния', 'Эффекты при скролле']
            }
        },
        gebaudereinigung: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Form UX', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'UX форм', 'Vercel']
            },
            styles: {
                en: ['Light B2B design', 'Trust colors (blue/green)', 'Icon cards', 'Pricing tables', 'Before/after slider'],
                ru: ['Светлый B2B-дизайн', 'Цвета доверия (синий/зелёный)', 'Карточки с иконками', 'Таблицы цен', 'Слайдер до/после']
            }
        },
        'handwerker-nrw': {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Range inputs', 'CSS compare slider', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Range-поля', 'CSS-слайдер сравнения', 'Vercel']
            },
            styles: {
                en: ['Trades trust design', 'Orange accent CTAs', 'Before/after handle', 'Sticky mobile CTA'],
                ru: ['Дизайн доверия для Handwerk', 'Оранжевые CTA', 'Регулятор до/после', 'Sticky CTA на мобиле']
            }
        },
        zahnarztpraxis: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility', 'Semantic HTML', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Доступность (a11y)', 'Семантический HTML', 'Vercel']
            },
            styles: {
                en: ['Clean medical design', 'Light palette', 'Trust typography', 'Opening hours tables'],
                ru: ['Чистый медицинский дизайн', 'Светлая палитра', 'Типографика доверия', 'Таблицы часов работы']
            }
        },
        umzugsfirma: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Range sliders', 'CSS variables', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Range-слайдеры', 'CSS-переменные', 'Vercel']
            },
            styles: {
                en: ['Premium moving brand', 'Trust badges', 'Interactive price calculator', 'Testimonial cards'],
                ru: ['Премиум-брендинг переездов', 'Бейджи доверия', 'Интерактивный калькулятор', 'Карточки отзывов']
            }
        },
        immobilien: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Card UI', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'CSS Grid', 'Карточный UI', 'Vercel']
            },
            styles: {
                en: ['Luxury real-estate aesthetic', 'Generous whitespace', 'Elegant typography', 'Property cards with hover'],
                ru: ['Премиум-эстетика недвижимости', 'Много воздуха', 'Элегантная типографика', 'Карточки объектов с hover']
            }
        },
        'kfz-werkstatt': {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Component cards', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Компонентные карточки', 'Vercel']
            },
            styles: {
                en: ['Technical workshop design', 'Clear service cards', 'Star ratings UI', 'Strong CTA buttons'],
                ru: ['Техничный дизайн сервиса', 'Карточки услуг', 'UI звёздных оценок', 'Выразительные CTA']
            }
        },
        fitness: {
            techStack: {
                en: ['HTML5', 'CSS3', 'JavaScript', 'Drag compare slider', 'Pricing tables', 'Vercel'],
                ru: ['HTML5', 'CSS3', 'JavaScript', 'Слайдер сравнения drag', 'Таблицы тарифов', 'Vercel']
            },
            styles: {
                en: ['Sporty dark theme', 'Energetic accent color', 'Before/after sliders', 'Pricing tiers with “Popular” badge'],
                ru: ['Спортивная тёмная тема', 'Энергичный акцент', 'Слайдеры до/после', 'Тарифы с бейджем «Популярно»']
            }
        }
    };

    const deTechLabels = {
        'Semantic HTML': 'Semantisches HTML',
        'Mobile-First': 'Mobile-First',
        'CSS Grid & Flexbox': 'CSS Grid & Flexbox',
        'Accessibility': 'Barrierefreiheit',
        'Range Inputs': 'Range-Eingabefelder',
        'CSS Compare Slider': 'CSS-Vorher/Nachher-Slider',
        'Range Sliders': 'Range-Slider',
        'CSS Variables': 'CSS-Variablen',
        'Component Cards': 'Komponenten-Karten',
        'Drag Compare Slider': 'Drag-Vergleichs-Slider',
        'Pricing Tables': 'Preis-Tabellen',
        'Card UI': 'Karten-UI',
        'Form UX': 'Formular-UX',
        'CSS Animations': 'CSS-Animationen',
        'Intersection Observer': 'Intersection Observer'
    };

    if (!Array.isArray(window.portfolioProjects)) return;

    window.portfolioProjects.forEach((p) => {
        const patch = L[p.id];
        if (!patch) return;

        const baseTech = Array.isArray(p.techStack) ? p.techStack : (p.techStack.de || []);
        const baseStyles = Array.isArray(p.styles) ? p.styles : (p.styles.de || []);

        const deTech = baseTech.map((t) => deTechLabels[t] || t);

        p.techStack = {
            de: deTech,
            en: patch.techStack.en,
            ru: patch.techStack.ru
        };
        p.styles = {
            de: baseStyles,
            en: patch.styles.en,
            ru: patch.styles.ru
        };
    });

    window.casesData = window.portfolioProjects;
})();
