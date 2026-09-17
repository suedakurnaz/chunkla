/*
  core.js için hızlı test. Çalıştır: npm test
  Tarayıcı olmadan, sahte localStorage ve sabit tarihlerle çalışır.
*/
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const root = path.join(__dirname, '..');
const store = {};
globalThis.localStorage = {
  getItem: k => (k in store ? store[k] : null),
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};
globalThis.window = globalThis;
// Tarayıcıdaki gibi yükle: chunks.js'teki "const CHUNKS" window'a değil genel kapsama yazılır.
require('vm').runInThisContext(fs.readFileSync(path.join(root, 'www/chunks.js'), 'utf8'));
assert.strictEqual(globalThis.CHUNKS, undefined, 'test ortamı tarayıcıyı taklit ediyor');
require(path.join(root, 'www/js/core.js'));
const C = globalThis.Chunkla;
const at = s => new Date(s + 'T20:00:00');
const KEY = C.STORAGE_KEY;

(async () => {
  let r = await C.init(at('2026-09-16'));
  assert.deepStrictEqual(r, { firstVisitToday: true, today: 1, streak: 1 }, 'ilk açılış');

  r = await C.init(at('2026-09-16'));
  assert.strictEqual(r.firstVisitToday, false, 'aynı gün ikinci açılış seri ekranı göstermez');
  assert.strictEqual(r.streak, 1, 'aynı gün seriyi değiştirmez');

  r = await C.init(at('2026-09-17'));
  assert.strictEqual(r.streak, 2, 'ertesi gün seri artar');
  r = await C.init(at('2026-09-18'));
  assert.strictEqual(r.today, 3);
  assert.strictEqual(r.streak, 3);

  const day3 = C.chunksForDay(3).map(x => x.index);
  assert.deepStrictEqual(day3, [10, 11, 12, 13, 14], '3. gün = 11-15. maddeler');

  assert.strictEqual(C.toggleMark(3, 0), true);
  assert.strictEqual(C.toggleMark(3, 2), true);
  assert.strictEqual(C.toggleMark(3, 2), false, 'tekrar dokunma işareti kaldırır');
  assert.strictEqual(C.markedCount(3), 1);
  assert.throws(() => C.toggleMark(4, 0), /Gelecek/, 'gelecek gün işaretlenemez');

  C.toggleMark(1, 4);
  await C.markDayDone(1);
  assert.deepStrictEqual(C.history().map(h => h.status), ['bugun', 'telafi', 'tamam']);
  assert.strictEqual(C.totalMarked(), 2);
  assert.strictEqual(C.notebook()[0].items.length, 2);

  r = await C.init(at('2026-09-21'));
  assert.strictEqual(r.streak, 1, 'gün atlanınca seri sıfırdan başlar');
  assert.strictEqual(r.today, 6, 'gün numarası atlanan günlerle birlikte ilerler');

  const n = C.TOTAL;
  const lastDay = Math.ceil(n / C.PER_DAY);
  const wrap = C.chunksForDay(lastDay).map(x => x.index);
  assert.ok(wrap.every(i => i >= 0 && i < n), 'liste sonunda başa dönüş');

  await new Promise(res => setTimeout(res, 10));
  assert.ok(store[KEY].includes('"streak":1'), 'durum kaydedildi');

  store[KEY] = '{bozuk';
  r = await C.init(at('2026-09-22'));
  assert.strictEqual(r.today, 1, 'bozuk veri temiz başlangıca döner');
  assert.ok(store[KEY + '.bozuk'], 'bozuk veri silinmeden yedeklenir');

  /* ——— Tasarımdan gelen davranışlar ——— */
  await C._reset();
  // 2026-09-14 Pazartesi → 1. gün
  r = await C.init(at('2026-09-14'));
  assert.strictEqual(C.isIntroDone(), false, 'tanıtım başta yapılmamış');
  await C.markIntroDone();
  assert.strictEqual(C.isIntroDone(), true);
  assert.strictEqual(C.dateOfDay(7), '2026-09-20');
  assert.strictEqual(C.todayWeekday(at('2026-09-14')), 0, 'Pazartesi = 0');

  // Haftalık tekrar
  await C.init(at('2026-09-20')); // 7. gün
  assert.strictEqual(C.today(), 7);
  assert.strictEqual(C.isReviewDay(7), true);
  assert.strictEqual(C.isReviewDay(6), false);
  assert.strictEqual(C.weekReviewItems(7).length, 35, '1. hafta tekrarı 35 kalıp');
  await assert.rejects(async () => C.markDayDone(7), /Haftalık tekrar/, 'tekrarsız gün kapanmaz');
  await C.markDayDone(6);
  assert.throws(() => C.markWeekReviewed(6), /tekrar günü değil/);
  await C.markWeekReviewed(7);
  assert.strictEqual(C.isWeekReviewed(7), true);
  await C.markDayDone(7);
  assert.strictEqual(C.isDayDone(7), true);

  // Hafta günlerine göre tamamlanan günler (6. gün Ct, 7. gün Pz)
  assert.deepStrictEqual(C.completedByWeekday(), [0, 0, 0, 0, 0, 1, 1]);

  // Defter gün grupları ve tam çetele
  [0, 1, 2, 3, 4].forEach(slot => C.toggleMark(2, slot));
  C.toggleMark(5, 3);
  const byDay = C.notebookByDay();
  assert.deepStrictEqual(byDay.map(g => [g.day, g.count, g.full]), [[2, 5, true], [5, 1, false]]);
  assert.strictEqual(byDay[1].items[0].index, C.chunkIndex(5, 3));
  assert.strictEqual(C.fullTallyCount(), 1);

  // 30 günlük çetele sayfası
  let page = C.tallyPage();
  assert.deepStrictEqual([page.page, page.firstDay, page.lastDay], [0, 1, 30]);
  assert.deepStrictEqual(page.days.map(d => [d.day, d.position]), [[2, 1], [5, 4]]);
  await C.init(at('2026-10-14')); // 31. gün
  page = C.tallyPage();
  assert.deepStrictEqual([page.page, page.firstDay], [1, 31]);
  assert.strictEqual(page.days.length, 0, 'yeni sayfa boş başlar');
  assert.strictEqual(C.notebookByDay().length, 2, 'defter sıfırlanmaz');
  C.toggleMark(31, 0);
  assert.deepStrictEqual(C.tallyPage().days.map(d => d.position), [0]);

  console.log('core.js: tüm testler geçti');
})().catch(e => { console.error(e.message); process.exit(1); });
