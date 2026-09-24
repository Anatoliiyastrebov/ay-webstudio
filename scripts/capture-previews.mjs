import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'images', 'projects');

const projects = [
    { slug: 'mira-beauty-lounge', url: 'https://mira-beauty-lounge.anatoliiyastrebov.workers.dev/' },
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
        const jpgPath = path.join(outDir, `${slug}.jpg`);
        await page.screenshot({
            path: jpgPath,
            type: 'jpeg',
            quality: 82,
            fullPage: false
        });
        try {
            const { execSync } = await import('child_process');
            execSync(`cwebp -q 82 "${jpgPath}" -o "${jpgPath.replace(/\.jpe?g$/i, '.webp')}"`, { stdio: 'ignore' });
        } catch {
            /* optional: install cwebp for WebP output */
        }
        console.log('OK', slug);
    } catch (err) {
        console.error('FAIL', slug, err.message);
    }
}

await browser.close();
console.log('Done →', outDir);
