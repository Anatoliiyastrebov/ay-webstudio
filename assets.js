/**
 * Shared asset helpers — responsive WebP previews, no extra dependencies.
 */
(function (global) {
    function previewWebpPath(preview) {
        if (!preview) return '';
        return preview.replace(/\.(jpe?g|png)$/i, '.webp');
    }

    function buildPreviewPicture(preview, alt, options) {
        const opts = options || {};
        const loading = opts.loading || 'lazy';
        const width = opts.width || 640;
        const height = opts.height || 360;
        const sizes = opts.sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px';
        const className = opts.className ? ` class="${opts.className}"` : '';
        const fetchpriority = opts.fetchpriority ? ` fetchpriority="${opts.fetchpriority}"` : '';
        const webp = previewWebpPath(preview);

        return `<picture>
            <source srcset="${webp}" type="image/webp" sizes="${sizes}">
            <img src="${preview}" alt="${alt}" width="${width}" height="${height}" loading="${loading}" decoding="async" sizes="${sizes}"${className}${fetchpriority}>
        </picture>`;
    }

    global.previewWebpPath = previewWebpPath;
    global.buildPreviewPicture = buildPreviewPicture;
})(typeof window !== 'undefined' ? window : globalThis);
