# CLAUDE.md — chunkla

Bu dosyayı her oturumun başında oku. Kararların gerekçeleri `docs/KARARLAR.md` içinde;
bu dosya ile çelişen eski bir belge görürsen bu dosya ve KARARLAR.md geçerlidir.

## Ürün

Türkçe konuşan kullanıcı için günde **5** İngilizce kalıp ifade (chunk) gösteren uygulama.
Kullanıcı ifadeleri **kağıt deftere elle yazıyor**; ekranın işi okunmak ve kopyalanmak.

Ayrıntılı ürün tanımı: `docs/PRD-v1.md` (günlük sayı ayarı hariç, o madde iptal).
Arayüz: `docs/tasarim/Chunk Defteri.dc.html` referans, **uygulama yolu `docs/TASARIM-ENTEGRASYON.md`**.
Arayüzle ilgili her işten önce TASARIM-ENTEGRASYON.md'yi oku.
Eski teknik geçmiş: `docs/DEVAM-eski.md` (TWA kısmı geçersiz).

## Dağıtım

Mağaza yok. **Kurulabilir web uygulaması (PWA)**, GitHub Pages'te yayınlanır:
`https://suedakurnaz.github.io/chunkla/`. Aynı adres tarayıcıda açılır ve telefona uygulama
olarak yüklenir. Repo herkese açık; kod ve README vitrin niteliğinde, özenli tutulur.

## Teknik yapı

- Saf HTML + CSS + JavaScript. Çerçeve yok, bundler yok, derleme adımı yok, **npm bağımlılığı yok**.
- `www/` klasörü sitenin kendisidir. GitHub Actions `www/`'yu olduğu gibi yayınlar; tek
  müdahalesi `sw.js` içindeki `VERSION` değerine commit kimliğini yazmaktır.
- Site alt yolda yayınlandığı için **tüm yollar göreli** (`icons/…`, `./`). `/` ile başlayan yol yazma.

```
www/index.html            tüm ekranların iskeleti (Claude Design tasarımından)
www/styles.css            görünüm
www/chunks.js             374 ifadelik veri, const CHUNKS
www/js/core.js            gün, seri, işaret, tekrar, çetele, depolama — window.Chunkla, DOM'a dokunmaz
www/js/pwa.js             service worker kaydı, sessiz güncelleme, yükleme — window.ChunklaPWA
www/js/app.js             arayüz: deste, çetele, Detay, Defter, Seri, tanıtım, geri tuşu
www/sw.js                 internetsiz çalışma; ASSETS listesi otomatik üretilir
www/manifest.webmanifest  uygulama adı, renkler, ikonlar
www/icons/                PWA ikonları (assets/icon.svg'den üretildi)
www/fonts/                Plus Jakarta Sans, Newsreader italik, Caveat — yerel woff2 + fonts.css
www/assets/               chunkla-logo.png, chunkla-mark.png
www/privacy.html          gizlilik politikası TR + EN
scripts/                  validate-chunks.js, test-core.js, check-sw.js, add-practice.js, chunks-kilit.json
assets/                   ikon kaynağı (icon.svg, ikon-uret.py), yüksek çözünürlüklü logo
docs/                     PRD, kararlar, entegrasyon belgesi, promptlar, paylaşım listesi
docs/tasarim/             Claude Design dışa aktarımı — YALNIZCA REFERANS, www/'e kopyalanmaz
.github/workflows/        yayin.yml — kontrol + GitHub Pages yayını
```

Yükleme sırası: `fonts/fonts.css`, `styles.css`, `chunks.js`, `js/core.js`, `js/pwa.js`, `js/app.js`.

## Komutlar

