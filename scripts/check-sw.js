/*
  sw.js içindeki ASSETS listesi www/ ile birebir aynı mı?
  Kontrol:          node scripts/check-sw.js
  Listeyi yeniden yaz: node scripts/check-sw.js --yaz   (npm run sw:liste)
*/
const fs = require('fs');
const path = require('path');

const www = path.join(__dirname, '..', 'www');
const swPath = path.join(www, 'sw.js');
const START = '// sw:liste başlangıç';
const END = '// sw:liste bitiş';
const SKIP = new Set(['sw.js', 'LICENSES', 'og-image.png', '.DS_Store', 'Thumbs.db']);

function walk(dir, base = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const rel = base ? base + '/' + e.name : e.name;
    if (e.name.startsWith('.') || SKIP.has(e.name)) return [];
    return e.isDirectory() ? walk(path.join(dir, e.name), rel) : [rel];
  });
}

const files = ['./', ...walk(www).sort()];
const sw = fs.readFileSync(swPath, 'utf8');
const a = sw.indexOf(START), b = sw.indexOf(END);
if (a < 0 || b < 0) { console.error('sw.js içinde liste işaretleri bulunamadı.'); process.exit(1); }

if (process.argv.includes('--yaz')) {
  const block = START + '\nconst ASSETS = [\n' + files.map((f) => `  '${f}',`).join('\n') + '\n];\n';
  fs.writeFileSync(swPath, sw.slice(0, a) + block + sw.slice(b));
  console.log(`sw.js ASSETS yeniden yazıldı: ${files.length} kayıt`);
  process.exit(0);
}

const listed = [...sw.slice(a, b).matchAll(/'([^']+)'/g)].map((m) => m[1]);
const missing = files.filter((f) => !listed.includes(f));
const extra = listed.filter((f) => !files.includes(f));
if (missing.length || extra.length) {
  console.error('sw.js ASSETS listesi www/ ile uyuşmuyor. Düzeltmek için: npm run sw:liste');
  missing.forEach((f) => console.error('  eksik: ' + f));
  extra.forEach((f) => console.error('  fazla: ' + f));
  process.exit(1);
}
console.log(`sw.js geçerli: ${listed.length} dosya önbelleğe alınıyor`);
