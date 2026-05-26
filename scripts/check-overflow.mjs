import { chromium, devices } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = `file://${root}/`;

const pages = ['index.html', 'blog.html', 'project.html?id=handwerk', 'impressum.html'];
const viewports = [
    { name: 'iPhone SE', width: 320, height: 568 },
    { name: 'Android', width: 390, height: 844 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'Laptop', width: 1280, height: 800 },
    { name: 'Ultra-wide', width: 1920, height: 1080 },
];

const browser = await chromium.launch();
let failed = 0;

for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    for (const file of pages) {
        await page.goto(`${base}${file}`, { waitUntil: 'domcontentloaded' });
        const overflow = await page.evaluate(() => {
            const doc = document.documentElement;
            return {
                scrollWidth: doc.scrollWidth,
                clientWidth: doc.clientWidth,
                bodyScroll: document.body.scrollWidth,
            };
        });
        const hasOverflow = overflow.scrollWidth > overflow.clientWidth + 1
            || overflow.bodyScroll > overflow.clientWidth + 1;
        if (hasOverflow) {
            failed += 1;
            console.error(`FAIL ${vp.name} ${file}: scroll=${overflow.scrollWidth} client=${overflow.clientWidth}`);
        } else {
            console.log(`OK   ${vp.name} ${file}`);
        }
    }
    await context.close();
}

await browser.close();
process.exit(failed > 0 ? 1 : 0);
