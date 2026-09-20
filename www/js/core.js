/*
  core.js — chunkla çekirdek mantığı. Arayüzden bağımsızdır; DOM'a dokunmaz.

  Gerektirir: chunks.js (global CHUNKS) bu dosyadan ÖNCE yüklenmiş olmalı.
  Dışarı açtığı tek şey: window.Chunkla

  Kurallar (docs/KARARLAR.md):
  - Günde sabit 5 ifade. N. gün = listenin (N-1)*5 ile N*5-1 arası indeksleri.
  - Liste bitince başa döner (mod CHUNKS.length).
  - İlerleme tek anahtarda JSON, localStorage'da. Sunucu, hesap, ağ isteği yok.
  - İşaretler "gün + slot (0-4)" olarak saklanır, ifade indeksi olarak değil.
    Böylece liste başa döndüğünde aynı ifade farklı günlerde karışmaz.

  - Her 7. gün (7, 14, 21…) haftalık tekrar günüdür. O gün, haftanın kalıpları
    baştan okunmadan (markWeekReviewed) "Deftere yazdım" kabul edilmez.
  - Arka plan çetelesi 30 günlük sayfalar hâlinde gösterilir (1-30, 31-60…).
    Defter ve istatistikler sıfırlanmaz; yalnızca arka plan sayfası yenilenir.

  - Gün numarası takvimle değil ilerlemeyle ilerler ("kaldığın yerden"). Gün ancak
    "Deftere yazdım" ile kapatılır ve ertesi takvim gününde bir sonraki güne geçilir.
    Girilmeyen günler borç biriktirmez; takvim günü başına en fazla bir yeni gün açılır.
  - "Bu günü geri al" yalnızca içinde bulunulan günü sıfırlar (undoDay).
  - "Baştan başla" her şeyi sıfırlar; eski veri önce yedek anahtara yazılır (resetAll).

  Durum şeması (v2; v1 kayıtları init sırasında taşınır, ham hâli yedeklenir):
  {
    version: 2,
    day: 12,                     // içinde bulunulan gün numarası
    startDate: "YYYY-MM-DD",     // ilk açılış (ya da son "Baştan başla")
    lastVisit: "YYYY-MM-DD",     // son giriş
    streak: 3,                   // art arda giriş yapılan gün sayısı
    introDone: true,             // tanıtım bir kez gösterildi
    days: {
      "1": { marked: [0, 1, 2, 3, 4], doneAt: "YYYY-MM-DD" },
      "7": { marked: [0, 3], doneAt: null, reviewedAt: "YYYY-MM-DD" }
    }
  }
*/

