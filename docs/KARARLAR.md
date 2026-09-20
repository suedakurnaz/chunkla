# Kararlar

`DEVAM-eski.md` ve `PRD-v1.md` ile çelişen her yerde bu dosya geçerlidir.
Yeni karar alındıkça en üste eklenir; eski kayıt silinmez.

---

## 2026-09-20 — Geçmiş günler de silinebilir

**Karar:** "Bu günü geri al" yalnızca bugünle sınırlı değil. Kullanıcı çalışmadığını ya da
öğrenmediğini düşündüğü herhangi bir geçmiş günü silebilir:
- **Defter → Çetele grupları:** açık grubun altında "Bu günü sil".
- **Geçmiş günün gün sonu kartı** (Defter → Günler'den açılır): "Bu günü sil".
Bugün için kartta eski metin ("Bu günü geri al") kalır. İkisi de iki adımlı onaylı.

Silinen günün işaretleri, tamamlanma ve tekrar kaydı gider; çeteleden, defterden ve Seri
şeridinden düşer. Gün numarası ve sıradaki günler değişmez: kalıplar kaybolmaz, gün
Günler listesinde "telafi et" olarak durur ve istenirse yeniden çalışılıp kapatılır.
Seri (art arda giriş) etkilenmez.

**Neden:** Kullanıcı bazı günler uygulamaya girip çalışmadığını söyledi; o günlerin çetelede
"öğrenilmiş" gibi görünmesini istemiyor.

## 2026-09-20 — Kaldığın yerden; "Bu günü geri al" ve "Baştan başla"

**Karar:** Gün numarası artık takvimden hesaplanmaz, ilerlemeyle ilerler. Gün ancak
"Deftere yazdım" ile kapatılır; ertesi takvim gününde sıradaki gün açılır. Birkaç gün
girilmezse dönüşte kalınan yerden devam edilir: borç birikmez, takvim günü başına en
fazla bir yeni gün açılır. Seri eskisi gibi art arda girişi sayar.

İki yeni düğme, ikisi de iki adımlı ("Emin misin?"):
- **Bu günü geri al** (gün sonu kartı): yalnızca içinde bulunulan günün işaretlerini,
  tamamlanma ve tekrar kaydını siler. Gün numarası değişmez. Geçmiş günlere uygulanmaz.
- **Baştan başla** (Seri ekranının altı): 1. güne döner; seri, çetele ve defter sıfırlanır.
  Tanıtım yeniden gösterilmez. Eski veri silinmeden önce `chunkla.progress.v1.yedek`
  anahtarına yazılır (yalnızca son sıfırlama saklanır).

**Neden:** Kullanıcı bazı günler girmiyor ya da aksatıyor. Takvim modelinde her kaçan gün
"telafi" borcu olarak birikiyor, dönüş zorlaşıyordu. Yanlışlıkla işaretlenen ya da
kapatılan günü düzeltmenin de yolu yoktu.

**Şema:** `version: 2`, yeni `day` alanı (içinde bulunulan gün). Anahtar değişmedi
(`chunkla.progress.v1`). v1 kayıtları açılışta taşınır: ham hâli `chunkla.progress.v1.yedek-v1`
anahtarına yedeklenir, kullanıcı taşıma anındaki takvim gününde kalır (şaşırmasın diye),
eski boşluklar Defter'de "telafi" olarak durur ve kapatılabilir. Taşımadan sonra yeni
boşluk oluşmaz. `dateOfDay()` kaldırıldı; Seri şeridi günleri tamamlanma tarihine
(`doneAt`) göre sayar.

Önceki "gün numarası takvimle ilerler" davranışının yerini alır.

## 2026-09-19 — Alıştırmalarda birebir örtüşme kuralı

**Karar:** Çeviri alıştırmasında Türkçe cümle ile gizli İngilizce cevap **kelime kelime**
örtüşür. Türkçede olan her kelimenin İngilizcede karşılığı olmalı, tersi de geçerli.
Kullanıcı Türkçeyi çevirip cevabı açtığında kendi yazdığıyla aynısını görmeli.

**Neden:** İlk sürümde birçok çift gevşekti. "Biraz çaba göster." → "Make an effort."
gibi: Türkçedeki "biraz" İngilizcede yoktu, kullanıcı doğru çevirdiği hâlde cevabı farklı
görüyordu. Alıştırmanın işe yaraması kullanıcının kendi cevabını güvenle karşılaştırabilmesine
bağlı.

**İstisna:** Kalıbın kendisi. Deyimler doğası gereği birebir çevrilmez; "never mind" = "boş ver",
"a piece of cake" = "çocuk oyuncağı". Örtüşme kuralı kalıbın dışındaki kelimeler için geçerli.

**Uygulama:** 374 maddenin tamamı tek tek okundu, 92 maddede düzeltme yapıldı. Ayrıca özne
belirsizliği giderildi (Türkçe "O ...-di" hangi cevabı beklediğini söylemiyordu); bunlara
Ali, Ayşe, ablam gibi açık özneler eklendi. He/she tercihi kullanıcı için önemsiz, ama cümlenin
tek bir cevaba götürmesi önemli.

**Denetim:** `scratchpad/literal.js` (tek seferlik) Türkçe belirteçlerle ("biraz", "hiç",
"lütfen") İngilizce karşılıklarını karşılaştırıyor. Kalan 35 uyarının tamamı deyim kaynaklı
yanlış alarm.

**Sonuç:** 1122 cümlenin tamamı benzersiz, hiçbiri mevcut örneklerle çakışmıyor, hiçbiri
9 kelimeyi geçmiyor.

## 2026-09-19 — Alıştırma cevapları dokununca açılıyor

**Karar:** "Sen çevir" cümlelerinden birine dokununca altında İngilizcesi açılır, tekrar
dokununca kapanır. Her cümle ayrı ayrı açılır; kendi çevirini yazdıktan sonra tek tek
kontrol edebilirsin.

**Ayrıntılar:** Cevaplar detay paneli her açıldığında kapalı başlar. "SEN ÇEVİR" etiketinin
yanına "dokun, cevabı gör" ipucu eklendi, yoksa özelliğin varlığı fark edilmiyordu.
Cümleler artık `<button>`; bu hem klavye ve ekran okuyucu için doğru hem de panelin
aşağı çekilerek kapatılması hareketiyle çakışmayı kendiliğinden önlüyor.

**Veri değişmedi.** `practice[i].en` zaten vardı; ilk günden beri bu ihtimal için saklanıyordu.

## 2026-09-19 — Detay panelinde çeviri alıştırması

**Karar:** Detay panelinin en altına, mevcut üç örneğin ardından **3 Türkçe cümle** eklenir.
Kullanıcı bunları deftere İngilizceye çevirerek yazar. Üstteki hiçbir şey değişmedi.

**Görünüm:** Dalgalı ayraç + "SEN ÇEVİR" etiketi + üç cümle (serif italik, 21 px).
Etiket olmadan bu cümleler "İngilizcesi eksik kalmış örnek" gibi duruyordu.

**Veri:** Her maddeye `practice: [{ tr, en } × 3]` alanı eklendi. **`en` ekranda gösterilmez**;
doğrulayıcının cümlenin gerçekten kalıbı gerektirdiğini denetlemesi ve ileride "cevabı göster"
istenirse hazır olması için veride durur.

**Ölçü:** En fazla 9 kelime (elle yazılacak), mevcut örneklerden farklı, üçü ayrı zaman/kipte.
1122 cümlenin tamamı benzersiz; hiçbiri mevcut bir örnek cümleyle çakışmıyor.

**Denetim:** `validate-chunks.js` artık kalıbın İngilizce cümlede (çekimli hâlleriyle) geçip
geçmediğine bakıyor ve uzun cümleleri işaretliyor. Uyarılar hata değil, gözden geçirilecek
liste; şu an sıfır uyarı var. Doğrulayıcı kısaltmaları ("it's up to you" → "the decision is
up to you") ve kalıptaki çekimli sözcükleri ("used to" → "did you use to") yalın hâle indirip
karşılaştırıyor, böylece yanlış alarm vermiyor.

**Sonuç:** `chunks.js` 181 KB → 292 KB. Çevrimdışı önbellek bir kez indirdiği için sorun değil.

## 2026-09-17 — Arka plan çetelesinde eski günler soluk

**Karar:** 30 günlük çetele sayfasında bugünün grubu tasarımdaki gibi (`rgba(255,255,255,.7)`),
geçmiş günlerin grupları soluk (`.26`) çizilir.

**Gerekçe:** Sayfa dolunca 30 grup kalıp metninin arkasını tamamen kaplıyor ve İngilizce metin
okunmuyordu (tarayıcıda 390×844 ekranda denendi). Değiştirmek için `styles.css` → `.tally-group.past`.

## 2026-09-16 — Dağıtım: kurulabilir web uygulaması (PWA) + GitHub Pages

**Karar:** Mağaza yok. chunkla GitHub Pages'te yayınlanan bir web uygulamasıdır. Aynı adres
hem tarayıcıda açılır hem telefona uygulama olarak yüklenir (Android: Chrome "Uygulamayı yükle",
iOS: Safari "Ana Ekrana Ekle"). Kod GitHub'da herkese açık; LinkedIn'de canlı bağlantıyla
paylaşılacak.

**Gerekçe:** Kişisel kullanım ve arkadaşlarla paylaşım için mağaza incelemesi, geliştirici
hesabı ve kapalı test gereksiz yük. PWA tek kod tabanıyla Android, iOS ve masaüstünü kapsar,
güncellemeler anında herkese ulaşır, kurulum bir bağlantı kadar kolay.

**Sonuçları:**
- Capacitor, `android/`, `ios/`, `capacitor.config.json` ve `@capacitor/*` paketleri kaldırıldı.
  Projede hiç npm bağımlılığı yok.
- Depolama yeniden `localStorage`; açılışta `navigator.storage.persist()` istenir.
- `sw.js` geri geldi. `VERSION` elle artırılmaz: GitHub Actions yayın sırasında commit kimliğini
  yazar. Önbellek listesi `npm run sw:liste` ile üretilir, `npm run check` denetler.
- Yeni sürüm arka planda iner, kullanıcı uygulamadan çıkınca devreye girer; kullanım sırasında
  sayfa yenilenmez.
- Tüm yollar göreli (`./`), çünkü site `suedakurnaz.github.io/chunkla/` alt yolunda yayınlanır.
- Android geri tuşu History API ile yönetilir (bkz. TASARIM-ENTEGRASYON §9).
- iOS'ta veri kalıcılığı için uygulamanın ana ekrana eklenmesi önerilir: Safari, ana ekrana
  eklenmemiş sitelerin verisini uzun süre kullanılmayınca silebilir.

**Bilinen sınır:** İlerleme cihaza bağlıdır; telefon değişince veya tarayıcı verisi silinince
gider. Hesap ve senkronizasyon kapsam dışı kalmaya devam ediyor.

## 2026-09-16 — Tasarım: Claude Design dışa aktarımı temel alındı

**Karar:** `docs/tasarim/Chunk Defteri.dc.html` arayüzün görsel ve davranış kaynağıdır.
Dosya olduğu gibi kullanılmaz; düz HTML + CSS + JS olarak yeniden yazılır, mantık `core.js`'ten
gelir. Uygulama ayrıntıları `docs/TASARIM-ENTEGRASYON.md` içinde.

**Tasarımla kapanan açık sorular:**
- Gün, gün sonu kartındaki "Deftere yazdım" ile tamamlanır. Çetele işaretleri bundan bağımsızdır.
- Yanlış işaret aynı kalıba tekrar dokunarak geri alınır.
- Geçmiş ayrı ekran değil, Defter içinde "Günler" sekmesidir.

**PRD'de olmayıp tasarımla gelenler:** 5 adımlı tanıtım + "Başlayalım" giriş ekranı (yalnızca
ilk açılış), seri ekranında "kalıp çakıldı" ve "tam çetele" sayaçları, Defter'de gün bazlı
"Grup N" çetele grupları.

## 2026-09-16 — Haftalık tekrar zorunlu

**Karar:** Her 7. günde (7, 14, 21…) gün, o haftanın kalıpları baştan okunmadan kapatılamaz.
Tekrar destesinde işaretleme yoktur; sınav değil, okumadır. Haftalar takvime göre değil
başlangıç gününe göre sayılır (1-7, 8-14…). Tekrarın yapıldığı kaydedilir; uygulama kapansa da
yeniden istenmez. Telafi edilen 7. günler için de geçerlidir.

## 2026-09-16 — Arka plan çetelesi 30 günde bir sıfırlanır

**Karar:** Deste arkasındaki çeteleler 30 günlük sayfalar hâlinde gösterilir (1-30, 31-60…).
Yeni sayfa boş başlar. Defter, seri, "kalıp çakıldı" ve "tam çetele" sayaçları sıfırlanmaz.
"1 ay" gün numarasıyla 30 gün olarak yorumlandı, takvim ayı değil; böylece sayfa geçişi
kullanıcının gün sayısıyla hizalı kalır. Değiştirmek için `core.js` → `TALLY_PAGE_DAYS`.

**Risk:** 30 grup kalıp metninin arkasını doldurabilir; cihazda okunaklılık kontrol edilecek.

## 2026-09-16 — Seri ekranındaki haftalık şerit: tüm zamanlar

**Karar:** Pt…Pz hücreleri, bugüne kadar tamamlanan günlerin haftanın günlerine dağılımını
gösterir (prototipteki gibi). Beş haftadan sonra her hücre çaprazlı görünür; bu kabul edildi.

## 2026-09-16 — Paketleme: Capacitor 8 *(yerini aldı: "Dağıtım: kurulabilir web uygulaması")*

**Karar:** Uygulama Capacitor 8 ile Android (Google Play) ve iOS için paketlenir.
TWA planı bırakıldı.

**Gerekçe:** TWA yalnızca Android'de çalışır; hedef hem Play hem iOS. Capacitor aynı
`www/` klasöründen iki platformu da üretir. Capacitor 8 varsayılan olarak
targetSdk 36 kullanır (Play'de 31 Ağustos 2026'dan beri zorunlu). İçerik paketin
içinde geldiği için ilk açılıştan itibaren internetsiz çalışır.

**Bedeli:** `chunks.js`'e yapılan her ekleme yeni bir mağaza sürümü ve incelemesi
gerektirir. Liste toplu partiler hâlinde büyüdüğü için kabul edildi.

**Sonuçları:**
- `sw.js` native pakette kullanılmaz. DEVAM'daki "VERSION artır" kuralı yerini
  `versionCode` / `versionName` artırma kuralına bırakır.
- `manifest.json` ve `assetlinks.json` artık gerekli değil.
- iOS derlemesi için Xcode 26 kurulu bir Mac gerekir.

## 2026-09-16 — Depolama: Capacitor Preferences *(yerini aldı: "Dağıtım: kurulabilir web uygulaması")*

**Karar:** İlerleme tek bir anahtarda JSON olarak tutulur (PRD §9 korunur), ama
native ortamda `@capacitor/preferences` üzerinden yazılır. Tarayıcıda test
ederken `localStorage`'a düşer.

**Gerekçe:** iOS, WebView localStorage verisini yer darlığında silebilir; seri ve
çetele kaybı ürünün tek ölçütünü bozar.

**Anahtar:** `chunkla.progress.v1`

## 2026-09-16 — Günlük ifade sayısı: sabit 5

**Karar:** Günde 5 ifade. PRD §5'teki "3–8 arası ayarlanabilir" maddesi kapsam dışı.
Ayar ekranı yok.

**Sonuç:** N. gün her zaman listenin 5N−4 ile 5N arası maddeleridir (1'den sayarak).
Bir çetele grubu = bir gün = beş çizgi.

## 2026-09-16 — Arayüz: Claude Design belgesi bekleniyor *(yerini aldı: "Tasarım: Claude Design dışa aktarımı temel alındı")*

**Karar:** Arayüzün temeli Claude Design'da hazırlanan belge olacak. Belge gelene
kadar `www/index.html` yalnızca derlemeyi ve çekirdek mantığı doğrulayan geçici
bir sayfadır; tasarım kararı içermez.

---

## Açık sorular

1. Liste bitince başa dönme: 374 maddede 75. gün, listenin son 4 maddesi ve ilk
   maddesinden oluşur. Bu kabul mü, yoksa liste 5'in katına mı tamamlanmalı?
2. İkon: `assets/icon.svg` mevcut logonun sadeleştirilmiş vektör çizimi, geçici. Nihai ikon
   gelirse `www/icons/` altındaki PNG'ler yeniden üretilir.
3. Yükleme yönlendirmesi: tarayıcıdan açan kullanıcıya "telefona yükle" nasıl gösterilecek?
4. Yedekleme: ilerlemeyi dosya olarak dışa aktarma / geri yükleme olacak mı?
5. Lisans: kod ve `chunks.js` içeriği hangi lisansla paylaşılacak?
