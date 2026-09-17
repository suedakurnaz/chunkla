# Claude Code promptları

Sırayla ilerle; her aşama bitince kontrol edip sonrakine geç. Her aşama ayrı bir oturumda
başlatılabilir, CLAUDE.md her oturumda otomatik okunur.

Başlamadan önce:
- Tasarım klasörü `docs/tasarim/` adında olmalı (`Chunk Defteri.dc.html` doğrudan içinde).
- Eski Capacitor dosyaları (`capacitor.config.json`, `android/`, `store/`, `node_modules/`)
  silinmiş olmalı; Aşama 0 bunları ayrıca kontrol eder.

---

## Aşama 0 — Repo ve ilk yayın

Önce boru hattını kur, tasarımı sonra bağla: böylece her aşamanın sonucunu telefonda görürsün.

```
Bu projeyi GitHub'a hazırla. Henüz push etme, sonunda bana komutları göster.

1. npm run check çalıştır, sonucunu göster.
2. git init yapılmamışsa yap, varsayılan dal main olsun.
3. .gitignore'u kontrol et. node_modules, android/, ios/, capacitor.config.json veya
   *.jks gibi eski Capacitor artıkları klasörde duruyorsa listele, silmeden önce sor.
4. www/index.html ve README.md içindeki KULLANICI yer tutucularını bul ve listele;
   GitHub kullanıcı adımı soracağım, ona göre değiştir.
5. İlk commit'i "İlk sürüm: çekirdek, PWA altyapısı, geçici test sayfası" mesajıyla at.
6. GitHub'da "chunkla" adında herkese açık repo oluşturup push etmem için gereken komutları
   ve Pages ayarını (Settings → Pages → Source: GitHub Actions) adım adım yaz.
```

**Senin kontrolün:** Actions sekmesinde "Kontrol ve yayın" yeşil mi? Pages adresini telefonda
aç; Android'de Chrome menüsünden "Uygulamayı yükle", iOS'ta Safari → Paylaş → "Ana Ekrana Ekle".
Yüklenen uygulamayı uçak modunda aç, geçici sayfa geliyor mu?

---

## Aşama 1 — İskelet ve görünüm

```
docs/TASARIM-ENTEGRASYON.md dosyasını baştan sona oku, sonra
docs/tasarim/Chunk Defteri.dc.html dosyasını oku.

Bu aşamada yalnızca görünüm:
1. www/index.html'i yeniden yaz. Mevcut dosyadaki "BU BLOK ENTEGRASYONDA AYNEN KORUNUR"
   arasındaki head bölümünü koru. §3'teki tüm katmanlar statik HTML olarak
   (başlık, deste alanı, gün sonu kartı, Detay paneli, Defter, Seri ekranı,
   Tanıtım, Giriş). Şablon sözdizimi, sc-for, sc-if, support.js OLMAYACAK.
2. www/styles.css: kaynak dosyadaki satır içi stilleri anlamlı sınıflara taşı.
   Ölçü, renk, yazı boyutu, harf aralığı, animasyon keyframe'leri birebir.
   color-mix yerine §9'daki sabit renkler. Fontlar yalnızca fonts/fonts.css'ten.
3. www/js/app.js: şimdilik yalnızca Chunkla.init() sonrası bugünün 5 kartını,
   başlıktaki seri ve kalıp sayacını ve ilk kartın Detay içeriğini doldur.
   Diğer katmanlar gizli dursun.
4. npm run sw:liste

docs/tasarim altından www/ içine dosya kopyalama. www/chunks.js, core.js, pwa.js,
sw.js'e dokunma. Bitince npm run check ve §10'daki 1–3 grep kontrollerini çalıştır,
çıktıları göster, yaptıklarını listele ve dur. Commit atma.
```

**Senin kontrolün:** `npm run serve`, tarayıcıyı 390×844 telefon görünümüne al, tasarımla yan
yana karşılaştır. Uygunsa commit + push, telefonda bak.

---

## Aşama 2 — Deste etkileşimi ve çetele