(function (global) {
  'use strict';

  var PER_DAY = 5;
  var REVIEW_EVERY = 7;       // her 7. gün haftalık tekrar
  var TALLY_PAGE_DAYS = 30;   // arka plan çetelesi 30 günde bir boş sayfaya geçer
  var STORAGE_KEY = 'chunkla.progress.v1';        // şema v2 olsa da anahtar aynı kalır
  var BACKUP_V1_KEY = STORAGE_KEY + '.yedek-v1';   // v1 → v2 taşımadan önceki ham veri
  var BACKUP_RESET_KEY = STORAGE_KEY + '.yedek';   // son "Baştan başla" öncesi veri
  var VERSION = 2;
  var MS_DAY = 86400000;

  // chunks.js "const CHUNKS = [...]" ile tanımlar; bu window'a değil genel kapsama yazılır.
  // eslint-disable-next-line no-undef
  var DATA = (typeof CHUNKS !== 'undefined') ? CHUNKS : global.CHUNKS;
  if (!Array.isArray(DATA) || DATA.length === 0) {
    throw new Error('core.js: CHUNKS bulunamadı. chunks.js önce yüklenmeli.');
  }

  /* ——— Tarih yardımcıları (yerel saat, gün hassasiyeti) ——— */

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function toDateKey(date) {
    var d = date || new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }

  // Yaz saati kaymalarından etkilenmemek için tarih anahtarını UTC gece yarısına çevirir.
  function keyToUtc(key) {
    var p = key.split('-');
    return Date.UTC(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }

  function daysBetween(fromKey, toKey) {
    return Math.round((keyToUtc(toKey) - keyToUtc(fromKey)) / MS_DAY);
  }

  function addDays(key, n) {
    var d = new Date(keyToUtc(key) + n * MS_DAY);
    return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate());
  }

  // Pazartesi = 0 … Pazar = 6
  function weekdayIndex(key) {
    return (new Date(keyToUtc(key)).getUTCDay() + 6) % 7;
  }

  /* ——— Depolama ——— */

  // Tek anahtar, localStorage. Tarayıcı izin vermezse (gizli sekme vb.) sessizce bellekte çalışır.
  var memoryFallback = {};

  function readRaw(key) {
    try { return Promise.resolve(global.localStorage.getItem(key)); }
    catch (e) { return Promise.resolve(key in memoryFallback ? memoryFallback[key] : null); }
  }

  function writeRaw(key, value) {
    try { global.localStorage.setItem(key, value); }
    catch (e) { memoryFallback[key] = value; }
    return Promise.resolve();
  }

  function removeRaw(key) {
    try { global.localStorage.removeItem(key); } catch (e) { /* yok say */ }
    delete memoryFallback[key];
    return Promise.resolve();
  }

  /*
    Tarayıcıdan verinin yer darlığında silinmemesini ister. Ana ekrana eklenmiş
    uygulamalarda çoğunlukla kendiliğinden onaylanır. Sonucu beklemeyiz; hata vermez.
  */
  function requestPersistence() {
    try {
      if (global.navigator && global.navigator.storage && global.navigator.storage.persist) {
        global.navigator.storage.persisted().then(function (already) {
          if (!already) global.navigator.storage.persist();
        }).catch(function () {});
      }
    } catch (e) { /* yok say */ }
  }

  /* ——— Durum ——— */

  var state = null;
  var writeQueue = Promise.resolve();
  var testNow = null; // yalnızca testlerde init(now) ile sabitlenir; uygulamada null kalır

  function nowOr(now) { return now || testNow || new Date(); }

  function emptyState(todayKey) {
    return { version: VERSION, day: 1, startDate: todayKey, lastVisit: null, streak: 0, days: {} };
  }

  function isValidState(s) {
    if (!s || typeof s.startDate !== 'string' || typeof s.streak !== 'number' ||
      !s.days || typeof s.days !== 'object') return false;
    if (s.version === 1) return true;
    return s.version === VERSION && typeof s.day === 'number' && s.day >= 1;
  }

  /*
    v1'de gün numarası takvimden hesaplanıyordu. Kullanıcı şaşırmasın diye taşıma anında
    aynı gün numarasında kalır; o güne kadarki boşluklar Defter'de "telafi" olarak durur.
    Buradan sonra gün yalnızca tamamlanınca ilerler.
  */
  function migrateV1(s, todayKey) {
    s.day = Math.max(1, daysBetween(s.startDate, todayKey) + 1);
    s.version = VERSION;
    return s;
  }

  // Yazmaları sıraya koyar; art arda iki dokunuş birbirinin üstüne yazmaz.
  function persist() {
    var snapshot = JSON.stringify(state);
    writeQueue = writeQueue.then(function () { return writeRaw(STORAGE_KEY, snapshot); });
    return writeQueue;
  }

  function requireInit() {
    if (!state) throw new Error('Chunkla.init() çağrılmadan kullanılamaz.');
  }

  function dayEntry(day, create) {
    var k = String(day);
    if (!state.days[k] && create) state.days[k] = { marked: [], doneAt: null };
    return state.days[k] || null;
  }

  /* ——— Genel API ——— */

  var Chunkla = {
    PER_DAY: PER_DAY,
    REVIEW_EVERY: REVIEW_EVERY,
    TALLY_PAGE_DAYS: TALLY_PAGE_DAYS,
    STORAGE_KEY: STORAGE_KEY,
    TOTAL: DATA.length,

    /*
      Uygulama açılışında bir kez çağrılır. Seriyi günceller ve kaydeder.
      Dönen nesnedeki firstVisitToday, "Seri ekranı" gösterilsin mi sorusunun cevabıdır.
    */
    init: function (now) {
      testNow = now || null;
      requestPersistence();
      var today = toDateKey(nowOr(now));
      // Bekleyen yazma varsa önce onun bitmesini bekle; yoksa eski veriyi okuruz.
      return writeQueue.then(function () { return readRaw(STORAGE_KEY); }).then(function (raw) {
        var loaded = null;
        var backup = Promise.resolve();
        if (raw) {
          try { loaded = JSON.parse(raw); } catch (e) { loaded = null; }
          if (!isValidState(loaded)) {
            // Bozuk veriyi silmeden kenara al, sonra temiz başla.
            backup = writeRaw(STORAGE_KEY + '.bozuk', raw);
            loaded = null;
          } else if (loaded.version === 1) {
            backup = writeRaw(BACKUP_V1_KEY, raw);
            loaded = migrateV1(loaded, today);
          }
        }
        state = loaded || emptyState(today);

        var firstVisitToday = state.lastVisit !== today;
        if (state.lastVisit === null) {
          state.streak = 1;
          state.lastVisit = today;
        } else {
          var gap = daysBetween(state.lastVisit, today);
          if (gap === 1) { state.streak += 1; state.lastVisit = today; }
          else if (gap > 1) { state.streak = 1; state.lastVisit = today; }
          else if (gap < 0) { firstVisitToday = false; } // saat geri alınmış; hiçbir şeyi değiştirme
        }

        // Kaldığın yerden: dün (ya da daha önce) kapatılan gün varsa bir sonrakine geç.
        var cur = state.days[String(state.day)];
        while (cur && cur.doneAt && cur.doneAt < today) {
          state.day += 1;
          cur = state.days[String(state.day)];
        }

        return backup.then(persist).then(function () {
          return { firstVisitToday: firstVisitToday, today: Chunkla.today(), streak: state.streak };
        });
      });
    },

    /* İçinde bulunulan gün numarası (1'den başlar). Yalnızca init sırasında ilerler. */
    today: function () {
      requireInit();
      return state.day;
    },

    streak: function () { requireInit(); return state.streak; },

    /* Gün + slot → DATA dizisindeki indeks. */
    chunkIndex: function (day, slot) {
      return ((day - 1) * PER_DAY + slot) % DATA.length;
    },

    /* O günün 5 ifadesi, işaret bilgisiyle. */
    chunksForDay: function (day) {
      requireInit();
      var entry = dayEntry(day, false);
      var out = [];
      for (var slot = 0; slot < PER_DAY; slot++) {
        var index = Chunkla.chunkIndex(day, slot);
        out.push({
          day: day,
          slot: slot,
          index: index,
          item: DATA[index],
          marked: !!(entry && entry.marked.indexOf(slot) !== -1)
        });
      }
      return out;
    },

    isMarked: function (day, slot) {
      requireInit();
      var entry = dayEntry(day, false);
      return !!(entry && entry.marked.indexOf(slot) !== -1);
    },

    /*
      İşareti açar/kapatır, yeni durumu döndürür.
      Açık soru: geri alma tekrar dokunmayla mı olacak? (docs/KARARLAR.md)
    */
    toggleMark: function (day, slot) {
      requireInit();
      if (day > Chunkla.today()) throw new Error('Gelecek günler işaretlenemez.');
      var entry = dayEntry(day, true);
      var i = entry.marked.indexOf(slot);
      if (i === -1) entry.marked.push(slot); else entry.marked.splice(i, 1);
      entry.marked.sort();
      persist();
      return i === -1;
    },

    markedCount: function (day) {
      requireInit();
      var entry = dayEntry(day, false);
      return entry ? entry.marked.length : 0;
    },

    isDayMarkedFull: function (day) { return Chunkla.markedCount(day) === PER_DAY; },

    /* "Deftere yazdım". Tekrar gününde önce markWeekReviewed çağrılmış olmalı. */
    markDayDone: function (day, now) {
      requireInit();
      if (day > Chunkla.today()) throw new Error('Gelecek günler tamamlanamaz.');
      if (Chunkla.isReviewDay(day) && !Chunkla.isWeekReviewed(day)) {
        throw new Error('Haftalık tekrar bitmeden bu gün kapatılamaz.');
      }
      dayEntry(day, true).doneAt = toDateKey(nowOr(now));
      return persist();
    },

    isDayDone: function (day) {
      requireInit();
      var entry = dayEntry(day, false);
      return !!(entry && entry.doneAt);
    },

    /* Geçmiş ekranı durumları: 'bugun' | 'tamam' | 'telafi' */
    dayStatus: function (day) {
      requireInit();
      if (Chunkla.isDayDone(day)) return 'tamam';
      if (day === Chunkla.today()) return 'bugun';
      return 'telafi';
    },

    /* Bugünden geriye doğru tüm günler. */
    history: function () {
      requireInit();
      var list = [];
      for (var d = Chunkla.today(); d >= 1; d--) {
        list.push({ day: d, status: Chunkla.dayStatus(d), marked: Chunkla.markedCount(d) });
      }
      return list;
    },

    /* Defter ekranı: işaretlenmiş kalıplar, kategoriye göre gruplu, ilk görülme sırasıyla. */
    notebook: function () {
      requireInit();
      var groups = [];
      var byName = {};
      Object.keys(state.days)
        .map(Number)
        .sort(function (a, b) { return a - b; })
        .forEach(function (day) {
          state.days[String(day)].marked.forEach(function (slot) {
            var index = Chunkla.chunkIndex(day, slot);
            var item = DATA[index];
            if (!byName[item.group]) {
              byName[item.group] = { group: item.group, items: [] };
              groups.push(byName[item.group]);
            }
            byName[item.group].items.push({ day: day, slot: slot, index: index, item: item });
          });
        });
      return groups;
    },

    /* Toplam işaretlenmiş kalıp sayısı (üst şeritteki defter sayacı). */
    totalMarked: function () {
      requireInit();
      return Object.keys(state.days).reduce(function (sum, k) {
        return sum + state.days[k].marked.length;
      }, 0);
    },

    /* ——— Haftalık tekrar ——— */

    isReviewDay: function (day) { return day % REVIEW_EVERY === 0; },

    weekNumber: function (day) { return Math.ceil(day / REVIEW_EVERY); },

    /* Tekrar gününde okunacak kalıplar: o haftanın 1. gününden bu güne kadar, tekrarsız. */
    weekReviewItems: function (day) {
      requireInit();
      var first = (Chunkla.weekNumber(day) - 1) * REVIEW_EVERY + 1;
      var seen = {};
      var out = [];
      for (var d = first; d <= day; d++) {
        Chunkla.chunksForDay(d).forEach(function (row) {
          if (!seen[row.index]) { seen[row.index] = true; out.push(row); }
        });
      }
      return out;
    },

    /* Tekrar destesinin sonuna gelindiğinde çağrılır; uygulama kapansa da hatırlanır. */
    markWeekReviewed: function (day, now) {
      requireInit();
      if (!Chunkla.isReviewDay(day)) throw new Error(day + '. gün tekrar günü değil.');
      if (day > Chunkla.today()) throw new Error('Gelecek günler için tekrar yapılamaz.');
      dayEntry(day, true).reviewedAt = toDateKey(nowOr(now));
      return persist();
    },

    isWeekReviewed: function (day) {
      requireInit();
      var entry = dayEntry(day, false);
      return !!(entry && entry.reviewedAt);
    },

    /* ——— Defter ve çetele ——— */

    /*
      Defter "Çetele grupları" sekmesi: işaret bulunan her gün bir grup.
      Eskiden yeniye sıralı; ekranda en yeni üstte göstermek için reverse() et.
    */
    notebookByDay: function () {
      requireInit();
      return Object.keys(state.days)
        .map(Number)
        .filter(function (day) { return state.days[String(day)].marked.length > 0; })
        .sort(function (a, b) { return a - b; })
        .map(function (day) {
          var slots = state.days[String(day)].marked;
          return {
            day: day,
            count: slots.length,
            full: slots.length === PER_DAY,
            items: slots.map(function (slot) {
              var index = Chunkla.chunkIndex(day, slot);
              return { day: day, slot: slot, index: index, item: DATA[index] };
            })
          };
        });
    },

    /* İşaretleri tam 5 olan gün sayısı ("tam çetele"). */
    fullTallyCount: function () {
      requireInit();
      return Object.keys(state.days).filter(function (k) {
        return state.days[k].marked.length === PER_DAY;
      }).length;
    },

    /*
      Arka plan çetelesi için geçerli 30 günlük sayfa.
      page 0 = 1-30. günler, page 1 = 31-60. günler…
      days: yalnızca bu sayfada işareti olan günler, { day, count, position }.
      position 0-29, sayfa içindeki sabit yer; arayüz bunu ızgaraya yerleştirir.
    */
    tallyPage: function () {
      requireInit();
      var today = Chunkla.today();
      var page = Math.floor((today - 1) / TALLY_PAGE_DAYS);
      var firstDay = page * TALLY_PAGE_DAYS + 1;
      var lastDay = firstDay + TALLY_PAGE_DAYS - 1;
      var days = [];
      for (var d = firstDay; d <= Math.min(lastDay, today); d++) {
        var count = Chunkla.markedCount(d);
        if (count > 0) days.push({ day: d, count: count, position: d - firstDay });
      }
      return { page: page, firstDay: firstDay, lastDay: lastDay, days: days };
    },

    /*
      Seri ekranındaki haftalık şerit: tüm zamanlarda tamamlanan ("Deftere yazdım")
      günlerin haftanın günlerine dağılımı. [Pt, Sa, Ça, Pe, Cu, Ct, Pz]
    */
    completedByWeekday: function () {
      requireInit();
      var counts = [0, 0, 0, 0, 0, 0, 0];
      Object.keys(state.days).forEach(function (k) {
        if (state.days[k].doneAt) counts[weekdayIndex(state.days[k].doneAt)]++;
      });
      return counts;
    },

    /* Bugünün haftadaki yeri, Pazartesi = 0. */
    todayWeekday: function (now) { return weekdayIndex(toDateKey(nowOr(now))); },

    /* ——— Tanıtım ——— */

    isIntroDone: function () { requireInit(); return !!state.introDone; },

    markIntroDone: function () {
      requireInit();
      state.introDone = true;
      return persist();
    },

    /* ——— Geri alma ve sıfırlama ——— */

    /* "Bu günü geri al" gösterilsin mi: yalnızca içinde bulunulan gün, üstünde bir iz varsa. */
    canUndoDay: function (day) {
      requireInit();
      if (day !== state.day) return false;
      var entry = dayEntry(day, false);
      return !!(entry && (entry.marked.length > 0 || entry.doneAt || entry.reviewedAt));
    },

    /* İçinde bulunulan günün işaretlerini, tamamlanma ve tekrar kaydını siler. Gün numarası aynı kalır. */
    undoDay: function (day) {
      requireInit();
      if (day !== state.day) throw new Error('Yalnızca içinde bulunulan gün geri alınabilir.');
      delete state.days[String(day)];
      return persist();
    },

    /*
      "Baştan başla": 1. güne döner; seri, çetele ve defter sıfırlanır.
      Eski veri silinmeden önce yedek anahtara yazılır (kural 10). Tanıtım yeniden gösterilmez.
    */
    resetAll: function (now) {
      requireInit();
      var today = toDateKey(nowOr(now));
      var old = JSON.stringify(state);
      state = {
        version: VERSION, day: 1, startDate: today, lastVisit: today,
        streak: 1, introDone: true, days: {}
      };
      writeQueue = writeQueue.then(function () { return writeRaw(BACKUP_RESET_KEY, old); });
      return persist();
    },

    /* Yalnızca geliştirme için. */
    _reset: function () {
      state = null;
      testNow = null;
      return removeRaw(STORAGE_KEY);
    },

    _state: function () { return state ? JSON.parse(JSON.stringify(state)) : null; },

    _util: { toDateKey: toDateKey, daysBetween: daysBetween, addDays: addDays, weekdayIndex: weekdayIndex }
  };

  global.Chunkla = Chunkla;
})(typeof window !== 'undefined' ? window : globalThis);
