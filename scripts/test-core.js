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

const addDays = C._util.addDays;

// Günü kapatır (tekrar gününde önce tekrarı işaretler).
async function finish(day) {
  if (C.isReviewDay(day)) await C.markWeekReviewed(day);
  await C.markDayDone(day);
}

(async () => {
  let r = await C.init(at('2026-09-16'));
  assert.deepStrictEqual(r, { firstVisitToday: true, today: 1, streak: 0 }, 'ilk açılış: henüz kapatılan gün yok');
  assert.strictEqual(C._state().version, 2, 'yeni kayıt v2');

  r = await C.init(at('2026-09-16'));
  assert.strictEqual(r.firstVisitToday, false, 'aynı gün ikinci açılış seri ekranı göstermez');
  assert.strictEqual(r.streak, 0, 'girmek seriyi başlatmaz');

  /* ——— Kaldığın yerden ——— */
  r = await C.init(at('2026-09-17'));
  assert.strictEqual(r.streak, 0, 'girip çalışmamak seriyi sürdürmez');
  assert.strictEqual(r.today, 1, 'gün kapatılmadıysa aynı günde kalınır');

  await finish(1);
  assert.strictEqual(C.streak(), 1, 'gün kapatınca seri anında artar');
  r = await C.init(at('2026-09-17'));
  assert.strictEqual(r.today, 1, 'aynı takvim gününde yeni gün açılmaz');
  assert.strictEqual(C.dayStatus(1), 'tamam');

  r = await C.init(at('2026-09-18'));
  assert.strictEqual(r.today, 2, 'ertesi takvim gününde bir sonraki gün');
  assert.strictEqual(r.streak, 1, 'bugün henüz kapatılmadıysa dünden sayılır');
  await finish(2);
  assert.strictEqual(C.streak(), 2, 'art arda iki gün');

  r = await C.init(at('2026-09-25'));
  assert.strictEqual(r.today, 3, 'günler atlanınca yalnızca bir gün ilerler, borç birikmez');
  assert.strictEqual(r.streak, 0, 'gün atlanınca seri kopar');
  assert.deepStrictEqual(C.history().map(h => h.status), ['bugun', 'tamam', 'tamam'], 'telafi yok');

  const day3 = C.chunksForDay(3).map(x => x.index);
  assert.deepStrictEqual(day3, [10, 11, 12, 13, 14], '3. gün = 11-15. maddeler');

  assert.strictEqual(C.toggleMark(3, 0), true);
  assert.strictEqual(C.toggleMark(3, 2), true);
  assert.strictEqual(C.toggleMark(3, 2), false, 'tekrar dokunma işareti kaldırır');
  assert.strictEqual(C.markedCount(3), 1);
  assert.throws(() => C.toggleMark(4, 0), /Gelecek/, 'gelecek gün işaretlenemez');
  assert.throws(() => C.markDayDone(4), /Gelecek/, 'gelecek gün kapatılamaz');

  /* ——— Bu günü geri al ——— */
  assert.strictEqual(C.canUndoDay(3), true, 'işaretli gün geri alınabilir');
  assert.strictEqual(C.canUndoDay(4), false, 'gelecek gün silinemez');
  assert.throws(() => C.undoDay(4), /Gelecek/);
  await finish(3);
  assert.strictEqual(C.streak(), 1);
  await C.undoDay(3);
  assert.strictEqual(C.streak(), 0, 'geri alınan gün seriden düşer');
  assert.strictEqual(C.markedCount(3), 0, 'işaretler silindi');
  assert.strictEqual(C.isDayDone(3), false, 'tamamlanma silindi');
  assert.strictEqual(C.canUndoDay(3), false, 'boş gün için düğme yok');
  assert.strictEqual(C.today(), 3, 'gün numarası aynı kalır');
  r = await C.init(at('2026-09-26'));
  assert.strictEqual(r.today, 3, 'geri alınan gün ertesi gün de beklemede');
  assert.strictEqual(C.markedCount(2), 0);

  // Geçmiş günü silmek: çeteleden düşer, telafi olur, bugünkü gün değişmez
  C.toggleMark(1, 0);
  C.toggleMark(1, 1);
  assert.strictEqual(C.canUndoDay(1), true, 'geçmiş gün silinebilir');
  await C.undoDay(1);
  assert.strictEqual(C.markedCount(1), 0, 'geçmiş günün işaretleri silindi');
  assert.strictEqual(C.dayStatus(1), 'telafi', 'silinen geçmiş gün telafi olur');
  assert.strictEqual(C.notebookByDay().some(g => g.day === 1), false, 'defterden düştü');
  assert.deepStrictEqual(C.history().map(h => h.day), [3, 2], 'Günler listesinden düştü');
  assert.strictEqual(C.today(), 3, 'bugünkü gün değişmez');
  assert.strictEqual(C.dayStatus(2), 'tamam', 'diğer günlere dokunulmaz');
  await C.markDayDone(1);
  assert.strictEqual(C.dayStatus(1), 'tamam', 'silinen gün yeniden çalışılıp kapatılabilir');

  const n = C.TOTAL;
  const lastDay = Math.ceil(n / C.PER_DAY);
  const wrap = C.chunksForDay(lastDay).map(x => x.index);
  assert.ok(wrap.every(i => i >= 0 && i < n), 'liste sonunda başa dönüş');

  await new Promise(res => setTimeout(res, 10));
  assert.ok(store[KEY].includes('"day":3'), 'durum kaydedildi');

  /* ——— Baştan başla ——— */
  C.toggleMark(3, 1);
  await C.markIntroDone();
  const before = store[KEY];
  await C.resetAll();
  assert.strictEqual(store[KEY + '.yedek'], before, 'eski veri yedeklendi');
  assert.strictEqual(C.today(), 1);
  assert.strictEqual(C.streak(), 0, 'seri sıfırlandı');
  assert.strictEqual(C.totalMarked(), 0);
  assert.strictEqual(C.isIntroDone(), true, 'tanıtım yeniden gösterilmez');
  r = await C.init(at('2026-09-26'));
  assert.deepStrictEqual([r.today, r.firstVisitToday], [1, false], 'sıfırlama kalıcı');

  /* ——— Bozuk veri ——— */
  store[KEY] = '{bozuk';
  r = await C.init(at('2026-09-27'));
  assert.strictEqual(r.today, 1, 'bozuk veri temiz başlangıca döner');
  assert.ok(store[KEY + '.bozuk'], 'bozuk veri silinmeden yedeklenir');

  /* ——— v1 → v2 taşıma ——— */
  const v1 = JSON.stringify({
    version: 1, startDate: '2026-09-01', lastVisit: '2026-09-09', streak: 4, introDone: true,
    days: { 1: { marked: [0, 1], doneAt: '2026-09-01' }, 9: { marked: [2], doneAt: null } }
  });
  store[KEY] = v1;
  r = await C.init(at('2026-09-10'));
  assert.strictEqual(r.today, 10, 'taşımada takvimdeki gün korunur');
  assert.strictEqual(r.streak, 0, 'seri artık kapatılan günlerden hesaplanır');
  assert.strictEqual(store[KEY + '.yedek-v1'], v1, 'v1 ham verisi yedeklendi');
  assert.strictEqual(C._state().version, 2);
  assert.strictEqual(C.totalMarked(), 3, 'işaretler korunur');
  assert.strictEqual(C.dayStatus(9), 'telafi', 'eski boşluklar telafi olarak kalır');
  assert.deepStrictEqual(C.history().map(h => h.day), [10, 9, 1], 'izi olmayan eski günler listelenmez');
  await C.markDayDone(9);
  assert.strictEqual(C.dayStatus(9), 'tamam', 'eski gün hâlâ kapatılabilir');
  r = await C.init(at('2026-09-11'));
  assert.strictEqual(r.today, 10, 'taşımadan sonra gün yalnızca tamamlanınca ilerler');

  /* ——— Seri kurtarma (haftada bir, tek günlük boşluk) ——— */
  await C._reset();
  await C.init(at('2026-09-14')); // Pazartesi
  await finish(1);
  await C.init(at('2026-09-15'));
  await finish(2);
  assert.strictEqual(C.streak(), 2);
  assert.strictEqual(C.repairOffer(), null, 'boşluk yokken teklif yok');
  // 16 Eylül kaçırıldı
  r = await C.init(at('2026-09-17'));
  assert.strictEqual(r.streak, 0, 'seri koptu');
  assert.deepStrictEqual(C.repairOffer(), { date: '2026-09-16', streak: 3 }, 'kurtarma teklifi');
  await C.startRepair();
  assert.strictEqual(C.isRepairing(), true);
  assert.strictEqual(C.repairOffer(), null, 'kurtarma sürerken yeni teklif yok');
  assert.strictEqual(C.today(), 3);
  await finish(3);
  assert.strictEqual(C.isRepairing(), false);
  assert.strictEqual(C._state().days['3'].forDate, '2026-09-16', 'gün dünün yerine sayıldı');
  assert.strictEqual(C.streak(), 3, 'seri geri geldi');
  assert.strictEqual(C.today(), 4, 'bugün için yeni gün açıldı');
  await finish(4);
  assert.strictEqual(C.streak(), 4);
  // Aynı hafta ikinci boşluk: hak yok
  await C.init(at('2026-09-18'));
  await finish(5);
  r = await C.init(at('2026-09-20')); // 19 Eylül kaçırıldı, Pazar
  assert.strictEqual(r.streak, 0);
  assert.strictEqual(C.repairOffer(), null, 'haftalık hak kullanıldı');
  assert.strictEqual(C.repairBlockedThisWeek(), true);
  assert.throws(() => C.startRepair(), /hakkı yok/);
  await finish(6);
  await C.init(at('2026-09-21')); // yeni hafta
  await finish(7);
  // 22 Eylül kaçırıldı; 23'te önce bugünü bitirip sonra kurtarma
  r = await C.init(at('2026-09-23'));
  assert.strictEqual(C.today(), 8);
  await finish(8);
  assert.strictEqual(C.streak(), 1, 'bugün kapalı, dün boş');
  assert.deepStrictEqual(C.repairOffer(), { date: '2026-09-22', streak: 4 }, 'yeni haftada hak geri geldi');
  await C.startRepair();
  assert.strictEqual(C.today(), 9, 'bugün zaten kapalıysa kurtarma için sonraki gün açılır');
  await finish(9);
  assert.strictEqual(C.streak(), 4, '20-23 Eylül');
  assert.strictEqual(C.today(), 9, 'bugün zaten sayıldığı için ek gün açılmaz');
  r = await C.init(at('2026-09-24'));
  assert.strictEqual(r.today, 10);
  // Yarım kalan kurtarma ertesi gün düşer; iki günlük boşluk kurtarılamaz
  for (const d of ['2026-09-24', '2026-09-25', '2026-09-26']) { await C.init(at(d)); await finish(C.today()); }
  await C.init(at('2026-09-28')); // 27 kaçırıldı, Pazartesi
  assert.ok(C.repairOffer(), 'yeni hafta teklif');
  await C.startRepair();
  r = await C.init(at('2026-09-29'));
  assert.strictEqual(C.isRepairing(), false, 'yarım kurtarma düştü');
  assert.strictEqual(C.repairOffer(), null, 'iki günlük boşluk kurtarılamaz');
  assert.strictEqual(r.streak, 0);

  /* ——— Tasarımdan gelen davranışlar ——— */
  await C._reset();
  // 2026-09-14 Pazartesi → 1. gün
  r = await C.init(at('2026-09-14'));
  assert.strictEqual(C.isIntroDone(), false, 'tanıtım başta yapılmamış');
  await C.markIntroDone();
  assert.strictEqual(C.isIntroDone(), true);
  assert.strictEqual(C.todayWeekday(at('2026-09-14')), 0, 'Pazartesi = 0');

  // 1-6. günleri art arda kapat → 20 Eylül Pazar 7. gün
  let date = '2026-09-14';
  for (let d = 1; d <= 6; d++) {
    if (d === 2) [0, 1, 2, 3, 4].forEach(slot => C.toggleMark(2, slot));
    if (d === 5) C.toggleMark(5, 3);
    await finish(d);
    date = addDays(date, 1);
    await C.init(at(date));
  }
  assert.strictEqual(C.today(), 7);
  assert.strictEqual(C.isReviewDay(7), true);
  assert.strictEqual(C.isReviewDay(6), false);
  assert.strictEqual(C.weekReviewItems(7).length, 35, '1. hafta tekrarı 35 kalıp');
  await assert.rejects(async () => C.markDayDone(7), /Haftalık tekrar/, 'tekrarsız gün kapanmaz');
  assert.throws(() => C.markWeekReviewed(6), /tekrar günü değil/);
  await C.markWeekReviewed(7);
  assert.strictEqual(C.isWeekReviewed(7), true);
  assert.strictEqual(C.canUndoDay(7), true, 'yalnızca tekrarı yapılmış gün de geri alınabilir');
  await C.markDayDone(7);
  assert.strictEqual(C.isDayDone(7), true);

  // Hafta günleri tamamlanma tarihine göre (14-20 Eylül: Pt..Pz birer)
  assert.deepStrictEqual(C.completedByWeekday(), [1, 1, 1, 1, 1, 1, 1]);

  // Defter gün grupları ve tam çetele
  const byDay = C.notebookByDay();
  assert.deepStrictEqual(byDay.map(g => [g.day, g.count, g.full]), [[2, 5, true], [5, 1, false]]);
  assert.strictEqual(byDay[1].items[0].index, C.chunkIndex(5, 3));
  assert.strictEqual(C.fullTallyCount(), 1);

  // 30 günlük çetele sayfası
  let page = C.tallyPage();
  assert.deepStrictEqual([page.page, page.firstDay, page.lastDay], [0, 1, 30]);
  assert.deepStrictEqual(page.days.map(d => [d.day, d.position]), [[2, 1], [5, 4]]);
  for (let d = 7; d <= 30; d++) {
    if (d > 7) await finish(d);
    date = addDays(date, 1);
    await C.init(at(date));
  }
  assert.strictEqual(C.today(), 31);
  page = C.tallyPage();
  assert.deepStrictEqual([page.page, page.firstDay], [1, 31]);
  assert.strictEqual(page.days.length, 0, 'yeni sayfa boş başlar');
  assert.strictEqual(C.notebookByDay().length, 2, 'defter sıfırlanmaz');
  C.toggleMark(31, 0);
  assert.deepStrictEqual(C.tallyPage().days.map(d => d.position), [0]);

  // Seri: 30 gün art arda kapatıldı; aradan bir gün silinince zincir kopar
  assert.strictEqual(C.streak(), 30, '30 gün art arda');
  await C.undoDay(29);
  assert.strictEqual(C.streak(), 1, 'silinen gün seriyi koparır');
  assert.strictEqual(C.history().some(h => h.day === 29), false, 'silinen gün Günler\'de yok');

  console.log('core.js: tüm testler geçti');
})().catch(e => { console.error(e.stack || e.message); process.exit(1); });
