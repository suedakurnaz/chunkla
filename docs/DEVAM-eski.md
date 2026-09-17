# Chunk projesi — devam dosyası

Bu dosya, projeyi yeni bir Claude sohbetinde kaldığı yerden sürdürmek için hazırlandı.

**Nasıl kullanılır:** Yeni sohbeti aç, projedeki tüm dosyaları yükle (`index.html`,
`app.js`, `chunks.js`, `styles.css`, `manifest.json`, `sw.js`, `privacy.html`, ikonlar
ve bu dosya), sonra aşağıdaki açılış mesajını yapıştır.

---

## 1. Açılış mesajı (kopyala-yapıştır)

> Türkçe konuşanlar için İngilizce "chunk" (kalıp ifade) çalışma uygulaması geliştiriyorum.
> Uygulama çalışır durumda ve Google Play'e çıkarmayı planlıyorum. Tüm proje dosyalarını
> ve `DEVAM.md` adlı devam dosyasını yükledim.
>
> Önce `DEVAM.md`'yi oku. Orada uygulamanın ne olduğu, hangi kararların neden alındığı,
> veri formatı, bozulmaması gereken kurallar ve kalan işler yazılı. Mevcut mimariyi ve
> veri formatını değiştirmeden devam et.
>
> Şu anki adım: **[buraya aşağıdaki "Kalan işler" bölümünden sıradakini yaz]**

---

## 2. Uygulama nedir

Türkçe konuşan tek bir kullanıcı için günlük İngilizce kalıp ifade çalışma uygulaması.
Her gün **5 ifade** gösterir: ifadenin kendisi, Türkçe karşılığı, kullanım notu ve
üç örnek cümle (İngilizce + Türkçe).

**Asıl kullanım senaryosu bu:** Kullanıcı ifadeleri **kağıt bir deftere elle geçiriyor**.
Uygulamanın işi okunmak ve kopyalanmak. Bu yüzden İngilizce örnek cümleler en baskın,
en okunaklı metin katmanı olmalı. Test, puan, rozet, oyunlaştırma **yok** ve eklenmeyecek.

Her ifadenin yanında bir "Deftere yazdım" butonu var. Günün beşi de işaretlenince
gün tamamlanmış sayılır ve seri sayacı ilerler.

## 3. Teknik durum

- Saf HTML + CSS + JavaScript. Çerçeve yok, derleme adımı yok, sunucu yok, bağımlılık yok.
- Veri `chunks.js` içinde sabit bir dizide. **374 ifade**, günde 5 ile 75 gün.
- İlerleme yalnızca `localStorage`'da. Hesap yok, ağ isteği yok, analitik yok.
- PWA katmanı hazır: `manifest.json`, `sw.js` (service worker), ikonlar (192/512/512-maskable/180).
- Çevrimdışı çalışır.

### Dosyalar

| Dosya | İşi |
|---|---|
| `index.html` | Sayfa iskeleti, PWA meta etiketleri |
| `app.js` | Gün hesabı, günlük 5 ifade, işaretleme, seri, arşiv |
| `chunks.js` | 374 ifadelik veri — asıl büyüyen dosya |
| `styles.css` | Görünüm |
| `manifest.json` | PWA manifesti |
| `sw.js` | Çevrimdışı önbellek |
| `privacy.html` | Gizlilik politikası (TR + EN), Play için zorunlu |
| `.well-known/assetlinks.json` | TWA doğrulama şablonu, doldurulacak |
| `icons/` | Uygulama ikonları |
| `PLAY-STORE.md` | Mağaza tarafını yapacak kişi için teslim dosyası |

### Veri formatı — birebir korunmalı

```js
{
  group: "Fiil temelli",              // kategori adı, Türkçe
  chunk: "make a decision",           // İngilizce ifade
  tr: "karar vermek",                 // Türkçe karşılığı
  note: "Amerikan İngilizcesinde ...",// tek cümlelik kullanım notu, Türkçe
  examples: [                         // tam üç tane, eksik veya fazla olmaz
    { en: "We need to make a decision today.", tr: "Bugün bir karar vermemiz lazım." },
    { en: "She made the right decision.",      tr: "Doğru kararı verdi." },
    { en: "Don't make a decision when you're angry.", tr: "Sinirliyken karar verme." }
  ]
}
```

### Mevcut kategoriler ve sayılar

Phrasal verb 60 · Kollokasyon 40 · Konuşma kalıbı 39 · Edatlı kalıplar 36 ·
Deyimsel 33 · Ek ifadeler 32 · İş ve akademik 30 · Fiil temelli 20 · Bağlayıcı 17 ·
Günlük konuşma 15 · Kalıp yapılar 12 · Zaman ve mekan 10 · Duygu ve tepki 10 ·
Sosyal ve iş hayatı 10 · Diğer popüler 10

İlk 100 madde Instagram'da dolaşan bir "100 chunk" tablosundan alındı ve sırası korundu;
gerisi sıklık temelli listelerden (PHRASE List, PHaVE List, Academic Formulas List,
Shin & Nation konuşma kollokasyonları) seçilerek eklendi.

## 4. Bozulmaması gereken kurallar

1. **`sw.js` içindeki `VERSION` değeri.** Herhangi bir dosya değişince artırılmalı
   (`chunk-v1` → `chunk-v2`). Atlanırsa telefonlarda eski sürüm önbellekte kalır.
   PWA'da en sık yapılan hata budur.
