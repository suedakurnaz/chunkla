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
const warnings = [];
const FIELDS = ['group', 'chunk', 'tr', 'note', 'examples', 'practice'];

/*
  practice[i].en ekranda GÖSTERİLMEZ; yalnızca Türkçe cümlenin gerçekten bu kalıbı
  gerektirdiğini denetlemek için veride durur. Aşağıdaki kontrol, kalıbın sözcüklerinin
  çekimli hâlleriyle İngilizce cümlede geçip geçmediğine bakar.
*/
const IRREGULAR = {
  be: ['am', 'is', 'are', 'was', 'were', 'been', 'being'],
  make: ['makes', 'made', 'making'], do: ['does', 'did', 'done', 'doing'],
  take: ['takes', 'took', 'taken', 'taking'], have: ['has', 'had', 'having'],
  get: ['gets', 'got', 'gotten', 'getting'], keep: ['keeps', 'kept', 'keeping'],
  give: ['gives', 'gave', 'given', 'giving'], go: ['goes', 'went', 'gone', 'going'],
  come: ['comes', 'came', 'coming'], catch: ['catches', 'caught', 'catching'],
  pay: ['pays', 'paid', 'paying'], say: ['says', 'said', 'saying'],
  tell: ['tells', 'told', 'telling'], think: ['thinks', 'thought', 'thinking'],
  find: ['finds', 'found', 'finding'], leave: ['leaves', 'left', 'leaving'],
  run: ['runs', 'ran', 'running'], put: ['puts', 'putting'], let: ['lets', 'letting'],
  break: ['breaks', 'broke', 'broken', 'breaking'], bring: ['brings', 'brought', 'bringing'],
  buy: ['buys', 'bought', 'buying'], hold: ['holds', 'held', 'holding'],
  lose: ['loses', 'lost', 'losing'], meet: ['meets', 'met', 'meeting'],
  hit: ['hits', 'hitting'], stand: ['stands', 'stood', 'standing'],
  understand: ['understands', 'understood', 'understanding'],
  fall: ['falls', 'fell', 'fallen', 'falling'], feel: ['feels', 'felt', 'feeling'],
  cut: ['cuts', 'cutting'], set: ['sets', 'setting'], sit: ['sits', 'sat', 'sitting'],
  speak: ['speaks', 'spoke', 'spoken', 'speaking'], see: ['sees', 'saw', 'seen', 'seeing'],
  hear: ['hears', 'heard', 'hearing'], write: ['writes', 'wrote', 'written', 'writing'],
  draw: ['draws', 'drew', 'drawn', 'drawing'], grow: ['grows', 'grew', 'grown', 'growing'],
  blow: ['blows', 'blew', 'blown', 'blowing'], throw: ['throws', 'threw', 'thrown', 'throwing'],
  wear: ['wears', 'wore', 'worn', 'wearing'], stick: ['sticks', 'stuck', 'sticking'],
  spend: ['spends', 'spent', 'spending'], send: ['sends', 'sent', 'sending'],
  build: ['builds', 'built', 'building'], deal: ['deals', 'dealt', 'dealing'],
  mean: ['means', 'meant', 'meaning'], read: ['reads', 'reading'],
  eat: ['eats', 'ate', 'eaten', 'eating'], drive: ['drives', 'drove', 'driven', 'driving'],
  ring: ['rings', 'rang', 'rung', 'ringing'], sleep: ['sleeps', 'slept', 'sleeping'],
  lie: ['lies', 'lay', 'lain', 'lying'], lay: ['lays', 'laid', 'laying'],
  win: ['wins', 'won', 'winning'], shut: ['shuts', 'shutting'], quit: ['quits', 'quitting'],
  hang: ['hangs', 'hung', 'hanging'], cost: ['costs', 'costing'], hurt: ['hurts', 'hurting'],
  beat: ['beats', 'beaten', 'beating'], feed: ['feeds', 'fed', 'feeding'],
  hide: ['hides', 'hid', 'hidden', 'hiding'], choose: ['chooses', 'chose', 'chosen', 'choosing'],
  forget: ['forgets', 'forgot', 'forgotten', 'forgetting'], forgive: ['forgives', 'forgave', 'forgiven', 'forgiving'],
  lead: ['leads', 'led', 'leading'], ride: ['rides', 'rode', 'ridden', 'riding'],
  rise: ['rises', 'rose', 'risen', 'rising'], sell: ['sells', 'sold', 'selling'],
  shake: ['shakes', 'shook', 'shaken', 'shaking'], sing: ['sings', 'sang', 'sung', 'singing'],
  steal: ['steals', 'stole', 'stolen', 'stealing'], swim: ['swims', 'swam', 'swum', 'swimming'],
  teach: ['teaches', 'taught', 'teaching'], tear: ['tears', 'tore', 'torn', 'tearing'],
  wake: ['wakes', 'woke', 'woken', 'waking'], spread: ['spreads', 'spreading'],
  stand: ['stands', 'stood', 'standing'], fight: ['fights', 'fought', 'fighting'],
  bet: ['bets', 'betting'], burn: ['burns', 'burnt', 'burning'], learn: ['learns', 'learnt', 'learning']
};
const STOP = new Set(['a', 'an', 'the', 'to', 'of', 'in', 'on', 'at', 'for', 'with',
  'your', 'my', 'his', 'her', 'its', 'our', 'their', 'me', 'you', 'it', 'is', 'be', 'and', 'or',
  // Kısaltmalar: kalıpta geçse de cümlede başka bir özneyle kurulabilir
  // ("it's up to you" → "The decision is up to you").
  "it's", "i'm", "he's", "she's", "we're", "they're", "you're", "that's", "there's",
  "what's", "how's", "let's", "don't", "doesn't", "didn't", "isn't", "can't", "won't", "i'd"]);

