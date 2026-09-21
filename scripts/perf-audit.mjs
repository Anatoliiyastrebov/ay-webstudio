import { chromium } from 'playwright';
import { readFileSync, statSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = `file://${root}/index.html`;

function fileSize(rel) {
    try {
        return statSync(path.join(root, rel)).size;
    } catch {
        return 0;
    }
}

function sumDir(rel, ext) {
    const dir = path.join(root, rel);
    let total = 0;
    for (const name of readdirSync(dir)) {
        if (name.endsWith(ext)) total += statSync(path.join(dir, name)).size;
    }
    return total;
}

const staticReport = {
    css: fileSize('styles.min.css') || fileSize('styles.css'),
    cssPremium: fileSize('premium.min.css') || fileSize('premium.css'),
    cssResponsive: fileSize('responsive.min.css') || fileSize('responsive.css'),
    jsApp: fileSize('script.js') + fileSize('site-boot.js') + fileSize('assets.js'),
    fonts: sumDir('fonts', '.woff2'),
    photoWebp: fileSize('images/photo.webp'),
    photoJpg: fileSize('images/photo.jpg'),
    projectsJpg: sumDir('images/projects', '.jpg'),
    projectsWebp: sumDir('images/projects', '.webp'),
};

const browser = await chromium.launch();
const page = await browser.newPage();

const metrics = await page.goto(base, { waitUntil: 'networkidle' }).then(async () => {
    return page.evaluate(() => {
        const nav = performance.getEntriesByType('navigation')[0];
        const paints = performance.getEntriesByType('paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint').pop();
        return {
            domContentLoaded: Math.round(nav.domContentLoadedEventEnd),
            load: Math.round(nav.loadEventEnd),
            fcp: Math.round(paints.find((p) => p.name === 'first-contentful-paint')?.startTime || 0),
            lcp: Math.round(lcp?.startTime || 0),
            transferSize: nav.transferSize,
            resourceCount: performance.getEntriesByType('resource').length,
        };
    });
});

await browser.close();

console.log('\n=== Static asset sizes ===');
Object.entries(staticReport).forEach(([k, v]) => {
    console.log(`${k}: ${(v / 1024).toFixed(1)} KB`);
});

console.log('\n=== index.html (local file://, 1280px) ===');
console.log(metrics);
console.log('\nTip: run Lighthouse in Chrome DevTools on deployed URL for full scores.');
