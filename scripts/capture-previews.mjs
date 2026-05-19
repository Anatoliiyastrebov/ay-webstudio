import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'images', 'projects');

const projects = [
    { slug: 'friseursalon', url: 'https://friseursalon.vercel.app/' },
    { slug: 'doner-hazel', url: 'https://doner-hazel.vercel.app/' },
    { slug: 'barbershop', url: 'https://barbershop-five-sooty.vercel.app/' },
    { slug: 'gebaudereinigung', url: 'https://gebaudereinigung.vercel.app/' },
    { slug: 'handwerker-nrw', url: 'https://handwerker-nrw.vercel.app/' },
    { slug: 'zahnarztpraxis', url: 'https://zahnarztpraxis-ten.vercel.app/' },
    { slug: 'umzugsfirma', url: 'https://umzugsfirma.vercel.app/' },
    { slug: 'immobilien', url: 'https://immobilien-mu.vercel.app/' },
    { slug: 'kfz-werkstatt', url: 'https://kfz-eta.vercel.app/' },
    { slug: 'fitness', url: 'https://fitness-lac-five.vercel.app/' }
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

for (const { slug, url } of projects) {
    try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        await page.waitForTimeout(1500);
        await page.screenshot({
            path: path.join(outDir, `${slug}.jpg`),
            type: 'jpeg',
            quality: 82,
            fullPage: false
        });
        console.log('OK', slug);
    } catch (err) {
        console.error('FAIL', slug, err.message);
    }
}

await browser.close();
console.log('Done →', outDir);
