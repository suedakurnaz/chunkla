/*
  chunkla service worker — uygulamanın internetsiz çalışmasını sağlar.

  VERSION elle değiştirilmez. GitHub Actions yayın sırasında 'dev' yerine commit
  kimliğini yazar; böylece her yayın yeni bir önbellek olarak kurulur.

  ASSETS listesi www/ içindeki dosyalarla birebir aynı olmalı.
  Dosya ekleyip sildiğinde: npm run sw:liste   (listeyi kendisi yeniden yazar)
  Kontrol:                   npm run check

  Güncelleme akışı (js/pwa.js ile birlikte):
  1. Yeni sürüm arka planda indirilir ve bekler; açık oturum bozulmaz.
  2. Kullanıcı uygulamadan çıkınca (sayfa gizlenince) yeni sürüm devreye girer.
  3. Uygulamaya döndüğünde yeni sürüm açılır.
*/

const VERSION = 'dev';
const CACHE = 'chunkla-' + VERSION;

// sw:liste başlangıç
const ASSETS = [
  './',
  'assets/chunkla-logo.png',
  'assets/chunkla-mark.png',
  'chunks.js',
  'fonts/files/caveat-latin-500-normal.woff2',
  'fonts/files/caveat-latin-600-normal.woff2',
  'fonts/files/caveat-latin-700-normal.woff2',
  'fonts/files/caveat-latin-ext-500-normal.woff2',
  'fonts/files/caveat-latin-ext-600-normal.woff2',
  'fonts/files/caveat-latin-ext-700-normal.woff2',
  'fonts/files/newsreader-latin-300-italic.woff2',
  'fonts/files/newsreader-latin-400-italic.woff2',
  'fonts/files/newsreader-latin-ext-300-italic.woff2',
  'fonts/files/newsreader-latin-ext-400-italic.woff2',
  'fonts/files/plus-jakarta-sans-latin-400-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-500-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-600-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-700-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-ext-400-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-ext-500-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-ext-600-normal.woff2',
  'fonts/files/plus-jakarta-sans-latin-ext-700-normal.woff2',
  'fonts/fonts.css',
  'icons/apple-touch-icon.png',
  'icons/favicon-48.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-192.png',
  'icons/icon-maskable-512.png',
  'index.html',
  'js/app.js',
  'js/core.js',
  'js/pwa.js',
  'manifest.webmanifest',
  'privacy.html',
  'styles.css',
];
// sw:liste bitiş

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(ASSETS.map((url) => new Request(url, { cache: 'reload' })))
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith('chunkla-') && k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Önce önbellek, yoksa ağ. Ağ da yoksa ve bu bir sayfa isteğiyse uygulama kabuğu.
  event.respondWith(
    caches.match(req, { cacheName: CACHE, ignoreSearch: true })
      .then((hit) => hit || fetch(req))
      .catch(() => (req.mode === 'navigate'
        ? caches.match('./', { cacheName: CACHE })
        : Response.error()))
  );
});