```
npm run check      # veri + çekirdek testleri + sw.js önbellek listesi — her değişiklikten sonra
                   # (çeviri alıştırmalarını da denetler; uyarı çıkarsa gözden geçir, hata değil)
npm run serve      # http://localhost:8080 (yerelde service worker kapalı, değişiklik anında görünür)
                   # internetsiz davranışı yerelde denemek için: http://localhost:8080/?sw
npm run sw:liste   # www/'e dosya ekleyip sildikten sonra sw.js ASSETS listesini yeniden yazar
```

Telefonda denemek için yerel ağ yetmez (service worker HTTPS ister). `main`'e push et,
Actions yayınlasın, telefondan Pages adresini aç.

## Bozulmaması gereken kurallar

1. **Veri formatı birebir korunur.** Her madde: `group` (TR), `chunk` (EN), `tr` (TR),
   `note` (TR, tek cümle), `examples` (tam 3 adet `{ en, tr }`) ve `practice` (tam 3 adet
   `{ tr, en }` çeviri alıştırması). Başka alan eklenmez.
   `practice[i].tr` her zaman görünür; `practice[i].en` cümleye dokununca açılır (cevap).
   Doğrulayıcı `en` üzerinden "bu Türkçe cümle gerçekten bu kalıbı gerektiriyor mu" denetimini
   yapar, bu yüzden `en` boş bırakılamaz.
2. **Sıra değişmez, ekleme sona yapılır.** İşaretler gün+slot olarak saklandığı için araya
   madde sokmak kullanıcıların geçmişini bozar. `scripts/chunks-kilit.json` bunu denetler.
   Kilidi yalnızca kullanıcı onayıyla güncelle: `npm run validate -- --kilitle`.
3. **Tekrar yok.** Yeni ifade eklemeden önce `npm run validate`.
4. **Notlar tuzak odaklı.** Sözlük tanımı değil; `on time`/`in time`, `apply for`/`apply to`,
   make/do seçimi, `look forward to` + `-ing` gibi Türk öğrencinin düştüğü hatayı söyler.
5. **Örnek cümleler kısa.** Elle yazılacaklar. Çeviri alıştırmaları da en fazla 9 kelime,
   mevcut örneklerden farklı ve üçü ayrı zaman/kipte olur (olumsuz, soru, geçmiş).
   Toplu eklemek için: `node scripts/add-practice.js parti.json`.
6. **Arayüz metinleri Türkçe, içerik İngilizce.**
7. **Kapsam dışı, eklenmez:** ses, telaffuz, bildirim, hatırlatma, test, quiz, puan, rozet,
   seviye, hesap, sunucu, senkronizasyon, sosyal özellik, analitik, reklam, çerez.
8. **Dış ağ isteği yok.** Harici font, CDN, API, analitik dahil. Uygulama yalnızca kendi
   dosyalarını kendi adresinden yükler. Fontlar `www/fonts/` altında.
9. **Günlük sayı sabit 5.** Ayar ekranı yapılmaz.
10. **Depolama yalnızca `core.js` üzerinden.** Arayüz kodu localStorage'a doğrudan yazmaz.
    Anahtar: `chunkla.progress.v1`. Şema değişecekse `version` artırılır ve eski veriyi taşıyan
    kod yazılır; veri asla sessizce silinmez. Yayında gerçek kullanıcı verisi var.
11. **`sw.js` içindeki `VERSION = 'dev'` satırı elle değiştirilmez**, biçimi de değişmez
    (Actions bu satırı arar). `www/`'de dosya ekleyip silince `npm run sw:liste`.
12. **Göreli yollar.** Bkz. Teknik yapı.

## core.js API özeti

