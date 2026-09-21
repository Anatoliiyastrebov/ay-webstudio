import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = path.join(root, 'images', 'projects');

function run(cmd) {
    execSync(cmd, { stdio: 'inherit' });
}

function kb(file) {
    return (statSync(file).size / 1024).toFixed(1);
}

console.log('Converting project previews to WebP…');
for (const name of readdirSync(projectsDir)) {
    if (!/\.jpe?g$/i.test(name)) continue;
    const jpg = path.join(projectsDir, name);
    const webp = jpg.replace(/\.jpe?g$/i, '.webp');
    run(`cwebp -q 82 "${jpg}" -o "${webp}"`);
    console.log(`  ${name}: ${kb(jpg)} KB → ${kb(webp)} KB webp`);
}

const photoJpg = path.join(root, 'images', 'photo.jpg');
const photoOg = path.join(root, 'images', 'photo-og.webp');
if (existsSync(photoJpg)) {
    run(`cwebp -q 85 "${photoJpg}" -resize 1200 0 -o "${photoOg}"`);
    console.log(`OG image: ${kb(photoOg)} KB (photo-og.webp)`);
}

console.log('Done. Use photo.webp in HTML; keep photo.jpg out of deploy if possible.');
