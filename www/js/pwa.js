/*
  pwa.js — service worker kaydı, sessiz güncelleme ve "uygulama olarak yükle" yardımcıları.
  Arayüzden bağımsızdır; DOM'a dokunmaz. Dışarı açtığı tek şey: window.ChunklaPWA

  Yerelde (localhost) service worker kapalıdır, böylece yaptığın değişiklik anında görünür.
  Yerelde internetsiz çalışmayı denemek için adrese ?sw ekle: http://localhost:8080/?sw

  Kullanım (arayüzde):
    ChunklaPWA.isStandalone()     → ana ekrandan uygulama olarak mı açıldı
    ChunklaPWA.platform()         → 'ios' | 'android' | 'other'
    ChunklaPWA.canPrompt()        → tarayıcı yükleme penceresi gösterebilir mi (Android Chrome)
    ChunklaPWA.promptInstall()    → Promise<'accepted' | 'dismissed' | 'unavailable'>
    ChunklaPWA.onChange(fn)       → yüklenebilirlik değişince fn çağrılır
*/

(function (global) {
  'use strict';

  var nav = global.navigator;
  var listeners = [];
  var deferredPrompt = null;

  function emit() {
    listeners.forEach(function (fn) { try { fn(); } catch (e) { /* yok say */ } });
  }

  /* ——— Service worker ——— */

  var isLocal = /^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(global.location.hostname);
  var forceSW = /[?&]sw(\b|=)/.test(global.location.search);

  function whenHidden(fn) {
    function handler() {
      if (global.document.visibilityState === 'hidden') {
        global.document.removeEventListener('visibilitychange', handler);
        fn();
      }
    }
    global.document.addEventListener('visibilitychange', handler);
  }

  if ('serviceWorker' in nav) {
    if (isLocal && !forceSW) {
      nav.serviceWorker.getRegistrations().then(function (regs) {
        regs.forEach(function (r) { r.unregister(); });
      });
      if (global.caches) {
        global.caches.keys().then(function (keys) {
          keys.filter(function (k) { return k.indexOf('chunkla-') === 0; })
            .forEach(function (k) { global.caches.delete(k); });
        });
      }
    } else {
      var hadController = !!nav.serviceWorker.controller;
      var reloading = false;

      // Yeni sürüm devreye girdiğinde: kullanıcı uygulamadayken sayfayı yenileme, çıkınca yenile.
      nav.serviceWorker.addEventListener('controllerchange', function () {
        if (!hadController || reloading) return;
        var reload = function () { reloading = true; global.location.reload(); };
        if (global.document.visibilityState === 'hidden') reload(); else whenHidden(reload);
      });

      global.addEventListener('load', function () {
        nav.serviceWorker.register('sw.js').then(function (reg) {
          function activateLater(worker) {
            whenHidden(function () { worker.postMessage('SKIP_WAITING'); });
          }
          if (reg.waiting && nav.serviceWorker.controller) activateLater(reg.waiting);
          reg.addEventListener('updatefound', function () {
            var worker = reg.installing;
            if (!worker) return;
            worker.addEventListener('statechange', function () {
              if (worker.state === 'installed' && nav.serviceWorker.controller) activateLater(worker);
            });
          });
          // Uygulamaya her dönüşte yeni sürüm var mı diye bak.
          global.document.addEventListener('visibilitychange', function () {
            if (global.document.visibilityState === 'visible') reg.update().catch(function () {});
          });
        }).catch(function () { /* SW kurulamadı; uygulama yine çevrimiçi çalışır */ });
      });
    }
  }

  /* ——— Yükleme ——— */

  global.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    emit();
  });

  global.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    emit();
  });

  var ChunklaPWA = {
    isStandalone: function () {
      return (global.matchMedia && global.matchMedia('(display-mode: standalone)').matches) ||
        nav.standalone === true;
    },

    platform: function () {
      var ua = nav.userAgent || '';
      var iPadOS = nav.platform === 'MacIntel' && nav.maxTouchPoints > 1;
      if (/iPad|iPhone|iPod/.test(ua) || iPadOS) return 'ios';
      if (/Android/.test(ua)) return 'android';
      return 'other';
    },

    canPrompt: function () { return !!deferredPrompt; },

    promptInstall: function () {
      if (!deferredPrompt) return Promise.resolve('unavailable');
      var p = deferredPrompt;
      deferredPrompt = null;
      p.prompt();
      return p.userChoice.then(function (choice) {
        emit();
        return choice && choice.outcome === 'accepted' ? 'accepted' : 'dismissed';
      });
    },

    onChange: function (fn) { listeners.push(fn); }
  };

  global.ChunklaPWA = ChunklaPWA;
})(window);