// "used" → "use", "running" → "run": kalıptaki çekimli sözcüğün yalın hâlini de dene.
function stems(w) {
  const out = new Set([w]);
  if (w.length > 3 && w.endsWith('ed')) { out.add(w.slice(0, -2)); out.add(w.slice(0, -1)); }
  if (w.length > 5 && w.endsWith('ing')) { out.add(w.slice(0, -3)); out.add(w.slice(0, -3) + 'e'); }
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) out.add(w.slice(0, -1));
  return out;
}

function wordForms(w) {
  const set = new Set([w]);
  (IRREGULAR[w] || []).forEach((f) => set.add(f));
  set.add(w + 's'); set.add(w + 'es'); set.add(w + 'ed'); set.add(w + 'ing');
  if (w.endsWith('e')) { set.add(w.slice(0, -1) + 'ed'); set.add(w.slice(0, -1) + 'ing'); }
  if (w.endsWith('y')) { set.add(w.slice(0, -1) + 'ies'); set.add(w.slice(0, -1) + 'ied'); }
  set.add(w + w.slice(-1) + 'ed'); set.add(w + w.slice(-1) + 'ing');
  return set;
}

function usesChunk(chunk, en) {
  const words = en.toLowerCase().replace(/[^a-z' ]/g, ' ').split(/\s+/).filter(Boolean);
  const bag = new Set(words);
  const key = chunk.toLowerCase().replace(/[^a-z' ]/g, ' ').split(/\s+/).filter(Boolean);
  const content = key.filter((w) => !STOP.has(w));
  const target = content.length ? content : key;
  const hit = target.filter((w) => [...stems(w)]
    .some((base) => [...wordForms(base)].some((f) => bag.has(f))));
  return hit.length >= Math.ceil(target.length * 0.6);
}
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
  if (c.practice !== undefined) {
    if (!Array.isArray(c.practice) || c.practice.length !== 3) {
      errors.push(`${at}: practice tam 3 olmalı (${Array.isArray(c.practice) ? c.practice.length : 'dizi değil'})`);
    } else {
      c.practice.forEach((ex, j) => {
        if (!ex || typeof ex.tr !== 'string' || !ex.tr.trim()) { errors.push(`${at}: ${j + 1}. alıştırmada tr eksik`); return; }
        if (typeof ex.en !== 'string' || !ex.en.trim()) { errors.push(`${at}: ${j + 1}. alıştırmada en eksik (ekranda görünmez, denetim için)`); return; }
        const extra2 = Object.keys(ex).filter((k) => k !== 'tr' && k !== 'en');
        if (extra2.length) errors.push(`${at}: ${j + 1}. alıştırmada tanımsız alan: ${extra2.join(', ')}`);
        if (!usesChunk(c.chunk, ex.en)) warnings.push(`${at}: ${j + 1}. alıştırma kalıbı kullanmıyor olabilir → "${ex.en}"`);
        if (ex.tr.trim().split(/\s+/).length > 9) warnings.push(`${at}: ${j + 1}. alıştırma uzun (${ex.tr.trim().split(/\s+/).length} kelime) → "${ex.tr}"`);
      });
    }
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

if (warnings.length) {
  console.log(`\nGözden geçirilecek ${warnings.length} uyarı:`);
  warnings.slice(0, 40).forEach((w) => console.log('  ! ' + w));
  if (warnings.length > 40) console.log(`  … ve ${warnings.length - 40} tane daha`);
  console.log('');
}

const withPractice = CHUNKS.filter((c) => Array.isArray(c.practice)).length;
const groups = {};
CHUNKS.forEach(c => { groups[c.group] = (groups[c.group] || 0) + 1; });
console.log(`chunks.js geçerli: ${CHUNKS.length} madde, ${Math.ceil(CHUNKS.length / 5)} gün` +
  `, çeviri alıştırması olan: ${withPractice}/${CHUNKS.length}`);
Object.entries(groups).sort((a, b) => b[1] - a[1])
  .forEach(([g, n]) => console.log(`  ${String(n).padStart(3)}  ${g}`));
