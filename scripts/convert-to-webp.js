// One-off image optimization: convert every JPG/PNG in public/images to WebP.
// Keeps the original files in place (some are still referenced as og:image /
// schema images, and they serve as a safety net). favicon.png is intentionally
// skipped — favicons must remain PNG/ICO for browser compatibility.
//
// Run: node scripts/convert-to-webp.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.join(__dirname, '..', 'public', 'images');
const SKIP = new Set(['favicon.png']);
const QUALITY = 82;

(async () => {
  const files = fs.readdirSync(IMG_DIR).filter(f => /\.(jpe?g|png|gif)$/i.test(f) && !SKIP.has(f));
  let totalOrig = 0, totalWebp = 0;
  const rows = [];
  for (const file of files) {
    const src = path.join(IMG_DIR, file);
    const out = path.join(IMG_DIR, file.replace(/\.(jpe?g|png|gif)$/i, '.webp'));
    const meta = await sharp(src).metadata();
    await sharp(src).webp({ quality: QUALITY }).toFile(out);
    const origSize = fs.statSync(src).size;
    const webpSize = fs.statSync(out).size;
    totalOrig += origSize; totalWebp += webpSize;
    rows.push({ file, w: meta.width, h: meta.height, orig: origSize, webp: webpSize });
  }
  const kb = n => (n / 1024).toFixed(0) + 'KB';
  console.log('file'.padEnd(42), 'dims'.padEnd(12), 'orig'.padEnd(8), 'webp'.padEnd(8), 'saved');
  rows.forEach(r => {
    const saved = (100 - (r.webp / r.orig) * 100).toFixed(0) + '%';
    console.log(
      r.file.padEnd(42),
      `${r.w}x${r.h}`.padEnd(12),
      kb(r.orig).padEnd(8),
      kb(r.webp).padEnd(8),
      saved
    );
  });
  console.log('-'.repeat(80));
  console.log(`TOTAL ${rows.length} images: ${kb(totalOrig)} -> ${kb(totalWebp)}  (saved ${(100 - (totalWebp/totalOrig)*100).toFixed(0)}%)`);
  // Emit a JSON map of filename -> {w,h} for use when adding width/height attrs.
  const dims = {};
  rows.forEach(r => { dims[r.file] = { w: r.w, h: r.h }; });
  fs.writeFileSync(path.join(__dirname, 'image-dims.json'), JSON.stringify(dims, null, 2));
  console.log('\nWrote dimensions map to scripts/image-dims.json');
})();
