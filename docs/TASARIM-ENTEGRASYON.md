# Tasarım entegrasyonu

Kaynak: `docs/tasarim/Chunk Defteri.dc.html` (Claude Design dışa aktarımı).
Bu belge o dosyanın **nasıl** uygulamaya çevrileceğini söyler. Görsel ölçüler, renkler,
yazı boyutları, boşluklar ve metinler için kaynak dosyadaki satır içi stillere bak;
onları birebir aktar. Bu belge ile kaynak dosya çeliştiğinde bu belge geçerlidir.

## 1. Ne yapılacak, ne yapılmayacak

Kaynak dosya Claude Design'ın çalışma ortamıyla açılır (`support.js` React + Babel'i
internetten indirir, ekranlar `{{ }}` şablonlarıyla yazılmıştır). **Bu ortam uygulamaya
girmez.** Tasarım düz HTML + CSS + JS olarak yeniden yazılır:

```
www/index.html     tüm ekranların iskeleti (statik HTML, şablon sözdizimi yok)
www/styles.css     kaynak dosyadaki satır içi stillerin sınıflara taşınmış hâli
www/js/app.js      etkileşim, çizim, ekran geçişleri — mantığın tamamı core.js'ten
www/js/pwa.js      hazır, dokunulmaz
www/js/core.js     hazır; yeni ihtiyaç doğarsa önce test yazılır
www/fonts/         hazır (fonts.css + woff2)
www/assets/        chunkla-logo.png, chunkla-mark.png hazır
```

`docs/tasarim/` altından `www/` içine **hiçbir dosya kopyalanmaz**. Özellikle
`docs/tasarim/chunks.js` kopyalanmaz (ilk satırı değiştirilmiş); `www/chunks.js` kalır.

Mevcut geçici `www/index.html` içindeki **"BU BLOK ENTEGRASYONDA AYNEN KORUNUR"** arasındaki
`<head>` bölümü (manifest, ikonlar, iOS ve bağlantı önizleme etiketleri) yeni dosyaya taşınır.

Yükleme sırası: `fonts/fonts.css`, `styles.css`, `chunks.js`, `js/core.js`, `js/pwa.js`, `js/app.js`.
Tüm yollar göreli (`assets/…`, `fonts/…`); site `KULLANICI.github.io/chunkla/` alt yolunda çalışır.
Dosya ekleyip sildikten sonra `npm run sw:liste`.

## 2. Prototipten atılacaklar

| Prototipte | Neden atılıyor | Yerine |
|---|---|---|
| `support.js`, `<x-dc>`, `<helmet>`, `sc-for`, `sc-if`, `style-hover`, `DCLogic` | Çalışma ortamı, ağ gerektiriyor | Düz DOM + CSS `:hover` / `:active` |
| Google Fonts `<link>`'leri | Ağ isteği | `fonts/fonts.css` |
| `ITEMS` 20 maddelik örnek liste, `loadChunks()` | Örnek veri | `CHUNKS` (core.js üzerinden) |
| `demoSeed` (18 günlük sahte ilerleme) | Sahte veri | Yok. İlk açılış gerçekten 1. gün |
| `showIntro` ayarı | Tanıtımı her açılışta gösteriyor (hata) | `Chunkla.isIntroDone()` |
| `showStreakSplash`, `accent`, `chunkSize`, `perDay` ayarları | Düzenleyici ayarları | Sabit: seri ekranı açık, `#0433DD`, `44px`, 5 |
| `localStorage` + `KEY = "chunk-defteri-v2"`, `studied` / `completed` / `startMs` | Ayrı depolama, liste başa dönünce bozuluyor | Yalnızca `core.js` |
| `midnight()`, `dayNo()`, `dayItems()`, `per()`, `visitStreak` hesabı | Mantık tekrarı | `core.js` |
| `history` paneli (`Geçmiş günler` bölümü) | Hiçbir yerden açılmıyor | Defter → Günler sekmesi |
| `splashButton`, `splashNote`, `skipIntro`, `eyeBg`, `eyeLabel`, `jarFill`, `deckTitle`, `dayNote` | Şablonda kullanılmıyor | Yok |

## 3. Ekranlar ve katmanlar

Tümü tek sayfada, üst üste binen katmanlar. Kaynak dosyadaki `z-index` değerleri korunur.