```
docs/TASARIM-ENTEGRASYON.md §4, §6 ve §8'e göre:
1. Kaydırma (yatay kart geçişi, yukarı kaydırınca Detay), ilerleme çizgileri.
2. Dokunarak işaretleme / işareti kaldırma: Chunkla.toggleMark, beyaz parlama,
   el çizimi opaklığı, başlıktaki sayaç.
3. Arka plan çetelesi: Chunkla.tallyPage() + 5×6 ızgara, prototipteki rnd ve
   çizgi formülleri, yalnızca son eklenen çizgide draw animasyonu, işaret
   kaldırınca 380 ms opaklık düşüşü.
4. Detay paneli: aç/kapat, içerik en üstteyken aşağı sürükleyerek kapatma.
5. Klavye: oklar, Esc, Enter/Boşluk ile işaretleme; destede role, tabindex,
   aria-pressed, aria-label.
6. prefers-reduced-motion açıkken parlama ve çizim animasyonu yok.
7. Destede user-select: none ve -webkit-touch-callout: none (§9).

Gün sonu kartı şimdilik yalnızca "Hepsi okundu / Deftere yazdım" durumunda çalışsın.
Bitince npm run check, yaptıklarını listele ve dur. Commit atma.
```

**Senin kontrolün:** telefonda kaydır, dokun, geri al; uygulamayı kapatıp aç, çizgiler yerinde mi?

---

## Aşama 3 — Akışlar: tanıtım, seri, defter, haftalık tekrar

```
docs/TASARIM-ENTEGRASYON.md §3, §5 ve §7'ye göre:
1. Açılış akışı: tanıtım (5 adım, geri/ileri, noktalar, çizgi animasyonu)
   → markIntroDone → Giriş ekranı → deste. Sonraki açılışlarda tanıtım yok.
   Günün ilk açılışında Seri ekranı; başlıktaki alev butonu da açar.
2. Seri ekranı: seri sayısı, completedByWeekday şeridi (bugün vurgulu),
   kalıp çakıldı = totalMarked, tam çetele = fullTallyCount.
3. Defter: Çetele grupları sekmesi (notebookByDay().reverse(), katlanır gruplar,
   "çalış" ve satıra dokunma grup destesini açar) ve Günler sekmesi (history(),
   satıra dokunma o günün destesini açar).
4. Gün sonu kartının beş durumu, §5'teki tablo birebir. Haftalık tekrar
   destesinde işaretleme kapalı; son karta ulaşınca markWeekReviewed.
   Defter grubu destesinde işaret row.day'e yazılır.

Bitince npm run check, §10 madde 9'daki konsol komutuyla haftalık tekrarı
tarayıcıda dene, sonucu anlat ve dur. Commit atma.
```

**Senin kontrolün:** §10 madde 6–10.

---

## Aşama 4 — Telefon davranışı

```
docs/TASARIM-ENTEGRASYON.md §9'a göre:
1. History API ile geri tuşu: katman açılırken pushState, popstate'te en üst katmanı
   kapat, arayüzden kapatınca history.back(). Adres çubuğu değişmesin.
2. Güvenli alan boşlukları: başlık, alt çizgiler ve tüm tam ekran katmanlar.
3. overscroll-behavior: none.
4. §10'daki 1–5 kontrollerini çalıştır, çıktıları göster.

Bitince yaptıklarını listele ve dur. Commit atma.
```

**Senin kontrolün:** push et, telefonda yüklü uygulamada §10 madde 11. Çentikli bir iPhone ve
bir Android'de başlığa bak. 30 çetele grubunu görmek için konsoldan başlangıcı 29 gün geriye
alıp birkaç günü Defter → Günler'den işaretle; metin okunaklı kalıyor mu?

---

Sonraki aşamalar (yükleme yönlendirmesi, yedekleme, README görselleri) açık sorular
kararlaşınca eklenecek. Bkz. `docs/KARARLAR.md` ve `docs/paylasim.md`.
