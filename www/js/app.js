/*
  app.js — chunkla arayüzü.
  Tüm veri ve kurallar core.js'ten (window.Chunkla) gelir; bu dosya yalnızca gösterir ve dinler.
  Tasarım kaynağı: docs/tasarim/Chunk Defteri.dc.html
*/

(function () {
  'use strict';

  const C = window.Chunkla;
  const $ = (id) => document.getElementById(id);
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reduced = () => motion.matches;

  /* ——— Sabit metinler ——— */

  const INTRO = [
    { t: 'Günde beş kalıp', b: 'Her gün sıradaki beş İngilizce kalıp seni bekler. Sınav yok, puan yok; işin sadece okumak.' },
    { t: 'Kaydırarak gez', b: 'Kalıplar arasında sağa sola kaydırarak geçersin. Ortada İngilizcesi, hemen altında Türkçesi durur.' },
    { t: 'Detayı yukarı çek', b: 'Yukarı kaydırınca kullanım notu ve üç örnek cümle açılır. Örnekler, deftere yazmak için en okunaklı katmandır.' },
    { t: 'Okudun mu, ekrana çak', b: 'Deftere geçirdiğin her kalıp için ekrana dokun; sayfaya kalemle çizilmiş gibi bir çetele çizgisi düşer.' },
    { t: 'Beş çizgi bir gün', b: 'Çizgiler beşe ulaşınca üzerine çapraz gelir: o gün tamam. Çaktığın bütün kalıplar defterde birikir.' }
  ];
  const INTRO_STROKES = [
    'M14 8 Q11 55 13 96',
    'M31 6 Q34 52 30 95',
    'M48 9 Q45 54 47 97',
    'M64 7 Q68 53 63 96',
    'M2 78 Q46 54 90 32'
  ];
  const WEEKDAYS = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'];

  /* ——— Arayüz durumu (kalıcı olmayan) ——— */

  const ui = {
    today: 1,
    viewDay: 1,        // açık olan gün
    idx: 0,            // destedeki kart (rows.length = gün sonu kartı)
    deck: null,        // null = günün destesi | { id, type: 'group' | 'week', label, rows, day, week }
    sheet: false,
    sheetDrag: 0,
    defter: false,
    defterTab: 'groups',
    openGroup: null,   // null = açık olan günün grubu
    splash: false,
    intro: null,       // null | 0..4
    gate: false,
    dragX: 0,
    dragging: false,
    axis: null,
    justDrawn: null,   // bu çizimde animasyon oynatılacak gün
    undraw: false
  };
  let deckSeq = 0;

  /* ——— Yardımcılar ——— */

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  // Prototipteki sabit rastgele: aynı gün her açılışta aynı çizgiyi üretir.
  const rnd = (n) => { const x = Math.sin((n + 1) * 127.13) * 43758.5453; return x - Math.floor(x); };

  function tallyPaths(day, count) {
    const n = Math.min(5, count);
    const out = [];
    for (let k = 0; k < Math.min(4, n); k++) {
      const x = 12 + k * 17 + rnd(day * 13 + k) * 4;
      const y0 = 7 + rnd(day * 13 + k + 2) * 6;
      const y1 = 97 - rnd(day * 13 + k + 4) * 7;
      const bow = rnd(day * 13 + k + 6) * 9 - 4.5;
      out.push(`M${x.toFixed(1)} ${y0.toFixed(1)} Q${(x + bow).toFixed(1)} ${((y0 + y1) / 2).toFixed(1)} ${(x + bow * 0.4).toFixed(1)} ${y1.toFixed(1)}`);
    }
    if (n === 5) {
      const a = 74 + rnd(day + 31) * 6, b = 52 + rnd(day + 37) * 6, c = 30 + rnd(day + 41) * 6;
      out.push(`M2 ${a.toFixed(1)} Q46 ${b.toFixed(1)} 90 ${c.toFixed(1)}`);
    }
    return out;
  }

  function weekPaths(count) {
    const out = [];
    for (let k = 0; k < Math.min(4, count); k++) {
      const x = 5 + k * 8;
      out.push(`M${x + 2} 5 Q${x - 1} 22 ${x + 1} 39`);
    }
    if (count >= 5) out.push('M2 33 Q17 22 32 11');
    return out;
  }

  const rows = () => (ui.deck ? ui.deck.rows : C.chunksForDay(ui.viewDay));
  const atEnd = () => ui.idx >= rows().length;
  const current = () => { const r = rows(); return r[Math.min(ui.idx, r.length - 1)]; };
  const isWeekDeck = () => !!(ui.deck && ui.deck.type === 'week');
  const anyLayer = () => ui.sheet || ui.defter || ui.splash || ui.intro !== null || ui.gate;

  function announce(text) {
    const live = $('live');
    live.textContent = '';
    requestAnimationFrame(() => { live.textContent = text; });
  }

  // Odak yalnızca klavyeyle gezinen kullanıcı için taşınır; dokunmatikte çerçeve görünmesin.
  let keyboardUser = false;
  document.addEventListener('keydown', () => { keyboardUser = true; }, true);
  document.addEventListener('pointerdown', () => { keyboardUser = false; }, true);

  function focusSoon(id) {
    if (!keyboardUser) return;
    requestAnimationFrame(() => { const el = $(id); if (el) el.focus({ preventScroll: true }); });
  }

  /* ——— Geri tuşu: katmanlar tarayıcı geçmişine yazılır ——— */

  const stack = [];
  let afterPop = null;

  function pushLayer(name) {
    stack.push(name);
    history.pushState({ chunkla: stack.length }, '');
  }

  function closeLayer(name) {
    if (name === 'sheet') { ui.sheet = false; ui.sheetDrag = 0; }
    else if (name === 'defter') ui.defter = false;
    else if (name === 'splash') ui.splash = false;
    else if (name === 'intro') ui.intro = Math.max(0, (ui.intro || 0) - 1);
  }

  // Arayüzden kapatma: geçmiş yığını kaymasın diye history.back() ile.
  function closeTop(name, then) {
    if (stack.length && stack[stack.length - 1] === name) {
      afterPop = then || null;
      history.back();
      return;
    }
    const i = stack.lastIndexOf(name);
    if (i >= 0) stack.splice(i, 1);
    closeLayer(name);
    if (then) then();
    render();
  }

  window.addEventListener('popstate', (e) => {
    const depth = (e.state && e.state.chunkla) || 0;
    while (stack.length > depth) closeLayer(stack.pop());
    const fn = afterPop;
    afterPop = null;
    if (fn) fn();
    render();
    if (!anyLayer()) focusSoon('deck');
  });

  /* ——— Eylemler ——— */

  function go(n) {
    ui.idx = Math.max(0, Math.min(rows().length, n));
    ui.dragX = 0;
    if (isWeekDeck() && atEnd() && !C.isWeekReviewed(ui.deck.day)) C.markWeekReviewed(ui.deck.day);
    render();
  }

  let flashTimer = 0;
  let undrawTimer = 0;

  function toggleMark() {
    if (atEnd() || isWeekDeck() || anyLayer()) return;
    const row = current();
    if (row.day > C.today()) return;

    if (C.isMarked(row.day, row.slot)) {
      C.toggleMark(row.day, row.slot);
      ui.undraw = true;
      clearTimeout(undrawTimer);
      undrawTimer = setTimeout(() => { ui.undraw = false; render(); }, 380);
      announce(`${row.item.chunk}: çizgi silindi`);
      render();
      return;
    }

    const commit = () => {
      C.toggleMark(row.day, row.slot);
      ui.justDrawn = row.day;
      announce(`${row.item.chunk}: çeteleye işlendi`);
      render();
    };

    if (reduced()) { commit(); return; }

    const flash = $('flash');
    clearTimeout(flashTimer);
    flash.classList.remove('fade');
    flash.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      flash.classList.add('fade');
      commit();
    }));
    flashTimer = setTimeout(() => { flash.hidden = true; flash.classList.remove('fade'); }, 520);
  }

  function openSheet() {
    if (atEnd() || ui.sheet) return;
    ui.sheet = true;
    pushLayer('sheet');
    render();
    focusSoon('sheet-close');
  }

  function openDefter() {
    if (ui.defter) return;
    ui.defter = true;
    ui.openGroup = null;
    pushLayer('defter');
    render();
    focusSoon('defter-close');
  }

  function openSplash() {
    if (ui.splash) return;
    ui.splash = true;
    pushLayer('splash');
    render();
    focusSoon('splash-close');
  }

  function openDayFromDefter(day) {
    closeTop('defter', () => {
      ui.deck = null;
      ui.viewDay = day;
      ui.idx = 0;
    });
  }

  function openGroupFromDefter(day, at) {
    const group = C.notebookByDay().find((g) => g.day === day);
    if (!group) return;
    closeTop('defter', () => {
      ui.deck = { id: ++deckSeq, type: 'group', label: `Grup ${day}`, rows: group.items, day };
      ui.idx = Math.min(at, group.items.length - 1);
    });
  }

  function finishState() {
    const d = ui.viewDay;
    if (isWeekDeck()) {
      return {
        eyebrow: `${ui.deck.week}. hafta · tekrar`,
        title: 'Hafta tekrarı bitti.',
        note: 'Haftanın kalıplarını baştan geçtin. Şimdi günü kapatabilirsin.',
        button: 'Deftere yazdım',
        action() {
          const day = ui.deck.day;
          if (!C.isWeekReviewed(day)) C.markWeekReviewed(day);
          C.markDayDone(day);
          ui.deck = null;
          ui.viewDay = day;
          ui.idx = 0;
          openDefter();
        }
      };
    }
    if (ui.deck) {
      return {
        eyebrow: ui.deck.label,
        title: `${ui.deck.label} bitti.`,
        note: 'Defterden başka bir bölüme geçebilirsin.',
        button: 'Deftere dön',
        action() { ui.deck = null; ui.idx = 0; openDefter(); }
      };
    }
    const eyebrow = `Gün ${d} · beş ifade`;
    const done = C.isDayDone(d);
    if (C.isReviewDay(d) && !done && !C.isWeekReviewed(d)) {
      const week = C.weekNumber(d);
      const items = C.weekReviewItems(d);
      return {
        eyebrow,
        title: `Hafta doldu: ${week}.\u00a0hafta.`,
        note: `Bu haftanın ${items.length} kalıbını hızlıca baştan geç. Tekrar bitmeden gün kapanmaz.`,
        button: 'Haftayı tekrar et',
        action() {
          ui.deck = { id: ++deckSeq, type: 'week', label: `${week}. hafta tekrarı`, rows: items, day: d, week };
          ui.idx = 0;
          render();
          focusSoon('deck');
        }
      };
    }
    if (done) {
      return {
        eyebrow,
        title: 'Deftere yazıldı.',
        note: 'Yarın sıradaki kalıplar hazır olacak. İstersen geçmiş günlere dönebilirsin.',
        button: 'Defteri aç',
        action: openDefter
      };
    }
    return {
      eyebrow,
      title: 'Hepsi okundu.',
      note: 'Hepsini deftere geçirdiysen günü kapat.',
      button: 'Deftere yazdım',
      action() { C.markDayDone(d); openDefter(); }
    };
  }

  function nextIntro() {
    const n = (ui.intro || 0) + 1;
    if (n < INTRO.length) {
      ui.intro = n;
      pushLayer('intro');
      render();
      return;
    }
    const steps = stack.filter((x) => x === 'intro').length;
    const finish = () => { ui.intro = null; ui.gate = true; };
    C.markIntroDone();
    if (steps > 0) {
      afterPop = finish;
      history.go(-steps);
    } else {
      finish();
      render();
    }
    focusSoon('gate-start');
  }

  /* ——— Çizim ——— */

  let tallyKey = '';
  function renderTally() {
    const el = $('tally');
    el.classList.toggle('undraw', ui.undraw);
    const page = C.tallyPage();
    const today = C.today();
    const key = page.page + '|' + today + '|' + page.days.map((d) => d.day + ':' + d.count).join(',');
    if (key === tallyKey && ui.justDrawn === null) return;
    tallyKey = key;

    el.innerHTML = page.days.map(({ day, count, position }) => {
      const col = position % 5;
      const row = Math.floor(position / 5);
      const left = (col + 0.5) * 20 + (rnd(day * 5 + 1) * 6 - 3);
      const top = (row + 0.5) * (100 / 6) + (rnd(day * 5 + 3) * 4 - 2);
      const rot = rnd(day * 5 + 2) * 16 - 8;
      const paths = tallyPaths(day, count);
      const animate = ui.justDrawn === day && !reduced() ? paths.length - 1 : -1;
      const past = day !== today ? ' past' : '';
      return `<span class="tally-group${past}" style="left:${left.toFixed(1)}%;top:${top.toFixed(1)}%;transform:translate(-50%,-50%) rotate(${rot.toFixed(1)}deg)">` +
        `<svg viewBox="0 0 96 110" width="48" height="55">` +
        paths.map((d, i) => `<path d="${d}"${i === animate ? ' class="draw"' : ''}/>`).join('') +
        `</svg></span>`;
    }).join('');
    ui.justDrawn = null;
  }

  let trackKey = '';
  function renderTrack() {
    const r = rows();
    const key = ui.deck ? 'deck' + ui.deck.id : 'day' + ui.viewDay;
    const track = $('track');

    if (key !== trackKey) {
      trackKey = key;
      track.innerHTML = r.map((row) => (
        `<article class="card" aria-hidden="true">` +
        `<div class="eyebrow">${esc(row.item.group)}</div>` +
        `<h2 class="chunk" lang="en">${esc(row.item.chunk)}</h2>` +
        `<p class="tr">${esc(row.item.tr)}</p>` +
        `</article>`
      )).join('') +
        `<article class="card finish" aria-hidden="true">` +
        `<div class="eyebrow" id="finish-eyebrow"></div>` +
        `<h2 class="finish-title" id="finish-title"></h2>` +
        `<p class="finish-note" id="finish-note"></p>` +
        `<button type="button" class="primary-btn" id="finish-btn"></button>` +
        `</article>`;
    }

    const f = finishState();
    $('finish-eyebrow').textContent = f.eyebrow;
    $('finish-title').textContent = f.title;
    $('finish-note').textContent = f.note;
    $('finish-btn').textContent = f.button;

    // Yalnızca görünen kart ekran okuyucuya açık; gün sonu düğmesi yalnızca oradayken odaklanabilir.
    Array.from(track.children).forEach((card, i) => {
      const visible = i === Math.min(ui.idx, r.length);
      card.setAttribute('aria-hidden', String(!visible));
      card.inert = !visible;
    });

    applyTrack();
  }

  function applyTrack() {
    const track = $('track');
    track.style.transition = ui.dragging || reduced() ? 'none' : '';
    track.style.transform = `translate3d(calc(${-ui.idx * 100}% + ${Math.round(ui.dragX)}px),0,0)`;
  }

  function renderDeckChrome() {
    const r = rows();
    const end = atEnd();
    const row = current();
    const marked = !end && C.isMarked(row.day, row.slot);

    $('ticks').innerHTML = Array.from({ length: r.length + 1 }, (_, i) => {
      const o = i === ui.idx ? 1 : (i < ui.idx ? 0.5 : 0.18);
      return `<span class="tick" style="opacity:${o}"></span>`;
    }).join('');

    const hand = $('hand');
    hand.hidden = end || isWeekDeck();
    hand.style.opacity = marked ? '0.42' : '1';

    $('detail-row').classList.toggle('off', end);
    $('btn-detail').tabIndex = end ? -1 : 0;

    const toggle = $('mark-toggle');
    toggle.hidden = end || isWeekDeck();
    toggle.setAttribute('aria-pressed', String(marked));

    const deck = $('deck');
    deck.setAttribute('aria-label', end
      ? `Gün sonu. ${$('finish-title').textContent}`
      : `${ui.idx + 1} / ${r.length}: ${row.item.chunk}, ${row.item.tr}. ${marked ? 'Çeteleye işlendi.' : 'İşaretlemek için Enter.'}`);
  }

  function applySheet() {
    const sheet = $('sheet');
    sheet.classList.toggle('open', ui.sheet);
    sheet.classList.toggle('dragging', ui.sheetDrag > 0);
    sheet.style.transform = ui.sheet && ui.sheetDrag > 0 ? `translate3d(0,${Math.round(ui.sheetDrag)}px,0)` : '';
    sheet.inert = !ui.sheet;
  }

  let sheetKey = '';
  function renderSheet() {
    if (!ui.sheet) $('sheet-scroll').scrollTop = 0;
    applySheet();
    if (!ui.sheet || atEnd()) return;

    const row = current();
    const key = row.day + ':' + row.slot + ':' + row.index;
    if (key === sheetKey) return;
    sheetKey = key;

    const { item } = row;
    $('sheet-group').textContent = item.group;
    $('sheet-chunk').textContent = item.chunk;
    $('sheet-tr').textContent = item.tr;
    $('sheet-note').textContent = item.note;
    $('sheet-examples').innerHTML = item.examples.map((ex) => (
      `<div><p class="ex-en" lang="en">${esc(ex.en)}</p><p class="ex-tr">${esc(ex.tr)}</p></div>`
    )).join('');
  }

  function renderDefter() {
    $('defter').hidden = !ui.defter;
    if (!ui.defter) return;

    const groups = C.notebookByDay();
    const total = C.totalMarked();
    $('defter-sentence').textContent = total > 0
      ? `${groups.length} gün · ${total} kalıp`
      : 'Henüz işaretlenmiş kalıp yok.';

    const onGroups = ui.defterTab === 'groups';
    $('tab-groups').setAttribute('aria-selected', String(onGroups));
    $('tab-days').setAttribute('aria-selected', String(!onGroups));
    $('defter-groups').hidden = !onGroups;
    $('defter-days').hidden = onGroups;

    if (onGroups) {
      const openDay = ui.openGroup === null ? ui.viewDay : ui.openGroup;
      $('defter-groups').innerHTML = groups.slice().reverse().map((g) => {
        const open = g.day === openDay;
        const icon = `<svg viewBox="0 0 96 110" width="30" height="34" aria-hidden="true">${tallyPaths(g.day, g.count).map((d) => `<path d="${d}"/>`).join('')}</svg>`;
        const list = open
          ? `<div class="section-rows">${g.items.map((it, k) => (
            `<button type="button" class="section-row" data-study="${g.day}" data-at="${k}">` +
            `<span class="row-n">${k + 1}</span>` +
            `<span class="row-text"><span class="row-chunk" lang="en">${esc(it.item.chunk)}</span><span class="row-tr">${esc(it.item.tr)}</span></span>` +
            `</button>`
          )).join('')}</div>`
          : '';
        return `<div class="section">` +
          `<div class="section-head">` +
          `<button type="button" class="section-toggle" data-toggle="${g.day}" aria-expanded="${open}">` +
          icon +
          `<span class="section-title"><span class="section-label">Grup ${g.day}</span><span class="section-count">${g.count} kalıp</span></span>` +
          `<span class="caret" aria-hidden="true">${open ? '–' : '+'}</span>` +
          `</button>` +
          `<button type="button" class="study" data-study="${g.day}" data-at="0">çalış</button>` +
          `</div>${list}</div>`;
      }).join('');
    } else {
      const today = C.today();
      $('defter-days').innerHTML = C.history().map((h) => {
        const done = h.status === 'tamam';
        const status = h.day === today ? (done ? 'bugün · tamam' : 'bugün') : (done ? 'tamam' : 'telafi et');
        const first = C.chunksForDay(h.day)[0].item.chunk;
        return `<button type="button" class="day-row${done ? '' : ' pending'}" data-day="${h.day}">` +
          `<span class="day-n">${h.day}</span>` +
          `<span class="day-first" lang="en">${esc(first)}</span>` +
          `<span class="day-status">${status}</span>` +
          `</button>`;
      }).join('');
    }
  }

  function renderSplash() {
    $('splash').hidden = !ui.splash;
    if (!ui.splash) return;
    $('splash-streak').textContent = C.streak();
    $('splash-jar').textContent = C.totalMarked();
    $('splash-full').textContent = C.fullTallyCount();

    const counts = C.completedByWeekday();
    const todayWd = C.todayWeekday();
    $('splash-week').innerHTML = WEEKDAYS.map((name, i) => {
      const c = counts[i];
      const cls = ['week-day', i === todayWd ? 'today' : '', c ? '' : 'empty'].join(' ').trim();
      return `<span class="${cls}">` +
        `<svg viewBox="0 0 34 44" width="30" height="40" aria-hidden="true">${weekPaths(c).map((d) => `<path d="${d}"/>`).join('')}</svg>` +
        `<span class="week-name">${name}</span>` +
        `</span>`;
    }).join('');
  }

  function renderIntro() {
    $('gate').hidden = !ui.gate;
    $('intro').hidden = ui.intro === null;
    if (ui.intro === null) return;

    const step = ui.intro;
    $('intro-title').textContent = INTRO[step].t;
    $('intro-text').textContent = INTRO[step].b;
    $('intro-back').classList.toggle('off', step === 0);
    $('intro-back').tabIndex = step === 0 ? -1 : 0;
    $('intro-dots').innerHTML = INTRO.map((_, i) => `<span class="dot${i === step ? ' on' : ''}"></span>`).join('');

    const svg = $('intro-strokes');
    if (svg.dataset.step !== String(step)) {
      svg.dataset.step = String(step);
      svg.innerHTML = INTRO_STROKES.slice(0, step + 1)
        .map((d, i) => `<path d="${d}"${i === step && !reduced() ? ' class="draw"' : ''}/>`).join('');
    }
  }

  function render() {
    $('streak-count').textContent = C.streak();
    $('jar-count').textContent = C.totalMarked();
    renderTally();
    renderTrack();
    renderDeckChrome();
    renderSheet();
    renderDefter();
    renderSplash();
    renderIntro();
    $('main').inert = anyLayer();
  }

  /* ——— Olaylar ——— */

  function bindDeck() {
    const deck = $('deck');
    let drag = null;

    deck.addEventListener('pointerdown', (e) => {
      if (ui.sheet || e.button > 0 || e.target.closest('button')) return;
      drag = { x: e.clientX, y: e.clientY, t: Date.now() };
      ui.dragging = true;
      ui.axis = null;
      try { deck.setPointerCapture(e.pointerId); } catch (_) { /* yok say */ }
    });

    deck.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      if (!ui.axis && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) ui.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';

      if (ui.axis === 'x') {
        const len = rows().length;
        const atEdge = (ui.idx === 0 && dx > 0) || (ui.idx === len && dx < 0);
        ui.dragX = atEdge ? 0 : dx;
        applyTrack();
      } else if (ui.axis === 'y' && dy < -60 && !atEnd()) {
        drag = null;
        ui.dragging = false;
        ui.axis = null;
        ui.dragX = 0;
        applyTrack();
        openSheet();
      }
    });

    const end = (cancelled) => {
      if (!drag) return;
      const tap = !cancelled && !ui.axis && Date.now() - drag.t < 500;
      const dx = ui.dragX;
      drag = null;
      ui.dragging = false;
      ui.axis = null;
      ui.dragX = 0;
      if (Math.abs(dx) > 60) go(ui.idx + (dx < 0 ? 1 : -1));
      else applyTrack();
      if (tap) toggleMark();
    };
    deck.addEventListener('pointerup', () => end(false));
    deck.addEventListener('pointercancel', () => end(true));

    $('track').addEventListener('click', (e) => {
      if (e.target.closest('#finish-btn')) finishState().action();
    });
  }

  function bindSheet() {
    const sheet = $('sheet');
    const scroller = $('sheet-scroll');
    let start = null;

    /*
      Panel içeriği en üstteyken dokunma hareketini tarayıcıya bırakmıyoruz (touch-action: none):
      aşağı çekme paneli kapatır, yukarı çekme içeriği elle kaydırır. İçerik bir kez kaydırılınca
      sonraki hareketler yeniden tarayıcının doğal (momentumlu) kaydırmasına geçer.
    */
    const syncTouchAction = () => { scroller.style.touchAction = scroller.scrollTop <= 0 ? 'none' : 'pan-y'; };
    scroller.addEventListener('scroll', syncTouchAction, { passive: true });
    syncTouchAction();

    sheet.addEventListener('touchstart', (e) => {
      if (!ui.sheet || e.target.closest('button')) return;
      start = { y: e.touches[0].clientY, top: scroller.scrollTop, manual: scroller.scrollTop <= 0 };
    }, { passive: true });

    sheet.addEventListener('touchmove', (e) => {
      if (!start) return;
      const dy = e.touches[0].clientY - start.y;
      if (start.manual && ui.sheetDrag === 0 && dy < 0 && scroller.contains(e.target)) {
        e.preventDefault();
        scroller.scrollTop = -dy;
        return;
      }
      if (dy > 0 && start.top <= 0 && scroller.scrollTop <= 0) {
        e.preventDefault();
        ui.sheetDrag = dy;
        applySheet();
      }
    }, { passive: false });

    const end = () => {
      if (!start) return;
      start = null;
      syncTouchAction();
      if (ui.sheetDrag > 90) {
        closeTop('sheet');
      } else {
        ui.sheetDrag = 0;
        applySheet();
      }
    };
    sheet.addEventListener('touchend', end);
    sheet.addEventListener('touchcancel', end);

    $('sheet-close').addEventListener('click', () => closeTop('sheet'));
  }

  function bindLayers() {
    $('btn-streak').addEventListener('click', openSplash);
    $('btn-defter').addEventListener('click', openDefter);
    $('btn-detail').addEventListener('click', openSheet);
    $('mark-toggle').addEventListener('click', toggleMark);

    $('defter-close').addEventListener('click', () => closeTop('defter'));
    $('tab-groups').addEventListener('click', () => { ui.defterTab = 'groups'; render(); });
    $('tab-days').addEventListener('click', () => { ui.defterTab = 'days'; render(); });

    $('defter').addEventListener('click', (e) => {
      const toggle = e.target.closest('[data-toggle]');
      if (toggle) {
        const day = Number(toggle.dataset.toggle);
        const openDay = ui.openGroup === null ? ui.viewDay : ui.openGroup;
        ui.openGroup = openDay === day ? -1 : day;
        render();
        return;
      }
      const study = e.target.closest('[data-study]');
      if (study) { openGroupFromDefter(Number(study.dataset.study), Number(study.dataset.at)); return; }
      const dayRow = e.target.closest('[data-day]');
      if (dayRow) openDayFromDefter(Number(dayRow.dataset.day));
    });

    $('splash-close').addEventListener('click', () => closeTop('splash'));

    $('intro-next').addEventListener('click', nextIntro);
    $('intro-back').addEventListener('click', () => { if (ui.intro > 0) closeTop('intro'); });
    $('gate-start').addEventListener('click', () => {
      ui.gate = false;
      ui.idx = 0;
      render();
      focusSoon('deck');
    });
  }

  function bindKeys() {
    document.addEventListener('keydown', (e) => {
      if (ui.intro !== null || ui.gate) return;
      if (ui.splash || ui.defter) {
        if (e.key === 'Escape') closeTop(ui.splash ? 'splash' : 'defter');
        return;
      }
      if (ui.sheet) {
        if (e.key === 'Escape' || e.key === 'ArrowDown') { e.preventDefault(); closeTop('sheet'); }
        return;
      }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(ui.idx + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(ui.idx - 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); openSheet(); }
      else if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === $('deck')) {
        e.preventDefault();
        toggleMark();
      }
    });
  }

  // Uygulama gece yarısını geçerek açık kaldıysa, geri dönüldüğünde yeni günü getir.
  function bindDayChange() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'visible') return;
      C.init().then((r) => {
        if (r.today === ui.today) { render(); return; }
        const wasOnToday = !ui.deck && ui.viewDay === ui.today;
        ui.today = r.today;
        if (wasOnToday) { ui.viewDay = r.today; ui.idx = 0; }
        if (r.firstVisitToday && ui.intro === null && !ui.gate && !ui.splash) openSplash();
        else render();
      });
    });
  }

  /* ——— Başlat ——— */

  // Sayfa önceki oturumdan kalma bir katman kaydıyla yenilendiyse sıfırla.
  if (history.state && history.state.chunkla) history.replaceState(null, '');

  bindDeck();
  bindSheet();
  bindLayers();
  bindKeys();
  bindDayChange();

  C.init().then((r) => {
    ui.today = r.today;
    ui.viewDay = r.today;
    if (!C.isIntroDone()) {
      ui.intro = 0;
      render();
      focusSoon('intro-next');
    } else if (r.firstVisitToday) {
      render();
      openSplash();
    } else {
      render();
    }
  });
})();
