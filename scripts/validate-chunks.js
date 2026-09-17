/*
  chunks.js doğrulayıcı. Çalıştır: npm run validate
  Yeni sürüm öncesi kilidi güncelle: npm run validate -- --kilitle

  Kontroller (docs/DEVAM-eski.md §4):
  1. Her maddede group, chunk, tr, note dolu; examples tam 3 tane, her biri en + tr.
  2. Tekrar yok (chunk alanı, büyük/küçük harf ve boşluk farkı yok sayılır).
  3. Sıra değişmedi: kilit dosyasındaki maddeler aynı sırayla listenin başında duruyor.
     Ekleme yalnızca sona yapılabilir.
*/
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const lockPath = path.join(__dirname, 'chunks-kilit.json');
const src = fs.readFileSync(path.join(root, 'www/chunks.js'), 'utf8');

let CHUNKS;
try {
  CHUNKS = new Function(src + ';return CHUNKS;')();
} catch (e) {
  console.error('chunks.js çalıştırılamadı (sözdizimi hatası?):', e.message);
  process.exit(1);
}

const errors = [];
const FIELDS = ['group', 'chunk', 'tr', 'note', 'examples'];
const seen = new Map();

CHUNKS.forEach((c, i) => {
  const at = `#${i + 1} "${c && c.chunk}"`;
  ['group', 'chunk', 'tr', 'note'].forEach(f => {
    if (typeof c[f] !== 'string' || !c[f].trim()) errors.push(`${at}: "${f}" boş veya eksik`);
  });
  const extra = Object.keys(c).filter(k => !FIELDS.includes(k));
  if (extra.length) errors.push(`${at}: tanımsız alan: ${extra.join(', ')}`);
  if (!Array.isArray(c.examples) || c.examples.length !== 3) {
    errors.push(`${at}: examples tam 3 olmalı (${Array.isArray(c.examples) ? c.examples.length : 'yok'})`);
  } else {
    c.examples.forEach((e, j) => {
      if (!e || !e.en || !e.tr) errors.push(`${at}: ${j + 1}. örnekte en/tr eksik`);
    });
  }
  const key = String(c.chunk || '').trim().toLowerCase().replace(/\s+/g, ' ');
  if (seen.has(key)) errors.push(`${at}: tekrar, ilk geçtiği yer #${seen.get(key) + 1}`);
  else seen.set(key, i);
});

if (fs.existsSync(lockPath)) {
  const locked = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  if (CHUNKS.length < locked.length) {
    errors.push(`Madde silinmiş: kilitte ${locked.length}, şimdi ${CHUNKS.length}`);
  }
  locked.forEach((chunk, i) => {
    if (CHUNKS[i] && CHUNKS[i].chunk !== chunk) {
      errors.push(`Sıra bozulmuş: #${i + 1} kilitte "${chunk}", şimdi "${CHUNKS[i].chunk}"`);
    }
  });
}

if (errors.length) {
  console.error(`chunks.js: ${errors.length} sorun bulundu`);
  errors.slice(0, 50).forEach(e => console.error('  - ' + e));
  process.exit(1);
}

if (process.argv.includes('--kilitle')) {
  fs.writeFileSync(lockPath, JSON.stringify(CHUNKS.map(c => c.chunk), null, 1) + '\n');
  console.log(`Kilit güncellendi: ${CHUNKS.length} madde`);
}

const groups = {};
CHUNKS.forEach(c => { groups[c.group] = (groups[c.group] || 0) + 1; });
console.log(`chunks.js geçerli: ${CHUNKS.length} madde, ${Math.ceil(CHUNKS.length / 5)} gün`);
Object.entries(groups).sort((a, b) => b[1] - a[1])
  .forEach(([g, n]) => console.log(`  ${String(n).padStart(3)}  ${g}`));