```
await Chunkla.init()                → { firstVisitToday, today, streak }   // açılışta bir kez
Chunkla.today() / streak() / totalMarked() / fullTallyCount()
Chunkla.chunksForDay(day)           → [{ day, slot, index, item, marked }] × 5
Chunkla.toggleMark(day, slot)       → yeni işaret durumu
Chunkla.markedCount(day) / isMarked(day, slot) / isDayMarkedFull(day)
await Chunkla.markDayDone(day)      // "Deftere yazdım" — tekrar gününde önce markWeekReviewed
Chunkla.isDayDone(day) / dayStatus(day) → 'bugun' | 'tamam' | 'telafi'
Chunkla.history()                   → bugünden geriye günler (Defter → Günler)
Chunkla.notebookByDay()             → [{ day, count, full, items }] (Defter → Çetele grupları)
Chunkla.isReviewDay(day) / weekNumber(day) / weekReviewItems(day)
await Chunkla.markWeekReviewed(day) / isWeekReviewed(day)
Chunkla.tallyPage()                 → { page, firstDay, lastDay, days: [{ day, count, position }] }
Chunkla.completedByWeekday()        → [Pt..Pz] / todayWeekday() / dateOfDay(day)
Chunkla.isIntroDone() / await markIntroDone()
```

`core.js`'de davranış değişikliği yaparsan `scripts/test-core.js`'e test ekle.

## pwa.js API özeti

```
ChunklaPWA.isStandalone()   → ana ekrandan uygulama olarak mı açıldı
ChunklaPWA.platform()       → 'ios' | 'android' | 'other'
ChunklaPWA.canPrompt()      → tarayıcı yükleme penceresi gösterebilir mi
await ChunklaPWA.promptInstall() → 'accepted' | 'dismissed' | 'unavailable'
ChunklaPWA.onChange(fn)
```

## Platform notları

- **Geri tuşu (Android):** açılan her katman (Detay, Defter, Seri, tanıtım adımı) için
  `history.pushState`; `popstate` en üstteki katmanı kapatır. Arayüzden kapatınca `history.back()`.
- **Güvenli alan:** `viewport-fit=cover` + `black-translucent` durum çubuğu nedeniyle içerik
  çentik ve durum çubuğunun altına uzanır. `env(safe-area-inset-*)` ile boşluk bırak.
- **iOS:** yükleme penceresi yoktur; kullanıcı Safari → Paylaş → Ana Ekrana Ekle yapar.
- **Hareket azaltma:** `prefers-reduced-motion` açıksa geçiş ve çizim animasyonları kapanır.
- Dokunma hedefleri en az 44 px; klavye odağı her zaman görünür.

## Çalışma biçimi

- Değişiklikten önce ne yapacağını kısaca söyle. Veri formatını, depolama şemasını,
  `sw.js` güncelleme akışını veya yukarıdaki kuralları etkileyen işlerde önce onay iste.
- `.github/workflows/` altındaki dosyalara onaysız dokunma.
- Commit mesajları Türkçe, kısa ve ne yapıldığını söyleyen biçimde.
- İş bitince `npm run check` çıktısını raporla.

## Durum

- [x] Klasör birleştirildi; `core.js`, testler, fontlar, tasarım görselleri hazır
- [x] PWA altyapısı: manifest, ikonlar, `sw.js`, `pwa.js`, önbellek listesi denetimi
- [x] GitHub Actions: kontrol + Pages yayını
- [x] GitHub reposu, Pages ayarı, ilk yayın
- [x] Tasarım entegrasyonu (Aşama 1–4 tek seferde yapıldı; `docs/TASARIM-ENTEGRASYON.md` referans olarak kalıyor)
- [x] 30 çetele grubunda okunaklılık: eski günler soluk, bugünün çetelesi parlak
- [x] Detay panelinde çeviri alıştırması: 374 kalıp × 3 Türkçe cümle (1122 cümle), dokununca cevap
- [ ] Gerçek telefonlarda (iPhone + Android) dokunma hareketleri ve çentik kontrolü
- [ ] Yükleme yönlendirmesi, yedekleme, lisans kararları (KARARLAR.md açık sorular)
- [ ] Paylaşım hazırlığı: README görselleri, og-image, GitHub sosyal önizleme (`docs/paylasim.md`)
- [ ] Liste 500 maddeye

Kararlar ve açık sorular: `docs/KARARLAR.md`.
