// Generate responsive width variants of the homepage hero slideshow images so
// mobile devices download an appropriately-sized LCP image instead of the full
// 1920px master. Produces <name>-640.webp, -960.webp, -1280.webp alongside the
// existing full-size <name>.webp (1920w).
//
// Run: node scripts/generate-hero-srcset.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.join(__dirname, '..', 'public', 'images');
const HEROES = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5'];
const WIDTHS = [640, 960, 1280];
const QUALITY = 80;

(async () => {
  for (const name of HEROES) {
    const src = path.join(IMG_DIR, name + '.webp');
    for (const w of WIDTHS) {
      const out = path.join(IMG_DIR, `${name}-${w}.webp`);
      await sharp(src).resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
      console.log(`${name}-${w}.webp  ${(fs.statSync(out).size / 1024).toFixed(0)}KB`);
    }
  }
  console.log('\nDone generating hero srcset variants.');
})();
