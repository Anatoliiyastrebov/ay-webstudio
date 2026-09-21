import { readFileSync, writeFileSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import CleanCSS from 'clean-css';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const cssFiles = ['styles.css', 'premium.css', 'responsive.css'];

function kb(bytes) {
    return `${(bytes / 1024).toFixed(1)} KB`;
}

const report = { before: 0, after: 0, files: [] };

for (const file of cssFiles) {
    const srcPath = path.join(root, file);
    const outPath = path.join(root, file.replace('.css', '.min.css'));
    const input = readFileSync(srcPath, 'utf8');
    const before = statSync(srcPath).size;
    const output = new CleanCSS({ level: 2 }).minify(input);

    if (output.errors.length) {
        console.error(output.errors);
        process.exit(1);
    }

    writeFileSync(outPath, output.styles);
    const after = statSync(outPath).size;
    report.before += before;
    report.after += after;
    report.files.push({ file, before, after });
    console.log(`${file} → ${path.basename(outPath)}: ${kb(before)} → ${kb(after)}`);
}

console.log(`Total CSS: ${kb(report.before)} → ${kb(report.after)} (−${Math.round((1 - report.after / report.before) * 100)}%)`);