| Katman | z | Ne zaman görünür |
|---|---|---|
| Arka plan çetelesi | 0 | Her zaman (deste arkasında) |
| Başlık, deste, Detay butonu, ilerleme çizgileri | 1 | Her zaman |
| Beyaz parlama (`morph`) | 2 | İşaretleme anında 420 ms |
| Detay paneli (sheet) | 3 | Yukarı kaydırma / "↑ Detay" / ↑ tuşu |
| Defter | 4 | Başlıktaki defter butonu, gün sonu butonu |
| Seri ekranı | 5 | Günün ilk açılışı, başlıktaki alev butonu |
| Tanıtım (5 adım) ve Giriş ("Başlayalım") | 6 | Yalnızca `isIntroDone()` false iken |

### Açılış akışı

```
const r = await Chunkla.init();
if (!Chunkla.isIntroDone())      → Tanıtım 1/5 … 5/5 → markIntroDone() → Giriş ekranı → Deste
else if (r.firstVisitToday)      → Seri ekranı (× ile kapanır) → Deste
else                             → Deste
```

İlk kurulumda tanıtım bittikten sonra seri ekranı **gösterilmez** (prototipteki gibi).

## 4. Bağlantı tablosu — şablon değişkeni → core.js

Arayüzde tutulan geçici durum: `viewDay` (açık olan gün), `idx` (destedeki kart),
`deck` (`{ type: 'day' | 'group' | 'week', label, rows }`), `sheetOpen`, `defterOpen`,
`defterTab`, `openGroupDay`, `splashOpen`, `introStep`, `gateOpen`, `lastDrawn`
(yalnızca bu oturumda en son çizilen `{day, slot}`), `dragX`, `dragging`, `axis`.

| Prototip | Yeni karşılık |
|---|---|
| `streakCount` | `Chunkla.streak()` |
| `jarCount` | `Chunkla.totalMarked()` |
| `groupCount` ("tam çetele") | `Chunkla.fullTallyCount()` |
| `day` (bugün) | `Chunkla.today()` |
| `cards` (günlük deste) | `Chunkla.chunksForDay(viewDay)` → her satırda `{day, slot, index, item, marked}` |
| `seen` / `hintOpacity` | `row.marked` → el çizimi opaklığı `0.42` / `1` |
| `toggleEye()` | `Chunkla.toggleMark(row.day, row.slot)` |
| `completed.includes(d)` / `done` | `Chunkla.isDayDone(d)` |
| `complete()` | `Chunkla.markDayDone(viewDay)` → Defter açılır |
| `tallyGroups` | `Chunkla.tallyPage().days` (bkz. §6) |
| `sections` (Defter → Çetele grupları) | `Chunkla.notebookByDay().reverse()` |
| `sec.label` "Grup N" | `"Grup " + g.day` |
| `openSec` varsayılanı `curSet` | varsayılan açık grup = `viewDay` |
| `historyRows` (Defter → Günler) | `Chunkla.history()` |
| `row.status` | `bugun`+tamam → "bugün · tamam", `bugun` → "bugün", `tamam` → "tamam", `telafi` → "telafi et" |
| `row.first` | `Chunkla.chunksForDay(d)[0].item.chunk` |
| `weekDays` sayıları | `Chunkla.completedByWeekday()` |
| `weekDays` bugün vurgusu | `Chunkla.todayWeekday()` |
| `reviewDue` | `Chunkla.isReviewDay(viewDay) && !Chunkla.isWeekReviewed(viewDay) && !Chunkla.isDayDone(viewDay)` |
| `weekItems` | `Chunkla.weekReviewItems(viewDay)` |
| `weekNo` | `Chunkla.weekNumber(viewDay)` |
| `endIntro()` | `Chunkla.markIntroDone()` |

## 5. Gün sonu kartı — beş durum

Destenin son (6.) kartı. Metinler kaynak dosyadan birebir.

