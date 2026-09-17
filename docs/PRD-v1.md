# chunkla — günde beş İngilizce kalıp
Ürün Gereksinim Dokümanı · v1

> Orijinal PDF'in metin dökümüdür. Sayfa görüntüleri `prd-v1-sayfalar/` klasöründe.
> Sonradan alınan kararlar bu belgeyi değiştirmez; onlar `KARARLAR.md` içinde.

Türkçe konuşan tek bir kullanıcının, İngilizce kalıp ifadeleri her akşam telefonundan okuyup kağıt deftere geçirdiği, tek dosyalık bir uygulama.

## 1. Amaç

Uygulamanın tek işi, günün beş kalıbını okunaklı biçimde göstermek ve kullanıcının bunları deftere yazmasını kolaylaştırmak. Ölçme, sınama veya puanlama yok; ekranın görevi okunmak ve kopyalanmak.

Başarı ölçütü tek cümleyle: kullanıcı uygulamayı her akşam açıp beş kalıbı defterine geçiriyorsa ürün işini yapıyor demektir.

## 2. Kullanıcı ve kullanım anı

Tek kişi. Türkçe konuşuyor, İngilizcesini kalıp ifadeler üzerinden geliştiriyor. Uygulamayı günde bir kez, çoğunlukla akşam, birkaç dakikalığına telefonundan açıyor. Yanında kağıt defteri var; gördüğü cümleleri elle yazıyor.

## 3. Kapsam dışı

- Test, quiz, puan, rozet, seviye.
- Ses, telaffuz, bildirim, hatırlatma.
- Hesap, sunucu, veritabanı, senkronizasyon.
- Sosyal özellikler, paylaşım, arkadaş listesi.

## 4. İçerik modeli

İçerik, JavaScript içinde sabit bir dizide tutulur. Şu an 20 madde var; her madde şu alanlara sahiptir:

| Alan | Tip | Açıklama |
|---|---|---|
| group | metin (TR) | Kategori adı, örn. "Görüş belirtme". |
| chunk | metin (EN) | Kalıp ifadenin kendisi. |
| tr | metin (TR) | Türkçe karşılığı. |
| note | metin (TR) | Tek cümlelik kullanım notu. |
| examples | 3 × {en, tr} | Üç örnek cümle; İngilizcesi ve Türkçesi. |

## 5. Gün mantığı

Uygulamanın ilk açıldığı gün 1. gündür; gün numarası o tarihten itibaren hesaplanır. N. gün, listedeki 5N−4 ile 5N arası maddeleri kapsar. Liste bittiğinde baştan döner.

Atlanan günler kaybolmaz; geçmiş listesinden açılıp telafi edilebilir.

Günlük kalıp sayısı ayarlanabilir (3–8); gruplama da bu sayıya göre bölünür.

## 6. Ekranlar

| Ekran | İçerik |
|---|---|
| Seri ekranı | Günde ilk girişte açılır. Büyük seri sayısı, "gün üst üste" ve bugünün kaçıncı gün olduğu; tek buton ile güne giriş. |
| Kalıp destesi | Ana ekran. Ortada İngilizce kalıp, hemen altında farklı tonda ve yazı stilinde Türkçesi. Başka öğe yok. Sağa/sola kaydırarak sıradaki kalıp. |
| Detay | Yukarı kaydırınca ya da "Detay" ile açılır: kategori, kalıp, Türkçesi, kullanım notu ve üç örnek cümle. İngilizce cümleler en baskın katman, Türkçe çeviriler soluk. |
| Gün sonu | Beşinci kalıptan sonraki panel: tek buton ile "Deftere yazdım". |
| Defter | İşaretlenmiş kalıplar gruplar hâlinde. Her grup katlanabilir bir kart: küçük çetelesi, kalıp sayısı ve "Çalış" butonu. Kart açılınca kalıplar listelenir; birine dokununca o grup deste olarak açılır. |
| Geçmiş | Günler listesi; durum etiketleri (tamam / telafi et / bugün). Tıklanınca o günün beş kalıbı açılır. |

## 7. Etkileşimler

- Sağa / sola kaydırma: kalıplar arasında geçiş.
- Yukarı kaydırma: anlam, not ve örnek cümleler.
- Ekrana dokunma: o kalıbı çeteleye işler. Sol alttaki el yazısı "chunkla" çizimi bu hareketi anlatır; ayrı bir buton yoktur.
- Geri bildirim: dokunulduğunda ekran bir an beyazlar, ardından sayfaya yeni bir çetele çizgisi çizilir. İşaretin durduğu yer çeteleden okunur.
- Klavye: sağ/sol ok kalıp değiştirir, yukarı ok detayı açar, aşağı ok ve Esc kapatır.

## 8. Çetele ve seri

Her işaretlenen kalıp bir çetele çizgisidir; çizgiler kalemle çizilmiş gibi eğri ve sayfanın boş alanlarına dağılır.

Beş çizgi bir grup yapar: dört dik çizgi ve üzerine bir çapraz. Bir grup bir günün beş kalıbına karşılık gelir.

Seri, art arda giriş yapılan gün sayısıdır. Aynı gün içinde tekrar açmak seriyi değiştirmez; bir gün atlanırsa seri sıfırlanıp yeniden başlar.

Seri, üst şeritte alev işaretinin yanında; kalıp sayısı defter işaretinin yanında görünür.

## 9. Depolama

Tüm ilerleme tek bir localStorage anahtarında tutulur: başlangıç tarihi, tamamlanan günler, işaretlenen kalıplar, seri sayısı ve son giriş tarihi. Başka hiçbir depolama, çerez veya ağ isteği yoktur. Uygulama tek bir kendi kendine yeten HTML dosyasıdır; sunucu, veritabanı ve derleme adımı gerektirmez.

## 10. Tasarım kuralları

- Zemin tek renk mavi, metin beyaz; akşam okumasına uygun, düşük parlaklık algısı.
- İngilizce metin en okunaklı ve en baskın katman; Türkçe karşılıklar farklı yazı stilinde ve daha sönük.
- Önce telefon ekranı; geniş ekranda içerik ortalanır, tek sütun genişliğini korur.
- Dokunma hedefleri en az 44 piksel. Klavye odağı her zaman görünür.
- Hareket azaltma tercihi açıksa geçişler ve çizim animasyonu kapanır.
- Arayüz metinleri Türkçe, içerik İngilizce.

## 11. Açık sorular

- İçerik 20 maddeden sonra başa dönüyor. Liste büyütülecek mi, yoksa tekrar bilinçli bir davranış mı?
- Yanlışlıkla işaretlenen bir kalıp nasıl geri alınsın — tekrar dokunmak yeterli mi?
- Çeteleler günden güne birikmeye devam mı etsin, yoksa belli bir sayıdan sonra sıfırlanıp yeni sayfa mı açılsın?
