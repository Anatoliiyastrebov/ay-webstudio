/**
 * Sanity CMS loader — fetches projects and blog posts, swaps them into
 * window.portfolioProjects / window.blogArticles and re-renders.
 * Silently no-ops when SANITY_CONFIG.projectId is empty or the fetch fails,
 * so the bundled static content always remains as fallback.
 */
(function () {
    const cfg = window.SANITY_CONFIG;
    if (!cfg || !cfg.projectId) return;

    const host = `${cfg.projectId}.${cfg.useCdn === false ? 'api' : 'apicdn'}.sanity.io`;
    const base = `https://${host}/v${cfg.apiVersion}/data/query/${cfg.dataset}`;

    function query(groq) {
        return fetch(`${base}?query=${encodeURIComponent(groq)}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Sanity HTTP ${res.status}`);
                return res.json();
            })
            .then((json) => json.result || []);
    }

    // image-abc123-640x360-webp → https://cdn.sanity.io/images/<pid>/<ds>/abc123-640x360.webp
    function imageUrl(ref, width) {
        if (!ref) return '';
        const parts = ref.split('-'); // ['image', id, dims, format]
        if (parts.length < 4) return '';
        const [, id, dims, format] = parts;
        return `https://cdn.sanity.io/images/${cfg.projectId}/${cfg.dataset}/${id}-${dims}.${format}?w=${width || 640}&auto=format`;
    }

    function escapeHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // Минимальный рендер Portable Text → HTML (стили normal/h3, списки, strong/em, ссылки).
    function renderSpan(child, markDefs) {
        let html = escapeHtml(child.text || '');
        (child.marks || []).forEach((mark) => {
            if (mark === 'strong' || mark === 'em') {
                html = `<${mark}>${html}</${mark}>`;
            } else {
                const def = (markDefs || []).find((d) => d._key === mark);
                if (def && def._type === 'link' && def.href) {
                    html = `<a href="${escapeHtml(def.href)}" target="_blank" rel="noopener noreferrer">${html}</a>`;
                }
            }
        });
        return html;
    }

    function portableTextToHtml(blocks) {
        if (!Array.isArray(blocks)) return '';
        const out = [];
        let listTag = null;

        function closeList() {
            if (listTag) {
                out.push(`</${listTag}>`);
                listTag = null;
            }
        }

        blocks.forEach((block) => {
            if (block._type !== 'block') return;
            const inner = (block.children || [])
                .map((c) => renderSpan(c, block.markDefs))
                .join('');

            if (block.listItem) {
                const tag = block.listItem === 'number' ? 'ol' : 'ul';
                if (listTag !== tag) {
                    closeList();
                    out.push(`<${tag}>`);
                    listTag = tag;
                }
                out.push(`<li>${inner}</li>`);
                return;
            }

            closeList();
            const style = block.style === 'h3' ? 'h3' : 'p';
            out.push(`<${style}>${inner}</${style}>`);
        });
        closeList();
        return out.join('\n');
    }

    function loc(field) {
        return field || {};
    }

    function mapProject(doc) {
        const preview = doc.previewImage
            ? imageUrl(doc.previewImage, 640)
            : doc.previewPath || '';
        return {
            id: doc.slug,
            preview,
            liveUrl: doc.liveUrl || '#',
            techStack: doc.techStack || [],
            styles: doc.styles || [],
            title: loc(doc.title),
            category: loc(doc.category),
            summary: loc(doc.summary),
            implemented: loc(doc.implemented),
            planned: loc(doc.planned)
        };
    }

    function articleHtml(id, meta, readMin, title, bodyHtml) {
        return `<article id="${id}" class="blog-article">
            <div class="blog-meta">
                <span>${escapeHtml(meta || '')}</span><span>·</span><span class="blog-read-time" data-read-min="${readMin || 5}"></span>
            </div>
            <h2>${escapeHtml(title || '')}</h2>
            ${bodyHtml}
        </article>`;
    }

    function mapBlogPosts(docs) {
        const articles = {};
        const order = [];
        docs.forEach((doc) => {
            const id = doc.slug;
            if (!id) return;
            order.push(id);
            const entry = {};
            ['de', 'en', 'ru'].forEach((lang) => {
                const title = (doc.title || {})[lang] || (doc.title || {}).de || '';
                const meta = (doc.meta || {})[lang] || (doc.meta || {}).de || '';
                const body = portableTextToHtml((doc.body || {})[lang] || (doc.body || {}).de);
                entry[lang] = articleHtml(id, meta, doc.readMin, title, body);
            });
            articles[id] = entry;
        });
        return { articles, order };
    }

    function rerender() {
        const lang = typeof window.getSiteLanguage === 'function' ? window.getSiteLanguage() : 'de';
        if (typeof renderCases === 'function') renderCases();
        if (typeof window.renderBlogArticles === 'function' && window.translations) {
            const dict = window.translations[lang] || window.translations.de || {};
            const readTime = (dict.blog && dict.blog.readTime) || 'ca. %n Min.';
            window.renderBlogArticles(lang, readTime);
        }
        // project.html re-инициализируется по этому событию (см. project.js)
        window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    }

    const projectsQ = `*[_type=="project"]|order(order asc){
        "slug": slug.current, order, liveUrl, previewPath,
        "previewImage": previewImage.asset._ref,
        title, category, summary, techStack, styles, implemented, planned
    }`;

    const blogQ = `*[_type=="blogPost"]|order(order asc){
        "slug": slug.current, order, readMin, meta, title, body
    }`;

    Promise.all([query(projectsQ), query(blogQ)])
        .then(([projects, posts]) => {
            let changed = false;
            if (Array.isArray(projects) && projects.length) {
                window.portfolioProjects = projects.map(mapProject);
                changed = true;
            }
            if (Array.isArray(posts) && posts.length) {
                const { articles, order } = mapBlogPosts(posts);
                window.blogArticles = articles;
                window.renderBlogArticles = function (lang, readTimeLabel) {
                    const container = document.getElementById('blog-articles');
                    if (!container || !window.blogArticles) return;
                    const cta = typeof window.getBlogCtaHtml === 'function' ? window.getBlogCtaHtml(lang) : '';
                    container.innerHTML = order
                        .map((id) => (window.blogArticles[id][lang] || window.blogArticles[id].de) + cta)
                        .join('');
                    container.querySelectorAll('.blog-read-time').forEach((el) => {
                        const min = el.getAttribute('data-read-min') || '5';
                        el.textContent = (readTimeLabel || 'ca. %n Min.').replace('%n', min);
                    });
                };
                changed = true;
            }
            if (changed) rerender();
        })
        .catch((err) => {
            console.warn('[sanity] using bundled content:', err.message);
        });
})();
