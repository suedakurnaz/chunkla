/*
  chunks.js içindeki maddelere çeviri alıştırması ekler.
  Çalıştır: node scripts/add-practice.js parti.json

  parti.json biçimi:  { "make a decision": [["türkçe","english"], ...3 tane... ], ... }

  practice[i].en ekranda gösterilmez; doğrulayıcının kalıbın kullanıldığını
  denetlemesi ve ileride "cevabı göster" istenirse hazır olması için durur.
  Var olan bir maddenin practice'i yeniden yazılır; diğer alanlara dokunulmaz.
*/
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'www', 'chunks.js');
const batch = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let src = fs.readFileSync(file, 'utf8');
const q = (s) => JSON.stringify(s);

let added = 0, replaced = 0;
for (const [chunk, list] of Object.entries(batch)) {
  if (!Array.isArray(list) || list.length !== 3) throw new Error(`${chunk}: tam 3 alıştırma gerekir`);

  const marker = `chunk: ${q(chunk)},`;
  const at = src.indexOf(marker);
  if (at < 0) throw new Error(`chunks.js içinde bulunamadı: ${chunk}`);

  // Bu maddenin examples dizisinin kapanışını bul
  const exAt = src.indexOf('examples: [', at);
  if (exAt < 0) throw new Error(`${chunk}: examples bulunamadı`);
  let depth = 0, end = -1;
  for (let i = src.indexOf('[', exAt); i < src.length; i++) {
    if (src[i] === '[') depth++;
    else if (src[i] === ']') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end < 0) throw new Error(`${chunk}: examples kapanışı bulunamadı`);

  const block = ',\n    practice: [\n' +
    list.map(([tr, en]) => `      { tr: ${q(tr)}, en: ${q(en)} }`).join(',\n') +
    '\n    ]';

  // Zaten varsa eskisini at
  const after = src.slice(end);
  const existing = after.match(/^,\s*\n\s*practice: \[[\s\S]*?\n\s*\]/);
  if (existing) { src = src.slice(0, end) + block + after.slice(existing[0].length); replaced++; }
  else { src = src.slice(0, end) + block + after; added++; }
}

fs.writeFileSync(file, src);
console.log(`chunks.js güncellendi: ${added} eklendi, ${replaced} yenilendi`);