2. **Sıra değişmez.** `chunks.js`'e ekleme **sona** yapılır. Araya madde sokmak,
   kullanıcının gün sırasını kaydırır ve gördüğü ifadeleri değiştirir.
3. **Tekrar olmaz.** Yeni ifade eklemeden önce liste taranmalı.
4. **Notlar ezber değil, tuzak odaklı olmalı.** Örnekler: `on time` ile `in time` farkı,
   `apply for` (iş) ile `apply to` (kurum) ayrımı, hangi fiilin `make` hangisinin `do`
   aldığı, `look forward to`dan sonra `-ing` gelmesi, `consist of`un edilgen yapılamaması.
   Sözlük tanımı tekrarlamak değerli değil.
5. **Arayüz metinleri Türkçe, içerik İngilizce.**
6. **Örnek cümleler kısa tutulmalı** — elle yazılacaklar.
7. Ses, bildirim, test, puan, rozet eklenmeyecek.

## 5. Alınmış kararlar ve gerekçeleri

**Neden yapay zekâ API'si yok:** Anahtar tarayıcı koduna gömülemez, gömülürse herkes
görür. Sunucu yazmak gerekirdi. Yerel liste hem bedava hem internetsiz çalışıyor.

**Neden günde 5:** Kullanıcının tercihi. Her ifadenin kendi işaret butonu var, böylece
deftere yazarken ara verip döndüğünde nerede kaldığı belli oluyor.

**Neden TWA (Trusted Web Activity):** Play Store'a çıkmanın dört yolu değerlendirildi —
TWA, Capacitor, Kotlin + Compose, Flutter. TWA seçildi çünkü (a) liste sürekli
büyüyecek ve TWA'da içerik güncellemesi yeniden yükleme ve inceleme gerektirmiyor,
sadece siteyi güncellemek yetiyor; (b) bilgisayara Android Studio kurmayı gerektirmiyor,
PWABuilder tarayıcıda çalışıyor.

Capacitor yedek plan: site istenmezse ya da cihaz özellikleri (kamera, bildirim)
gerekirse aynı HTML dosyalarıyla geçilir.

## 6. Kalan işler — sırayla

### Adım 1 — GitHub Pages'e yayınla *(sıradaki iş)*
Depo aç, dosyaları yükle, Pages'i etkinleştir, HTTPS adresi al.
⚠️ `assetlinks.json` alan adının **kök dizininde** durmak zorunda. Alt klasörde
yayınlanırsa (`kullanici.github.io/chunk/`) TWA doğrulaması çalışmaz.
Bu yüzden depo adı **`kullaniciadi.github.io`** olmalı.
Sonunda: telefonda adrese gir → "ana ekrana ekle" → tam ekran, çevrimdışı çalışıyor olmalı.

### Adım 2 — Birkaç hafta kullan
Uygulama bu noktada zaten bitmiş sayılır. Eksikler kullanarak görülür.

### Adım 3 — Listeyi 500'e çıkar
Kalan temalar: iş e-postası kalıpları, akademik yazı formülleri, seyahat ve gündelik
hizmet dili, duygu-tepki ifadeleri. 500 madde = 100 gün.

### Adım 4 — Play Store
Detaylar `PLAY-STORE.md` dosyasında. Özet ve doğrulanmış kritik noktalar:

- Yükleme formatı **AAB** olmak zorunda; APK kabul edilmiyor (Ağustos 2021'den beri).
- **targetSdkVersion 36** olmalı (31 Ağustos 2026'dan beri zorunlu). PWABuilder/Bubblewrap
  bir dönem 35 üretiyordu — paketten sonra `app/build.gradle` kontrol edilmeli.
- Play Console hesabı tek seferlik **25 USD**.
- 13 Kasım 2023 sonrası açılan **kişisel** hesaplar: üretime geçmeden önce en az
  **12 test kullanıcısı, kesintisiz 14 gün** kapalı test. Kurumsal hesaplar bu kapsamda değil.
  Düşüşler için 15-18 kişi toplamak öneriliyor.
- Gerekenler: gizlilik politikası URL'si (`privacy.html` hazır), veri güvenliği formu
  (hiçbir veri toplanmıyor), içerik derecelendirme, 512×512 ikon (hazır),
  1024×500 öne çıkan görsel (yapılacak), en az 2 ekran görüntüsü (yapılacak).
- Doldurulacak yer tutucular: `privacy.html` içinde iki kez geçen `BURAYA_E_POSTA_ADRESI`,
  `assetlinks.json` içinde `PAKET_ADI_BURAYA` ve `IMZA_PARMAK_IZI_BURAYA`.
- Keystore yedeklenmeli; kaybedilirse uygulama bir daha güncellenemez.

## 7. Açık konu

Arayüz Claude Design'da yeniden tasarlandı ama henüz projeye entegre edilmedi.
Entegre edilecekse `app.js`'in aradığı on element kimliği yeni HTML'de bulunmalı:

`dayLabel`, `streakLabel`, `context`, `progress`, `cardList`, `dayDone`,
`randomBtn`, `todayBtn`, `archiveList`, `archiveEmpty`

CSS tarafında `app.js`'in ürettiği sınıflar: `card`, `card-head`, `pos`, `group`,
`chunk`, `gloss`, `note`, `examples`, `en`, `tr`, `mark`, `is-on`, `day`, `names`, `tick`.