| Durum | Başlık | Not | Buton → eylem |
|---|---|---|---|
| Günlük deste, tekrar günü, tekrar yapılmamış | "Hafta doldu: {hafta}. hafta." | "Bu haftanın {n} kalıbını hızlıca baştan geç. Tekrar bitmeden gün kapanmaz." | "Haftayı tekrar et" → `deck = week`, `idx = 0` |
| Hafta tekrarı destesinin sonu | "Hafta tekrarı bitti." | "Haftanın kalıplarını baştan geçtin. Şimdi günü kapatabilirsin." | "Deftere yazdım" → `markWeekReviewed(day)` sonra `markDayDone(day)` → Defter |
| Günlük deste, gün tamam değil | "Hepsi okundu." | "Hepsini deftere geçirdiysen günü kapat." | "Deftere yazdım" → `markDayDone(viewDay)` → Defter |
| Günlük deste, gün tamam | "Deftere yazıldı." | "Yarın sıradaki kalıplar hazır olacak. İstersen geçmiş günlere dönebilirsin." | "Defteri aç" → Defter |
| Defter grubu destesi | "{Grup N} bitti." | "Defterden başka bir bölüme geçebilirsin." | "Deftere dön" → Defter |

**`markWeekReviewed` hafta destesinin sonuna gelindiğinde çağrılır**, butona basılınca değil:
kullanıcı son karta ulaştıysa tekrar yapılmış sayılır ve uygulama kapansa da hatırlanır.
Tekrar yapılmış ama gün kapanmamışsa kart "Hepsi okundu." durumuna düşer.

Hafta tekrarı destesinde işaretleme **kapalıdır**, el çizimi gizlenir (prototipteki gibi).
Defter grubu destesinde işaretleme açıktır; işaret o kalıbın kendi gününe (`row.day`) yazılır.

## 6. Arka plan çetelesi — 30 günlük sayfa

Karar: çeteleler 30 günde bir sıfırlanır (1-30, 31-60…). Defter, seri ve sayaçlar sıfırlanmaz.

Prototipteki 10 sabit konum (`ZONES`) 30 güne yetmez, 11. günden sonra gruplar üst üste
biner. Yerine 30 hücreli ızgara:

- Çetele alanı prototipteki gibi: başlık altından (`top:78px`) alt çizgilerin üstüne (`bottom:104px`).
- 5 sütun × 6 satır. `position` 0-29 soldan sağa, yukarıdan aşağıya hücreye karşılık gelir.
- Her grup hücresinin ortasına yerleşir, `rnd(day)` ile ±%3 yatay, ±%2 dikey kaydırma,
  ±8° döndürme (prototipteki `rnd` fonksiyonu gün numarasıyla aynen kullanılır; aynı gün her
  açılışta aynı yerde durur).
- Çizgi yolları prototipteki formüllerle üretilir: en fazla 4 dik çizgi, `count === 5` ise çapraz.
- Çizim animasyonu (`draw .45s`) yalnızca `lastDrawn` ile eşleşen çizgide oynar.
- İşaret kaldırılınca prototipteki gibi tüm katmanın opaklığı 380 ms `0.35` olur.

**Cihazda kontrol edilecek:** 30 grup kalıp metninin arkasını doldurduğunda İngilizce metin
okunaklı kalmalı. Okunaklılık bozulursa grup opaklığını düşürme gibi bir çözümü
uygulamadan önce kullanıcıya göster; kendiliğinden tasarımı değiştirme.

## 7. Seri ekranı — haftalık şerit

Karar: prototipteki gibi **tüm zamanlar**. Yedi hücre Pt…Pz; her hücre o hafta gününe düşen
tamamlanmış gün sayısını çetele olarak gösterir (en fazla 4 dik çizgi, 5 ve üstünde çapraz).
Sayı 0 ise opaklık `0.25`. Bugünün hücresi `rgba(255,255,255,.14)` zeminli.

## 8. Etkileşim

Prototipteki eşikler korunur:

- **Kaydırma:** eksen 8 px'te belirlenir. Yatayda 60 px üstü bırakınca sonraki/önceki kart.
  İlk kartta sağa, son kartta sola sürükleme sıfırlanır.
- **Yukarı kaydırma:** −60 px'te Detay paneli açılır (gün sonu kartında açılmaz).
- **Dokunma:** 8 px'ten az hareket ve 500 ms'den kısa → işaretle / işareti kaldır.
  Gün sonu kartında ve hafta tekrarında çalışmaz.
- **Parlama:** beyaz katman `opacity 1 → 0`, 420 ms; hareket azaltma açıksa hiç gösterilmez.
- **Detay paneli:** içerik en üstteyken aşağı sürükleme 90 px'i geçerse kapanır.
- **Klavye:** ← → kart, ↑ Detay, ↓ ve Esc kapat; Esc açık Defter / Seri ekranını kapatır.
  **Eklenecek:** Enter ve Boşluk, geçerli kartı işaretler (prototipte klavyeyle işaretleme yok).
