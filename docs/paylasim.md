# Paylaşım hazırlığı — GitHub ve LinkedIn

Repo herkese açık bir vitrin. Bu liste, bağlantıya tıklayan birinin ilk 10 saniyede ne gördüğünü
toparlar. Görseller tasarım tamamlandıktan sonra hazırlanır.

## Repo

- [ ] Repo adı `chunkla`, açıklama: "Günde beş İngilizce kalıp. Telefona yüklenir, internetsiz çalışır."
- [ ] Website alanına Pages adresi (repo sağ üst → ⚙).
- [ ] Topics: `pwa`, `vanilla-js`, `offline-first`, `english-learning`, `turkish`, `github-pages`
- [ ] Settings → General → Social preview: **1280×640** görsel (link paylaşılınca repo kartı).
- [ ] README'nin en üstünde canlı bağlantı ve 2–3 telefon ekran görüntüsü.
- [ ] README'de 5–10 saniyelik GIF: kaydır → dokun → çizgi düşer. Asıl etkiyi bu yaratır.
- [ ] `LICENSE` dosyası (karar bekliyor: KARARLAR.md açık sorular).
- [ ] Actions rozeti README'de yeşil.
- [ ] `www/privacy.html` içindeki e-posta yer tutucuları dolduruldu.

## Bağlantı önizlemesi (LinkedIn, WhatsApp, X)

- [ ] `www/og-image.png` — **1200×630**. Önizleme kartında görünen görsel.
      Önbelleğe alınmaz (`check-sw.js` bunu bilerek atlar).
- [ ] `www/index.html` içindeki `og:url` ve `og:image` tam adres, KULLANICI yerine kullanıcı adı.
- [ ] Yayından sonra LinkedIn Post Inspector ile adresi kontrol et; eski önizleme takılı
      kalırsa oradan yenilenir.

## Uygulama içi vitrin

- [ ] `manifest.webmanifest` içine `screenshots` (en az bir dar, `form_factor: "narrow"`):
      Android'de yükleme penceresi ekran görüntüleriyle zenginleşir.
- [ ] Nihai ikon gelirse `assets/icon.svg` güncellenir, `python3 assets/ikon-uret.py` ile
      PNG'ler yeniden üretilir, `www/icons/` altına kopyalanır.

## LinkedIn gönderisi için malzeme

- Tek cümlelik fikir: kağıt deftere yazmayı merkeze alan, puan ve bildirim içermeyen bir
  kalıp çalışma uygulaması.
- Dikey ekran kaydı (15–30 sn) ve canlı bağlantı.
- Teknik not isteyenler için: sıfır bağımlılık, çevrimdışı, veri cihazda, GitHub Pages.
