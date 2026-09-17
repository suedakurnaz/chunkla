<p align="center">
  <img src="www/icons/icon-192.png" width="96" height="96" alt="">
</p>

<h1 align="center">chunkla</h1>

<p align="center">
  Günde beş İngilizce kalıp. Oku, deftere yaz, çeteleye çak.<br>
  <a href="https://suedakurnaz.github.io/chunkla/"><strong>Uygulamayı aç →</strong></a>
</p>

<p align="center">
  <a href="https://github.com/suedakurnaz/chunkla/actions/workflows/yayin.yml"><img src="https://github.com/suedakurnaz/chunkla/actions/workflows/yayin.yml/badge.svg" alt="Kontrol ve yayın"></a>
</p>

<!-- Ekran görüntüleri ve GIF buraya: docs/paylasim.md -->

---

İngilizceyi kelime kelime değil, kalıp kalıp öğrenmek için. Her gün sıradaki beş kalıp açılır:
İngilizcesi, Türkçesi, Türk öğrencinin sık düştüğü tuzağı anlatan bir not ve üç kısa örnek cümle.
Kağıt defterine yazdığın her kalıp için ekrana dokunursun; sayfaya bir çetele çizgisi düşer.

Sınav yok, puan yok, bildirim yok. İşin sadece okumak ve yazmak.

## Telefona yükle

Uygulama bir web sayfası olarak açılır ve telefona uygulama gibi yüklenir. Mağazaya gerek yok.

**Android (Chrome):** [Uygulamayı aç](https://suedakurnaz.github.io/chunkla/) → sağ üstteki ⋮ menü →
**Uygulamayı yükle**.

**iPhone (Safari):** [Uygulamayı aç](https://suedakurnaz.github.io/chunkla/) → alttaki Paylaş düğmesi →
**Ana Ekrana Ekle**.

Yükledikten sonra internet olmadan da çalışır. iPhone'da ilerlemenin korunması için ana ekrana
eklemen önerilir.

## Nasıl çalışır

- **Günde beş kalıp.** Başladığın gün 1. gündür; her gün sıradaki beş kalıp gelir.
- **Kaydır, oku, yukarı çek.** Kalıplar arasında kaydırırsın; yukarı çekince not ve örnekler açılır.
- **Dokun, çeteleye çak.** Deftere yazdığın her kalıp bir çizgi. Beş çizgi bir gün.
- **Her yedinci gün tekrar.** Haftanın kalıplarını baştan okumadan o gün kapanmaz.
- **Kaçırdığın gün kaybolmaz.** Defterden geçmiş günlere dönüp telafi edebilirsin.

## Gizlilik

Hesap yok, analitik yok, reklam yok, çerez yok. İlerlemen yalnızca kendi cihazında durur ve hiçbir
sunucuya gönderilmez. Ayrıntı: [gizlilik politikası](https://suedakurnaz.github.io/chunkla/privacy.html).

Bunun bir sonucu olarak ilerleme cihaza bağlıdır: telefon değiştirince veya tarayıcı verilerini
silince baştan başlarsın.

## Teknik

- Saf HTML, CSS ve JavaScript. Çerçeve, derleme adımı ve npm bağımlılığı yok.
- Service worker ile tamamen çevrimdışı; yeni sürüm arka planda iner, uygulamayı bir sonraki
  açışında devreye girer.
- Fontlar dahil her dosya kendi adresinden yüklenir; dış ağ isteği yok.
- GitHub Actions her push'ta veriyi ve çekirdek mantığı test eder, `main` dalını GitHub Pages'e yayınlar.

```
www/            sitenin kendisi — GitHub Pages bu klasörü yayınlar
  chunks.js     374 kalıp
  js/core.js    gün, seri, çetele ve depolama mantığı (arayüzden bağımsız)
  js/pwa.js     service worker kaydı, güncelleme, yükleme
  sw.js         çevrimdışı önbellek
scripts/        veri doğrulama, çekirdek testleri, önbellek listesi denetimi
docs/           ürün dokümanı, kararlar, tasarım entegrasyonu
```

### Yerelde çalıştır

Node 22 veya üstü yeterli.

```bash
npm run check   # veri + testler + önbellek listesi
npm run serve   # http://localhost:8080
```

Yerelde service worker kapalıdır, böylece değişiklikler anında görünür. Çevrimdışı davranışı
denemek için `http://localhost:8080/?sw` adresini kullan.

### Kalıp eklemek

Yeni kalıplar `www/chunks.js` dizisinin **sonuna** eklenir; araya ekleme veya sıra değiştirme
kullanıcıların geçmişini bozar. Her kalıpta `group`, `chunk`, `tr`, `note` ve tam üç `examples`
bulunur. `npm run validate` biçimi, tekrarları ve sırayı denetler.

## Lisans

<!-- Karar bekliyor: docs/KARARLAR.md açık sorular -->

Fontlar SIL Open Font License 1.1 ile dağıtılır (`www/fonts/LICENSES/`).