- Destenin dokunma alanına `role="button"`, `tabindex="0"` ve
  `aria-pressed` (işaret durumu) ver; `aria-label` = kalıbın kendisi.

## 9. Platform düzeltmeleri

- **`<html lang="tr">`** zorunlu. Aksi hâlde `text-transform: uppercase` "beş ifade"yi
  "BEŞ IFADE" yapar; doğrusu "BEŞ İFADE".
- **`color-mix()` kaldırılır**, eski tarayıcılarda çalışmaz:
  - Detay paneli: `color-mix(in oklab, #0433DD 74%, #000)` → **`#021F93`**
  - Geçmiş paneli (atılıyor, bilgi için): 66% → `#01197E`
- **Güvenli alan:** `viewport-fit=cover` ve `black-translucent` durum çubuğu nedeniyle içerik
  çentiğin altına uzanır. Başlığa `padding-top: max(12px, env(safe-area-inset-top))`,
  alt çizgilere `padding-bottom: max(26px, env(safe-area-inset-bottom))`. Tam ekran katmanlar
  (Detay, Defter, Seri, Tanıtım, Giriş) da aynı boşlukları alır.
- **Geri tuşu (Android, yüklü uygulama):** History API ile.
  - Detay, Defter, Seri ekranı veya tanıtımın bir sonraki adımı açılırken
    `history.pushState({ katman: 'detay' }, '')`.
  - `popstate` olayında en üstteki katman kapanır (tanıtımda bir önceki adıma dönülür).
  - Katman arayüzdeki × / ↓ ile kapatılırsa, geçmiş yığını kaymasın diye `history.back()`
    çağrılır ve kapatma işi `popstate`'e bırakılır.
  - Hiçbir katman açık değilken geri tuşu tarayıcının varsayılanına kalır (uygulamadan çıkar).
  - Adres çubuğu değişmez; hash veya sorgu parametresi eklenmez.
- **Kaydırma zinciri:** `html, body { overscroll-behavior: none; }` — deste sürüklenirken
  sayfa esnemesin, çekip yenileme tetiklenmesin.
- `position: fixed; inset: 0` kök kapsayıcı korunur; geniş ekranda 560 px ortalanır.
- Hareket azaltma: prototipteki `@media (prefers-reduced-motion: reduce)` kuralı korunur ve
  JS tarafında parlama ile çizim animasyonu atlanır.
- **Metin seçimi ve uzun basma:** destede `user-select: none` ve
  `-webkit-touch-callout: none`; aksi hâlde dokunup tutunca metin seçilir. Detay paneli ve
  Defter'de metin seçilebilir kalır (kullanıcı kopyalamak isteyebilir).

## 10. Kabul kontrolü

Entegrasyon bittiğinde şunların hepsi doğru olmalı:

1. `grep -rnE "googleapis|gstatic|unpkg|jsdelivr|cdnjs" www/` sonuç vermez.
2. `grep -rn "localStorage" www/js/app.js www/index.html` sonuç vermez.
3. `grep -rnE "(src|href)=\"/" www/` sonuç vermez (kök yolu yok, hepsi göreli).
4. `npm run check` geçer.
5. Yerelde `http://localhost:8080/?sw` bir kez açılıp tarayıcı çevrimdışına alınınca
   yenilemede uygulama açılır, fontlar doğru görünür.
6. Sıfır veriyle: tanıtım → Başlayalım → 1. gün, 5 kart + gün sonu kartı.
7. Kapatıp aynı gün açınca tanıtım ve seri ekranı çıkmaz.
8. Bir kalıbı işaretle, yenile: çizgi yerinde; başlıktaki sayaç doğru.
9. Tarayıcı konsolunda başlangıcı 6 gün geriye al:
   `await Chunkla._reset(); await Chunkla.init(new Date(Date.now() - 6*864e5)); location.reload()`.
   Bugün 7. gün olur; gün sonu kartı "Haftayı tekrar et" gösterir, 35 kartlık tekrar bitmeden
   gün kapanmaz. (Seri 1'e düşer, test için önemsiz.)
10. Türkçe büyük harfli etiketlerde "İ" doğru görünür.
11. Yayından sonra telefonda: uygulama olarak yüklenir, uçak modunda açılır, Android'de geri tuşu
    §9'daki gibi çalışır, durum çubuğu ve çentik içeriğin üstüne binmez.
