/*
  chunks.js — Çalışma listesi. 100 chunk'lık tablo + 32 ek ifade.

  Sıra önemli: 1. gün listenin ilk maddesi, 2. gün ikincisi gösterilir.
  Liste bitince başa döner.

  {
    group:    "hangi kategori",
    chunk:    "ifadenin kendisi",
    tr:       "Türkçe karşılığı",
    note:     "nerede, nasıl kullanılır",
    examples: [ { en: "...", tr: "..." }, x3 ]
  }
*/

const CHUNKS = [

  /* ——— Fiil temelli chunks (collocations) · 1-20 ——— */

  {
    group: "Fiil temelli",
    chunk: "make a decision",
    tr: "karar vermek",
    note: "Amerikan İngilizcesinde fiil daima 'make'tir; 'take a decision' İngiliz ve resmî metinlerde görülür.",
    examples: [
      { en: "We need to make a decision today.", tr: "Bugün bir karar vermemiz lazım." },
      { en: "She made the right decision.", tr: "Doğru kararı verdi." },
      { en: "Don't make a decision when you're angry.", tr: "Sinirliyken karar verme." }
    ],
    practice: [
      { tr: "Acele karar verme.", en: "Don't make a decision in a hurry." },
      { tr: "Kararımı dün akşam verdim.", en: "I made my decision last night." },
      { tr: "Ne zaman karar vereceksin?", en: "When are you going to make a decision?" }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "do me a favor",
    tr: "bana bir iyilik yap",
    note: "Rica kalıbı. 'Can you do me a favor?' diye başlayıp asıl isteği sonra söylemek en doğal kullanımdır.",
    examples: [
      { en: "Can you do me a favor?", tr: "Bana bir iyilik yapar mısın?" },
      { en: "Do me a favor and close the window.", tr: "Bir iyilik yap da pencereyi kapat." },
      { en: "He did me a huge favor last week.", tr: "Geçen hafta bana büyük bir iyilik yaptı." }
    ],
    practice: [
      { tr: "Bir iyilik yap, şunu imzala.", en: "Do me a favor and sign this." },
      { tr: "Bana büyük bir iyilik yaptın.", en: "You did me a big favor." },
      { tr: "Kardeşim bana bir iyilik yaptı.", en: "My brother did me a favor." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "take a break",
    tr: "ara vermek",
    note: "Kısa mola için. Süre eklemek istersen 'take a five-minute break' dersin.",
    examples: [
      { en: "Let's take a short break.", tr: "Kısa bir ara verelim." },
      { en: "You've been working for hours, take a break.", tr: "Saatlerdir çalışıyorsun, bir ara ver." },
      { en: "I took a break from social media.", tr: "Sosyal medyaya bir ara verdim." }
    ],
    practice: [
      { tr: "Beş dakika ara verelim.", en: "Let's take a five-minute break." },
      { tr: "Neden biraz ara vermiyorsun?", en: "Why don't you take a break?" },
      { tr: "Öğleden sonra uzun bir ara verdim.", en: "I took a long break in the afternoon." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "have a look",
    tr: "bir göz atmak",
    note: "Neye bakıldığını söylerken 'at' gelir: 'have a look at this'. Amerikan İngilizcesinde 'take a look' daha yaygındır.",
    examples: [
      { en: "Have a look at this photo.", tr: "Şu fotoğrafa bir bak." },
      { en: "Can I have a look?", tr: "Bir bakabilir miyim?" },
      { en: "I had a quick look at the report.", tr: "Rapora hızlıca göz attım." }
    ],
    practice: [
      { tr: "Şu listeye bir göz at.", en: "Have a look at this list." },
      { tr: "Akşam bir göz atarım.", en: "I'll have a look this evening." },
      { tr: "Menüye göz attın mı?", en: "Have you had a look at the menu?" }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "catch a cold",
    tr: "soğuk almak, üşütmek",
    note: "Hastalığın kapılma anını anlatır; hasta olduğun süre için 'have a cold' kullanılır.",
    examples: [
      { en: "Wear a coat or you'll catch a cold.", tr: "Mont giy yoksa üşüteceksin." },
      { en: "I caught a cold last weekend.", tr: "Geçen hafta sonu üşüttüm." },
      { en: "She catches a cold every winter.", tr: "Her kış soğuk alıyor." }
    ],
    practice: [
      { tr: "Yağmurda üşüttüm.", en: "I caught a cold in the rain." },
      { tr: "Dikkat et, üşüteceksin.", en: "Be careful, you'll catch a cold." },
      { tr: "Çocuklar okulda kolay üşütüyor.", en: "Children catch a cold easily at school." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "keep a secret",
    tr: "sır tutmak",
    note: "Sırrı söyleyen taraf için 'tell a secret', tutan taraf için 'keep'tir.",
    examples: [
      { en: "Can you keep a secret?", tr: "Sır tutabilir misin?" },
      { en: "He kept the secret for years.", tr: "Yıllarca sırrı sakladı." },
      { en: "She's bad at keeping secrets.", tr: "Sır tutmakta pek iyi değil." }
    ],
    practice: [
      { tr: "Sır tutacağına söz ver.", en: "Promise me you'll keep the secret." },
      { tr: "Ondan sır tutmak istemiyorum.", en: "I don't want to keep a secret from him." },
      { tr: "Sır tutmak bazen zordur.", en: "Keeping a secret is sometimes hard." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "make a mistake",
    tr: "hata yapmak",
    note: "Fiil 'do' değil 'make'tir; bu Türkçe konuşanların en sık takıldığı yerlerden biri.",
    examples: [
      { en: "Everyone makes mistakes.", tr: "Herkes hata yapar." },
      { en: "I made a mistake on the form.", tr: "Formda bir hata yaptım." },
      { en: "Don't make the same mistake twice.", tr: "Aynı hatayı iki kere yapma." }
    ],
    practice: [
      { tr: "Büyük bir hata yaptım.", en: "I made a big mistake." },
      { tr: "Hata yapmaktan korkma.", en: "Don't be afraid to make mistakes." },
      { tr: "Hesapta bir hata yapmış.", en: "He made a mistake in the calculation." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "pay attention",
    tr: "dikkatini vermek",
    note: "Neye dikkat edildiğini söylerken 'to' gelir: 'pay attention to the details'.",
    examples: [
      { en: "Pay attention to the details.", tr: "Detaylara dikkat et." },
      { en: "He wasn't paying attention.", tr: "Dikkatini vermiyordu." },
      { en: "Nobody paid attention to the warning.", tr: "Kimse uyarıya kulak asmadı." }
    ],
    practice: [
      { tr: "Yola dikkat et.", en: "Pay attention to the road." },
      { tr: "Derste dikkatimi veremedim.", en: "I couldn't pay attention in class." },
      { tr: "Lütfen biraz dikkat verin.", en: "Please pay a little attention." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "get lost",
    tr: "kaybolmak",
    note: "İki farklı kullanımı var: gerçekten yolu kaybetmek ve sert bir şekilde 'çek git' demek. Tonu bağlam belirler.",
    examples: [
      { en: "We got lost on the way there.", tr: "Oraya giderken kaybolduk." },
      { en: "It's easy to get lost in this city.", tr: "Bu şehirde kaybolmak kolay." },
      { en: "I got lost in the middle of the lecture.", tr: "Dersin ortasında kopmuştum." }
    ],
    practice: [
      { tr: "Ormanda kaybolduk.", en: "We got lost in the forest." },
      { tr: "Kaybolursan beni ara.", en: "Call me if you get lost." },
      { tr: "Neredeyse kayboluyordum.", en: "I almost got lost." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "take a seat",
    tr: "buyurun oturun",
    note: "'Sit down'un kibar hâli. Ofiste, doktorda, mülakatta bunu duyarsın.",
    examples: [
      { en: "Please take a seat.", tr: "Lütfen oturun." },
      { en: "Take a seat, he'll be with you shortly.", tr: "Oturun, birazdan gelecek." },
      { en: "We took our seats before the show.", tr: "Gösteriden önce yerlerimize oturduk." }
    ],
    practice: [
      { tr: "Buyurun, şuraya oturun.", en: "Please take a seat over there." },
      { tr: "Herkes yerine oturdu.", en: "Everyone took their seats." },
      { tr: "Oturmak ister misiniz?", en: "Would you like to take a seat?" }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "make an effort",
    tr: "çaba sarf etmek",
    note: "Arkasından mastar gelir: 'make an effort to be on time'.",
    examples: [
      { en: "Make an effort to be on time.", tr: "Vaktinde gelmeye gayret et." },
      { en: "She made a real effort to help.", tr: "Yardım etmek için gerçekten çabaladı." },
      { en: "At least he made an effort.", tr: "En azından çaba gösterdi." }
    ],
    practice: [
      { tr: "Biraz çaba göster.", en: "Make an effort." },
      { tr: "Anlamak için çaba sarf etti.", en: "She made an effort to understand." },
      { tr: "Hiç çaba göstermediler.", en: "They didn't make any effort." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "do the laundry",
    tr: "çamaşır yıkamak",
    note: "Ev işlerinde fiil 'do'dur: do the dishes, do the cleaning, do the laundry.",
    examples: [
      { en: "I need to do the laundry today.", tr: "Bugün çamaşır yıkamam lazım." },
      { en: "Who does the laundry in your house?", tr: "Sizde çamaşırı kim yıkıyor?" },
      { en: "He did the laundry while I cooked.", tr: "Ben yemek yaparken o çamaşırı yıkadı." }
    ],
    practice: [
      { tr: "Pazar günleri çamaşır yıkarım.", en: "I do the laundry on Sundays." },
      { tr: "Çamaşırları yıkadın mı?", en: "Did you do the laundry?" },
      { tr: "Çamaşır yıkamayı sevmem.", en: "I don't like doing the laundry." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "go for a walk",
    tr: "yürüyüşe çıkmak",
    note: "Aynı kalıp başka şeylerle de çalışır: go for a run, go for a drive, go for a coffee.",
    examples: [
      { en: "Let's go for a walk after dinner.", tr: "Yemekten sonra yürüyüşe çıkalım." },
      { en: "I go for a walk every morning.", tr: "Her sabah yürüyüşe çıkıyorum." },
      { en: "We went for a long walk by the river.", tr: "Nehir kenarında uzun bir yürüyüş yaptık." }
    ],
    practice: [
      { tr: "Akşam yürüyüşe çıkmak ister misin?", en: "Do you want to go for a walk this evening?" },
      { tr: "Dün parkta yürüyüşe çıktık.", en: "We went for a walk in the park yesterday." },
      { tr: "Hava güzelse yürüyüşe çıkarım.", en: "I go for a walk if the weather is nice." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "make a phone call",
    tr: "telefon etmek",
    note: "Kısaca 'make a call' de denir. Aranan kişiyi söylerken 'call someone' yapısına geçmek daha doğaldır.",
    examples: [
      { en: "I have to make a phone call.", tr: "Bir telefon etmem lazım." },
      { en: "She made a few calls this morning.", tr: "Bu sabah birkaç telefon görüşmesi yaptı." },
      { en: "Can I make a quick call?", tr: "Kısa bir telefon açabilir miyim?" }
    ],
    practice: [
      { tr: "Hemen bir telefon etmeliyim.", en: "I have to make a phone call right now." },
      { tr: "Dışarıda birkaç telefon etti.", en: "He made a few phone calls outside." },
      { tr: "Toplantıdan önce bir telefon edeyim.", en: "Let me make a phone call before the meeting." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "take a chance",
    tr: "şansını denemek, riske girmek",
    note: "Sonucu belirsiz bir işe girişmeyi anlatır; kime güvenerek risk aldığını söylerken 'take a chance on' dersin.",
    examples: [
      { en: "I decided to take a chance.", tr: "Şansımı denemeye karar verdim." },
      { en: "They took a chance on a young player.", tr: "Genç bir oyuncuya şans verdiler." },
      { en: "Don't take any chances with your health.", tr: "Sağlığınla riske girme." }
    ],
    practice: [
      { tr: "Bazen riske girmen gerekir.", en: "Sometimes you have to take a chance." },
      { tr: "Bana bir şans tanıdı.", en: "He took a chance on me." },
      { tr: "Riske girmekten korktum.", en: "I was afraid to take a chance." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "give someone a hand",
    tr: "birine yardım etmek",
    note: "Somut, elle tutulur yardım için kullanılır. 'Give me a hand with this' en sık hâlidir.",
    examples: [
      { en: "Can you give me a hand with this box?", tr: "Şu kutuda bana yardım eder misin?" },
      { en: "He gave us a hand in the kitchen.", tr: "Mutfakta bize yardım etti." },
      { en: "I'll give you a hand tomorrow.", tr: "Yarın sana yardım ederim." }
    ],
    practice: [
      { tr: "Bana biraz yardım eder misin?", en: "Can you give me a hand?" },
      { tr: "Taşınırken bize yardım etti.", en: "She gave us a hand with the move." },
      { tr: "Kimse ona yardım etmedi.", en: "Nobody gave him a hand." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "keep in touch",
    tr: "irtibatta kalmak",
    note: "Vedalaşırken sık geçer. Bağın kopması için 'lose touch with' kullanılır.",
    examples: [
      { en: "Let's keep in touch.", tr: "İrtibatta kalalım." },
      { en: "We've kept in touch for years.", tr: "Yıllardır görüşüyoruz." },
      { en: "I lost touch with him after school.", tr: "Okuldan sonra onunla bağlantımız koptu." }
    ],
    practice: [
      { tr: "Lütfen benimle irtibatta kal.", en: "Please keep in touch with me." },
      { tr: "Eski arkadaşlarımla irtibatta kalırım.", en: "I keep in touch with my old friends." },
      { tr: "İrtibatta kalacağına söz ver.", en: "Promise me you will keep in touch." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "lose your temper",
    tr: "öfkelenmek, tepesi atmak",
    note: "İyelik değişir: 'I lost my temper', 'he lost his temper'. Kime kızdığını söylerken 'with' gelir.",
    examples: [
      { en: "I lost my temper and shouted.", tr: "Tepem attı ve bağırdım." },
      { en: "He never loses his temper.", tr: "O asla öfkelenmez." },
      { en: "She lost her temper with the kids.", tr: "Çocuklara sinirlendi." }
    ],
    practice: [
      { tr: "Toplantıda tepesi attı.", en: "He lost his temper in the meeting." },
      { tr: "Sakın öfkelenme.", en: "Don't lose your temper." },
      { tr: "Annem nadiren sinirlenir.", en: "My mother rarely loses her temper." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "break the ice",
    tr: "buzları eritmek, ortamı açmak",
    note: "Yeni tanışan ya da gergin bir grupta ilk teması kurmak. 'icebreaker' ismi buradan gelir.",
    examples: [
      { en: "He told a joke to break the ice.", tr: "Buzları eritmek için bir espri yaptı." },
      { en: "Someone had to break the ice.", tr: "Birinin ortamı açması gerekiyordu." },
      { en: "That question broke the ice nicely.", tr: "O soru buzları güzel eritti." }
    ],
    practice: [
      { tr: "Buzları eritmek için ne yapalım?", en: "What should we do to break the ice?" },
      { tr: "Küçük bir oyun buzları eritti.", en: "A short game broke the ice." },
      { tr: "Kimse buzları eritmeye cesaret edemedi.", en: "Nobody dared to break the ice." }
    ]
  },
  {
    group: "Fiil temelli",
    chunk: "make a difference",
    tr: "fark yaratmak",
    note: "Olumsuzu da çok kullanılır: 'it doesn't make any difference' yani 'hiç fark etmez'.",
    examples: [
      { en: "Small changes make a big difference.", tr: "Küçük değişiklikler büyük fark yaratır." },
      { en: "You really made a difference here.", tr: "Burada gerçekten fark yarattın." },
      { en: "It doesn't make any difference to me.", tr: "Benim için hiç fark etmez." }
    ],
    practice: [
      { tr: "Bir saat fark etmez.", en: "An hour doesn't make a difference." },
      { tr: "Öğretmenler fark yaratır.", en: "Teachers make a difference." },
      { tr: "Sen de fark yaratabilirsin.", en: "You can make a difference too." }
    ]
  },

  /* ——— Zaman ve mekan · 21-30 ——— */

  {
    group: "Zaman ve mekan",
    chunk: "in the meantime",
    tr: "bu sırada, o esnada",
    note: "Beklenen bir şey olana kadar geçen süreyi doldurur; genelde bir talimat ya da öneriyle birlikte gelir.",
    examples: [
      { en: "The food is coming. In the meantime, have some bread.", tr: "Yemek geliyor. Bu arada biraz ekmek al." },
      { en: "He'll arrive at six. In the meantime, we'll wait here.", tr: "Altıda gelir. O esnada burada bekleriz." },
      { en: "In the meantime, nothing changed.", tr: "Bu sırada hiçbir şey değişmedi." }
    ],
    practice: [
      { tr: "Ben yemek yapayım, bu arada masayı kur.", en: "Let me cook; in the meantime, set the table." },
      { tr: "Bu sırada biraz dinlen.", en: "In the meantime, get some rest." },
      { tr: "O esnada yağmur başladı.", en: "In the meantime, it started to rain." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "on the other hand",
    tr: "öte yandan",
    note: "İki tarafı karşılaştırırken ikinci tarafı açar; ilk tarafı 'on the one hand' ile açmak zorunlu değildir.",
    examples: [
      { en: "It's expensive. On the other hand, it lasts longer.", tr: "Pahalı. Öte yandan daha uzun dayanıyor." },
      { en: "On the other hand, he might say no.", tr: "Öte yandan hayır da diyebilir." },
      { en: "The city is loud; on the other hand, it's alive.", tr: "Şehir gürültülü; öte yandan capcanlı." }
    ],
    practice: [
      { tr: "Küçük ama öte yandan ucuz.", en: "It's small, but on the other hand it's cheap." },
      { tr: "Öte yandan zamanımız az.", en: "On the other hand, we don't have much time." },
      { tr: "İş zor; öte yandan maaş iyi.", en: "The job is hard; on the other hand the pay is good." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "sooner or later",
    tr: "er ya da geç",
    note: "Zamanı belirsiz ama olacağı kesin şeyler için; genelde bir uyarı tonu taşır.",
    examples: [
      { en: "Sooner or later, he'll find out.", tr: "Er ya da geç öğrenecek." },
      { en: "You'll have to decide sooner or later.", tr: "Er ya da geç karar vermen gerekecek." },
      { en: "Sooner or later everyone makes that mistake.", tr: "Er ya da geç herkes o hatayı yapar." }
    ],
    practice: [
      { tr: "Er ya da geç pes edecek.", en: "Sooner or later he will give up." },
      { tr: "Bu sorunu er ya da geç çözmeliyiz.", en: "We must solve this problem sooner or later." },
      { tr: "Er ya da geç yağmur yağacak.", en: "Sooner or later it will rain." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "all day long",
    tr: "gün boyu",
    note: "'long' vurguyu artırır: sadece uzun değil, bıktırıcı derecede uzun. Aynı kalıp 'all night long' diye de gelir.",
    examples: [
      { en: "It rained all day long.", tr: "Gün boyu yağmur yağdı." },
      { en: "He plays that song all day long.", tr: "O şarkıyı gün boyu çalıyor." },
      { en: "I was on my feet all day long.", tr: "Gün boyu ayaktaydım." }
    ],
    practice: [
      { tr: "Gün boyu çalıştım.", en: "I worked all day long." },
      { tr: "Bebek gün boyu ağladı.", en: "The baby cried all day long." },
      { tr: "Gün boyu beklemek istemiyorum.", en: "I don't want to wait all day long." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "from time to time",
    tr: "zaman zaman",
    note: "Düzensiz ama tekrar eden sıklık. Cümlenin başında da sonunda da durabilir.",
    examples: [
      { en: "We meet from time to time.", tr: "Zaman zaman görüşürüz." },
      { en: "From time to time she calls her old teacher.", tr: "Zaman zaman eski öğretmenini arar." },
      { en: "It happens from time to time.", tr: "Ara sıra oluyor." }
    ],
    practice: [
      { tr: "Zaman zaman kitap okurum.", en: "I read books from time to time." },
      { tr: "Zaman zaman hata yaparız.", en: "We make mistakes from time to time." },
      { tr: "Zaman zaman denize giderim.", en: "I go to the sea from time to time." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "once in a while",
    tr: "arada bir",
    note: "'from time to time'dan biraz daha seyrek hissettirir. 'every once in a while' de aynı anlamdadır.",
    examples: [
      { en: "I eat out once in a while.", tr: "Arada bir dışarıda yerim." },
      { en: "Once in a while you need a day off.", tr: "Arada bir izin günü lazım." },
      { en: "He visits us every once in a while.", tr: "Arada sırada bizi ziyaret eder." }
    ],
    practice: [
      { tr: "Arada bir sinemaya giderim.", en: "I go to the cinema once in a while." },
      { tr: "Arada bir onu düşünürüm.", en: "I think about him once in a while." },
      { tr: "Arada bir tatlı yemek zararsız.", en: "Eating dessert once in a while is harmless." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "at the end of the day",
    tr: "netice itibarıyla, günün sonunda",
    note: "Genelde saat anlamında değil, 'her şey söylenip bittiğinde' anlamında kullanılır.",
    examples: [
      { en: "At the end of the day, it's your choice.", tr: "Netice itibarıyla bu senin tercihin." },
      { en: "At the end of the day, what matters is health.", tr: "Günün sonunda önemli olan sağlık." },
      { en: "We argued, but at the end of the day we agreed.", tr: "Tartıştık ama sonuçta anlaştık." }
    ],
    practice: [
      { tr: "Netice itibarıyla herkes kazandı.", en: "At the end of the day, everyone won." },
      { tr: "Günün sonunda para her şey değil.", en: "At the end of the day, money isn't everything." },
      { tr: "Sonuçta bu sadece bir oyun.", en: "At the end of the day, it's only a game." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "right away",
    tr: "hemen, derhal",
    note: "Konuşma dilinde 'immediately' yerine geçer. Cevap olarak tek başına da kullanılır.",
    examples: [
      { en: "I'll do it right away.", tr: "Hemen yapıyorum." },
      { en: "Call me right away if anything changes.", tr: "Bir şey değişirse hemen ara." },
      { en: "She noticed it right away.", tr: "Anında fark etti." }
    ],
    practice: [
      { tr: "Hemen buraya gel.", en: "Come here right away." },
      { tr: "Doktor hemen geldi.", en: "The doctor came right away." },
      { tr: "Cevabı hemen göndereceğim.", en: "I will send the answer right away." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "in the long run",
    tr: "uzun vadede",
    note: "Şimdi zor ama sonrası iyi olacak anlamını taşır. Kısa vade için karşıtı 'in the short run'dır.",
    examples: [
      { en: "It's expensive, but it saves money in the long run.", tr: "Pahalı ama uzun vadede para kazandırıyor." },
      { en: "In the long run, this decision will help us.", tr: "Uzun vadede bu karar bize yarayacak." },
      { en: "Studying every day pays off in the long run.", tr: "Her gün çalışmak uzun vadede işe yarıyor." }
    ],
    practice: [
      { tr: "Uzun vadede daha ucuz.", en: "It's cheaper in the long run." },
      { tr: "Sabır uzun vadede kazandırır.", en: "Patience pays off in the long run." },
      { tr: "Uzun vadede pişman olursun.", en: "You'll regret it in the long run." }
    ]
  },
  {
    group: "Zaman ve mekan",
    chunk: "by the way",
    tr: "bu arada, aklıma gelmişken",
    note: "Konuyu yan bir şeye kaydırırken kullanılır. Yazışmada 'btw' diye kısaltılır.",
    examples: [
      { en: "By the way, did you call her?", tr: "Bu arada, onu aradın mı?" },
      { en: "That's a nice jacket, by the way.", tr: "Bu arada güzel ceket." },
      { en: "By the way, the meeting moved to Friday.", tr: "Aklıma gelmişken, toplantı cumaya kaydı." }
    ],
    practice: [
      { tr: "Bu arada, anahtarını unuttun.", en: "By the way, you forgot your key." },
      { tr: "Bu arada yarın izinliyim.", en: "By the way, I'm off tomorrow." },
      { tr: "Aklıma gelmişken, çok teşekkürler.", en: "By the way, thank you very much." }
    ]
  },

  /* ——— Günlük konuşma kalıpları · 31-45 ——— */

  {
    group: "Günlük konuşma",
    chunk: "as far as I know",
    tr: "bildiğim kadarıyla",
    note: "Söylediğinden tam emin olmadığını baştan belirtir; yazışmada 'AFAIK' diye kısaltılır.",
    examples: [
      { en: "As far as I know, the office is closed.", tr: "Bildiğim kadarıyla ofis kapalı." },
      { en: "He's still working there, as far as I know.", tr: "Bildiğim kadarıyla hâlâ orada çalışıyor." },
      { en: "As far as I know, nothing has changed.", tr: "Bildiğim kadarıyla bir şey değişmedi." }
    ],
    practice: [
      { tr: "Bildiğim kadarıyla henüz gelmedi.", en: "As far as I know, he hasn't come yet." },
      { tr: "Bildiğim kadarıyla giriş ücretsiz.", en: "As far as I know, the entrance is free." },
      { tr: "Bildiğim kadarıyla kimse bilmiyor.", en: "As far as I know, nobody knows." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "to be honest",
    tr: "dürüst olmak gerekirse",
    note: "Genelde beklenmedik ya da hoşa gitmeyecek bir fikir söylemeden önce gelir.",
    examples: [
      { en: "To be honest, I didn't like it.", tr: "Dürüst olmak gerekirse beğenmedim." },
      { en: "To be honest, I forgot.", tr: "Açıkçası unuttum." },
      { en: "I'm tired, to be honest.", tr: "Doğrusu yorgunum." }
    ],
    practice: [
      { tr: "Dürüst olmak gerekirse sıkıldım.", en: "To be honest, I was bored." },
      { tr: "Açıkçası ondan hoşlanmıyorum.", en: "To be honest, I don't like him." },
      { tr: "Doğrusu hiç hazırlanmadım.", en: "To be honest, I didn't prepare at all." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "never mind",
    tr: "boş ver, zararı yok",
    note: "İki yerde: özür dileyeni rahatlatmak ve söylediğin şeyi geri almak.",
    examples: [
      { en: "Never mind, it's not important.", tr: "Boş ver, önemli değil." },
      { en: "Never mind, I found it.", tr: "Boş ver, buldum." },
      { en: "Never mind what he said.", tr: "Onun dediğine aldırma." }
    ],
    practice: [
      { tr: "Boş ver, ben hallederim.", en: "Never mind, I'll handle it." },
      { tr: "Boş ver, sonra anlatırım.", en: "Never mind, I'll tell you later." },
      { tr: "Geciktim, kusura bakma. — Zararı yok.", en: "I'm late, sorry. — Never mind." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "long story short",
    tr: "uzun lafın kısası",
    note: "Uzun bir anlatımı kesip sonuca atlarken kullanılır; tam hâli 'to make a long story short'tur.",
    examples: [
      { en: "Long story short, we missed the flight.", tr: "Uzun lafın kısası uçağı kaçırdık." },
      { en: "Long story short, it didn't work.", tr: "Kısacası, olmadı." },
      { en: "Long story short, she got the job.", tr: "Uzun lafın kısası, işi aldı." }
    ],
    practice: [
      { tr: "Uzun lafın kısası param bitti.", en: "Long story short, I ran out of money." },
      { tr: "Kısacası, yeni bir ev aldık.", en: "Long story short, we bought a new house." },
      { tr: "Uzun lafın kısası kabul etmedim.", en: "Long story short, I didn't accept." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "it's up to you",
    tr: "sana kalmış, sen bilirsin",
    note: "Kararı karşıya bırakır. 'It's up to me to do it' derken ise sorumluluk anlamına kayar.",
    examples: [
      { en: "It's up to you where we eat.", tr: "Nerede yiyeceğimiz sana kalmış." },
      { en: "Stay or go, it's up to you.", tr: "Kal ya da git, sen bilirsin." },
      { en: "It's up to us to fix this.", tr: "Bunu düzeltmek bize düşüyor." }
    ],
    practice: [
      { tr: "Ne zaman gideceğimiz sana kalmış.", en: "When we go is up to you." },
      { tr: "Sen bilirsin, ben karışmam.", en: "It's up to you, I won't interfere." },
      { tr: "Karar tamamen sana kalmış.", en: "The decision is completely up to you." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "I don't think so",
    tr: "sanmıyorum",
    note: "İngilizcede olumsuzluk baştaki fiile takılır; 'I think not' kalıbı çok resmî ve eskidir.",
    examples: [
      { en: "Is the shop open? I don't think so.", tr: "Dükkân açık mı? Sanmıyorum." },
      { en: "I don't think so, but let me check.", tr: "Sanmıyorum ama bir bakayım." },
      { en: "Will he come? I don't think so.", tr: "Gelir mi? Hiç sanmam." }
    ],
    practice: [
      { tr: "Bu doğru mu? Sanmıyorum.", en: "Is that true? I don't think so." },
      { tr: "Sanmıyorum, çok geç oldu.", en: "I don't think so, it's too late." },
      { tr: "Yağmur yağar mı? — Sanmıyorum.", en: "Will it rain? — I don't think so." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "how's it going?",
    tr: "nasıl gidiyor?",
    note: "Samimi bir selamlaşma. Cevap kısa olur: 'good', 'not bad', 'pretty good'.",
    examples: [
      { en: "Hey, how's it going?", tr: "Selam, nasıl gidiyor?" },
      { en: "How's it going with the new job?", tr: "Yeni işte nasıl gidiyor?" },
      { en: "How's it going? — Not bad, thanks.", tr: "Nasıl gidiyor? — Fena değil, sağ ol." }
    ],
    practice: [
      { tr: "Selam Ali, nasıl gidiyor?", en: "Hi Ali, how's it going?" },
      { tr: "Okulda nasıl gidiyor?", en: "How's it going at school?" },
      { tr: "Nasıl gidiyor? Uzun zamandır yoksun.", en: "How's it going? You've been away a long time." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "what do you mean?",
    tr: "ne demek istiyorsun?",
    note: "Tonuna dikkat: düz söylenirse merak, vurgulu söylenirse sitem olur.",
    examples: [
      { en: "What do you mean by that?", tr: "Bununla ne demek istiyorsun?" },
      { en: "What do you mean, you're leaving?", tr: "Ne demek gidiyorsun?" },
      { en: "Sorry, what do you mean exactly?", tr: "Pardon, tam olarak neyi kastediyorsun?" }
    ],
    practice: [
      { tr: "Ne demek istiyorsun, anlamadım.", en: "What do you mean? I didn't understand." },
      { tr: "Ne demek istediğini açıklar mısın?", en: "Can you explain what you mean?" },
      { tr: "Ne demek geç kaldık?", en: "What do you mean, we're late?" }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "guess what!",
    tr: "bil bakalım ne oldu!",
    note: "Haberi vermeden önce merak uyandırır. Karşı taraf gerçekten tahmin etmez, 'what?' der.",
    examples: [
      { en: "Guess what! I got the job.", tr: "Bil bakalım ne oldu! İşi aldım." },
      { en: "Guess what happened yesterday.", tr: "Dün ne oldu, bil bakalım." },
      { en: "Guess what! They're getting married.", tr: "Bil bakalım ne oldu! Evleniyorlar." }
    ],
    practice: [
      { tr: "Bil bakalım ne oldu! Kazandık.", en: "Guess what! We won." },
      { tr: "Bil bakalım ne oldu, taşınıyoruz.", en: "Guess what, we're moving." },
      { tr: "Bil bakalım ne oldu! Sınavı geçtim.", en: "Guess what! I passed the exam." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "make yourself at home",
    tr: "kendi evin gibi rahat ol",
    note: "Ev sahibinin misafire söylediği kalıp. İyelik değişir: 'make yourselves at home'.",
    examples: [
      { en: "Come in, make yourself at home.", tr: "Gel içeri, kendi evin gibi rahat ol." },
      { en: "Make yourself at home, I'll make tea.", tr: "Rahatına bak, ben çay koyayım." },
      { en: "They told us to make ourselves at home.", tr: "Rahat etmemizi söylediler." }
    ],
    practice: [
      { tr: "İçeri gel, rahatına bak.", en: "Come in, make yourself at home." },
      { tr: "Rahat olun, ben hemen geliyorum.", en: "Make yourselves at home, I'll be right back." },
      { tr: "Rahat etmemizi söyledi.", en: "She told us to make ourselves at home." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "believe it or not",
    tr: "inansan da inanmasan da",
    note: "Şaşırtıcı bir bilgiyi vermeden önce ya da verdikten sonra araya girer.",
    examples: [
      { en: "Believe it or not, he's sixty.", tr: "İnanır mısın, altmış yaşında." },
      { en: "Believe it or not, I've never seen the sea.", tr: "İnansan da inanmasan da denizi hiç görmedim." },
      { en: "She finished first, believe it or not.", tr: "İster inan ister inanma, birinci bitirdi." }
    ],
    practice: [
      { tr: "İnanır mısın, hiç geç kalmadı.", en: "Believe it or not, he was never late." },
      { tr: "İnansan da inanmasan da kazandım.", en: "Believe it or not, I won." },
      { tr: "İster inan ister inanma, hâlâ çalışıyor.", en: "Believe it or not, it still works." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "kind of",
    tr: "biraz, sayılır, şöyle böyle",
    note: "Cevabı yumuşatır. Konuşurken 'kinda' diye söylenir; 'sort of' ile eş anlamlıdır.",
    examples: [
      { en: "I'm kind of tired.", tr: "Biraz yorgunum." },
      { en: "Did you like it? — Kind of.", tr: "Beğendin mi? — Şöyle böyle." },
      { en: "It's sort of complicated.", tr: "Biraz karışık sayılır." }
    ],
    practice: [
      { tr: "Bu film biraz sıkıcı.", en: "This film is kind of boring." },
      { tr: "Aç mısın? — Şöyle böyle.", en: "Are you hungry? — Kind of." },
      { tr: "Bana biraz garip geldi.", en: "It felt kind of strange to me." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "you know what?",
    tr: "biliyor musun, ne diyeceğim",
    note: "Kararını ya da fikrini açıklamadan önce dikkat çeker; soru değil, giriş cümlesidir.",
    examples: [
      { en: "You know what? Let's just go.", tr: "Ne diyeceğim? Hadi gidelim gitsin." },
      { en: "You know what? You're right.", tr: "Biliyor musun? Haklısın." },
      { en: "You know what? I've changed my mind.", tr: "Ne diyeceğim, fikrimi değiştirdim." }
    ],
    practice: [
      { tr: "Ne diyeceğim? Bu akşam kalalım.", en: "You know what? Let's stay tonight." },
      { tr: "Biliyor musun? Sen kazandın.", en: "You know what? You win." },
      { tr: "Ne diyeceğim, artık önemli değil.", en: "You know what, it doesn't matter anymore." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "if I were you",
    tr: "senin yerinde olsam",
    note: "Gerçek dışı durum olduğu için 'was' değil 'were' kullanılır. Arkasından 'I would' gelir.",
    examples: [
      { en: "If I were you, I'd apologize.", tr: "Senin yerinde olsam özür dilerdim." },
      { en: "If I were you, I wouldn't wait.", tr: "Senin yerinde olsam beklemezdim." },
      { en: "I'd take the offer if I were you.", tr: "Yerinde olsam teklifi kabul ederdim." }
    ],
    practice: [
      { tr: "Senin yerinde olsam dinlenirdim.", en: "If I were you, I would rest." },
      { tr: "Yerinde olsam ona güvenmezdim.", en: "If I were you, I wouldn't trust him." },
      { tr: "Senin yerinde olsam hemen başlardım.", en: "If I were you, I'd start right away." }
    ]
  },
  {
    group: "Günlük konuşma",
    chunk: "I see what you mean",
    tr: "ne demek istediğini anlıyorum",
    note: "Anladığını gösterir ama katıldığını göstermez; genelde arkasından 'but' gelir.",
    examples: [
      { en: "I see what you mean, but it's risky.", tr: "Ne demek istediğini anlıyorum ama riskli." },
      { en: "Now I see what you mean.", tr: "Şimdi anladım ne demek istediğini." },
      { en: "I see what you mean about the price.", tr: "Fiyat konusunda ne demek istediğini anlıyorum." }
    ],
    practice: [
      { tr: "Ne demek istediğini anlıyorum ama katılmıyorum.", en: "I see what you mean, but I don't agree." },
      { tr: "Şimdi ne demek istediğini anlıyorum.", en: "Now I see what you mean." },
      { tr: "Ne demek istediğini anlıyorum, haklısın.", en: "I see what you mean, you're right." }
    ]
  },

  /* ——— Edatlı chunks · 46-60 ——— */

  {
    group: "Edatlı kalıplar",
    chunk: "in a hurry",
    tr: "acelesi olmak",
    note: "'be in a hurry' hâlinde kullanılır. Olumsuzu bir işi yapmak için acele etmediğini söyler.",
    examples: [
      { en: "Sorry, I'm in a hurry.", tr: "Kusura bakma, acelem var." },
      { en: "He left in a hurry.", tr: "Aceleyle çıktı." },
      { en: "I'm in no hurry to decide.", tr: "Karar vermek için acelem yok." }
    ],
    practice: [
      { tr: "Neden bu kadar acelen var?", en: "Why are you in such a hurry?" },
      { tr: "Acelem yok, bekleyebilirim.", en: "I'm not in a hurry, I can wait." },
      { tr: "Aceleyle anahtarını unuttu.", en: "In a hurry, she forgot her key." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "by accident",
    tr: "yanlışlıkla, kazara",
    note: "'on purpose'ın tam karşıtıdır. 'by mistake' ile çoğu yerde birbirinin yerine geçer.",
    examples: [
      { en: "I deleted the file by accident.", tr: "Dosyayı yanlışlıkla sildim." },
      { en: "We met by accident at the airport.", tr: "Havalimanında tesadüfen karşılaştık." },
      { en: "It happened by accident, not on purpose.", tr: "Kazara oldu, bilerek değil." }
    ],
    practice: [
      { tr: "Kapıyı yanlışlıkla kilitledim.", en: "I locked the door by accident." },
      { tr: "Mesajı kazara ona gönderdim.", en: "I sent the message to him by accident." },
      { tr: "Bunu tamamen tesadüfen buldum.", en: "I found this completely by accident." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "on purpose",
    tr: "bilerek, kasten",
    note: "Genelde suçlama ya da savunma cümlelerinde geçer: 'I didn't do it on purpose'.",
    examples: [
      { en: "He did it on purpose.", tr: "Bunu bilerek yaptı." },
      { en: "I didn't break it on purpose.", tr: "Kasten kırmadım." },
      { en: "She left the door open on purpose.", tr: "Kapıyı bilerek açık bıraktı." }
    ],
    practice: [
      { tr: "Bunu bilerek mi yaptın?", en: "Did you do this on purpose?" },
      { tr: "Kimse kasten geç kalmaz.", en: "Nobody is late on purpose." },
      { tr: "Adımı bilerek yanlış yazdı.", en: "He spelled my name wrong on purpose." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in general",
    tr: "genel olarak",
    note: "Genelleme yaparken kullanılır; istisnaları dışlamaz.",
    examples: [
      { en: "In general, prices are rising.", tr: "Genel olarak fiyatlar artıyor." },
      { en: "People in general don't like change.", tr: "İnsanlar genelde değişimi sevmez." },
      { en: "In general, I agree with you.", tr: "Genel olarak sana katılıyorum." }
    ],
    practice: [
      { tr: "Genel olarak insanlar naziktir.", en: "In general, people are polite." },
      { tr: "Genel olarak plan iyi görünüyor.", en: "In general, the plan looks good." },
      { tr: "Genel olarak sabahları çalışırım.", en: "In general, I work in the mornings." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "out of order",
    tr: "bozuk, arızalı",
    note: "Makineler için. Bir kişinin davranışı için kullanılırsa 'haddini aştı' anlamına gelir.",
    examples: [
      { en: "The elevator is out of order.", tr: "Asansör bozuk." },
      { en: "This machine has been out of order for days.", tr: "Bu makine günlerdir arızalı." },
      { en: "That comment was completely out of order.", tr: "O yorum tamamen haddi aşmaktı." }
    ],
    practice: [
      { tr: "Tuvalet bozuk.", en: "The toilet is out of order." },
      { tr: "Kahve makinesi yine arızalı.", en: "The coffee machine is out of order again." },
      { tr: "Bozuk olduğunu bilmiyordum.", en: "I didn't know it was out of order." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "at first sight",
    tr: "ilk bakışta",
    note: "'love at first sight' kalıbıyla ünlüdür; genel kullanımda 'at first glance' de aynı işi görür.",
    examples: [
      { en: "It was love at first sight.", tr: "İlk görüşte aşktı." },
      { en: "At first sight the plan looks simple.", tr: "İlk bakışta plan basit görünüyor." },
      { en: "At first sight, nothing seemed wrong.", tr: "İlk bakışta ters bir şey yok gibiydi." }
    ],
    practice: [
      { tr: "İlk bakışta kolay görünüyor.", en: "At first sight, it looks easy." },
      { tr: "İlk görüşte ona âşık oldu.", en: "He fell in love with her at first sight." },
      { tr: "İlk bakışta fark etmedim.", en: "I didn't notice at first sight." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in detail",
    tr: "detaylı bir şekilde",
    note: "'with detail' değil 'in detail'dir. Vurgulamak için 'in great detail' dersin.",
    examples: [
      { en: "He explained it in detail.", tr: "Detaylı bir şekilde açıkladı." },
      { en: "Let's discuss this in more detail.", tr: "Bunu daha detaylı konuşalım." },
      { en: "She described the room in great detail.", tr: "Odayı en ince ayrıntısına kadar anlattı." }
    ],
    practice: [
      { tr: "Planı detaylı anlat.", en: "Explain the plan in detail." },
      { tr: "Her şeyi detaylı yazdı.", en: "She wrote everything in detail." },
      { tr: "Bunu detaylı incelemedik.", en: "We didn't examine this in detail." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "under control",
    tr: "kontrol altında",
    note: "'Everything is under control' bir rahatlatma cümlesidir. Tersi 'out of control'dür.",
    examples: [
      { en: "Don't worry, everything is under control.", tr: "Merak etme, her şey kontrol altında." },
      { en: "The fire is finally under control.", tr: "Yangın nihayet kontrol altında." },
      { en: "The situation got out of control.", tr: "Durum kontrolden çıktı." }
    ],
    practice: [
      { tr: "Durum kontrol altında.", en: "The situation is under control." },
      { tr: "Her şeyi kontrol altında tutuyor.", en: "He keeps everything under control." },
      { tr: "Hastalık artık kontrol altında.", en: "The illness is under control now." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "on time",
    tr: "tam vaktinde",
    note: "'in time' ile karıştırma: 'on time' planlanan saatte, 'in time' ise geç kalmadan, yetişerek demektir.",
    examples: [
      { en: "The train left on time.", tr: "Tren tam vaktinde kalktı." },
      { en: "Please be on time tomorrow.", tr: "Yarın lütfen vaktinde gel." },
      { en: "We got there just in time.", tr: "Oraya tam yetiştik." }
    ],
    practice: [
      { tr: "Otobüs hiç vaktinde gelmez.", en: "The bus never comes on time." },
      { tr: "Lütfen raporu vaktinde teslim et.", en: "Please hand in the report on time." },
      { tr: "Toplantı tam vaktinde başladı.", en: "The meeting started on time." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in fact",
    tr: "aslında, hatta",
    note: "Ya söyleneni düzeltir ya da üstüne daha güçlü bir bilgi ekler.",
    examples: [
      { en: "It's not cold. In fact, it's quite warm.", tr: "Soğuk değil. Hatta bayağı sıcak." },
      { en: "In fact, I've already finished.", tr: "Aslında çoktan bitirdim." },
      { en: "He didn't help. In fact, he made it worse.", tr: "Yardım etmedi. Hatta daha da kötüleştirdi." }
    ],
    practice: [
      { tr: "Zor değil. Aslında çok kolay.", en: "It's not hard. In fact, it's very easy." },
      { tr: "Aslında onu hiç tanımıyorum.", en: "In fact, I don't know him at all." },
      { tr: "Beğendi. Hatta iki tane aldı.", en: "He liked it. In fact, he bought two." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "out of luck",
    tr: "şansı kalmamış",
    note: "Genelde bir şeyin tükendiğini ya da fırsatın kaçtığını haber verirken kullanılır.",
    examples: [
      { en: "You're out of luck, the last one just sold.", tr: "Şansın yok, sonuncusu az önce satıldı." },
      { en: "We were out of luck with the weather.", tr: "Hava konusunda şansımız yoktu." },
      { en: "If you need cash, you're out of luck here.", tr: "Nakit lazımsa burada şansın yok." }
    ],
    practice: [
      { tr: "Bilet arıyorsan şansın yok.", en: "If you're looking for tickets, you're out of luck." },
      { tr: "Şansımız yoktu, dükkân kapalıydı.", en: "We were out of luck, the shop was closed." },
      { tr: "Galiba bugün şansın yok.", en: "I guess you're out of luck today." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "by heart",
    tr: "ezbere",
    note: "'learn by heart' ve 'know by heart' kalıplarıyla gelir.",
    examples: [
      { en: "I know the poem by heart.", tr: "Şiiri ezbere biliyorum." },
      { en: "She learned the song by heart.", tr: "Şarkıyı ezberledi." },
      { en: "He knows her number by heart.", tr: "Onun numarasını ezbere biliyor." }
    ],
    practice: [
      { tr: "Bu şarkıyı ezbere biliyorum.", en: "I know this song by heart." },
      { tr: "Şiiri ezberlemem lazım.", en: "I need to learn the poem by heart." },
      { tr: "Adresi ezbere biliyor musun?", en: "Do you know the address by heart?" }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in danger",
    tr: "tehlikede",
    note: "Neyin tehdit ettiğini söylerken 'in danger of' gelir: 'in danger of losing'.",
    examples: [
      { en: "Her life was in danger.", tr: "Hayatı tehlikedeydi." },
      { en: "The species is in danger of extinction.", tr: "Tür yok olma tehlikesiyle karşı karşıya." },
      { en: "Nobody was in danger.", tr: "Kimse tehlikede değildi." }
    ],
    practice: [
      { tr: "Köy sel tehlikesiyle karşı karşıya.", en: "The village is in danger of flooding." },
      { tr: "Hayatın tehlikede olabilir.", en: "Your life may be in danger." },
      { tr: "İşini kaybetme tehlikesinde.", en: "He is in danger of losing his job." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "at the moment",
    tr: "şu anda",
    note: "Geçici durumları anlatır ve genelde şimdiki zamanla gelir.",
    examples: [
      { en: "She's busy at the moment.", tr: "Şu anda meşgul." },
      { en: "At the moment, we have no plans.", tr: "Şu an için bir planımız yok." },
      { en: "I'm not working at the moment.", tr: "Şu anda çalışmıyorum." }
    ],
    practice: [
      { tr: "Şu anda evde değilim.", en: "I'm not at home at the moment." },
      { tr: "Şu an müsait misin?", en: "Are you available at the moment?" },
      { tr: "Şu anda başka bir şey düşünemiyorum.", en: "I can't think of anything else at the moment." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "without a doubt",
    tr: "şüphesiz, kesinlikle",
    note: "Güçlü bir onay ifadesidir; genelde bir üstünlük iddiasıyla birlikte gelir.",
    examples: [
      { en: "Without a doubt, this is the best one.", tr: "Şüphesiz en iyisi bu." },
      { en: "He's without a doubt the fastest.", tr: "O kesinlikle en hızlısı." },
      { en: "Without a doubt, it was worth the wait.", tr: "Şüphesiz beklemeye değdi." }
    ],
    practice: [
      { tr: "Şüphesiz bu en ucuzu.", en: "Without a doubt, this is the cheapest." },
      { tr: "Kesinlikle haklısın.", en: "Without a doubt, you are right." },
      { tr: "Şüphesiz çok çalıştı.", en: "Without a doubt, he worked hard." }
    ]
  },

  /* ——— Duygu ve tepki · 61-70 ——— */

  {
    group: "Duygu ve tepki",
    chunk: "get a grip",
    tr: "kendine gel, toparlan",
    note: "Paniğe kapılan ya da abartan birine söylenir; samimi ama sert bir uyarıdır.",
    examples: [
      { en: "Get a grip, it's only a game.", tr: "Kendine gel, sadece bir oyun." },
      { en: "I need to get a grip and finish this.", tr: "Toparlanıp bunu bitirmem lazım." },
      { en: "He finally got a grip on his finances.", tr: "Sonunda mali durumunu toparladı." }
    ],
    practice: [
      { tr: "Kendine gel ve sakin ol.", en: "Get a grip and calm down." },
      { tr: "Kendime gelmem lazım.", en: "I need to get a grip." },
      { tr: "Kendine gel, abartıyorsun.", en: "Get a grip, you're exaggerating." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "feel like",
    tr: "canı istemek",
    note: "Arkasından isim ya da fiilin -ing hâli gelir: 'feel like pizza', 'feel like going out'.",
    examples: [
      { en: "I feel like going out tonight.", tr: "Bu akşam canım dışarı çıkmak istiyor." },
      { en: "Do you feel like a coffee?", tr: "Canın kahve ister mi?" },
      { en: "I don't feel like talking right now.", tr: "Şu an canım konuşmak istemiyor." }
    ],
    practice: [
      { tr: "Canım film izlemek istiyor.", en: "I feel like watching a film." },
      { tr: "Canın çay ister mi?", en: "Do you feel like tea?" },
      { tr: "Bugün canım çalışmak istemiyor.", en: "I don't feel like working today." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "take it easy",
    tr: "sakin ol, kendini yorma",
    note: "Üç yerde kullanılır: sinirleneni yatıştırmak, dinlenmesini söylemek ve vedalaşmak.",
    examples: [
      { en: "Take it easy, it's not a big deal.", tr: "Sakin ol, o kadar önemli değil." },
      { en: "The doctor told me to take it easy.", tr: "Doktor kendimi yormamamı söyledi." },
      { en: "Take it easy, see you tomorrow.", tr: "Kendine iyi bak, yarın görüşürüz." }
    ],
    practice: [
      { tr: "Sakin ol, kimse kızmadı.", en: "Take it easy, nobody is angry." },
      { tr: "Bu hafta sonu kendimi yormayacağım.", en: "I'm going to take it easy this weekend." },
      { tr: "Kendine iyi bak, sonra ararım.", en: "Take it easy, I'll call you later." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "calm down",
    tr: "sakinleş",
    note: "Öfkeli birine doğrudan söylenirse çoğu zaman ters teper; 'take it easy' daha yumuşaktır.",
    examples: [
      { en: "Calm down and tell me what happened.", tr: "Sakinleş ve ne olduğunu anlat." },
      { en: "It took her a while to calm down.", tr: "Sakinleşmesi biraz zaman aldı." },
      { en: "Try to calm down before you call him.", tr: "Onu aramadan önce sakinleşmeye çalış." }
    ],
    practice: [
      { tr: "Lütfen biraz sakinleş.", en: "Please calm down a little." },
      { tr: "Çocuk sonunda sakinleşti.", en: "The child finally calmed down." },
      { tr: "Konuşmadan önce sakinleşmeliyim.", en: "I should calm down before I speak." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "change your mind",
    tr: "fikrini değiştirmek",
    note: "İyelik özneye göre değişir: 'I changed my mind', 'they changed their minds'.",
    examples: [
      { en: "I changed my mind about the trip.", tr: "Gezi konusunda fikrimi değiştirdim." },
      { en: "Let me know if you change your mind.", tr: "Fikrini değiştirirsen haber ver." },
      { en: "Nothing will change his mind.", tr: "Hiçbir şey onun fikrini değiştirmez." }
    ],
    practice: [
      { tr: "Fikrimi değiştirdim, gelmiyorum.", en: "I changed my mind, I'm not coming." },
      { tr: "Neden fikrini değiştirdin?", en: "Why did you change your mind?" },
      { tr: "Onlar kolay kolay fikirlerini değiştirmez.", en: "They don't change their minds easily." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "bear in mind",
    tr: "aklında bulundurmak",
    note: "Genelde emir kipinde ve bir uyarıyla gelir: 'bear in mind that...'. 'keep in mind' ile eş anlamlıdır.",
    examples: [
      { en: "Bear in mind that he's new here.", tr: "Onun burada yeni olduğunu unutma." },
      { en: "Bear in mind the traffic on Fridays.", tr: "Cuma trafiğini hesaba kat." },
      { en: "I'll bear that in mind.", tr: "Bunu aklımda tutarım." }
    ],
    practice: [
      { tr: "Yarın kapalı olduğunu unutma.", en: "Bear in mind that it's closed tomorrow." },
      { tr: "Bütçeyi de aklında bulundur.", en: "Bear in mind the budget as well." },
      { tr: "Bunu aklımızda tutacağız.", en: "We will bear this in mind." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "don't bother",
    tr: "zahmet etme, uğraşma",
    note: "Hem nazik bir ret hem de 'boşuna uğraşma' anlamında olabilir. Arkasından -ing gelir.",
    examples: [
      { en: "Don't bother, I'll do it myself.", tr: "Zahmet etme, ben yaparım." },
      { en: "Don't bother calling, he's asleep.", tr: "Aramaya kalkma, uyuyor." },
      { en: "Don't bother about the dishes.", tr: "Bulaşıkla uğraşma." }
    ],
    practice: [
      { tr: "Zahmet etme, ben giderim.", en: "Don't bother, I'll go." },
      { tr: "Sormaya kalkma, cevap vermez.", en: "Don't bother asking, he won't answer." },
      { tr: "Beklemekle uğraşma.", en: "Don't bother waiting." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "count me in",
    tr: "ben de varım",
    note: "Bir plana katıldığını söyler. Tersi 'count me out' yani 'beni karıştırmayın'dır.",
    examples: [
      { en: "A weekend trip? Count me in.", tr: "Hafta sonu gezisi mi? Ben varım." },
      { en: "If there's food, count me in.", tr: "Yemek varsa ben de varım." },
      { en: "Count me out this time.", tr: "Bu sefer beni sayma." }
    ],
    practice: [
      { tr: "Yemeğe gidiyorsanız ben varım.", en: "If you're going to dinner, count me in." },
      { tr: "Ben varım, ne zaman başlıyoruz?", en: "Count me in, when do we start?" },
      { tr: "Bu projede ben de varım.", en: "Count me in on this project." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "fair enough",
    tr: "makul, peki o zaman",
    note: "Tam ikna olmasan bile karşı tarafın gerekçesini kabul ettiğini gösterir; tartışmayı kapatır.",
    examples: [
      { en: "You're tired? Fair enough, let's stop.", tr: "Yorgun musun? Makul, bırakalım." },
      { en: "Fair enough, I see your point.", tr: "Peki, ne demek istediğini anladım." },
      { en: "That's fair enough.", tr: "Bu gayet makul." }
    ],
    practice: [
      { tr: "Peki, o zaman yarın konuşuruz.", en: "Fair enough, we'll talk tomorrow then." },
      { tr: "Makul, seni anlıyorum.", en: "Fair enough, I understand you." },
      { tr: "Gelemiyor musun? Makul.", en: "Can't you come? Fair enough." }
    ]
  },
  {
    group: "Duygu ve tepki",
    chunk: "what a relief!",
    tr: "oh be, ne büyük rahatlama!",
    note: "Kötü bir ihtimalin gerçekleşmediğini öğrenince söylenir. Fiille kullanımı 'it's a relief that...' olur.",
    examples: [
      { en: "You found it? What a relief!", tr: "Buldun mu? Oh be!" },
      { en: "What a relief, the results are fine.", tr: "Ne büyük rahatlama, sonuçlar iyi." },
      { en: "It's a relief that nobody was hurt.", tr: "Kimsenin yaralanmaması büyük rahatlık." }
    ],
    practice: [
      { tr: "Sınavı geçmiş. Oh be!", en: "He passed the exam. What a relief!" },
      { tr: "Ne büyük rahatlama, tren gecikmemiş.", en: "What a relief, the train wasn't late." },
      { tr: "Bitti mi? Oh be!", en: "Is it over? What a relief!" }
    ]
  },

  /* ——— Sosyal ve iş hayatı · 71-80 ——— */

  {
    group: "Sosyal ve iş hayatı",
    chunk: "make an appointment",
    tr: "randevu almak",
    note: "Doktor, diş hekimi, resmî görüşme için. Arkadaşla buluşma için kullanılmaz; orası 'meet up'tır.",
    examples: [
      { en: "I made an appointment with the dentist.", tr: "Diş hekiminden randevu aldım." },
      { en: "You need to make an appointment first.", tr: "Önce randevu almanız gerekiyor." },
      { en: "Can I make an appointment for Monday?", tr: "Pazartesiye randevu alabilir miyim?" }
    ],
    practice: [
      { tr: "Doktordan randevu almam lazım.", en: "I need to make an appointment with the doctor." },
      { tr: "Salı için randevu aldım.", en: "I made an appointment for Tuesday." },
      { tr: "Randevu almadan gitme.", en: "Don't go without making an appointment." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "get in touch",
    tr: "iletişime geçmek",
    note: "Temasın başlangıcı için 'get in touch', devamı için 'keep in touch' kullanılır. Kişiyle 'with' bağlanır.",
    examples: [
      { en: "Get in touch with me next week.", tr: "Gelecek hafta benimle iletişime geç." },
      { en: "I'll get in touch as soon as I know.", tr: "Öğrenir öğrenmez haber veririm." },
      { en: "She got in touch after five years.", tr: "Beş yıl sonra iletişime geçti." }
    ],
    practice: [
      { tr: "Sorun olursa benimle iletişime geç.", en: "Get in touch with me if there's a problem." },
      { tr: "Onunla nasıl iletişime geçebilirim?", en: "How can I get in touch with her?" },
      { tr: "Yarın seninle iletişime geçeceğim.", en: "I'll get in touch with you tomorrow." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "run a business",
    tr: "işletme yönetmek",
    note: "Burada 'run' yönetmek demektir; aynı fiil 'run a team', 'run a meeting' diye de gelir.",
    examples: [
      { en: "They run a small business downtown.", tr: "Şehir merkezinde küçük bir işletme yönetiyorlar." },
      { en: "Running a business is hard work.", tr: "İşletme yönetmek zor iş." },
      { en: "She's been running the company for ten years.", tr: "On yıldır şirketi yönetiyor." }
    ],
    practice: [
      { tr: "Kendi işletmemi yönetmek istiyorum.", en: "I want to run my own business." },
      { tr: "Yıllardır bu işletmeyi yönetiyor.", en: "She has been running this business for years." },
      { tr: "Tek başına işletme yönetmek kolay değil.", en: "Running a business alone is not easy." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "work out",
    tr: "spor yapmak / yoluna girmek",
    note: "İki ayrı anlamı var: antrenman yapmak ve bir işin sonunda iyi sonuçlanması.",
    examples: [
      { en: "I work out three times a week.", tr: "Haftada üç kez spor yapıyorum." },
      { en: "Don't worry, it'll work out.", tr: "Merak etme, yoluna girecek." },
      { en: "The plan didn't work out.", tr: "Plan tutmadı." }
    ],
    practice: [
      { tr: "Her sabah spor yapıyorum.", en: "I work out every morning." },
      { tr: "Endişelenme, her şey yoluna girecek.", en: "Don't worry, everything will work out." },
      { tr: "Maalesef plan tutmadı.", en: "Unfortunately the plan didn't work out." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "make a living",
    tr: "geçimini sağlamak",
    note: "Nasıl kazandığını söylerken 'as' ya da 'by' gelir: 'make a living as a teacher'.",
    examples: [
      { en: "He makes a living as a photographer.", tr: "Geçimini fotoğrafçılıkla sağlıyor." },
      { en: "It's hard to make a living here.", tr: "Burada geçinmek zor." },
      { en: "She makes a good living.", tr: "İyi para kazanıyor." }
    ],
    practice: [
      { tr: "Müzikle geçimini sağlıyor.", en: "He makes a living from music." },
      { tr: "Bu şehirde geçinmek zor.", en: "It's hard to make a living in this city." },
      { tr: "Öğretmenlik yaparak geçiniyordu.", en: "She made a living as a teacher." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "tell the truth",
    tr: "doğruyu söylemek",
    note: "Fiil 'say' değil 'tell'dir. 'To tell you the truth' ise 'doğrusunu istersen' demektir.",
    examples: [
      { en: "Just tell me the truth.", tr: "Bana doğruyu söyle yeter." },
      { en: "To tell you the truth, I forgot.", tr: "Doğrusunu istersen unuttum." },
      { en: "He always tells the truth.", tr: "Her zaman doğruyu söyler." }
    ],
    practice: [
      { tr: "Bana doğruyu söylemedin.", en: "You didn't tell me the truth." },
      { tr: "Doğruyu söylemekten korkma.", en: "Don't be afraid to tell the truth." },
      { tr: "Sonunda doğruyu söyledi.", en: "He finally told the truth." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "waste your time",
    tr: "zamanını boşa harcamak",
    note: "Arkasından -ing gelir: 'waste your time arguing'. 'a waste of time' ismi de aynı köktendir.",
    examples: [
      { en: "Don't waste your time on that.", tr: "Ona vaktini harcama." },
      { en: "I wasted the whole afternoon waiting.", tr: "Bütün öğleden sonrayı beklemekle harcadım." },
      { en: "That meeting was a waste of time.", tr: "O toplantı vakit kaybıydı." }
    ],
    practice: [
      { tr: "Bu filmle vaktini harcama.", en: "Don't waste your time on this film." },
      { tr: "Tartışmakla vaktimizi harcadık.", en: "We wasted our time arguing." },
      { tr: "Sanırım vaktimi boşa harcıyorum.", en: "I think I'm wasting my time." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "take responsibility",
    tr: "sorumluluk almak",
    note: "Neyin sorumluluğu olduğunu söylerken 'for' gelir: 'take responsibility for the mistake'.",
    examples: [
      { en: "He took responsibility for the mistake.", tr: "Hatanın sorumluluğunu üstlendi." },
      { en: "Someone has to take responsibility.", tr: "Birinin sorumluluk alması gerek." },
      { en: "She takes responsibility for the whole team.", tr: "Tüm ekibin sorumluluğunu üstleniyor." }
    ],
    practice: [
      { tr: "Kimse sorumluluk almak istemiyor.", en: "Nobody wants to take responsibility." },
      { tr: "Hatamın sorumluluğunu alıyorum.", en: "I take responsibility for my mistake." },
      { tr: "Projenin sorumluluğunu üstlendi.", en: "She took responsibility for the project." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "keep an eye on",
    tr: "göz kulak olmak, takip etmek",
    note: "Hem insanlar hem durumlar için: bir çocuğa da göz kulak olursun, kura da.",
    examples: [
      { en: "Can you keep an eye on my bag?", tr: "Çantama göz kulak olur musun?" },
      { en: "I'm keeping an eye on the prices.", tr: "Fiyatları takip ediyorum." },
      { en: "Keep an eye on him, he looks tired.", tr: "Ona göz kulak ol, yorgun görünüyor." }
    ],
    practice: [
      { tr: "Çocuklara göz kulak ol.", en: "Keep an eye on the children." },
      { tr: "Yemeğe göz kulak olur musun?", en: "Can you keep an eye on the food?" },
      { tr: "Hava durumunu takip ediyorum.", en: "I'm keeping an eye on the weather." }
    ]
  },
  {
    group: "Sosyal ve iş hayatı",
    chunk: "call it a day",
    tr: "paydos etmek, bugünlük bırakmak",
    note: "İş bitmemiş olabilir ama bugünlük yeter demektir; genelde 'let's' ile gelir.",
    examples: [
      { en: "Let's call it a day.", tr: "Bugünlük bu kadar yeter." },
      { en: "We called it a day around six.", tr: "Altı gibi paydos ettik." },
      { en: "I'm exhausted. Can we call it a day?", tr: "Bittim. Bugünlük bıraksak olur mu?" }
    ],
    practice: [
      { tr: "Yoruldum, bugünlük bırakalım.", en: "I'm tired, let's call it a day." },
      { tr: "Beşte paydos ettiler.", en: "They called it a day at five." },
      { tr: "Bugünlük bu kadar yeter mi?", en: "Shall we call it a day?" }
    ]
  },

  /* ——— Bağlayıcı ve vurgulayıcı · 81-90 ——— */

  {
    group: "Bağlayıcı",
    chunk: "to sum up",
    tr: "özetlemek gerekirse",
    note: "Sunum ve yazının kapanışında kullanılır; 'in conclusion' ile aynı yerde durur.",
    examples: [
      { en: "To sum up, the results are positive.", tr: "Özetlemek gerekirse sonuçlar olumlu." },
      { en: "To sum up, we need more time.", tr: "Özetle, daha fazla vakte ihtiyacımız var." },
      { en: "Let me sum up the main points.", tr: "Ana noktaları özetleyeyim." }
    ],
    practice: [
      { tr: "Özetlemek gerekirse iki sorun var.", en: "To sum up, there are two problems." },
      { tr: "Özetle, plan işe yaradı.", en: "To sum up, the plan worked." },
      { tr: "Özetlemek gerekirse herkes memnun.", en: "To sum up, everyone is happy." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "on the contrary",
    tr: "aksine",
    note: "Söylenenin tam tersini savunur. 'on the other hand' sadece başka bir açı sunar; ikisi aynı şey değil.",
    examples: [
      { en: "He's not lazy. On the contrary, he works too much.", tr: "Tembel değil. Aksine fazla çalışıyor." },
      { en: "On the contrary, it made things worse.", tr: "Aksine işleri kötüleştirdi." },
      { en: "I'm not bored. On the contrary, I'm enjoying it.", tr: "Sıkılmıyorum. Aksine keyif alıyorum." }
    ],
    practice: [
      { tr: "Sıkıcı değil. Aksine çok eğlenceli.", en: "It's not boring. On the contrary, it's very fun." },
      { tr: "Aksine bize yardım etti.", en: "On the contrary, he helped us." },
      { tr: "Kızgın değilim. Aksine mutluyum.", en: "I'm not angry. On the contrary, I'm happy." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "in other words",
    tr: "başka bir deyişle",
    note: "Aynı fikri daha anlaşılır biçimde tekrar eder; genelde teknik bir açıklamadan sonra gelir.",
    examples: [
      { en: "In other words, we're out of money.", tr: "Başka bir deyişle paramız kalmadı." },
      { en: "He said no. In other words, it's over.", tr: "Hayır dedi. Yani bitti." },
      { en: "In other words, you're not coming.", tr: "Yani gelmiyorsun." }
    ],
    practice: [
      { tr: "Başka bir deyişle vaktimiz yok.", en: "In other words, we have no time." },
      { tr: "Yani bir daha denemeliyiz.", en: "In other words, we should try again." },
      { tr: "Yani beni istemiyorsun.", en: "In other words, you don't want me." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "as a result",
    tr: "sonuç olarak, bu yüzden",
    note: "Sebep-sonuç bağı kurar. Sebebi hemen arkasına koyacaksan 'as a result of' dersin.",
    examples: [
      { en: "It rained, and as a result the match was cancelled.", tr: "Yağmur yağdı ve bu yüzden maç iptal oldu." },
      { en: "As a result, prices went up.", tr: "Sonuç olarak fiyatlar arttı." },
      { en: "He lost his job as a result of the merger.", tr: "Birleşme sonucunda işini kaybetti." }
    ],
    practice: [
      { tr: "Çok çalıştı ve sonuç olarak kazandı.", en: "He worked hard and as a result he won." },
      { tr: "Sonuç olarak dükkân kapandı.", en: "As a result, the shop closed." },
      { tr: "Kaza sonucunda yol kapandı.", en: "As a result of the accident, the road closed." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "for instance",
    tr: "örneğin",
    note: "'for example' ile aynıdır, biraz daha resmî durur. Virgülle ayrılır.",
    examples: [
      { en: "Some fruits, for instance bananas, are cheap here.", tr: "Bazı meyveler, örneğin muz, burada ucuz." },
      { en: "For instance, look at last year's data.", tr: "Örneğin geçen yılın verilerine bak." },
      { en: "Take this case, for instance.", tr: "Mesela şu örneği ele al." }
    ],
    practice: [
      { tr: "Bazı diller, örneğin Japonca, zordur.", en: "Some languages, for instance Japanese, are hard." },
      { tr: "Örneğin bu kitabı ele al.", en: "Take this book, for instance." },
      { tr: "Mesela dün geç kaldı.", en: "For instance, he was late yesterday." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "in my opinion",
    tr: "bence, bana göre",
    note: "Yazıda ve resmî konuşmada uygundur; günlük sohbette 'I think' daha doğal durur.",
    examples: [
      { en: "In my opinion, the price is too high.", tr: "Bence fiyat çok yüksek." },
      { en: "In my opinion, we should wait.", tr: "Bana göre beklemeliyiz." },
      { en: "That's the best option, in my opinion.", tr: "Bence en iyi seçenek bu." }
    ],
    practice: [
      { tr: "Bence bu film çok uzun.", en: "In my opinion, this film is too long." },
      { tr: "Bana göre erken karar verdik.", en: "In my opinion, we decided too early." },
      { tr: "Bence en iyi çözüm bu.", en: "In my opinion, this is the best solution." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "first of all",
    tr: "her şeyden önce, öncelikle",
    note: "Sıralamayı başlatır; devamında 'second', 'then', 'finally' gelir.",
    examples: [
      { en: "First of all, thank you for coming.", tr: "Her şeyden önce geldiğiniz için teşekkürler." },
      { en: "First of all, we need a plan.", tr: "Öncelikle bir plana ihtiyacımız var." },
      { en: "First of all, that's not true.", tr: "Bir kere, bu doğru değil." }
    ],
    practice: [
      { tr: "Öncelikle beni dinle.", en: "First of all, listen to me." },
      { tr: "Her şeyden önce güvenlik gelir.", en: "First of all comes safety." },
      { tr: "Öncelikle neden geciktin?", en: "First of all, why are you late?" }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "last but not least",
    tr: "sonuncu ama bir o kadar önemli",
    note: "Listenin son maddesini küçümsenmiş gibi göstermemek için kullanılır; teşekkür konuşmalarında sık geçer.",
    examples: [
      { en: "Last but not least, I want to thank my family.", tr: "Son olarak ama bir o kadar önemlisi, aileme teşekkür ederim." },
      { en: "Last but not least, we need to cut costs.", tr: "Sonuncu ama bir o kadar önemlisi, maliyetleri düşürmeliyiz." },
      { en: "And last but not least, Ayşe.", tr: "Ve sonuncu ama bir o kadar önemlisi, Ayşe." }
    ],
    practice: [
      { tr: "Son olarak ama önemlisi, sağlığın.", en: "Last but not least, your health." },
      { tr: "Sonuncu ama bir o kadar önemlisi, fiyat.", en: "Last but not least, the price." },
      { tr: "Son olarak ama önemlisi, herkese teşekkürler.", en: "Last but not least, thanks to everyone." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "moreover",
    tr: "dahası, üstelik",
    note: "Yazı diline aittir; günlük konuşmada 'and also' ya da 'plus' tercih edilir.",
    examples: [
      { en: "The plan is risky. Moreover, it's expensive.", tr: "Plan riskli. Dahası pahalı." },
      { en: "Moreover, there is no evidence.", tr: "Üstelik hiçbir kanıt yok." },
      { en: "Moreover, the deadline is tomorrow.", tr: "Dahası son tarih yarın." }
    ],
    practice: [
      { tr: "Geç kaldı. Üstelik özür dilemedi.", en: "He was late. Moreover, he didn't apologize." },
      { tr: "Dahası bunun kanıtı var.", en: "Moreover, there is proof of this." },
      { tr: "Üstelik hava da çok soğuktu.", en: "Moreover, the weather was very cold." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "despite the fact that",
    tr: "... olmasına rağmen",
    note: "'despite' tek başına isim alır; arkasına cümle gelecekse 'the fact that' eklenir ya da 'although' kullanılır.",
    examples: [
      { en: "Despite the fact that he was tired, he kept working.", tr: "Yorgun olmasına rağmen çalışmaya devam etti." },
      { en: "She passed despite the fact that she barely studied.", tr: "Neredeyse hiç çalışmamasına rağmen geçti." },
      { en: "Despite the rain, we went out.", tr: "Yağmura rağmen dışarı çıktık." }
    ],
    practice: [
      { tr: "Hasta olmasına rağmen işe gitti.", en: "Despite the fact that he was ill, he went to work." },
      { tr: "Geç olmasına rağmen beni bekledi.", en: "Despite the fact that it was late, she waited for me." },
      { tr: "Pahalı olmasına rağmen aldık.", en: "Despite the fact that it was expensive, we bought it." }
    ]
  },

  /* ——— Diğer popüler chunks · 91-100 ——— */

  {
    group: "Diğer popüler",
    chunk: "make sense",
    tr: "mantıklı gelmek, anlam ifade etmek",
    note: "Olumsuzu çok sık geçer: 'it doesn't make sense'. Birine mantıklı gelmesi için 'to' eklenir.",
    examples: [
      { en: "That makes sense now.", tr: "Şimdi mantıklı geldi." },
      { en: "It doesn't make any sense to me.", tr: "Bana hiç mantıklı gelmiyor." },
      { en: "It makes sense to leave early.", tr: "Erken çıkmak mantıklı." }
    ],
    practice: [
      { tr: "Bu cümle mantıklı gelmiyor.", en: "This sentence doesn't make sense." },
      { tr: "Söylediklerin şimdi mantıklı geldi.", en: "What you said makes sense now." },
      { tr: "Sence bu mantıklı mı?", en: "Does this make sense to you?" }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "pay a visit",
    tr: "ziyaret etmek, uğramak",
    note: "'visit' fiilinden biraz daha resmî ve planlı durur. Kişiye 'to' ile bağlanır.",
    examples: [
      { en: "We paid a visit to my grandmother.", tr: "Anneannemi ziyaret ettik." },
      { en: "Why don't you pay us a visit?", tr: "Bize bir uğrasana?" },
      { en: "The minister paid a visit to the school.", tr: "Bakan okula ziyarette bulundu." }
    ],
    practice: [
      { tr: "Yarın hastaneye uğrayacağım.", en: "I'll pay a visit to the hospital tomorrow." },
      { tr: "Bize bir ziyarette bulundular.", en: "They paid us a visit." },
      { tr: "Eski okuluma uğramak istiyorum.", en: "I want to pay a visit to my old school." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "set an example",
    tr: "örnek olmak, örnek teşkil etmek",
    note: "Kime örnek olduğunu söylerken 'for' gelir: 'set an example for the children'.",
    examples: [
      { en: "Parents should set a good example.", tr: "Ebeveynler iyi örnek olmalı." },
      { en: "She set an example for the whole team.", tr: "Tüm ekibe örnek oldu." },
      { en: "He set a bad example.", tr: "Kötü örnek oldu." }
    ],
    practice: [
      { tr: "Ağabeyler örnek olmalı.", en: "Older brothers should set an example." },
      { tr: "Sen ekibe örnek oldun.", en: "You set an example for the team." },
      { tr: "Böyle bir örnek olmak istemiyorum.", en: "I don't want to set such an example." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "spend money",
    tr: "para harcamak",
    note: "Aynı fiil zamanla da kullanılır: 'spend time'. Neye harcandığı 'on' ile gelir.",
    examples: [
      { en: "I spent too much money on books.", tr: "Kitaplara çok para harcadım." },
      { en: "Don't spend money you don't have.", tr: "Olmayan parayı harcama." },
      { en: "We spend a lot of time together.", tr: "Birlikte çok vakit geçiriyoruz." }
    ],
    practice: [
      { tr: "Kıyafete çok para harcıyor.", en: "She spends a lot of money on clothes." },
      { tr: "Bu ay az para harcadık.", en: "We spent little money this month." },
      { tr: "Gereksiz şeylere para harcama.", en: "Don't spend money on useless things." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "take a photo",
    tr: "fotoğraf çekmek",
    note: "'take a photo of something' nesneyi, 'take a photo for someone' ise onun adına çekmeyi anlatır.",
    examples: [
      { en: "Can you take a photo of us?", tr: "Bizim fotoğrafımızı çeker misin?" },
      { en: "I took a few photos at the concert.", tr: "Konserde birkaç fotoğraf çektim." },
      { en: "Don't take photos inside the museum.", tr: "Müzenin içinde fotoğraf çekmeyin." }
    ],
    practice: [
      { tr: "Şu manzaranın fotoğrafını çek.", en: "Take a photo of that view." },
      { tr: "Düğünde yüzlerce fotoğraf çektik.", en: "We took hundreds of photos at the wedding." },
      { tr: "Fotoğrafımızı çeker misiniz lütfen?", en: "Could you take a photo of us, please?" }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "save time",
    tr: "zaman kazanmak",
    note: "Aynı fiil parayla da çalışır: 'save money'. Ne kadar kazandırdığını söylerken doğrudan sayı gelir.",
    examples: [
      { en: "This app saves me a lot of time.", tr: "Bu uygulama bana çok zaman kazandırıyor." },
      { en: "Take the metro to save time.", tr: "Zaman kazanmak için metroya bin." },
      { en: "It saved us two hours.", tr: "Bize iki saat kazandırdı." }
    ],
    practice: [
      { tr: "Erken çıkarsak zaman kazanırız.", en: "We'll save time if we leave early." },
      { tr: "Bu yöntem zaman kazandırıyor.", en: "This method saves time." },
      { tr: "Zaman kazanmak için yemeği önceden hazırladım.", en: "I prepared the food earlier to save time." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "get married",
    tr: "evlenmek",
    note: "Eşi söylerken 'to' gelir, 'with' değil: 'She got married to Ali'.",
    examples: [
      { en: "They got married last summer.", tr: "Geçen yaz evlendiler." },
      { en: "She got married to her college friend.", tr: "Üniversiteden arkadaşıyla evlendi." },
      { en: "We're getting married in June.", tr: "Haziranda evleniyoruz." }
    ],
    practice: [
      { tr: "Gelecek ay evleniyorlar.", en: "They are getting married next month." },
      { tr: "Komşumuzla evlendi.", en: "She got married to our neighbour." },
      { tr: "Evlenmek için acele etmiyoruz.", en: "We're not in a hurry to get married." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "have fun",
    tr: "eğlenmek",
    note: "Ayrılırken iyi dilek olarak da söylenir. Arkasından -ing gelebilir: 'have fun learning'.",
    examples: [
      { en: "Have fun at the party!", tr: "Partide iyi eğlenceler!" },
      { en: "We had a lot of fun yesterday.", tr: "Dün çok eğlendik." },
      { en: "I'm having fun learning English.", tr: "İngilizce öğrenirken eğleniyorum." }
    ],
    practice: [
      { tr: "Çocuklar bahçede eğleniyor.", en: "The children are having fun in the garden." },
      { tr: "Tatilde çok eğlendik mi?", en: "Did we have fun on holiday?" },
      { tr: "Umarım bu akşam eğlenirsin.", en: "I hope you have fun tonight." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "catch your breath",
    tr: "soluklanmak, nefeslenmek",
    note: "Hem fiziksel olarak nefes toplamak hem de yoğunluktan sonra bir mola vermek anlamında.",
    examples: [
      { en: "Stop for a second and catch your breath.", tr: "Bir saniye dur da soluklan." },
      { en: "I couldn't catch my breath after the run.", tr: "Koşudan sonra nefesimi toparlayamadım." },
      { en: "We haven't had time to catch our breath.", tr: "Soluklanacak vakit bulamadık." }
    ],
    practice: [
      { tr: "Merdivenden sonra soluklandım.", en: "I caught my breath after the stairs." },
      { tr: "Bir dakika, nefesimi toparlayayım.", en: "Wait a minute, let me catch my breath." },
      { tr: "Koşmayı bırak da soluklan.", en: "Stop running and catch your breath." }
    ]
  },
  {
    group: "Diğer popüler",
    chunk: "keep a promise",
    tr: "sözünü tutmak",
    note: "Tersi 'break a promise', söz vermek ise 'make a promise'tir.",
    examples: [
      { en: "He always keeps his promises.", tr: "Her zaman sözünü tutar." },
      { en: "You promised. Keep your promise.", tr: "Söz verdin. Sözünü tut." },
      { en: "She broke her promise again.", tr: "Yine sözünden döndü." }
    ],
    practice: [
      { tr: "Verdiğin sözü tut.", en: "Keep the promise you made." },
      { tr: "Sözünü tutacağına inanıyorum.", en: "I believe he will keep his promise." },
      { tr: "Sözünü tutmak her zaman kolay değil.", en: "Keeping a promise is not always easy." }
    ]
  },

  /* ——— Ek ifadeler · 101-132 ——— */

  {
    group: "Ek ifadeler",
    chunk: "get the hang of it",
    tr: "püf noktasını kapmak, alışmak",
    note: "Bir işi yaparak öğrendiğini anlatır; 'it' ile kalıplaşmıştır.",
    examples: [
      { en: "It took me a week, but I got the hang of it.", tr: "Bir haftamı aldı ama püf noktasını kaptım." },
      { en: "Don't worry, you'll get the hang of it.", tr: "Merak etme, alışacaksın." },
      { en: "She's getting the hang of driving.", tr: "Araba kullanmaya alışmaya başladı." }
    ],
    practice: [
      { tr: "Birkaç günde alışırsın.", en: "You'll get the hang of it in a few days." },
      { tr: "Sonunda püf noktasını kaptım.", en: "I finally got the hang of it." },
      { tr: "Bisiklete binmeye alışıyor.", en: "She's getting the hang of riding a bike." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "come up with",
    tr: "fikir bulmak, üretmek",
    note: "Yoktan çıkarılan şeylerle kullanılır: fikir, plan, bahane, isim.",
    examples: [
      { en: "We need to come up with a better plan.", tr: "Daha iyi bir plan bulmamız lazım." },
      { en: "He came up with a great name.", tr: "Harika bir isim buldu." },
      { en: "Don't come up with excuses.", tr: "Bahane üretme." }
    ],
    practice: [
      { tr: "Yeni bir fikir bulmalıyız.", en: "We have to come up with a new idea." },
      { tr: "Güzel bir çözüm buldu.", en: "He came up with a good solution." },
      { tr: "Kimse iyi bir isim bulamadı.", en: "Nobody could come up with a good name." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "be better off",
    tr: "senin için daha iyi olur",
    note: "Tavsiye verirken kullanılır ve arkasından fiilin -ing hâli gelir.",
    examples: [
      { en: "You're better off taking the train.", tr: "Trenle gitsen daha iyi olur." },
      { en: "We'd be better off without a car.", tr: "Arabasız daha rahat ederiz." },
      { en: "He's better off now than last year.", tr: "Geçen seneye göre daha iyi durumda." }
    ],
    practice: [
      { tr: "Yürüsen daha iyi olur.", en: "You'd be better off walking." },
      { tr: "Onsuz daha iyi olurdum.", en: "I'd be better off without him." },
      { tr: "Şimdi eskisinden daha iyi durumdalar.", en: "They are better off now than before." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "for the time being",
    tr: "şimdilik",
    note: "Çözümün geçici olduğunu vurgular; 'for now'un biraz daha resmî hâli.",
    examples: [
      { en: "For the time being, we're working from home.", tr: "Şimdilik evden çalışıyoruz." },
      { en: "This will do for the time being.", tr: "Şimdilik bu iş görür." },
      { en: "She's staying with us for the time being.", tr: "Şu an için bizde kalıyor." }
    ],
    practice: [
      { tr: "Şimdilik burada kalabilirsin.", en: "You can stay here for the time being." },
      { tr: "Şimdilik eski telefonu kullanıyorum.", en: "I'm using the old phone for the time being." },
      { tr: "Şu an için plan değişmedi.", en: "The plan hasn't changed for the time being." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "take it for granted",
    tr: "kıymetini bilmemek",
    note: "Nesne araya girer: 'take your health for granted'. İkinci anlamı bir şeyi kesin varsaymaktır.",
    examples: [
      { en: "We take clean water for granted.", tr: "Temiz suyun kıymetini bilmiyoruz." },
      { en: "Don't take her help for granted.", tr: "Onun yardımını sıradan görme." },
      { en: "I took it for granted that you knew.", tr: "Bildiğini varsaymıştım." }
    ],
    practice: [
      { tr: "Ailenin kıymetini bilmemezlik etme.", en: "Don't take your family for granted." },
      { tr: "Yıllarca sağlığımın kıymetini bilmedim.", en: "I took my health for granted for years." },
      { tr: "Geleceğini varsaymıştık.", en: "We took it for granted that he would come." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "run out of",
    tr: "tükenmek, bitmek",
    note: "Elindeki şeyin bitmesi; zaman, para, sabır hepsiyle çalışır.",
    examples: [
      { en: "We're running out of time.", tr: "Vaktimiz tükeniyor." },
      { en: "I ran out of coffee this morning.", tr: "Bu sabah kahvem bitti." },
      { en: "The car ran out of gas.", tr: "Arabanın benzini bitti." }
    ],
    practice: [
      { tr: "Şekerimiz bitti.", en: "We have run out of sugar." },
      { tr: "Sabrım tükeniyor.", en: "I'm running out of patience." },
      { tr: "Yolun yarısında benzinimiz bitti.", en: "We ran out of petrol halfway." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "make up your mind",
    tr: "kararını vermek",
    note: "Uzun süredir kararsız olan biri için kullanılır, hafif bir sabırsızlık taşır.",
    examples: [
      { en: "Make up your mind, we're leaving.", tr: "Kararını ver, çıkıyoruz." },
      { en: "I can't make up my mind.", tr: "Bir türlü karar veremiyorum." },
      { en: "She made up her mind to quit.", tr: "İstifa etmeye karar verdi." }
    ],
    practice: [
      { tr: "Hâlâ kararını vermedin mi?", en: "Haven't you made up your mind yet?" },
      { tr: "Sonunda kararımı verdim.", en: "I finally made up my mind." },
      { tr: "Karar vermek için bir güne ihtiyacım var.", en: "I need a day to make up my mind." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "as far as I'm concerned",
    tr: "bana kalırsa, benim açımdan",
    note: "Söylediğinin kişisel görüş olduğunu baştan işaretler.",
    examples: [
      { en: "As far as I'm concerned, the case is closed.", tr: "Bana kalırsa bu iş kapandı." },
      { en: "He can stay, as far as I'm concerned.", tr: "Benim açımdan kalabilir." },
      { en: "As far as I'm concerned, that's the best option.", tr: "Bana kalırsa en iyi seçenek bu." }
    ],
    practice: [
      { tr: "Bana kalırsa mesele bitti.", en: "As far as I'm concerned, the matter is over." },
      { tr: "Benim açımdan sorun yok.", en: "As far as I'm concerned, there's no problem." },
      { tr: "Bana kalırsa haklıydın.", en: "As far as I'm concerned, you were right." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "look forward to",
    tr: "dört gözle beklemek",
    note: "Buradaki 'to' edattır: arkasından fiil gelirse -ing alır.",
    examples: [
      { en: "I'm looking forward to the weekend.", tr: "Hafta sonunu dört gözle bekliyorum." },
      { en: "We look forward to hearing from you.", tr: "Sizden haber bekliyoruz." },
      { en: "She's looking forward to moving.", tr: "Taşınmayı iple çekiyor." }
    ],
    practice: [
      { tr: "Yaz tatilini dört gözle bekliyorum.", en: "I'm looking forward to the summer holiday." },
      { tr: "Seni görmeyi iple çekiyoruz.", en: "We're looking forward to seeing you." },
      { tr: "Cevabınızı bekliyorum.", en: "I look forward to your reply." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "get rid of",
    tr: "kurtulmak, başından atmak",
    note: "Eşya, alışkanlık, ağrı; istenmeyen her şey için.",
    examples: [
      { en: "I need to get rid of these old books.", tr: "Bu eski kitaplardan kurtulmam lazım." },
      { en: "How do I get rid of this headache?", tr: "Bu baş ağrısından nasıl kurtulurum?" },
      { en: "They got rid of the old system.", tr: "Eski sistemden kurtuldular." }
    ],
    practice: [
      { tr: "Bu kanepeden kurtulmak istiyorum.", en: "I want to get rid of this sofa." },
      { tr: "Kötü alışkanlıklardan kurtulmak zor.", en: "It's hard to get rid of bad habits." },
      { tr: "Sonunda o sesten kurtulduk.", en: "We finally got rid of that noise." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "no wonder",
    tr: "haliyle, şaşmamalı",
    note: "Sebebi yeni öğrendiğinde söylenir; cümlenin başında durur.",
    examples: [
      { en: "No wonder you're tired, you slept four hours.", tr: "Haliyle yorgunsun, dört saat uyumuşsun." },
      { en: "No wonder it's so cold.", tr: "Haliyle bu kadar soğuk." },
      { en: "No wonder she didn't call.", tr: "Aramamasına şaşmamalı." }
    ],
    practice: [
      { tr: "Haliyle aç, hiç yemedi.", en: "No wonder he's hungry, he hasn't eaten." },
      { tr: "Haliyle herkes şikâyet ediyor.", en: "No wonder everyone is complaining." },
      { tr: "Kazanmasına şaşmamalı.", en: "No wonder she won." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "bear with me",
    tr: "biraz sabredin",
    note: "Karşındakini bekletirken kullanılan nazik kalıp; telefonda ve sunumda sık geçer.",
    examples: [
      { en: "Bear with me, I'm almost done.", tr: "Biraz sabredin, neredeyse bitti." },
      { en: "Please bear with me for a moment.", tr: "Bir saniye müsaade eder misiniz?" },
      { en: "Bear with me while I find the file.", tr: "Ben dosyayı bulana kadar sabredin." }
    ],
    practice: [
      { tr: "Biraz sabredin, hemen bakıyorum.", en: "Bear with me, I'm checking right away." },
      { tr: "Uzun bir hikâye, biraz sabredin.", en: "It's a long story, bear with me." },
      { tr: "Ben sıra bulana kadar sabredin.", en: "Bear with me while I find my place." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "cut to the chase",
    tr: "sadede gelmek",
    note: "Samimi ortamda rahat, resmî toplantıda biraz sert durur.",
    examples: [
      { en: "Let me cut to the chase: we need more time.", tr: "Sadede geleyim: daha fazla vakit lazım." },
      { en: "Cut to the chase, what do you want?", tr: "Sadede gel, ne istiyorsun?" },
      { en: "She cut to the chase and named her price.", tr: "Lafı dolandırmadan fiyatını söyledi." }
    ],
    practice: [
      { tr: "Sadede gelelim, vaktimiz az.", en: "Let's cut to the chase, we don't have much time." },
      { tr: "Sadede gel lütfen.", en: "Please cut to the chase." },
      { tr: "Uzatmadan sadede geldi.", en: "He cut to the chase without delay." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "off the top of my head",
    tr: "şöyle aklıma ilk gelen",
    note: "Verdiğin bilginin kesin olmadığını baştan söyler.",
    examples: [
      { en: "Off the top of my head, I'd say twenty.", tr: "Şöyle aklıma ilk gelen, yirmi kadar." },
      { en: "I can't remember it off the top of my head.", tr: "Şu an aklıma gelmiyor." },
      { en: "Off the top of my head, there are three options.", tr: "Ezberden söylüyorum ama üç seçenek var." }
    ],
    practice: [
      { tr: "Şöyle aklıma ilk gelen, elli lira.", en: "Off the top of my head, fifty liras." },
      { tr: "Tarihi şu an aklıma gelmiyor.", en: "I don't remember the date off the top of my head." },
      { tr: "Aklıma ilk gelen iki isim söyleyeyim.", en: "Let me give you two names off the top of my head." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "give it a shot",
    tr: "bir denemek",
    note: "'give it a try' ile aynı, biraz daha cesur bir tını taşır.",
    examples: [
      { en: "I've never cooked this, but I'll give it a shot.", tr: "Bunu hiç pişirmedim ama bir deneyeyim." },
      { en: "Why don't you give it a shot?", tr: "Bir denesene?" },
      { en: "We gave it a shot and it worked.", tr: "Bir denedik ve tuttu." }
    ],
    practice: [
      { tr: "Zor ama bir deneyelim.", en: "It's hard, but let's give it a shot." },
      { tr: "Neden bir denemiyorsun?", en: "Why don't you give it a shot?" },
      { tr: "Bir denedi ve beğendi.", en: "She gave it a shot and liked it." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "you have a point",
    tr: "haklısın, bunda haklısın",
    note: "Tam katılmasan bile karşı tarafın bir noktada haklı olduğunu kabul eder.",
    examples: [
      { en: "You have a point, but it's still risky.", tr: "Haklısın ama yine de riskli." },
      { en: "He has a point about the cost.", tr: "Maliyet konusunda haklı." },
      { en: "That's a fair point.", tr: "Bu doğru bir tespit." }
    ],
    practice: [
      { tr: "Haklısın, bunu düşünmemiştim.", en: "You have a point, I hadn't thought of that." },
      { tr: "Bunda haklısın ama geç kaldık.", en: "You have a point, but we're late." },
      { tr: "Sanırım haklısın.", en: "I think you have a point." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "let alone",
    tr: "bırak onu, ... bile",
    note: "Olumsuz cümlede daha küçük olan şey önce gelir.",
    examples: [
      { en: "He can't walk, let alone run.", tr: "Yürüyemiyor, koşmayı bırak." },
      { en: "I don't have time for lunch, let alone a trip.", tr: "Öğle yemeğine vaktim yok, tatili geç." },
      { en: "She never called, let alone visited.", tr: "Hiç aramadı, ziyareti bırak." }
    ],
    practice: [
      { tr: "Yazamıyor, okumayı bırak.", en: "He can't write, let alone read." },
      { tr: "Bir saatim yok, bir günü geç.", en: "I don't have an hour, let alone a day." },
      { tr: "Onu tanımıyorum bile, arkadaşını geç.", en: "I don't even know him, let alone his friend." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "be supposed to",
    tr: "-mesi gerekiyor",
    note: "Geçmişte kullanılırsa genelde o şeyin yapılmadığı anlaşılır.",
    examples: [
      { en: "You're supposed to wear a helmet.", tr: "Kask takman gerekiyor." },
      { en: "I was supposed to call her yesterday.", tr: "Dün onu aramam gerekiyordu." },
      { en: "What am I supposed to do now?", tr: "Şimdi ne yapmam gerekiyor?" }
    ],
    practice: [
      { tr: "Burada sigara içmemen gerekiyor.", en: "You're not supposed to smoke here." },
      { tr: "Toplantı dokuzda başlaması gerekiyordu.", en: "The meeting was supposed to start at nine." },
      { tr: "Bunu kime vermem gerekiyor?", en: "Who am I supposed to give this to?" }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "end up",
    tr: "sonunda ... olmak",
    note: "Planlanmamış bir sonucu anlatır; arkasından -ing, sıfat veya yer gelebilir.",
    examples: [
      { en: "We ended up walking home.", tr: "Sonunda eve yürüyerek döndük." },
      { en: "He ended up as a teacher.", tr: "Sonunda öğretmen oldu." },
      { en: "If you rush, you'll end up making mistakes.", tr: "Acele edersen hata yaparsın." }
    ],
    practice: [
      { tr: "Sonunda bütün gece çalıştık.", en: "We ended up working all night." },
      { tr: "Sonunda en pahalısını aldı.", en: "He ended up buying the most expensive one." },
      { tr: "Böyle giderse sonun kötü olur.", en: "You'll end up badly if this continues." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "a far cry from",
    tr: "...dan çok uzak, bambaşka",
    note: "İki şey arasındaki büyük farkı vurgular, genelde olumsuz bir ima taşır.",
    examples: [
      { en: "This hotel is a far cry from the photos.", tr: "Bu otel fotoğraflardakinden bambaşka." },
      { en: "His new job is a far cry from teaching.", tr: "Yeni işi öğretmenlikten çok uzak." },
      { en: "The result was a far cry from what we expected.", tr: "Sonuç beklediğimizden çok farklı çıktı." }
    ],
    practice: [
      { tr: "Bu yemek annemin yemeğinden çok uzak.", en: "This food is a far cry from my mother's." },
      { tr: "Yeni ofis eskisinden bambaşka.", en: "The new office is a far cry from the old one." },
      { tr: "Kitap filmden çok farklı.", en: "The book is a far cry from the film." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "put up with",
    tr: "katlanmak, tahammül etmek",
    note: "Üç kelime birlikte gelir, arası açılmaz.",
    examples: [
      { en: "I can't put up with this noise.", tr: "Bu gürültüye katlanamıyorum." },
      { en: "She put up with him for years.", tr: "Yıllarca ona katlandı." },
      { en: "How do you put up with the traffic?", tr: "Bu trafiğe nasıl dayanıyorsun?" }
    ],
    practice: [
      { tr: "Bu sıcağa daha fazla katlanamam.", en: "I can't put up with this heat any longer." },
      { tr: "Yıllarca kötü muameleye katlandılar.", en: "They put up with bad treatment for years." },
      { tr: "Neden buna katlanıyorsun?", en: "Why do you put up with this?" }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "get around to",
    tr: "sonunda fırsat bulup yapmak",
    note: "Uzun süredir ertelenen işi nihayet yapmak; arkasından gelen fiil -ing alır.",
    examples: [
      { en: "I finally got around to fixing the door.", tr: "Sonunda kapıyı tamir etmeye fırsat buldum." },
      { en: "I haven't got around to it yet.", tr: "Henüz sıra ona gelmedi." },
      { en: "He never got around to calling her back.", tr: "Onu geri aramaya bir türlü fırsat bulamadı." }
    ],
    practice: [
      { tr: "Sonunda mektubu yazmaya fırsat buldum.", en: "I finally got around to writing the letter." },
      { tr: "Henüz kitabı okumaya fırsat bulamadım.", en: "I haven't got around to reading the book yet." },
      { tr: "Ne zaman temizliğe fırsat bulacaksın?", en: "When will you get around to cleaning?" }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "on the verge of",
    tr: "eşiğinde, -mek üzere",
    note: "Arkasından isim ya da -ing gelir: 'on the verge of tears / crying'.",
    examples: [
      { en: "The company is on the verge of bankruptcy.", tr: "Şirket iflasın eşiğinde." },
      { en: "She was on the verge of tears.", tr: "Ağlamak üzereydi." },
      { en: "We're on the verge of finishing.", tr: "Bitirmek üzereyiz." }
    ],
    practice: [
      { tr: "Pes etmenin eşiğindeydim.", en: "I was on the verge of giving up." },
      { tr: "Takım şampiyonluğun eşiğinde.", en: "The team is on the verge of the championship." },
      { tr: "Gözyaşlarının eşiğindeydi.", en: "She was on the verge of tears." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "stand out",
    tr: "göze çarpmak, sıyrılmak",
    note: "Kalabalıktan ayrılan şeyi anlatırken 'stand out from' kullanılır.",
    examples: [
      { en: "Her answer really stood out.", tr: "Onun cevabı gerçekten göze çarptı." },
      { en: "What makes your product stand out?", tr: "Ürününüzü öne çıkaran ne?" },
      { en: "He stands out in a crowd.", tr: "Kalabalıkta hemen göze çarpıyor." }
    ],
    practice: [
      { tr: "Kırmızı ceketi hemen göze çarpıyor.", en: "His red jacket really stands out." },
      { tr: "Sınıfta öne çıkmak istiyor.", en: "She wants to stand out in class." },
      { tr: "Bu tasarım diğerlerinden sıyrılıyor.", en: "This design stands out from the others." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "be in charge of",
    tr: "sorumlusu olmak",
    note: "Kimin yönettiğini sormak için 'Who's in charge here?' kalıplaşmıştır.",
    examples: [
      { en: "She's in charge of the whole project.", tr: "Tüm projenin sorumlusu o." },
      { en: "Who's in charge here?", tr: "Burada yetkili kim?" },
      { en: "I was put in charge of the team.", tr: "Ekibin başına getirildim." }
    ],
    practice: [
      { tr: "Bu bölümün sorumlusu kim?", en: "Who is in charge of this department?" },
      { tr: "Mutfağın sorumlusu benim.", en: "I'm in charge of the kitchen." },
      { tr: "Geçen yıl bütçenin sorumlusuydu.", en: "He was in charge of the budget last year." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "pull it off",
    tr: "altından kalkmak, başarmak",
    note: "Zor ya da ihtimal verilmeyen bir işi başarmak; nesne ortaya girer.",
    examples: [
      { en: "I didn't think he could pull it off.", tr: "Altından kalkabileceğini düşünmemiştim." },
      { en: "They pulled off a great show.", tr: "Harika bir gösteriyi başardılar." },
      { en: "Somehow we pulled it off.", tr: "Bir şekilde başardık." }
    ],
    practice: [
      { tr: "Zor bir işti ama başardı.", en: "It was hard, but he pulled it off." },
      { tr: "Başarabileceğimizi sanmıyorum.", en: "I don't think we can pull it off." },
      { tr: "Bir şekilde altından kalktılar.", en: "They pulled it off somehow." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "figure out",
    tr: "çözmek, anlamak",
    note: "Nesne zamirse araya girer: 'figure it out'.",
    examples: [
      { en: "I can't figure out how this works.", tr: "Bunun nasıl çalıştığını çözemiyorum." },
      { en: "We'll figure it out together.", tr: "Birlikte çözeriz." },
      { en: "She figured out the problem in ten minutes.", tr: "Sorunu on dakikada çözdü." }
    ],
    practice: [
      { tr: "Şifreyi çözemedim.", en: "I couldn't figure out the password." },
      { tr: "Ne yapacağımızı çözmemiz lazım.", en: "We need to figure out what to do." },
      { tr: "Sonunda sorunu çözdü.", en: "She finally figured out the problem." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "by and large",
    tr: "genel olarak, büyük ölçüde",
    note: "Genel değerlendirme yaparken kullanılır, istisnaların varlığını kabul eder.",
    examples: [
      { en: "By and large, the plan worked.", tr: "Genel olarak plan tuttu." },
      { en: "The students are, by and large, well prepared.", tr: "Öğrenciler genel olarak iyi hazırlanmış." },
      { en: "By and large, I agree with you.", tr: "Genel olarak sana katılıyorum." }
    ],
    practice: [
      { tr: "Genel olarak müşteriler memnun.", en: "By and large, the customers are happy." },
      { tr: "Genel olarak hafta iyi geçti.", en: "By and large, the week went well." },
      { tr: "Genel olarak bu doğru.", en: "By and large, this is true." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "on second thought",
    tr: "bir dakika, düşündüm de",
    note: "Az önce söylediğini değiştirirken kullanılır; İngiliz İngilizcesinde 'on second thoughts' olur.",
    examples: [
      { en: "On second thought, let's stay home.", tr: "Düşündüm de, evde kalalım." },
      { en: "I'll have tea. On second thought, make it coffee.", tr: "Çay alayım. Yok, kahve olsun." },
      { en: "On second thought, maybe you're right.", tr: "Bir dakika, belki de haklısın." }
    ],
    practice: [
      { tr: "Düşündüm de, yürüyelim.", en: "On second thought, let's walk." },
      { tr: "Bir dakika, ben gelmesem daha iyi.", en: "On second thought, I'd better not come." },
      { tr: "Düşündüm de haklısın.", en: "On second thought, you're right." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "it's worth it",
    tr: "buna değer",
    note: "Fiil gelirse -ing alır: 'it's worth trying'.",
    examples: [
      { en: "The hike is long, but it's worth it.", tr: "Yürüyüş uzun ama değer." },
      { en: "Is it worth the money?", tr: "Parasına değer mi?" },
      { en: "It's worth trying at least once.", tr: "En azından bir kere denemeye değer." }
    ],
    practice: [
      { tr: "Fiyatı yüksek ama buna değer.", en: "The price is high, but it's worth it." },
      { tr: "Bunca yol tepmeye değer mi?", en: "Is it worth it to travel this far?" },
      { tr: "Bence denemeye değer.", en: "I think it's worth it to try." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "the odds are",
    tr: "büyük ihtimalle",
    note: "Tahmin bildirir; arkasındaki 'that' düşebilir.",
    examples: [
      { en: "The odds are he'll say no.", tr: "Büyük ihtimalle hayır diyecek." },
      { en: "The odds are against us.", tr: "İhtimaller bize karşı." },
      { en: "What are the odds of that happening?", tr: "Bunun olma ihtimali ne ki?" }
    ],
    practice: [
      { tr: "Büyük ihtimalle yarın yağmur yağar.", en: "The odds are it will rain tomorrow." },
      { tr: "Büyük ihtimalle bizi hatırlamıyor.", en: "The odds are he doesn't remember us." },
      { tr: "Büyük ihtimalle kazanırız.", en: "The odds are we will win." }
    ]
  },
  {
    group: "Ek ifadeler",
    chunk: "throw in the towel",
    tr: "havlu atmak, pes etmek",
    note: "Boksdan gelir; uzun bir mücadeleden sonra vazgeçmeyi anlatır, küçük işler için kullanılmaz.",
    examples: [
      { en: "After three years, he threw in the towel.", tr: "Üç yıl sonra havlu attı." },
      { en: "Don't throw in the towel yet.", tr: "Daha pes etme." },
      { en: "They refused to throw in the towel.", tr: "Pes etmeyi reddettiler." }
    ],
    practice: [
      { tr: "Bu kadar kolay havlu atma.", en: "Don't throw in the towel so easily." },
      { tr: "İki yıl sonra havlu attı.", en: "He threw in the towel after two years." },
      { tr: "Havlu atmayı düşünüyoruz.", en: "We're thinking of throwing in the towel." }
    ]
  }
,

  /* ——— Phrasal verb'ler · 133-192 ——— */

  {
    group: "Phrasal verb",
    chunk: "go on",
    tr: "devam etmek / olup bitmek",
    note: "İki ayrı işi var: bir şeyi sürdürmek ve 'what's going on?' kalıbında olan biteni sormak.",
    examples: [
      { en: "Go on, I'm listening.", tr: "Devam et, dinliyorum." },
      { en: "What's going on here?", tr: "Burada neler oluyor?" },
      { en: "The meeting went on for hours.", tr: "Toplantı saatlerce sürdü." }
    ],
    practice: [
      { tr: "Devam et, seni dinliyorum.", en: "Go on, I'm listening to you." },
      { tr: "Aşağıda neler oluyor?", en: "What's going on downstairs?" },
      { tr: "Konuşma gece yarısına kadar sürdü.", en: "The talk went on until midnight." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "pick up",
    tr: "alıp gelmek / farkında olmadan öğrenmek",
    note: "Hem birini arabayla almak hem de bir dili yaşayarak kapmak anlamında kullanılır.",
    examples: [
      { en: "I'll pick you up at seven.", tr: "Seni yedide alırım." },
      { en: "He picked up Spanish in Mexico.", tr: "İspanyolcayı Meksika'da kaptı." },
      { en: "Can you pick up some milk?", tr: "Biraz süt alabilir misin?" }
    ],
    practice: [
      { tr: "Seni havalimanından alırım.", en: "I'll pick you up from the airport." },
      { tr: "Fransızcayı Paris'te kapmış.", en: "She picked up French in Paris." },
      { tr: "Dönüşte ekmek al.", en: "Pick up some bread on your way back." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "turn out",
    tr: "sonunda ... çıkmak",
    note: "Beklenenin aksine bir sonucu anlatır; 'it turned out that' kalıbıyla çok gelir.",
    examples: [
      { en: "It turned out to be a great day.", tr: "Harika bir gün çıktı." },
      { en: "It turned out that he was right.", tr: "Meğer haklıymış." },
      { en: "The cake turned out perfectly.", tr: "Kek mükemmel oldu." }
    ],
    practice: [
      { tr: "Gün güzel geçti.", en: "The day turned out well." },
      { tr: "Meğer o haklıymış.", en: "It turned out that he was right." },
      { tr: "Yemek beklediğimden lezzetli çıktı.", en: "The food turned out tastier than I expected." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "find out",
    tr: "öğrenmek",
    note: "Araştırarak ya da tesadüfen bilgiye ulaşmak. 'learn' gibi ders çalışarak öğrenmek değildir.",
    examples: [
      { en: "I need to find out the price.", tr: "Fiyatı öğrenmem lazım." },
      { en: "How did you find out?", tr: "Nasıl öğrendin?" },
      { en: "She found out the truth later.", tr: "Gerçeği sonradan öğrendi." }
    ],
    practice: [
      { tr: "Ne zaman geleceğini öğren.", en: "Find out when he is coming." },
      { tr: "Adresini nasıl öğrendin?", en: "How did you find out his address?" },
      { tr: "Sonunda gerçeği öğrendik.", en: "We finally found out the truth." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "give up",
    tr: "vazgeçmek, bırakmak",
    note: "Hem pes etmek hem de bir alışkanlığı bırakmak. Arkasından -ing gelir: 'give up smoking'.",
    examples: [
      { en: "Don't give up now.", tr: "Şimdi vazgeçme." },
      { en: "He gave up smoking last year.", tr: "Geçen yıl sigarayı bıraktı." },
      { en: "I gave up trying to explain.", tr: "Anlatmaya çalışmaktan vazgeçtim." }
    ],
    practice: [
      { tr: "Sakın vazgeçme.", en: "Don't ever give up." },
      { tr: "Kahveyi bırakmaya karar verdi.", en: "He decided to give up coffee." },
      { tr: "Onu ikna etmekten vazgeçtim.", en: "I gave up trying to convince her." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "take over",
    tr: "devralmak",
    note: "Bir işin, görevin ya da şirketin kontrolünü almak. Kimden devraldığını 'from' ile söylersin.",
    examples: [
      { en: "She took over the project.", tr: "Projeyi devraldı." },
      { en: "Can you take over for a minute?", tr: "Bir dakika yerime bakar mısın?" },
      { en: "A larger company took them over.", tr: "Daha büyük bir şirket onları satın aldı." }
    ],
    practice: [
      { tr: "Yarından itibaren işi ben devralıyorum.", en: "I'm taking over the job from tomorrow." },
      { tr: "Sınıfı devralır mısın?", en: "Can you take over the class?" },
      { tr: "Şirketi oğlu devraldı.", en: "His son took over the company." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "set up",
    tr: "kurmak, ayarlamak",
    note: "Şirket, sistem, toplantı, cihaz; sıfırdan çalışır hâle getirilen her şey için.",
    examples: [
      { en: "They set up a new company.", tr: "Yeni bir şirket kurdular." },
      { en: "Can you set up the meeting?", tr: "Toplantıyı ayarlayabilir misin?" },
      { en: "It took an hour to set up the printer.", tr: "Yazıcıyı kurmak bir saat sürdü." }
    ],
    practice: [
      { tr: "Küçük bir atölye kurdular.", en: "They set up a small workshop." },
      { tr: "Yarın için bir görüşme ayarla.", en: "Set up a meeting for tomorrow." },
      { tr: "Yeni telefonu kurmama yardım et.", en: "Help me set up the new phone." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "carry out",
    tr: "yürütmek, gerçekleştirmek",
    note: "Plan, araştırma, emir gibi şeyler için; resmî ve yazılı dilde sık geçer.",
    examples: [
      { en: "They carried out a study last year.", tr: "Geçen yıl bir çalışma yürüttüler." },
      { en: "The plan was carried out successfully.", tr: "Plan başarıyla uygulandı." },
      { en: "We need to carry out more tests.", tr: "Daha fazla test yapmamız gerek." }
    ],
    practice: [
      { tr: "Emirleri harfiyen yerine getirdiler.", en: "They carried out the orders exactly." },
      { tr: "Bu araştırmayı kim yürütüyor?", en: "Who is carrying out this research?" },
      { tr: "Planı hafta sonu uygulayacağız.", en: "We will carry out the plan at the weekend." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "deal with",
    tr: "ilgilenmek, başa çıkmak",
    note: "Sorun, insan ya da konu için. 'handle' ile çoğu yerde birbirinin yerine geçer.",
    examples: [
      { en: "I'll deal with it tomorrow.", tr: "Yarın ilgilenirim." },
      { en: "How do you deal with stress?", tr: "Stresle nasıl başa çıkıyorsun?" },
      { en: "This book deals with climate change.", tr: "Bu kitap iklim değişikliğini ele alıyor." }
    ],
    practice: [
      { tr: "Bu sorunla ben ilgilenirim.", en: "I'll deal with this problem." },
      { tr: "Zor müşterilerle nasıl başa çıkıyorsun?", en: "How do you deal with difficult customers?" },
      { tr: "Bunu sonra ele alalım.", en: "Let's deal with this later." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "look for",
    tr: "aramak",
    note: "Arama eylemini anlatır; bulma anı için 'find' kullanılır. İkisini karıştırma.",
    examples: [
      { en: "I'm looking for my keys.", tr: "Anahtarlarımı arıyorum." },
      { en: "What are you looking for?", tr: "Ne arıyorsun?" },
      { en: "She's looking for a new job.", tr: "Yeni bir iş arıyor." }
    ],
    practice: [
      { tr: "Ucuz bir otel arıyoruz.", en: "We are looking for a cheap hotel." },
      { tr: "Kimi arıyorsun?", en: "Who are you looking for?" },
      { tr: "Bütün gün telefonumu aradım.", en: "I looked for my phone all day." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "look after",
    tr: "bakmak, ilgilenmek",
    note: "Çocuk, hasta, evcil hayvan gibi bakıma muhtaç olanlar için. 'take care of' ile eş anlamlıdır.",
    examples: [
      { en: "Can you look after the kids tonight?", tr: "Bu akşam çocuklara bakabilir misin?" },
      { en: "She looks after her grandmother.", tr: "Babaannesine bakıyor." },
      { en: "Look after yourself.", tr: "Kendine iyi bak." }
    ],
    practice: [
      { tr: "Ben yokken kediye bakar mısın?", en: "Can you look after the cat while I'm away?" },
      { tr: "Hasta annesine bakıyor.", en: "He looks after his sick mother." },
      { tr: "Çocuklara komşumuz baktı.", en: "Our neighbour looked after the children." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "look into",
    tr: "araştırmak, incelemek",
    note: "Bir sorunun sebebini araştırmak. Müşteri hizmetlerinde çok duyulan bir kalıptır.",
    examples: [
      { en: "I'll look into it and get back to you.", tr: "Araştırıp size döneceğim." },
      { en: "The police are looking into the case.", tr: "Polis olayı inceliyor." },
      { en: "We should look into cheaper options.", tr: "Daha ucuz seçenekleri araştırmalıyız." }
    ],
    practice: [
      { tr: "Bu konuyu araştıracağım.", en: "I will look into this matter." },
      { tr: "Şikâyeti inceliyorlar.", en: "They are looking into the complaint." },
      { tr: "Başka seçenekleri araştırdın mı?", en: "Have you looked into other options?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "bring up",
    tr: "konuyu açmak / çocuk yetiştirmek",
    note: "İki uzak anlamı var; hangisi olduğunu nesne belirler: konu mu, çocuk mu.",
    examples: [
      { en: "Don't bring up that subject.", tr: "O konuyu açma." },
      { en: "She brought up three children alone.", tr: "Üç çocuğu tek başına büyüttü." },
      { en: "He brought it up at the meeting.", tr: "Toplantıda bunu gündeme getirdi." }
    ],
    practice: [
      { tr: "Yemekte bu konuyu açma.", en: "Don't bring up this subject at dinner." },
      { tr: "İki çocuğunu köyde büyüttü.", en: "She brought up her two children in the village." },
      { tr: "Sorunu ilk o gündeme getirdi.", en: "He brought up the problem first." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "call off",
    tr: "iptal etmek",
    note: "Planlanmış bir etkinliği iptal etmek. 'cancel' ile aynı, daha konuşma dilidir.",
    examples: [
      { en: "They called off the match.", tr: "Maçı iptal ettiler." },
      { en: "The wedding was called off.", tr: "Düğün iptal edildi." },
      { en: "We had to call it off.", tr: "İptal etmek zorunda kaldık." }
    ],
    practice: [
      { tr: "Yağmur yüzünden pikniği iptal ettik.", en: "We called off the picnic because of the rain." },
      { tr: "Toplantıyı iptal etmeyin lütfen.", en: "Please don't call off the meeting." },
      { tr: "Arama çalışması iptal edildi.", en: "The search was called off." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "put off",
    tr: "ertelemek",
    note: "Arkasından -ing gelir: 'put off going'. Ayrıca birinin hevesini kaçırmak anlamı da vardır.",
    examples: [
      { en: "Don't put off until tomorrow what you can do today.", tr: "Bugün yapabileceğini yarına erteleme." },
      { en: "They put off the decision again.", tr: "Kararı yine ertelediler." },
      { en: "The smell put me off.", tr: "Koku hevesimi kaçırdı." }
    ],
    practice: [
      { tr: "Ziyareti gelecek haftaya erteledim.", en: "I put off the visit until next week." },
      { tr: "Gitmeyi daha fazla erteleme.", en: "Don't put off going any longer." },
      { tr: "Neden hep erteliyorsun?", en: "Why do you always put things off?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "show up",
    tr: "gelmek, ortaya çıkmak",
    note: "Genelde beklenen birinin gelmesi ya da gelmemesi için kullanılır.",
    examples: [
      { en: "He didn't show up.", tr: "Gelmedi." },
      { en: "She showed up an hour late.", tr: "Bir saat geç geldi." },
      { en: "Just show up and be yourself.", tr: "Sen gel yeter, kendin gibi ol." }
    ],
    practice: [
      { tr: "Kimse toplantıya gelmedi.", en: "Nobody showed up at the meeting." },
      { tr: "Yarım saat geç geldi.", en: "He showed up half an hour late." },
      { tr: "Umarım zamanında gelir.", en: "I hope she shows up on time." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "grow up",
    tr: "büyümek, yetişmek",
    note: "Boy uzaması için değil, çocukluktan yetişkinliğe geçiş için kullanılır. Boy için 'grow' yeter.",
    examples: [
      { en: "I grew up in a small town.", tr: "Küçük bir kasabada büyüdüm." },
      { en: "What do you want to be when you grow up?", tr: "Büyüyünce ne olmak istiyorsun?" },
      { en: "Grow up, we're not kids anymore.", tr: "Büyü artık, çocuk değiliz." }
    ],
    practice: [
      { tr: "Denize yakın bir yerde büyüdüm.", en: "I grew up near the sea." },
      { tr: "Çocuklar çok çabuk büyüyor.", en: "Children grow up very quickly." },
      { tr: "Nerede büyüdünüz?", en: "Where did you grow up?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "hang out",
    tr: "takılmak, vakit geçirmek",
    note: "Plansız, rahat buluşmaları anlatır. Kiminle olduğunu 'with' ile bağlarsın.",
    examples: [
      { en: "We hung out at the park.", tr: "Parkta takıldık." },
      { en: "Do you want to hang out tonight?", tr: "Bu akşam takılalım mı?" },
      { en: "He hangs out with older kids.", tr: "Büyük çocuklarla takılıyor." }
    ],
    practice: [
      { tr: "Cumartesi arkadaşlarımla takıldım.", en: "I hung out with my friends on Saturday." },
      { tr: "Bu akşam nerede takılıyoruz?", en: "Where are we hanging out tonight?" },
      { tr: "Sahilde takılmayı seviyorlar.", en: "They like hanging out at the beach." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "break down",
    tr: "bozulmak / çökmek",
    note: "Araç ve makineler için bozulmak, insanlar için duygusal olarak çökmek anlamına gelir.",
    examples: [
      { en: "My car broke down on the highway.", tr: "Arabam otoyolda bozuldu." },
      { en: "She broke down and cried.", tr: "Çöküp ağlamaya başladı." },
      { en: "The talks broke down last week.", tr: "Görüşmeler geçen hafta çıkmaza girdi." }
    ],
    practice: [
      { tr: "Çamaşır makinesi yine bozuldu.", en: "The washing machine broke down again." },
      { tr: "Arabam yolun ortasında bozuldu.", en: "My car broke down in the middle of the road." },
      { tr: "Haberi duyunca çöktü.", en: "She broke down when she heard the news." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "break up",
    tr: "ayrılmak (ilişki)",
    note: "İlişkinin bitmesi için 'break up with' kullanılır. Kalabalığın dağılması anlamı da vardır.",
    examples: [
      { en: "They broke up last month.", tr: "Geçen ay ayrıldılar." },
      { en: "She broke up with him.", tr: "Ondan ayrıldı." },
      { en: "The crowd broke up quickly.", tr: "Kalabalık hızla dağıldı." }
    ],
    practice: [
      { tr: "Üç yıl sonra ayrıldılar.", en: "They broke up after three years." },
      { tr: "Erkek arkadaşından ayrılmış.", en: "She broke up with her boyfriend." },
      { tr: "Ayrılmak istemiyorum.", en: "I don't want to break up." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "check out",
    tr: "bir bakmak / otelden çıkış yapmak",
    note: "Konuşma dilinde 'şuna bak' demenin en doğal yolu; otelde ise ayrılma işlemidir.",
    examples: [
      { en: "Check out this photo.", tr: "Şu fotoğrafa bir bak." },
      { en: "We check out at eleven.", tr: "On birde çıkış yapıyoruz." },
      { en: "I'll check out the new place.", tr: "Yeni mekâna bir bakacağım." }
    ],
    practice: [
      { tr: "Şu yeni kafeye bir bak.", en: "Check out that new cafe." },
      { tr: "Yarın sabah çıkış yapıyoruz.", en: "We're checking out tomorrow morning." },
      { tr: "Şu videoya bak, çok komik.", en: "Check out this video, it's very funny." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "cheer up",
    tr: "neşelenmek, moralini düzeltmek",
    note: "Hem 'neşelen' emri hem de birinin moralini düzeltmek anlamında geçişli kullanılır.",
    examples: [
      { en: "Cheer up, it's not so bad.", tr: "Neşelen, o kadar da kötü değil." },
      { en: "The news cheered her up.", tr: "Haber moralini düzeltti." },
      { en: "I tried to cheer him up.", tr: "Onu neşelendirmeye çalıştım." }
    ],
    practice: [
      { tr: "Neşelen, yarın tatil.", en: "Cheer up, tomorrow is a holiday." },
      { tr: "Onu neşelendirmek için çiçek aldım.", en: "I bought flowers to cheer her up." },
      { tr: "Hediyeyi görünce neşelendi.", en: "He cheered up when he saw the present." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "come across",
    tr: "rastlamak, denk gelmek",
    note: "Aramadan bulmayı anlatır. İkinci anlamı 'bir izlenim bırakmak'tır: 'he comes across as rude'.",
    examples: [
      { en: "I came across an old photo.", tr: "Eski bir fotoğrafa denk geldim." },
      { en: "She came across as confident.", tr: "Kendine güvenli bir izlenim bıraktı." },
      { en: "We came across a small café.", tr: "Küçük bir kafeye rastladık." }
    ],
    practice: [
      { tr: "Kütüphanede ilginç bir kitaba rastladım.", en: "I came across an interesting book in the library." },
      { tr: "Yolda eski bir arkadaşıma denk geldim.", en: "I came across an old friend on the way." },
      { tr: "Çok kibar bir izlenim bıraktı.", en: "She came across as very polite." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "count on",
    tr: "güvenmek, bel bağlamak",
    note: "Birinin sözünü tutacağına inanmak. 'rely on' ile eş anlamlıdır.",
    examples: [
      { en: "You can count on me.", tr: "Bana güvenebilirsin." },
      { en: "Don't count on the weather.", tr: "Havaya bel bağlama." },
      { en: "We're counting on you.", tr: "Sana güveniyoruz." }
    ],
    practice: [
      { tr: "Sana güvenebilir miyim?", en: "Can I count on you?" },
      { tr: "Onun yardımına bel bağlama.", en: "Don't count on his help." },
      { tr: "Herkes ona güveniyor.", en: "Everyone counts on him." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "cut down on",
    tr: "azaltmak",
    note: "Tamamen bırakmak değil, miktarı düşürmektir; şeker, kahve, harcama gibi şeylerle gelir.",
    examples: [
      { en: "I'm cutting down on sugar.", tr: "Şekeri azaltıyorum." },
      { en: "We need to cut down on spending.", tr: "Harcamaları kısmamız lazım." },
      { en: "He cut down on coffee.", tr: "Kahveyi azalttı." }
    ],
    practice: [
      { tr: "Tuzu azaltmam gerekiyor.", en: "I need to cut down on salt." },
      { tr: "Ekran süresini azalttık.", en: "We cut down on screen time." },
      { tr: "Neden sigarayı azaltmıyorsun?", en: "Why don't you cut down on cigarettes?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "drop off",
    tr: "bırakmak (birini/bir şeyi)",
    note: "'pick up'ın tersidir. Ayrıca farkında olmadan uykuya dalmak anlamı da vardır.",
    examples: [
      { en: "Can you drop me off at the station?", tr: "Beni istasyonda bırakabilir misin?" },
      { en: "I'll drop off the package.", tr: "Paketi bırakırım." },
      { en: "He dropped off during the movie.", tr: "Film sırasında uyuyakaldı." }
    ],
    practice: [
      { tr: "Çocukları okula bırakayım.", en: "Let me drop off the children at school." },
      { tr: "Kitapları yarın bırakırım.", en: "I'll drop off the books tomorrow." },
      { tr: "Beni köşede bırak yeter.", en: "Just drop me off at the corner." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "get along with",
    tr: "iyi geçinmek",
    note: "İngiliz İngilizcesinde 'get on with' olur. Kiminle geçindiğini 'with' bağlar.",
    examples: [
      { en: "I get along with my neighbors.", tr: "Komşularımla iyi geçiniyorum." },
      { en: "They don't get along.", tr: "Anlaşamıyorlar." },
      { en: "How do you get along with her?", tr: "Onunla nasıl geçiniyorsun?" }
    ],
    practice: [
      { tr: "Yeni patronumla iyi geçiniyorum.", en: "I get along with my new boss." },
      { tr: "Kardeşiyle hiç geçinemiyor.", en: "She doesn't get along with her sister." },
      { tr: "Herkesle iyi geçinir.", en: "He gets along with everyone." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "get away with",
    tr: "yanına kâr kalmak",
    note: "Cezasız kalmayı anlatır; 'get away with it' ve 'get away with murder' kalıpları çok geçer.",
    examples: [
      { en: "He got away with it.", tr: "Yanına kâr kaldı." },
      { en: "You won't get away with this.", tr: "Bu yanına kalmayacak." },
      { en: "She gets away with everything.", tr: "Her şey onun yanına kâr kalıyor." }
    ],
    practice: [
      { tr: "Bu yalan yanına kâr kalmaz.", en: "He won't get away with this lie." },
      { tr: "Nasıl yanına kâr kaldı?", en: "How did she get away with it?" },
      { tr: "Çocuklar her şeyi yanlarına kâr bırakıyor.", en: "The children get away with everything." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "get back to",
    tr: "geri dönüş yapmak",
    note: "İş yazışmalarının en sık kalıplarından: cevabı sonra vereceğini söyler.",
    examples: [
      { en: "I'll get back to you tomorrow.", tr: "Yarın size dönerim." },
      { en: "She never got back to me.", tr: "Bana hiç dönüş yapmadı." },
      { en: "Let me check and get back to you.", tr: "Bir bakayım, size döneyim." }
    ],
    practice: [
      { tr: "Fiyatı öğrenip size döneceğim.", en: "I'll get back to you with the price." },
      { tr: "Lütfen bugün bana dönüş yap.", en: "Please get back to me today." },
      { tr: "Hâlâ bize dönüş yapmadılar.", en: "They still haven't got back to us." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "get over",
    tr: "atlatmak, üstesinden gelmek",
    note: "Hastalık, ayrılık, korku gibi zor bir şeyi geride bırakmak.",
    examples: [
      { en: "It took months to get over the flu.", tr: "Gribi atlatmam aylar sürdü." },
      { en: "She's still getting over the breakup.", tr: "Hâlâ ayrılığı atlatmaya çalışıyor." },
      { en: "Get over it and move on.", tr: "Unut gitsin ve yoluna bak." }
    ],
    practice: [
      { tr: "Hastalığı atlatması iki hafta sürdü.", en: "It took him two weeks to get over the illness." },
      { tr: "Korkunu atlatmalısın.", en: "You have to get over your fear." },
      { tr: "Bu şoku kolay atlatamam.", en: "I can't get over this shock easily." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "give in",
    tr: "pes etmek, boyun eğmek",
    note: "Baskı altında teslim olmayı anlatır. Kime boyun eğdiğini 'to' ile söylersin.",
    examples: [
      { en: "Don't give in to pressure.", tr: "Baskıya boyun eğme." },
      { en: "In the end, he gave in.", tr: "Sonunda pes etti." },
      { en: "She gave in and agreed.", tr: "Direnmeyi bırakıp kabul etti." }
    ],
    practice: [
      { tr: "Ne olursa olsun pes etme.", en: "Don't give in, whatever happens." },
      { tr: "Sonunda isteklerine boyun eğdik.", en: "We finally gave in to their demands." },
      { tr: "Baskı altında pes etti.", en: "He gave in under pressure." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "go through",
    tr: "yaşamak, geçirmek / gözden geçirmek",
    note: "Zor bir dönemi yaşamak ya da bir listeyi baştan sona incelemek anlamında.",
    examples: [
      { en: "She went through a hard time.", tr: "Zor bir dönem geçirdi." },
      { en: "Let's go through the list again.", tr: "Listeyi bir daha gözden geçirelim." },
      { en: "You have no idea what I went through.", tr: "Neler yaşadığımı bilmiyorsun." }
    ],
    practice: [
      { tr: "Geçen yıl çok zor bir dönem geçirdi.", en: "She went through a very hard time last year." },
      { tr: "Belgeleri birlikte gözden geçirelim.", en: "Let's go through the documents together." },
      { tr: "Neler yaşadığını anlıyorum.", en: "I understand what you're going through." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "hold on",
    tr: "bekle, dur bir dakika",
    note: "Telefonda 'hatta kalın' demektir; yüz yüze ise 'bir saniye' anlamına gelir.",
    examples: [
      { en: "Hold on, I'll check.", tr: "Bir saniye, bakıyorum." },
      { en: "Hold on a second.", tr: "Bir saniye bekle." },
      { en: "Please hold on, I'll transfer you.", tr: "Lütfen hatta kalın, aktarıyorum." }
    ],
    practice: [
      { tr: "Bir saniye, ceketimi alayım.", en: "Hold on, let me get my jacket." },
      { tr: "Hatta kalın lütfen.", en: "Please hold on." },
      { tr: "Dur bir dakika, bu doğru değil.", en: "Hold on, that's not right." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "keep up with",
    tr: "ayak uydurmak, geri kalmamak",
    note: "Hız, gelişme ya da haberler için: 'keep up with the news'.",
    examples: [
      { en: "I can't keep up with you.", tr: "Sana yetişemiyorum." },
      { en: "It's hard to keep up with the news.", tr: "Haberleri takip etmek zor." },
      { en: "She keeps up with the latest trends.", tr: "Son trendleri yakından takip ediyor." }
    ],
    practice: [
      { tr: "Sınıfa ayak uyduramıyor.", en: "He can't keep up with the class." },
      { tr: "Teknolojiye ayak uydurmak zor.", en: "It's hard to keep up with technology." },
      { tr: "Yavaş yürü, sana yetişemiyorum.", en: "Walk slowly, I can't keep up with you." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "let down",
    tr: "hayal kırıklığına uğratmak",
    note: "Nesne araya girer: 'let me down'. İsim hâli 'a letdown' yani hayal kırıklığıdır.",
    examples: [
      { en: "Don't let me down.", tr: "Beni hayal kırıklığına uğratma." },
      { en: "He let his family down.", tr: "Ailesini hayal kırıklığına uğrattı." },
      { en: "The ending was a letdown.", tr: "Final hayal kırıklığıydı." }
    ],
    practice: [
      { tr: "Beni hiç hayal kırıklığına uğratmadı.", en: "He has never let me down." },
      { tr: "Takımı hayal kırıklığına uğratmak istemiyorum.", en: "I don't want to let the team down." },
      { tr: "Sonuç bizi hayal kırıklığına uğrattı.", en: "The result let us down." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "look up to",
    tr: "örnek almak, saygı duymak",
    note: "Tersi 'look down on' yani küçümsemektir.",
    examples: [
      { en: "I look up to my older brother.", tr: "Abimi örnek alıyorum." },
      { en: "Kids look up to their teachers.", tr: "Çocuklar öğretmenlerini örnek alır." },
      { en: "He looks down on people.", tr: "İnsanları küçümsüyor." }
    ],
    practice: [
      { tr: "Herkes ona saygı duyuyor.", en: "Everyone looks up to him." },
      { tr: "Küçükken dedemi örnek alırdım.", en: "I looked up to my grandfather when I was little." },
      { tr: "Örnek alacağın birini bul.", en: "Find someone to look up to." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "make out",
    tr: "seçmek, anlamak (güçlükle)",
    note: "Zor koşullarda görmeyi ya da duymayı anlatır: karanlıkta, gürültüde, kötü el yazısında.",
    examples: [
      { en: "I can't make out what he's saying.", tr: "Ne dediğini seçemiyorum." },
      { en: "Can you make out the sign?", tr: "Tabelayı okuyabiliyor musun?" },
      { en: "I could just make out a figure.", tr: "Zar zor bir siluet seçebildim." }
    ],
    practice: [
      { tr: "Karanlıkta yüzünü seçemedim.", en: "I couldn't make out his face in the dark." },
      { tr: "El yazısını okuyabiliyor musun?", en: "Can you make out the handwriting?" },
      { tr: "Uzaktan bir gemi seçtik.", en: "We made out a ship in the distance." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "move on",
    tr: "yoluna bakmak, konuyu geçmek",
    note: "Hem duygusal olarak geride bırakmak hem de toplantıda sonraki maddeye geçmek için.",
    examples: [
      { en: "It's time to move on.", tr: "Artık yoluna bakma vakti." },
      { en: "Let's move on to the next point.", tr: "Sonraki maddeye geçelim." },
      { en: "She moved on with her life.", tr: "Hayatına devam etti." }
    ],
    practice: [
      { tr: "Geçmişi unut ve yoluna bak.", en: "Forget the past and move on." },
      { tr: "Bir sonraki konuya geçelim.", en: "Let's move on to the next subject." },
      { tr: "Yıllar sonra hayatına devam etti.", en: "She moved on after years." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "pass out",
    tr: "bayılmak",
    note: "Bilincini kaybetmek. Ayrı bir anlamı da bir şeyi dağıtmaktır: 'pass out the papers'.",
    examples: [
      { en: "He passed out from the heat.", tr: "Sıcaktan bayıldı." },
      { en: "She almost passed out.", tr: "Neredeyse bayılıyordu." },
      { en: "Pass out the forms, please.", tr: "Formları dağıtın lütfen." }
    ],
    practice: [
      { tr: "Hasta ayağa kalkarken bayıldı.", en: "The patient passed out while standing up." },
      { tr: "Uzun kuyrukta neredeyse bayılıyordum.", en: "I almost passed out in the long queue." },
      { tr: "Kâğıtları sen dağıt.", en: "You pass out the papers." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "point out",
    tr: "belirtmek, dikkat çekmek",
    note: "Bir gerçeği ya da hatayı fark ettirmek. 'point out that' ile cümle bağlanır.",
    examples: [
      { en: "He pointed out the mistake.", tr: "Hatayı gösterdi." },
      { en: "She pointed out that we were late.", tr: "Geç kaldığımızı belirtti." },
      { en: "It's worth pointing out the risks.", tr: "Riskleri belirtmekte fayda var." }
    ],
    practice: [
      { tr: "Bir hatamı belirtti.", en: "She pointed out a mistake of mine." },
      { tr: "Riskleri belirtmek isterim.", en: "I'd like to point out the risks." },
      { tr: "Kimse bunu belirtmedi.", en: "Nobody pointed this out." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "run into",
    tr: "tesadüfen karşılaşmak",
    note: "Beklenmedik karşılaşmalar için; ayrıca bir sorunla karşılaşmak anlamında da kullanılır.",
    examples: [
      { en: "I ran into an old friend.", tr: "Eski bir arkadaşa rastladım." },
      { en: "We ran into some problems.", tr: "Bazı sorunlarla karşılaştık." },
      { en: "Guess who I ran into today.", tr: "Bugün kime rastladım, tahmin et." }
    ],
    practice: [
      { tr: "Dün markette hocama rastladım.", en: "I ran into my teacher at the market yesterday." },
      { tr: "Yolda bir sorunla karşılaştık.", en: "We ran into a problem on the way." },
      { tr: "Onunla nerede karşılaştın?", en: "Where did you run into him?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "set off",
    tr: "yola çıkmak",
    note: "Yolculuğun başlangıç anını anlatır. Ayrıca alarm ya da patlama tetiklemek anlamı vardır.",
    examples: [
      { en: "We set off early in the morning.", tr: "Sabah erkenden yola çıktık." },
      { en: "They set off for Ankara.", tr: "Ankara'ya doğru yola koyuldular." },
      { en: "The smoke set off the alarm.", tr: "Duman alarmı çalıştırdı." }
    ],
    practice: [
      { tr: "Şafakta yola çıkacağız.", en: "We will set off at dawn." },
      { tr: "Trafik olmadan yola çıktılar.", en: "They set off before the traffic." },
      { tr: "Kediyi çıkarınca alarm çaldı.", en: "The cat set off the alarm." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "sort out",
    tr: "halletmek, çözmek",
    note: "Karışık bir durumu düzene sokmak. İngiliz İngilizcesinde çok yaygındır.",
    examples: [
      { en: "I'll sort it out.", tr: "Ben hallederim." },
      { en: "We need to sort out this mess.", tr: "Bu karışıklığı çözmemiz lazım." },
      { en: "Have you sorted out the tickets?", tr: "Biletleri hallettin mi?" }
    ],
    practice: [
      { tr: "Bu meseleyi bugün halledelim.", en: "Let's sort out this matter today." },
      { tr: "Kargo sorununu hallettim.", en: "I sorted out the delivery problem." },
      { tr: "Kim halledecek bunu?", en: "Who will sort this out?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "stick to",
    tr: "bağlı kalmak, sapmamak",
    note: "Plan, karar, diyet ya da konu için: 'stick to the plan', 'stick to the point'.",
    examples: [
      { en: "Let's stick to the plan.", tr: "Plana bağlı kalalım." },
      { en: "Stick to the point, please.", tr: "Konudan sapmayın lütfen." },
      { en: "She stuck to her decision.", tr: "Kararından caymadı." }
    ],
    practice: [
      { tr: "Diyetine sadık kal.", en: "Stick to your diet." },
      { tr: "Ne olursa olsun plana bağlı kaldık.", en: "We stuck to the plan no matter what." },
      { tr: "Lütfen konudan sapma.", en: "Please stick to the subject." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "take off",
    tr: "kalkmak (uçak) / çıkarmak (giysi)",
    note: "Üç anlamı var: uçağın havalanması, giysi çıkarmak ve bir işin birden tutması.",
    examples: [
      { en: "The plane takes off at six.", tr: "Uçak altıda kalkıyor." },
      { en: "Take off your shoes, please.", tr: "Ayakkabılarını çıkar lütfen." },
      { en: "The business really took off.", tr: "İş gerçekten tuttu." }
    ],
    practice: [
      { tr: "Uçağımız yarım saat gecikmeli kalktı.", en: "Our plane took off half an hour late." },
      { tr: "Ceketini çıkarmak ister misin?", en: "Would you like to take off your jacket?" },
      { tr: "Ürün geçen yıl birden tuttu.", en: "The product took off last year." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "take up",
    tr: "yeni bir uğraşa başlamak / yer kaplamak",
    note: "Hobi başlatmak ya da yer veya zaman işgal etmek anlamında.",
    examples: [
      { en: "She took up yoga last year.", tr: "Geçen yıl yogaya başladı." },
      { en: "This table takes up too much space.", tr: "Bu masa çok yer kaplıyor." },
      { en: "It took up my whole evening.", tr: "Bütün akşamımı aldı." }
    ],
    practice: [
      { tr: "Bu yıl yüzmeye başladım.", en: "I took up swimming this year." },
      { tr: "Piyano çalmaya başlamak istiyor.", en: "She wants to take up the piano." },
      { tr: "Bu kanepe çok yer kaplıyor.", en: "This sofa takes up too much space." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "turn down",
    tr: "reddetmek / sesi kısmak",
    note: "Teklifi reddetmek ve sesi azaltmak; iki anlam da çok sık kullanılır.",
    examples: [
      { en: "He turned down the offer.", tr: "Teklifi reddetti." },
      { en: "Can you turn down the music?", tr: "Müziği kısar mısın?" },
      { en: "They turned me down.", tr: "Beni geri çevirdiler." }
    ],
    practice: [
      { tr: "İşi neden reddettin?", en: "Why did you turn down the job?" },
      { tr: "Radyoyu biraz kısar mısın?", en: "Can you turn down the radio a little?" },
      { tr: "Davetimizi kibarca reddetti.", en: "He politely turned down our invitation." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "turn up",
    tr: "çıkagelmek / sesi açmak",
    note: "'show up' ile eş anlamlıdır; ayrıca kaybolan bir şeyin bulunması için de kullanılır.",
    examples: [
      { en: "He turned up an hour late.", tr: "Bir saat geç geldi." },
      { en: "Turn up the volume.", tr: "Sesi aç." },
      { en: "My keys turned up in the car.", tr: "Anahtarlarım arabada çıktı." }
    ],
    practice: [
      { tr: "Sonunda iki saat sonra çıkageldi.", en: "He finally turned up two hours later." },
      { tr: "Sesi biraz aç lütfen.", en: "Please turn up the volume a little." },
      { tr: "Kayıp cüzdan mutfakta çıktı.", en: "The lost wallet turned up in the kitchen." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "work on",
    tr: "üzerinde çalışmak",
    note: "Devam eden bir uğraşı anlatır; bitirmeyi değil, uğraşmayı vurgular.",
    examples: [
      { en: "I'm working on a new project.", tr: "Yeni bir proje üzerinde çalışıyorum." },
      { en: "You need to work on your accent.", tr: "Aksanın üzerinde çalışman lazım." },
      { en: "She's been working on it all week.", tr: "Bütün hafta onun üzerinde çalışıyor." }
    ],
    practice: [
      { tr: "Şu anda bir makale üzerinde çalışıyorum.", en: "I'm working on an article at the moment." },
      { tr: "Telaffuzun üzerinde çalışmalısın.", en: "You should work on your pronunciation." },
      { tr: "Aylardır bu şarkı üzerinde çalışıyor.", en: "He has been working on this song for months." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "back up",
    tr: "desteklemek / yedeklemek",
    note: "Birinin sözünü doğrulamak ya da veriyi yedeklemek. İkisi de günlük kullanımda çok geçer.",
    examples: [
      { en: "Can you back me up on this?", tr: "Bu konuda beni destekler misin?" },
      { en: "Always back up your files.", tr: "Dosyalarını mutlaka yedekle." },
      { en: "The data backs up his claim.", tr: "Veriler iddiasını destekliyor." }
    ],
    practice: [
      { tr: "Toplantıda beni destekledi.", en: "She backed me up in the meeting." },
      { tr: "Fotoğraflarını yedekledin mi?", en: "Have you backed up your photos?" },
      { tr: "Bu rakamlar bizim sonuçlarımızı destekliyor.", en: "These numbers back up our results." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "call back",
    tr: "geri aramak",
    note: "Nesne zamirse araya girer: 'call me back'.",
    examples: [
      { en: "I'll call you back in five minutes.", tr: "Beş dakikaya seni ararım." },
      { en: "He never called back.", tr: "Hiç geri aramadı." },
      { en: "Can you call back later?", tr: "Sonra arayabilir misin?" }
    ],
    practice: [
      { tr: "Beni akşam ararsın.", en: "Call me back in the evening." },
      { tr: "Ofis kapalıydı, sonra aradılar.", en: "The office was closed, they called back later." },
      { tr: "Onu geri aramayı unuttum.", en: "I forgot to call him back." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "fill in",
    tr: "doldurmak (form) / bilgilendirmek",
    note: "Formu doldurmak; ayrıca 'fill someone in' birini olan bitenden haberdar etmektir.",
    examples: [
      { en: "Please fill in this form.", tr: "Lütfen bu formu doldurun." },
      { en: "Fill me in on what happened.", tr: "Neler olduğunu anlat bana." },
      { en: "He filled in for me last week.", tr: "Geçen hafta benim yerime baktı." }
    ],
    practice: [
      { tr: "Formu mavi kalemle doldurun.", en: "Fill in the form with a blue pen." },
      { tr: "Eksik kelimeleri doldur.", en: "Fill in the missing words." },
      { tr: "Toplantıda olanları bana anlatır mısın?", en: "Can you fill me in on the meeting?" }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "go ahead",
    tr: "buyur, devam et",
    note: "İzin vermenin en doğal yolu; ayrıca bir planın yürürlüğe girmesi anlamında kullanılır.",
    examples: [
      { en: "Go ahead, I'm listening.", tr: "Buyur, dinliyorum." },
      { en: "Can I start? — Go ahead.", tr: "Başlayabilir miyim? — Buyur." },
      { en: "The project went ahead as planned.", tr: "Proje planlandığı gibi yürüdü." }
    ],
    practice: [
      { tr: "Buyur, sen başla.", en: "Go ahead, you start." },
      { tr: "Sorabilir miyim? — Buyur.", en: "May I ask? — Go ahead." },
      { tr: "İnşaat planlandığı gibi ilerledi.", en: "The construction went ahead as planned." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "hold back",
    tr: "kendini tutmak, çekinmek",
    note: "Duyguyu ya da bilgiyi saklamak; ayrıca birinin önünü kesmek anlamı vardır.",
    examples: [
      { en: "She held back her tears.", tr: "Gözyaşlarını tuttu." },
      { en: "Don't hold back, tell me.", tr: "Çekinme, anlat." },
      { en: "Fear held him back.", tr: "Korku onu geri tuttu." }
    ],
    practice: [
      { tr: "Öfkesini zor tuttu.", en: "He could hardly hold back his anger." },
      { tr: "Bir şey biliyorsan çekinme.", en: "Don't hold back if you know something." },
      { tr: "Bizi tutan şey paraydı.", en: "What held us back was money." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "settle down",
    tr: "yerleşmek / sakinleşmek",
    note: "Bir yere kalıcı yerleşmek ya da gürültülü bir ortamın yatışması.",
    examples: [
      { en: "They settled down in Izmir.", tr: "İzmir'e yerleştiler." },
      { en: "Settle down, everyone.", tr: "Herkes sakinleşsin." },
      { en: "He wants to settle down and start a family.", tr: "Yerleşip aile kurmak istiyor." }
    ],
    practice: [
      { tr: "Bir gün köyde yerleşmek istiyorum.", en: "One day I want to settle down in the village." },
      { tr: "Çocuklar, biraz sakinleşin.", en: "Children, settle down a little." },
      { tr: "Evlenip yerleştiler.", en: "They got married and settled down." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "stay up",
    tr: "geç saate kadar uyanık kalmak",
    note: "Uyumayı erteleyip ayakta kalmak. 'stay up late' kalıbı çok sık geçer.",
    examples: [
      { en: "I stayed up late studying.", tr: "Ders çalışarak geç saate kadar oturdum." },
      { en: "Don't stay up too late.", tr: "Çok geç saate kalma." },
      { en: "We stayed up talking all night.", tr: "Bütün gece konuşarak oturduk." }
    ],
    practice: [
      { tr: "Dün gece geç saate kadar oturdum.", en: "I stayed up late last night." },
      { tr: "Beni bekleyip geç saate kalma.", en: "Don't stay up waiting for me." },
      { tr: "Maçı izlemek için geç saate kadar oturduk.", en: "We stayed up to watch the match." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "take back",
    tr: "geri almak (söz)",
    note: "Söylenen bir sözü geri almak ya da satın alınan bir ürünü iade etmek.",
    examples: [
      { en: "I take back what I said.", tr: "Söylediğimi geri alıyorum." },
      { en: "Take it back and get a refund.", tr: "İade et ve paranı al." },
      { en: "You can't take those words back.", tr: "O sözleri geri alamazsın." }
    ],
    practice: [
      { tr: "O sözlerini geri al.", en: "Take back those words." },
      { tr: "Söylediklerimi geri alıyorum, haklısın.", en: "I take back what I said, you're right." },
      { tr: "Ayakkabıları mağazaya iade etti.", en: "She took the shoes back to the shop." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "wear out",
    tr: "yıpranmak / bitkin düşürmek",
    note: "Eşyalar için eskimek, insanlar için tüketmek: 'I'm worn out' yani bittim demektir.",
    examples: [
      { en: "These shoes are worn out.", tr: "Bu ayakkabılar eskimiş." },
      { en: "The kids wore me out.", tr: "Çocuklar beni bitirdi." },
      { en: "I'm completely worn out.", tr: "Tamamen bitkinim." }
    ],
    practice: [
      { tr: "Bu çantayı iki yılda eskittim.", en: "I wore out this bag in two years." },
      { tr: "Uzun yolculuk hepimizi bitirdi.", en: "The long journey wore us all out." },
      { tr: "Lastikler çabuk yıprandı.", en: "The tyres wore out quickly." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "warm up",
    tr: "ısınmak, ısıtmak",
    note: "Spor öncesi ısınma, yemeği ısıtma ve ortamın yumuşaması; üçü de aynı fiille.",
    examples: [
      { en: "Warm up before you run.", tr: "Koşmadan önce ısın." },
      { en: "Let me warm up the soup.", tr: "Çorbayı ısıtayım." },
      { en: "He warmed up to the idea.", tr: "Fikre ısındı." }
    ],
    practice: [
      { tr: "Maçtan önce iyice ısınmalısın.", en: "You should warm up well before the match." },
      { tr: "Fırını önceden ısıt.", en: "Warm up the oven beforehand." },
      { tr: "Salon yavaş yavaş ısındı.", en: "The hall slowly warmed up." }
    ]
  },
  {
    group: "Phrasal verb",
    chunk: "look forward",
    tr: "ileriye bakmak",
    note: "'look forward to'dan farklı olarak tek başına 'geçmişe takılmayıp ileriye bakmak' demektir.",
    examples: [
      { en: "Let's stop looking back and look forward.", tr: "Geriye bakmayı bırakıp ileriye bakalım." },
      { en: "The company is looking forward, not back.", tr: "Şirket geriye değil ileriye bakıyor." },
      { en: "We need to look forward now.", tr: "Artık ileriye bakmamız gerek." }
    ],
    practice: [
      { tr: "Geçmişe takılma, ileriye bak.", en: "Don't dwell on the past, look forward." },
      { tr: "Artık ileriye bakma vakti.", en: "It's time to look forward now." },
      { tr: "Ekip ileriye bakmayı seçti.", en: "The team chose to look forward." }
    ]
  }
,

  /* ——— Kollokasyonlar · 193-232 ——— */

  {
    group: "Kollokasyon",
    chunk: "make progress",
    tr: "ilerleme kaydetmek",
    note: "Sayılamayan bir isimdir: 'a progress' ya da 'progresses' denmez.",
    examples: [
      { en: "You're making good progress.", tr: "İyi ilerleme kaydediyorsun." },
      { en: "We made little progress today.", tr: "Bugün pek ilerleme kaydedemedik." },
      { en: "She's making progress in English.", tr: "İngilizcede ilerliyor." }
    ],
    practice: [
      { tr: "Yavaş ama emin adımlarla ilerliyoruz.", en: "We are making progress slowly but surely." },
      { tr: "Bu hafta hiç ilerleme kaydedemedim.", en: "I made no progress this week." },
      { tr: "Hastanın durumunda ilerleme var.", en: "The patient is making progress." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "make sure",
    tr: "emin olmak, kontrol etmek",
    note: "Arkasından 'that' cümlesi ya da 'to' mastarı gelir. Talimat verirken çok kullanılır.",
    examples: [
      { en: "Make sure you lock the door.", tr: "Kapıyı kilitlediğinden emin ol." },
      { en: "Make sure to call before you come.", tr: "Gelmeden önce mutlaka ara." },
      { en: "I want to make sure everything is ready.", tr: "Her şeyin hazır olduğundan emin olmak istiyorum." }
    ],
    practice: [
      { tr: "Işıkları kapattığından emin ol.", en: "Make sure you turned off the lights." },
      { tr: "Herkesin duyduğundan emin olalım.", en: "Let's make sure everyone heard." },
      { tr: "Pasaportunu aldığından emin ol.", en: "Make sure you have your passport." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "make room",
    tr: "yer açmak",
    note: "Burada 'room' oda değil, yer demektir ve sayılamaz: 'make room for one more'.",
    examples: [
      { en: "Can you make room for me?", tr: "Bana yer açar mısın?" },
      { en: "We made room for the new desk.", tr: "Yeni masa için yer açtık." },
      { en: "There's no room left.", tr: "Hiç yer kalmadı." }
    ],
    practice: [
      { tr: "Çantalar için yer aç.", en: "Make room for the bags." },
      { tr: "Bir kişiye daha yer açabilir miyiz?", en: "Can we make room for one more person?" },
      { tr: "Yeni dolaba yer açtılar.", en: "They made room for the new cupboard." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "make friends",
    tr: "arkadaş edinmek",
    note: "Daima çoğuldur, tek kişi için bile. Kiminle olduğunu 'with' bağlar.",
    examples: [
      { en: "He makes friends easily.", tr: "Kolay arkadaş edinir." },
      { en: "I made friends with my neighbor.", tr: "Komşumla arkadaş oldum." },
      { en: "It's hard to make friends in a new city.", tr: "Yeni şehirde arkadaş edinmek zor." }
    ],
    practice: [
      { tr: "Yeni okulda arkadaş edindin mi?", en: "Did you make friends at the new school?" },
      { tr: "Çocuklar çabuk arkadaş olur.", en: "Children make friends quickly." },
      { tr: "Kampta iki kişiyle arkadaş oldum.", en: "I made friends with two people at the camp." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "make an excuse",
    tr: "bahane uydurmak",
    note: "Bahaneyi kabul etmek için 'accept an excuse', sürekli bahane üretmek için çoğul kullanılır.",
    examples: [
      { en: "He made an excuse and left.", tr: "Bir bahane uydurup çıktı." },
      { en: "Stop making excuses.", tr: "Bahane üretmeyi bırak." },
      { en: "She made up an excuse about traffic.", tr: "Trafikle ilgili bir bahane uydurdu." }
    ],
    practice: [
      { tr: "Yine bir bahane uydurdu.", en: "He made an excuse again." },
      { tr: "Bahane uydurmak yerine özür dile.", en: "Apologize instead of making an excuse." },
      { tr: "Gelmemek için bahane uydurdular.", en: "They made an excuse not to come." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "make a suggestion",
    tr: "öneride bulunmak",
    note: "Daha resmî durur; günlük dilde 'suggest' fiili yeterlidir.",
    examples: [
      { en: "Can I make a suggestion?", tr: "Bir öneride bulunabilir miyim?" },
      { en: "She made a helpful suggestion.", tr: "Faydalı bir öneride bulundu." },
      { en: "Nobody made any suggestions.", tr: "Kimse öneri getirmedi." }
    ],
    practice: [
      { tr: "Küçük bir öneride bulunmak istiyorum.", en: "I want to make a small suggestion." },
      { tr: "Toplantıda güzel bir öneride bulundu.", en: "She made a good suggestion in the meeting." },
      { tr: "Öneride bulunmaktan çekinme.", en: "Don't hesitate to make a suggestion." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "do your best",
    tr: "elinden geleni yapmak",
    note: "İyelik özneye göre değişir: 'I did my best', 'they did their best'.",
    examples: [
      { en: "Just do your best.", tr: "Sen elinden geleni yap yeter." },
      { en: "I did my best, but it wasn't enough.", tr: "Elimden geleni yaptım ama yetmedi." },
      { en: "She always does her best.", tr: "Her zaman elinden gelenin en iyisini yapar." }
    ],
    practice: [
      { tr: "Sınavda elinden geleni yap.", en: "Do your best in the exam." },
      { tr: "Elimizden geleni yaptık.", en: "We did our best." },
      { tr: "Elinden geleni yapıyor.", en: "He is doing his best." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "do the dishes",
    tr: "bulaşık yıkamak",
    note: "'wash the dishes' ile aynıdır. Ev işlerinde fiil genelde 'do'dur.",
    examples: [
      { en: "It's your turn to do the dishes.", tr: "Bulaşık sırası sende." },
      { en: "I'll cook if you do the dishes.", tr: "Sen bulaşığı yaparsan ben yemek yaparım." },
      { en: "He hates doing the dishes.", tr: "Bulaşık yıkamaktan nefret eder." }
    ],
    practice: [
      { tr: "Yemekten sonra bulaşıkları yıkarım.", en: "I do the dishes after dinner." },
      { tr: "Bu akşam bulaşıkları sen yıka.", en: "You do the dishes tonight." },
      { tr: "Bulaşıkları henüz yıkamadım.", en: "I haven't done the dishes yet." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "do business",
    tr: "iş yapmak, ticaret yapmak",
    note: "Artikel almaz: 'do business with' doğrudur, 'do a business' yanlıştır.",
    examples: [
      { en: "We do business with several countries.", tr: "Birkaç ülkeyle iş yapıyoruz." },
      { en: "It's a pleasure doing business with you.", tr: "Sizinle iş yapmak bir zevk." },
      { en: "They've done business for years.", tr: "Yıllardır ticaret yapıyorlar." }
    ],
    practice: [
      { tr: "Onlarla bir daha iş yapmam.", en: "I won't do business with them again." },
      { tr: "Yurt dışında iş yapmak kolay değil.", en: "It's not easy to do business abroad." },
      { tr: "Uzun yıllar iş yaptık.", en: "We did business for many years." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "do research",
    tr: "araştırma yapmak",
    note: "'research' sayılamaz bir isimdir; 'researches' denmez, 'do some research' denir.",
    examples: [
      { en: "I did some research before buying.", tr: "Almadan önce biraz araştırma yaptım." },
      { en: "She does research on sleep.", tr: "Uyku üzerine araştırma yapıyor." },
      { en: "Do your research first.", tr: "Önce araştırmanı yap." }
    ],
    practice: [
      { tr: "Konu hakkında araştırma yapıyorum.", en: "I'm doing research on the subject." },
      { tr: "Karar vermeden önce araştırma yap.", en: "Do research before you decide." },
      { tr: "Üniversitede araştırma yaptı.", en: "She did research at the university." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "do harm",
    tr: "zarar vermek",
    note: "'It won't do any harm' kalıbı 'bir zararı olmaz' demektir ve çok sık geçer.",
    examples: [
      { en: "It won't do any harm to ask.", tr: "Sormanın bir zararı olmaz." },
      { en: "The storm did a lot of harm.", tr: "Fırtına çok zarar verdi." },
      { en: "More harm than good.", tr: "Faydadan çok zarar." }
    ],
    practice: [
      { tr: "Bir bardak su zarar vermez.", en: "A glass of water won't do any harm." },
      { tr: "Bu söz ona çok zarar verdi.", en: "These words did him a lot of harm." },
      { tr: "Kimseye zarar vermek istemedim.", en: "I didn't want to do harm to anyone." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take a shower",
    tr: "duş almak",
    note: "İngiliz İngilizcesinde 'have a shower' de yaygındır.",
    examples: [
      { en: "I take a shower every morning.", tr: "Her sabah duş alırım." },
      { en: "Let me take a quick shower.", tr: "Hızlıca bir duş alayım." },
      { en: "She's taking a shower right now.", tr: "Şu anda duş alıyor." }
    ],
    practice: [
      { tr: "Spordan sonra duş alacağım.", en: "I'll take a shower after the gym." },
      { tr: "Duş almadan çıkma.", en: "Don't go out without taking a shower." },
      { tr: "Sabah soğuk duş aldı.", en: "He took a cold shower in the morning." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take notes",
    tr: "not almak",
    note: "Genelde çoğuldur. Tek bir not için 'make a note of' kullanılır.",
    examples: [
      { en: "I take notes in every class.", tr: "Her derste not alırım." },
      { en: "Did you take notes?", tr: "Not aldın mı?" },
      { en: "Make a note of his number.", tr: "Numarasını bir yere not et." }
    ],
    practice: [
      { tr: "Toplantıda not al lütfen.", en: "Please take notes in the meeting." },
      { tr: "Kimse not almıyordu.", en: "Nobody was taking notes." },
      { tr: "Dün çok not aldım.", en: "I took a lot of notes yesterday." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take turns",
    tr: "sırayla yapmak, nöbetleşmek",
    note: "Arkasından -ing gelir: 'take turns driving'.",
    examples: [
      { en: "We take turns driving.", tr: "Sırayla araba kullanıyoruz." },
      { en: "Take turns, don't fight.", tr: "Sırayla yapın, kavga etmeyin." },
      { en: "They took turns looking after him.", tr: "Ona nöbetleşe baktılar." }
    ],
    practice: [
      { tr: "Sırayla okuyun.", en: "Take turns reading." },
      { tr: "Yemek yapmayı sırayla yapıyoruz.", en: "We take turns cooking." },
      { tr: "Bebeğe sırayla baktılar.", en: "They took turns looking after the baby." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take place",
    tr: "gerçekleşmek, düzenlenmek",
    note: "Planlanmış olaylar için kullanılır; 'happen' ise tesadüfi olaylar için daha uygundur.",
    examples: [
      { en: "The wedding takes place in June.", tr: "Düğün haziranda gerçekleşiyor." },
      { en: "Where will the meeting take place?", tr: "Toplantı nerede yapılacak?" },
      { en: "The event took place last night.", tr: "Etkinlik dün akşam gerçekleşti." }
    ],
    practice: [
      { tr: "Konser stadyumda gerçekleşecek.", en: "The concert will take place at the stadium." },
      { tr: "Sınav ne zaman yapılıyor?", en: "When does the exam take place?" },
      { tr: "Tören sessizce gerçekleşti.", en: "The ceremony took place quietly." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take part in",
    tr: "katılmak",
    note: "'participate in' ile eş anlamlıdır ama daha konuşma dilidir.",
    examples: [
      { en: "I took part in the competition.", tr: "Yarışmaya katıldım." },
      { en: "Everyone can take part.", tr: "Herkes katılabilir." },
      { en: "She didn't take part in the discussion.", tr: "Tartışmaya katılmadı." }
    ],
    practice: [
      { tr: "Bu projeye katılmak istiyorum.", en: "I want to take part in this project." },
      { tr: "Kaç kişi yarışmaya katıldı?", en: "How many people took part in the competition?" },
      { tr: "Oylamaya katılmadı.", en: "He didn't take part in the vote." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take advantage of",
    tr: "fırsattan yararlanmak / birini kullanmak",
    note: "İki yönü var: fırsatı değerlendirmek olumlu, bir insanı kullanmak olumsuzdur.",
    examples: [
      { en: "Take advantage of the discount.", tr: "İndirimden yararlan." },
      { en: "Don't let people take advantage of you.", tr: "İnsanların seni kullanmasına izin verme." },
      { en: "We took advantage of the good weather.", tr: "Güzel havayı değerlendirdik." }
    ],
    practice: [
      { tr: "Bu fırsattan yararlanmalısın.", en: "You should take advantage of this opportunity." },
      { tr: "İyi niyetini kullandılar.", en: "They took advantage of his kindness." },
      { tr: "Sessizlikten yararlanıp çalıştım.", en: "I took advantage of the silence and studied." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "take care of",
    tr: "bakmak / halletmek",
    note: "Hem birine bakmak hem bir işi halletmek. Vedalaşırken 'take care' tek başına kullanılır.",
    examples: [
      { en: "I'll take care of it.", tr: "Ben hallederim." },
      { en: "She takes care of her father.", tr: "Babasına bakıyor." },
      { en: "Take care, see you soon.", tr: "Kendine iyi bak, görüşürüz." }
    ],
    practice: [
      { tr: "Bu işi ben hallederim.", en: "I'll take care of this job." },
      { tr: "Ben yokken çiçeklere bak.", en: "Take care of the flowers while I'm away." },
      { tr: "Yaşlı komşusuna bakıyor.", en: "She takes care of her elderly neighbour." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "have a good time",
    tr: "iyi vakit geçirmek",
    note: "'have fun' ile aynı işi görür, biraz daha nötrdür.",
    examples: [
      { en: "Did you have a good time?", tr: "İyi vakit geçirdin mi?" },
      { en: "We had a great time in Rome.", tr: "Roma'da harika vakit geçirdik." },
      { en: "Have a good time tonight!", tr: "Bu akşam iyi eğlenceler!" }
    ],
    practice: [
      { tr: "Umarım tatilde iyi vakit geçirirsin.", en: "I hope you have a good time on holiday." },
      { tr: "Dün gece çok iyi vakit geçirdik.", en: "We had a very good time last night." },
      { tr: "Düğünde iyi vakit geçirdin mi?", en: "Did you have a good time at the wedding?" }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "have an impact on",
    tr: "etkisi olmak",
    note: "Edat 'on'dur. Etkinin büyüklüğü sıfatla verilir: 'a huge impact'.",
    examples: [
      { en: "It had a big impact on my life.", tr: "Hayatım üzerinde büyük etkisi oldu." },
      { en: "The law has had little impact.", tr: "Yasanın pek etkisi olmadı." },
      { en: "Sleep has an impact on memory.", tr: "Uykunun hafıza üzerinde etkisi var." }
    ],
    practice: [
      { tr: "Bu kitabın üzerimde büyük etkisi oldu.", en: "This book had a big impact on me." },
      { tr: "Fiyatların satışlar üzerinde etkisi var.", en: "Prices have an impact on sales." },
      { tr: "Kararın hepimiz üzerinde etkisi olacak.", en: "The decision will have an impact on all of us." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "have trouble",
    tr: "zorlanmak",
    note: "Arkasından -ing gelir: 'have trouble sleeping'. 'have difficulty' ile aynıdır.",
    examples: [
      { en: "I have trouble sleeping.", tr: "Uyumakta zorlanıyorum." },
      { en: "He had trouble finding the address.", tr: "Adresi bulmakta zorlandı." },
      { en: "Are you having trouble with the form?", tr: "Formda zorlanıyor musun?" }
    ],
    practice: [
      { tr: "Bu kelimeyi okumakta zorlanıyorum.", en: "I have trouble reading this word." },
      { tr: "Karar vermekte zorlandık.", en: "We had trouble deciding." },
      { tr: "Nefes almakta zorlanıyor musun?", en: "Do you have trouble breathing?" }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "have second thoughts",
    tr: "kararından şüphe etmek",
    note: "Daima çoğuldur. Neyle ilgili olduğunu 'about' bağlar.",
    examples: [
      { en: "I'm having second thoughts about the job.", tr: "İş konusunda tereddüde düştüm." },
      { en: "He had second thoughts at the last minute.", tr: "Son anda kararından şüpheye düştü." },
      { en: "No second thoughts, let's do it.", tr: "Tereddüt yok, yapalım." }
    ],
    practice: [
      { tr: "Taşınma konusunda tereddüde düştüm.", en: "I'm having second thoughts about moving." },
      { tr: "Sözleşmeyi imzalarken tereddüt etti.", en: "He had second thoughts while signing the contract." },
      { tr: "Tereddüde düşmene gerek yok.", en: "You don't need to have second thoughts." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "have a word with",
    tr: "biriyle iki çift laf etmek",
    note: "Tekil 'a word' kısa ve genelde ciddi bir konuşmayı ima eder.",
    examples: [
      { en: "Can I have a word with you?", tr: "Seninle biraz konuşabilir miyim?" },
      { en: "I'll have a word with him.", tr: "Onunla bir konuşurum." },
      { en: "The manager wants a word.", tr: "Müdür seninle konuşmak istiyor." }
    ],
    practice: [
      { tr: "Müdürle bir konuşacağım.", en: "I'll have a word with the manager." },
      { tr: "Seninle iki çift laf edebilir miyim?", en: "Can I have a word with you?" },
      { tr: "Öğretmen babamla konuştu.", en: "The teacher had a word with my father." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "give advice",
    tr: "tavsiye vermek",
    note: "'advice' sayılamaz: 'an advice' denmez, 'a piece of advice' denir.",
    examples: [
      { en: "Can you give me some advice?", tr: "Bana biraz tavsiye verebilir misin?" },
      { en: "He gave me a piece of advice.", tr: "Bana bir tavsiyede bulundu." },
      { en: "She's good at giving advice.", tr: "Tavsiye vermekte iyidir." }
    ],
    practice: [
      { tr: "Bana hep iyi tavsiyeler verir.", en: "He always gives me good advice." },
      { tr: "İstenmedikçe tavsiye verme.", en: "Don't give advice unless you're asked." },
      { tr: "Doktor beslenme konusunda tavsiye verdi.", en: "The doctor gave advice about nutrition." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "give a speech",
    tr: "konuşma yapmak",
    note: "'make a speech' de doğrudur. Sunum için 'give a presentation' kullanılır.",
    examples: [
      { en: "He gave a short speech.", tr: "Kısa bir konuşma yaptı." },
      { en: "I have to give a speech tomorrow.", tr: "Yarın konuşma yapmam gerekiyor." },
      { en: "She gave a moving speech.", tr: "Etkileyici bir konuşma yaptı." }
    ],
    practice: [
      { tr: "Mezuniyette konuşma yaptı.", en: "She gave a speech at the graduation." },
      { tr: "Yarın konuşma yapmaktan korkuyorum.", en: "I'm afraid of giving a speech tomorrow." },
      { tr: "Kısa bir konuşma yapar mısın?", en: "Will you give a short speech?" }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "give someone a call",
    tr: "birini aramak",
    note: "'call someone' ile aynı, biraz daha rahat bir tını taşır.",
    examples: [
      { en: "Give me a call when you're free.", tr: "Müsait olunca beni ara." },
      { en: "I'll give her a call tonight.", tr: "Bu akşam onu ararım." },
      { en: "Give us a call if you need help.", tr: "Yardım lazım olursa bizi ara." }
    ],
    practice: [
      { tr: "Akşam beni ara.", en: "Give me a call in the evening." },
      { tr: "Yarın onu arayacağım.", en: "I'll give her a call tomorrow." },
      { tr: "Kaybolursan bizi ara.", en: "Give us a call if you get lost." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "give permission",
    tr: "izin vermek",
    note: "Arkasından 'to' mastarı gelir. Sayılamaz bir isimdir.",
    examples: [
      { en: "They gave me permission to leave.", tr: "Bana çıkma izni verdiler." },
      { en: "You need permission first.", tr: "Önce izin almanız gerek." },
      { en: "He gave permission for the photos.", tr: "Fotoğraflar için izin verdi." }
    ],
    practice: [
      { tr: "Babam izin vermedi.", en: "My father didn't give permission." },
      { tr: "Bize erken çıkma izni verdiler.", en: "They gave us permission to leave early." },
      { tr: "Kim izin verdi?", en: "Who gave permission?" }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "pay the bill",
    tr: "hesabı ödemek",
    note: "Restoranda Amerikan İngilizcesinde 'check', İngiliz İngilizcesinde 'bill' denir.",
    examples: [
      { en: "I'll pay the bill.", tr: "Hesabı ben öderim." },
      { en: "Can we have the bill, please?", tr: "Hesabı alabilir miyiz?" },
      { en: "He forgot to pay the electricity bill.", tr: "Elektrik faturasını ödemeyi unuttu." }
    ],
    practice: [
      { tr: "Hesabı bu sefer sen öde.", en: "You pay the bill this time." },
      { tr: "Hesabı çoktan ödedik.", en: "We have already paid the bill." },
      { tr: "Faturayı ödemeyi unutma.", en: "Don't forget to pay the bill." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "pay a compliment",
    tr: "iltifat etmek",
    note: "Fiil 'make' değil 'pay'dir. Kime olduğunu 'to' bağlar.",
    examples: [
      { en: "He paid her a compliment.", tr: "Ona iltifat etti." },
      { en: "That's the nicest compliment I've had.", tr: "Aldığım en güzel iltifat bu." },
      { en: "She doesn't take compliments well.", tr: "İltifatları pek kaldıramıyor." }
    ],
    practice: [
      { tr: "Yemeğim için iltifat etti.", en: "She paid me a compliment about my cooking." },
      { tr: "Kimseye iltifat etmez.", en: "He never pays anyone a compliment." },
      { tr: "Bir iltifat etmek istiyorum.", en: "I want to pay you a compliment." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "pay the price",
    tr: "bedelini ödemek",
    note: "Mecazi anlamdadır: bir seçimin sonucuna katlanmak. 'pay the price for' diye gelir.",
    examples: [
      { en: "He paid the price for his mistake.", tr: "Hatasının bedelini ödedi." },
      { en: "We're paying the price now.", tr: "Şimdi bedelini ödüyoruz." },
      { en: "Success has a price.", tr: "Başarının bir bedeli var." }
    ],
    practice: [
      { tr: "Yaptığının bedelini ödeyeceksin.", en: "You will pay the price for what you did." },
      { tr: "Aceleciliğin bedelini ödedik.", en: "We paid the price for our haste." },
      { tr: "Bu kararın bir bedeli var.", en: "There is a price to pay for this decision." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "keep calm",
    tr: "sakin kalmak",
    note: "'calm down' sakinleşmeyi, 'keep calm' ise sakinliği korumayı anlatır.",
    examples: [
      { en: "Keep calm and think.", tr: "Sakin kal ve düşün." },
      { en: "She kept calm during the storm.", tr: "Fırtına boyunca sakin kaldı." },
      { en: "It's hard to keep calm in traffic.", tr: "Trafikte sakin kalmak zor." }
    ],
    practice: [
      { tr: "Ne olursa olsun sakin kal.", en: "Keep calm whatever happens." },
      { tr: "Sınav boyunca sakin kaldı.", en: "She kept calm during the exam." },
      { tr: "Sakin kalmaya çalışıyorum.", en: "I'm trying to keep calm." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "keep quiet",
    tr: "sessiz kalmak, susmak",
    note: "Hem gürültü yapmamak hem de bir şeyi söylememek anlamında kullanılır.",
    examples: [
      { en: "Please keep quiet during the exam.", tr: "Sınav boyunca sessiz olun." },
      { en: "He kept quiet about the plan.", tr: "Planla ilgili sessiz kaldı." },
      { en: "I couldn't keep quiet any longer.", tr: "Daha fazla susamadım." }
    ],
    practice: [
      { tr: "Lütfen bir süre sessiz kal.", en: "Please keep quiet for a while." },
      { tr: "Konuyla ilgili sessiz kaldım.", en: "I kept quiet about the subject." },
      { tr: "Çocuklar bir dakika sessiz olamadı.", en: "The children couldn't keep quiet for a minute." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "keep track of",
    tr: "takip etmek, kaydını tutmak",
    note: "Tersi 'lose track of' yani takibi kaybetmektir: 'I lost track of time'.",
    examples: [
      { en: "I keep track of my expenses.", tr: "Harcamalarımın kaydını tutuyorum." },
      { en: "It's hard to keep track of everything.", tr: "Her şeyi takip etmek zor." },
      { en: "I lost track of time.", tr: "Zamanın nasıl geçtiğini anlamadım." }
    ],
    practice: [
      { tr: "Faturaların kaydını tutuyorum.", en: "I keep track of the bills." },
      { tr: "Kaç kitap okuduğumu takip edemiyorum.", en: "I can't keep track of how many books I read." },
      { tr: "Bu uygulama harcamalarını takip ediyor.", en: "This app keeps track of your spending." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "break the law",
    tr: "kanunu çiğnemek",
    note: "Aynı fiil kuralla da gelir: 'break the rules'. Sözünden dönmek 'break a promise'tir.",
    examples: [
      { en: "He broke the law and got caught.", tr: "Kanunu çiğnedi ve yakalandı." },
      { en: "You're breaking the rules.", tr: "Kuralları çiğniyorsun." },
      { en: "Nobody is above the law.", tr: "Kimse kanunun üstünde değil." }
    ],
    practice: [
      { tr: "Kanunu çiğnemek istemiyorum.", en: "I don't want to break the law." },
      { tr: "Kanunu çiğneyen ceza alır.", en: "Whoever breaks the law gets punished." },
      { tr: "Bilmeden kanunu çiğnedi.", en: "He broke the law unknowingly." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "break a record",
    tr: "rekor kırmak",
    note: "Rekoru elde tutmak için 'hold a record', yeni rekor koymak için 'set a record' denir.",
    examples: [
      { en: "She broke the world record.", tr: "Dünya rekorunu kırdı." },
      { en: "He holds the national record.", tr: "Ulusal rekor onda." },
      { en: "They set a new record last year.", tr: "Geçen yıl yeni bir rekor kırdılar." }
    ],
    practice: [
      { tr: "Bu yıl rekor kırmak istiyor.", en: "He wants to break a record this year." },
      { tr: "Genç yüzücü rekor kırdı.", en: "The young swimmer broke a record." },
      { tr: "O rekor hâlâ kırılmadı.", en: "That record still hasn't been broken." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "break the news",
    tr: "haberi vermek (kötü haberi)",
    note: "Genelde zor bir haberi nazikçe iletmeyi anlatır. Kime olduğunu 'to' bağlar.",
    examples: [
      { en: "Who's going to break the news to her?", tr: "Haberi ona kim verecek?" },
      { en: "He broke the news gently.", tr: "Haberi nazikçe verdi." },
      { en: "I had to break the news myself.", tr: "Haberi kendim vermek zorunda kaldım." }
    ],
    practice: [
      { tr: "Haberi aileye ben verdim.", en: "I broke the news to the family." },
      { tr: "Kötü haberi nasıl vereceğiz?", en: "How will we break the bad news?" },
      { tr: "Haberi vermeden önce oturdu.", en: "He sat down before breaking the news." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "catch the bus",
    tr: "otobüse yetişmek",
    note: "'catch' yetişmeyi, 'take' ise ulaşım aracını kullanmayı anlatır; ikisi aynı şey değil.",
    examples: [
      { en: "I have to catch the seven o'clock bus.", tr: "Yedi otobüsüne yetişmem lazım." },
      { en: "We missed the bus.", tr: "Otobüsü kaçırdık." },
      { en: "I take the bus to work.", tr: "İşe otobüsle gidiyorum." }
    ],
    practice: [
      { tr: "Sabah sekiz otobüsüne yetiştim.", en: "I caught the eight o'clock bus in the morning." },
      { tr: "Koş, otobüse yetişelim.", en: "Run, let's catch the bus." },
      { tr: "Otobüse yetişemedi.", en: "She couldn't catch the bus." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "catch fire",
    tr: "alev almak, tutuşmak",
    note: "Artikel almaz: 'catch a fire' yanlıştır.",
    examples: [
      { en: "The curtains caught fire.", tr: "Perdeler alev aldı." },
      { en: "Be careful, the paper could catch fire.", tr: "Dikkat et, kâğıt tutuşabilir." },
      { en: "The building caught fire at night.", tr: "Bina gece alev aldı." }
    ],
    practice: [
      { tr: "Kuru otlar kolay tutuşur.", en: "Dry grass catches fire easily." },
      { tr: "Mutfakta bir şey alev aldı.", en: "Something caught fire in the kitchen." },
      { tr: "Araba kaza sonrası alev aldı.", en: "The car caught fire after the crash." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "catch someone's eye",
    tr: "dikkatini çekmek",
    note: "Hem göz göze gelmek hem de bir şeyin gözüne çarpması anlamında kullanılır.",
    examples: [
      { en: "The red dress caught my eye.", tr: "Kırmızı elbise dikkatimi çekti." },
      { en: "I tried to catch the waiter's eye.", tr: "Garsonla göz göze gelmeye çalıştım." },
      { en: "Something caught his eye.", tr: "Bir şey gözüne çarptı." }
    ],
    practice: [
      { tr: "Vitrindeki saat dikkatimi çekti.", en: "The watch in the window caught my eye." },
      { tr: "Garsonun dikkatini çekmeye çalıştım.", en: "I tried to catch the waiter's eye." },
      { tr: "Bu başlık okurun dikkatini çeker.", en: "This title catches the reader's eye." }
    ]
  },
  {
    group: "Kollokasyon",
    chunk: "save money",
    tr: "para biriktirmek / tasarruf etmek",
    note: "İki anlamı var: kenara para koymak ve daha az harcayarak tasarruf etmek.",
    examples: [
      { en: "I'm saving money for a car.", tr: "Araba için para biriktiriyorum." },
      { en: "Buying in bulk saves money.", tr: "Toptan almak para kazandırır." },
      { en: "We saved a lot by cooking at home.", tr: "Evde yemek yaparak çok tasarruf ettik." }
    ],
    practice: [
      { tr: "Bisiklet için para biriktiriyorum.", en: "I'm saving money for a bike." },
      { tr: "Yürüyerek para biriktirdik.", en: "We saved money by walking." },
      { tr: "Her ay biraz para biriktir.", en: "Save a little money every month." }
    ]
  },

  /* ——— Konuşma kalıpları · 233-272 ——— */

  {
    group: "Konuşma kalıbı",
    chunk: "as a matter of fact",
    tr: "aslına bakarsan, hatta",
    note: "Beklenenin tersi bir bilgi eklerken kullanılır; 'in fact'ten biraz daha resmî durur.",
    examples: [
      { en: "As a matter of fact, I was just leaving.", tr: "Aslına bakarsan tam çıkıyordum." },
      { en: "As a matter of fact, I know him well.", tr: "Hatta onu iyi tanırım." },
      { en: "I do care, as a matter of fact.", tr: "Aksine, umurumda." }
    ],
    practice: [
      { tr: "Aslına bakarsan onu dün gördüm.", en: "As a matter of fact, I saw him yesterday." },
      { tr: "Hatta ben de oradaydım.", en: "As a matter of fact, I was there too." },
      { tr: "Aslına bakarsan hiç zor değildi.", en: "As a matter of fact, it wasn't hard at all." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "come to think of it",
    tr: "aklıma gelmişken, şimdi düşündüm de",
    note: "Konuşurken yeni fark ettiğin bir şeyi eklerken kullanılır.",
    examples: [
      { en: "Come to think of it, he never called.", tr: "Şimdi düşündüm de hiç aramadı." },
      { en: "Come to think of it, that's strange.", tr: "Bir düşününce, bu tuhaf." },
      { en: "Come to think of it, I have one.", tr: "Aklıma gelmişken, bende bir tane var." }
    ],
    practice: [
      { tr: "Şimdi düşündüm de, anahtarı sende.", en: "Come to think of it, you have the key." },
      { tr: "Bir düşününce, hiç sormadım.", en: "Come to think of it, I never asked." },
      { tr: "Aklıma gelmişken, o gün yağmur yağıyordu.", en: "Come to think of it, it was raining that day." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "now that you mention it",
    tr: "sen söyleyince aklıma geldi",
    note: "Karşı tarafın söylediği bir şeyin sende bir şeyi tetiklediğini gösterir.",
    examples: [
      { en: "Now that you mention it, I do feel tired.", tr: "Sen söyleyince, gerçekten yorgunum." },
      { en: "Now that you mention it, she was quiet.", tr: "Sen deyince, gerçekten sessizdi." },
      { en: "Now that you mention it, I forgot to reply.", tr: "Sen söyleyince aklıma geldi, cevap vermeyi unutmuşum." }
    ],
    practice: [
      { tr: "Sen söyleyince, ben de duydum.", en: "Now that you mention it, I heard it too." },
      { tr: "Sen deyince, biraz garipti.", en: "Now that you mention it, it was a bit strange." },
      { tr: "Sen söyleyince aklıma geldi, geç kalmıştı.", en: "Now that you mention it, he was late." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I'm afraid not",
    tr: "maalesef hayır",
    note: "Kötü haberi yumuşatır. Olumlusu 'I'm afraid so' yani 'maalesef öyle'dir.",
    examples: [
      { en: "Is there any left? — I'm afraid not.", tr: "Hiç kaldı mı? — Maalesef hayır." },
      { en: "I'm afraid I can't help you.", tr: "Korkarım size yardım edemem." },
      { en: "Is it broken? — I'm afraid so.", tr: "Bozuk mu? — Maalesef öyle." }
    ],
    practice: [
      { tr: "Hâlâ açık mı? — Maalesef hayır.", en: "Is it still open? — I'm afraid not." },
      { tr: "Maalesef hayır, yer kalmadı.", en: "I'm afraid not, there are no seats left." },
      { tr: "Gelebilir misin? — Maalesef hayır.", en: "Can you come? — I'm afraid not." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "it depends",
    tr: "duruma bağlı",
    note: "Tek başına cevap olarak kullanılır; neye bağlı olduğunu söylerken 'on' gelir.",
    examples: [
      { en: "Will you come? — It depends.", tr: "Gelecek misin? — Duruma bağlı." },
      { en: "It depends on the weather.", tr: "Havaya bağlı." },
      { en: "That depends on what you want.", tr: "Bu ne istediğine bağlı." }
    ],
    practice: [
      { tr: "Gelir misin? — Duruma bağlı.", en: "Will you come? — It depends." },
      { tr: "Fiyata bağlı.", en: "It depends on the price." },
      { tr: "Duruma bağlı, şimdiden söyleyemem.", en: "It depends, I can't say yet." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "no big deal",
    tr: "önemli değil, mesele değil",
    note: "Teşekküre karşılık ya da bir sorunu küçültmek için. Soru hâli 'what's the big deal?'dir.",
    examples: [
      { en: "Thanks! — No big deal.", tr: "Sağ ol! — Önemli değil." },
      { en: "It's no big deal, really.", tr: "Cidden önemli bir şey değil." },
      { en: "He made a big deal out of nothing.", tr: "Yoktan büyük mesele çıkardı." }
    ],
    practice: [
      { tr: "Merak etme, önemli bir şey değil.", en: "Don't worry, it's no big deal." },
      { tr: "Bir gün gecikme mesele değil.", en: "One day's delay is no big deal." },
      { tr: "Yardım ettiğin için sağ ol. — Önemli değil.", en: "Thanks for helping. — No big deal." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "here's the thing",
    tr: "olay şu ki, mesele şu",
    note: "Asıl noktayı ya da bir sorunu açıklamadan hemen önce gelir.",
    examples: [
      { en: "Here's the thing: we can't afford it.", tr: "Mesele şu: buna paramız yetmez." },
      { en: "Here's the thing, I already promised.", tr: "Olay şu ki, ben söz verdim bile." },
      { en: "But here's the thing, nobody asked.", tr: "Ama asıl mesele şu, kimse sormadı." }
    ],
    practice: [
      { tr: "Mesele şu: kimse hazır değil.", en: "Here's the thing: nobody is ready." },
      { tr: "Olay şu ki, bilet kalmamış.", en: "Here's the thing, there are no tickets left." },
      { tr: "Mesele şu, ben bunu istemedim.", en: "Here's the thing, I didn't want this." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "what's the point?",
    tr: "ne anlamı var?",
    note: "Boşunalığı vurgular. Arkasından -ing gelir: 'what's the point of waiting?'",
    examples: [
      { en: "What's the point of waiting?", tr: "Beklemenin ne anlamı var?" },
      { en: "I don't see the point.", tr: "Bir anlamı olduğunu düşünmüyorum." },
      { en: "What's the point if nobody listens?", tr: "Kimse dinlemiyorsa ne anlamı var?" }
    ],
    practice: [
      { tr: "Tartışmanın ne anlamı var?", en: "What's the point of arguing?" },
      { tr: "Geç kaldıysak gitmenin ne anlamı var?", en: "What's the point of going if we're late?" },
      { tr: "Bunun ne anlamı var, anlamıyorum.", en: "I don't understand what's the point of this." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "what's up?",
    tr: "naber?",
    note: "Çok samimi bir selamlaşmadır. Tonuna göre 'bir sorun mu var?' anlamına da gelebilir.",
    examples: [
      { en: "Hey, what's up?", tr: "Selam, naber?" },
      { en: "What's up with him today?", tr: "Bugün onun nesi var?" },
      { en: "What's up? You look worried.", tr: "Ne oldu? Endişeli görünüyorsun." }
    ],
    practice: [
      { tr: "Selam Ayşe, naber?", en: "Hi Ayşe, what's up?" },
      { tr: "Naber? Uzun zamandır yoksun.", en: "What's up? You've been away a long time." },
      { tr: "Ne oldu? Üzgün görünüyorsun.", en: "What's up? You look sad." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "how come?",
    tr: "nasıl yani, neden?",
    note: "'why' ile aynı işi görür ama devrik dizilim almaz: 'How come you left?' doğru kullanımdır.",
    examples: [
      { en: "How come you didn't call?", tr: "Nasıl oldu da aramadın?" },
      { en: "How come she's not here?", tr: "Nasıl yani, o neden burada değil?" },
      { en: "How come? I thought it was ready.", tr: "Nasıl olur? Hazır sanıyordum." }
    ],
    practice: [
      { tr: "Nasıl yani, sen gelmiyor musun?", en: "How come you're not coming?" },
      { tr: "Nasıl oldu da bunu bilmiyordun?", en: "How come you didn't know this?" },
      { tr: "Nasıl yani, kapı açık?", en: "How come the door is open?" }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "no way",
    tr: "olamaz / asla",
    note: "İki tonu var: şaşkınlık ve kesin ret. Hangisi olduğunu bağlam belirler.",
    examples: [
      { en: "No way! Really?", tr: "Olamaz! Gerçekten mi?" },
      { en: "No way am I doing that.", tr: "Asla yapmam." },
      { en: "There's no way we'll finish today.", tr: "Bugün bitirmemiz imkânsız." }
    ],
    practice: [
      { tr: "Olamaz! Gerçekten mi kazandın?", en: "No way! Did you really win?" },
      { tr: "Asla kabul etmem.", en: "No way will I accept." },
      { tr: "Bunu bugün bitirmemize imkân yok.", en: "No way can we finish this today." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I bet",
    tr: "eminim, bahse girerim",
    note: "Gerçek bir bahis değil, güçlü bir tahmindir. 'you bet' ise 'tabii ki' demektir.",
    examples: [
      { en: "I bet he forgot.", tr: "Bahse girerim unutmuştur." },
      { en: "I bet you're tired.", tr: "Eminim yorgunsundur." },
      { en: "Can you help? — You bet.", tr: "Yardım eder misin? — Tabii ki." }
    ],
    practice: [
      { tr: "Bahse girerim şimdi uyuyordur.", en: "I bet he's sleeping now." },
      { tr: "Eminim çok sevinmişsindir.", en: "I bet you were very happy." },
      { tr: "Bahse girerim yarın da yağar.", en: "I bet it will rain tomorrow too." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I doubt it",
    tr: "sanmıyorum, şüpheliyim",
    note: "Nazik ama net bir karşı çıkıştır. 'I doubt that' ile cümle bağlanır.",
    examples: [
      { en: "Will he agree? — I doubt it.", tr: "Kabul eder mi? — Sanmıyorum." },
      { en: "I doubt that it will rain.", tr: "Yağmur yağacağını sanmıyorum." },
      { en: "I doubt she even noticed.", tr: "Fark ettiğini bile sanmıyorum." }
    ],
    practice: [
      { tr: "Zamanında biter mi? — Sanmıyorum.", en: "Will it finish on time? — I doubt it." },
      { tr: "Geleceğini sanmıyorum.", en: "I doubt that he will come." },
      { tr: "Hatırladığını hiç sanmıyorum.", en: "I doubt he remembers." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I'd rather",
    tr: "tercihen, daha çok isterim",
    note: "Arkasından yalın fiil gelir, 'to' almaz: 'I'd rather stay'. Karşılaştırma için 'than' eklenir.",
    examples: [
      { en: "I'd rather stay home tonight.", tr: "Bu akşam evde kalmayı tercih ederim." },
      { en: "I'd rather walk than wait.", tr: "Beklemektense yürümeyi tercih ederim." },
      { en: "I'd rather not talk about it.", tr: "Bu konuda konuşmamayı tercih ederim." }
    ],
    practice: [
      { tr: "Otobüsle gitmeyi tercih ederim.", en: "I'd rather go by bus." },
      { tr: "Yalnız çalışmayı tercih ederim.", en: "I'd rather work alone." },
      { tr: "Beklemektense şimdi başlamayı tercih ederim.", en: "I'd rather start now than wait." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I can't help it",
    tr: "elimde değil",
    note: "Kontrol edemediğin bir davranış için. Fiille kullanılırsa -ing alır: 'I can't help laughing'.",
    examples: [
      { en: "Sorry, I can't help it.", tr: "Kusura bakma, elimde değil." },
      { en: "I couldn't help laughing.", tr: "Gülmeden duramadım." },
      { en: "She can't help worrying.", tr: "Endişelenmeden edemiyor." }
    ],
    practice: [
      { tr: "Özür dilerim, elimde değil.", en: "I'm sorry, I can't help it." },
      { tr: "Gülmeden edemedim.", en: "I couldn't help laughing." },
      { tr: "Onu düşünmeden edemiyorum.", en: "I can't help thinking about it." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I couldn't agree more",
    tr: "kesinlikle katılıyorum",
    note: "Olumsuz görünse de en güçlü katılma ifadesidir: 'daha fazla katılamazdım' demektir.",
    examples: [
      { en: "I couldn't agree more.", tr: "Kesinlikle katılıyorum." },
      { en: "I couldn't agree with you more on this.", tr: "Bu konuda sana tamamen katılıyorum." },
      { en: "You're right, I couldn't agree more.", tr: "Haklısın, tamamen aynı fikirdeyim." }
    ],
    practice: [
      { tr: "Kesinlikle katılıyorum, çok haklısın.", en: "I couldn't agree more, you're very right." },
      { tr: "Bu planla ilgili tamamen aynı fikirdeyim.", en: "I couldn't agree more about this plan." },
      { tr: "Sana kesinlikle katılıyorum.", en: "I couldn't agree more with you." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "it's about time",
    tr: "artık zamanı geldi de geçiyor",
    note: "Sabırsızlık ya da sitem taşır; arkasından geçmiş zaman gelir: 'it's about time you left'.",
    examples: [
      { en: "It's about time you called.", tr: "Aramanın zamanı gelmişti de geçiyordu." },
      { en: "It's about time we left.", tr: "Artık çıkma vaktimiz geldi." },
      { en: "About time too!", tr: "Bayağı geç kaldın!" }
    ],
    practice: [
      { tr: "Artık gitme vaktin geldi de geçiyor.", en: "It's about time you left." },
      { tr: "Bir karar vermenin zamanı geldi.", en: "It's about time we made a decision." },
      { tr: "Nihayet geldin, zamanı gelmişti!", en: "You're finally here, it's about time!" }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "just in case",
    tr: "her ihtimale karşı",
    note: "Cümlenin sonunda tek başına durabilir ya da arkasına bir cümle alabilir.",
    examples: [
      { en: "Take an umbrella just in case.", tr: "Her ihtimale karşı şemsiye al." },
      { en: "Just in case he forgets, remind him.", tr: "Unutur diye ona hatırlat." },
      { en: "I saved a copy just in case.", tr: "Her ihtimale karşı bir kopya kaydettim." }
    ],
    practice: [
      { tr: "Her ihtimale karşı ceketini al.", en: "Take your jacket just in case." },
      { tr: "Her ihtimale karşı adresi yazdım.", en: "I wrote down the address just in case." },
      { tr: "Her ihtimale karşı erken çıkalım.", en: "Let's leave early just in case." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "just kidding",
    tr: "şaka yapıyorum",
    note: "Şakanın ciddiye alınmasını önler. 'I'm just kidding' tam hâlidir.",
    examples: [
      { en: "Relax, I'm just kidding.", tr: "Sakin ol, şaka yapıyorum." },
      { en: "Just kidding, don't worry.", tr: "Şaka şaka, merak etme." },
      { en: "Are you kidding me?", tr: "Benimle dalga mı geçiyorsun?" }
    ],
    practice: [
      { tr: "Kızma, şaka yapıyorum.", en: "Don't be angry, just kidding." },
      { tr: "Şaka yapıyorum, öyle demek istemedim.", en: "Just kidding, I didn't mean that." },
      { tr: "Şaka yapıyordum, ciddiye alma.", en: "I was just kidding, don't take it seriously." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "let me know",
    tr: "haber ver, bana bildir",
    note: "Yazışmanın en yaygın kapanış kalıplarından biri. Arkasından 'if' ya da 'when' gelir.",
    examples: [
      { en: "Let me know if you need anything.", tr: "Bir şeye ihtiyacın olursa haber ver." },
      { en: "Let me know when you arrive.", tr: "Vardığında haber ver." },
      { en: "Just let me know either way.", tr: "Ne olursa olsun bana bildir." }
    ],
    practice: [
      { tr: "Kararını verince haber ver.", en: "Let me know when you decide." },
      { tr: "Bir sorun olursa bana haber ver.", en: "Let me know if there's a problem." },
      { tr: "Gelip gelmeyeceğini haber ver.", en: "Let me know whether you're coming." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "take your time",
    tr: "acele etme",
    note: "Karşı tarafı rahatlatan nazik bir kalıptır; baskı olmadığını gösterir.",
    examples: [
      { en: "Take your time, there's no rush.", tr: "Acele etme, aceleye gerek yok." },
      { en: "Take your time and think about it.", tr: "Acele etme, düşün." },
      { en: "She took her time answering.", tr: "Cevap vermek için acele etmedi." }
    ],
    practice: [
      { tr: "Acele etme, daha çok vaktimiz var.", en: "Take your time, we have plenty of time." },
      { tr: "Acele etme, dikkatlice oku.", en: "Take your time and read carefully." },
      { tr: "Karar vermek için acele etme.", en: "Take your time to decide." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "that's all right",
    tr: "sorun değil, önemli değil",
    note: "Özür dileyene verilen standart cevaptır. 'that's okay' ile aynıdır.",
    examples: [
      { en: "Sorry I'm late. — That's all right.", tr: "Geciktim, pardon. — Sorun değil." },
      { en: "That's all right, don't worry about it.", tr: "Önemli değil, takma kafana." },
      { en: "Is it all right if I sit here?", tr: "Buraya otursam olur mu?" }
    ],
    practice: [
      { tr: "Kırdım, özür dilerim. — Sorun değil.", en: "I broke it, sorry. — That's all right." },
      { tr: "Sorun değil, hepimiz hata yaparız.", en: "That's all right, we all make mistakes." },
      { tr: "Geç geldim. — Önemli değil.", en: "I came late. — That's all right." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "don't mention it",
    tr: "rica ederim, lafı bile olmaz",
    note: "Teşekküre verilen samimi bir cevaptır; 'you're welcome'ın rahat hâli.",
    examples: [
      { en: "Thanks for everything. — Don't mention it.", tr: "Her şey için sağ ol. — Lafı bile olmaz." },
      { en: "Don't mention it, it was nothing.", tr: "Rica ederim, bir şey değil." },
      { en: "Thanks! — Don't mention it.", tr: "Teşekkürler! — Ne demek." }
    ],
    practice: [
      { tr: "Yardımın için sağ ol. — Lafı bile olmaz.", en: "Thanks for your help. — Don't mention it." },
      { tr: "Rica ederim, her zaman.", en: "Don't mention it, anytime." },
      { tr: "Çok teşekkürler! — Ne demek.", en: "Thank you so much! — Don't mention it." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "no offense",
    tr: "alınma ama",
    note: "Kırıcı olabilecek bir söz öncesinde gelir. Cevabı genelde 'none taken'dır.",
    examples: [
      { en: "No offense, but that's a bad idea.", tr: "Alınma ama bu kötü bir fikir." },
      { en: "No offense taken.", tr: "Alınmadım." },
      { en: "No offense, I just don't agree.", tr: "Alınma, sadece katılmıyorum." }
    ],
    practice: [
      { tr: "Alınma ama bu iş olmaz.", en: "No offense, but this won't work." },
      { tr: "Alınma, sadece dürüst oluyorum.", en: "No offense, I'm just being honest." },
      { tr: "Alınma ama yorgun görünüyorsun.", en: "No offense, but you look tired." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "suit yourself",
    tr: "sen bilirsin, nasıl istersen",
    note: "Hafif bir kırgınlık ya da umursamazlık taşır; tamamen nötr değildir.",
    examples: [
      { en: "You don't want to come? Suit yourself.", tr: "Gelmek istemiyor musun? Sen bilirsin." },
      { en: "Suit yourself, I'm going anyway.", tr: "Nasıl istersen, ben yine de gidiyorum." },
      { en: "Fine, suit yourself.", tr: "Peki, sen bilirsin." }
    ],
    practice: [
      { tr: "Gelmiyorsan sen bilirsin.", en: "If you're not coming, suit yourself." },
      { tr: "Nasıl istersen, ben başlıyorum.", en: "Suit yourself, I'm starting." },
      { tr: "Peki, sen bilirsin o zaman.", en: "All right, suit yourself then." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "what if",
    tr: "ya ... olursa",
    note: "İhtimal sormak ya da öneri getirmek için. Arkasından normal cümle gelir.",
    examples: [
      { en: "What if it rains?", tr: "Ya yağmur yağarsa?" },
      { en: "What if we leave early?", tr: "Ya erken çıksak?" },
      { en: "What if he says no?", tr: "Ya hayır derse?" }
    ],
    practice: [
      { tr: "Ya otobüsü kaçırırsak?", en: "What if we miss the bus?" },
      { tr: "Ya yarın erken başlasak?", en: "What if we started early tomorrow?" },
      { tr: "Ya beğenmezse?", en: "What if she doesn't like it?" }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "by all means",
    tr: "elbette, tabii ki buyurun",
    note: "İzin verirken kullanılan nazik ve biraz resmî bir kalıptır.",
    examples: [
      { en: "May I come in? — By all means.", tr: "Girebilir miyim? — Elbette buyurun." },
      { en: "By all means, take a seat.", tr: "Tabii ki, buyurun oturun." },
      { en: "By all means, ask questions.", tr: "Mutlaka soru sorun." }
    ],
    practice: [
      { tr: "Oturabilir miyim? — Elbette buyurun.", en: "May I sit down? — By all means." },
      { tr: "Elbette, telefonumu kullan.", en: "By all means, use my phone." },
      { tr: "İstediğin zaman ara, elbette.", en: "By all means, call whenever you want." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "as usual",
    tr: "her zamanki gibi",
    note: "Genelde tekrar eden bir durumu, çoğu zaman hafif bir sitemle anlatır.",
    examples: [
      { en: "He was late, as usual.", tr: "Her zamanki gibi geç kaldı." },
      { en: "As usual, nobody told me.", tr: "Her zamanki gibi kimse bana söylemedi." },
      { en: "Business as usual.", tr: "Her şey her zamanki gibi." }
    ],
    practice: [
      { tr: "Her zamanki gibi kahvaltı yaptık.", en: "We had breakfast as usual." },
      { tr: "Her zamanki gibi son giden o oldu.", en: "As usual, he was the last to leave." },
      { tr: "Her zamanki gibi cevap vermedi.", en: "As usual, she didn't answer." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "either way",
    tr: "her iki durumda da, nasıl olursa",
    note: "İki seçeneğin de sonucu değiştirmediğini söyler.",
    examples: [
      { en: "Either way, I'm fine with it.", tr: "Nasıl olursa olsun benim için sorun yok." },
      { en: "Either way, we'll be late.", tr: "Her iki durumda da geç kalacağız." },
      { en: "Let me know either way.", tr: "Ne karar verirsen bildir." }
    ],
    practice: [
      { tr: "Ne yaparsan yap, sonuç aynı.", en: "Either way, the result is the same." },
      { tr: "Her iki durumda da kazanırız.", en: "Either way, we win." },
      { tr: "Nasıl olursa olsun bana uyar.", en: "Either way works for me." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "more or less",
    tr: "aşağı yukarı, az çok",
    note: "Kesin olmayan bir miktarı ya da tamamlanma derecesini belirtir.",
    examples: [
      { en: "It's more or less finished.", tr: "Aşağı yukarı bitti." },
      { en: "We agree, more or less.", tr: "Az çok aynı fikirdeyiz." },
      { en: "It costs fifty lira, more or less.", tr: "Aşağı yukarı elli lira." }
    ],
    practice: [
      { tr: "İş aşağı yukarı tamam.", en: "The work is more or less done." },
      { tr: "Aşağı yukarı iki saat sürdü.", en: "It took more or less two hours." },
      { tr: "Az çok ne demek istediğini anladım.", en: "I more or less understood what he meant." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "at least",
    tr: "en azından",
    note: "Kötü bir durumda olumlu bir yön bulmak ya da bir alt sınır belirtmek için.",
    examples: [
      { en: "At least you tried.", tr: "En azından denedin." },
      { en: "It takes at least two hours.", tr: "En az iki saat sürüyor." },
      { en: "At least nobody got hurt.", tr: "En azından kimse yaralanmadı." }
    ],
    practice: [
      { tr: "En azından bir teşekkür bekliyordum.", en: "At least I expected a thank you." },
      { tr: "Orada en az yirmi kişi vardı.", en: "There were at least twenty people there." },
      { tr: "Yağmur yağdı ama en azından soğuk değildi.", en: "It rained, but at least it wasn't cold." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "so far",
    tr: "şu ana kadar",
    note: "Genelde present perfect ile gelir. 'so far so good' kalıbı çok sık kullanılır.",
    examples: [
      { en: "So far, everything is fine.", tr: "Şu ana kadar her şey yolunda." },
      { en: "How's it going? — So far so good.", tr: "Nasıl gidiyor? — Şimdilik iyi." },
      { en: "We haven't heard anything so far.", tr: "Şu ana kadar bir şey duymadık." }
    ],
    practice: [
      { tr: "Şu ana kadar iki kitap okudum.", en: "I have read two books so far." },
      { tr: "Şu ana kadar kimse şikâyet etmedi.", en: "Nobody has complained so far." },
      { tr: "Şu ana kadar nasıl gidiyor?", en: "How is it going so far?" }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "after all",
    tr: "ne de olsa / sonuçta",
    note: "İki işi var: bir gerekçe hatırlatmak ve beklenenin tersine bir sonucu bildirmek.",
    examples: [
      { en: "He's only a kid, after all.", tr: "Ne de olsa daha çocuk." },
      { en: "She came after all.", tr: "Sonuçta geldi." },
      { en: "After all, we did our best.", tr: "Neticede elimizden geleni yaptık." }
    ],
    practice: [
      { tr: "Sonuçta gelmedi.", en: "He didn't come after all." },
      { tr: "Ne de olsa o senin kardeşin.", en: "After all, he is your brother." },
      { tr: "Bilet buldum, sonuçta gidiyoruz.", en: "I found a ticket, so we're going after all." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "above all",
    tr: "her şeyden önemlisi",
    note: "Listenin en önemli maddesini işaretler; 'first of all' ise sadece ilkini işaretler.",
    examples: [
      { en: "Above all, stay safe.", tr: "Her şeyden önemlisi, güvende kal." },
      { en: "Above all, be honest.", tr: "Her şeyden önce dürüst ol." },
      { en: "She wants, above all, to be free.", tr: "Her şeyden çok özgür olmak istiyor." }
    ],
    practice: [
      { tr: "Her şeyden önemlisi sabırlı ol.", en: "Above all, be patient." },
      { tr: "Her şeyden önemlisi dürüstlüğü sever.", en: "Above all, she values honesty." },
      { tr: "Her şeyden önemlisi kimse incinmesin.", en: "Above all, let nobody get hurt." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "that reminds me",
    tr: "aklıma geldi",
    note: "Karşı tarafın sözünün sende başka bir konuyu hatırlattığını gösterir.",
    examples: [
      { en: "That reminds me, I need to call the bank.", tr: "Aklıma geldi, bankayı aramam lazım." },
      { en: "That reminds me of my childhood.", tr: "Bu bana çocukluğumu hatırlatıyor." },
      { en: "Oh, that reminds me!", tr: "Ha, aklıma geldi!" }
    ],
    practice: [
      { tr: "Aklıma geldi, faturayı ödemedim.", en: "That reminds me, I haven't paid the bill." },
      { tr: "Aklıma geldi, yarın doğum günü.", en: "That reminds me, tomorrow is his birthday." },
      { tr: "Bu bana bir şey hatırlattı.", en: "That reminds me of something." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "I mean",
    tr: "yani, demek istediğim",
    note: "Söylediğini düzeltmek ya da açmak için. Konuşmanın en sık doldurucularından biridir.",
    examples: [
      { en: "I mean, it's not that simple.", tr: "Yani, o kadar basit değil." },
      { en: "I mean the blue one, not the red.", tr: "Mavi olanı diyorum, kırmızıyı değil." },
      { en: "I didn't mean it that way.", tr: "Öyle demek istemedim." }
    ],
    practice: [
      { tr: "Yani, sana kızmadım.", en: "I mean, I'm not angry with you." },
      { tr: "Salıyı diyorum, çarşambayı değil.", en: "I mean Tuesday, not Wednesday." },
      { tr: "Yani bunu ben de yapabilirdim.", en: "I mean, I could have done this too." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "you see",
    tr: "bak, anlarsın ya",
    note: "Açıklama yaparken araya girer; karşı tarafı anlatıma dahil eder.",
    examples: [
      { en: "You see, it wasn't my fault.", tr: "Bak, benim hatam değildi." },
      { en: "It's complicated, you see.", tr: "Karışık bir durum, anlarsın." },
      { en: "You see what I mean?", tr: "Ne demek istediğimi anlıyor musun?" }
    ],
    practice: [
      { tr: "Bak, o zaman burada değildim.", en: "You see, I wasn't here then." },
      { tr: "Zor bir dönemdi, anlarsın.", en: "It was a hard time, you see." },
      { tr: "Bak, mesele bu kadar basit değil.", en: "You see, it's not that simple." }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "let's say",
    tr: "diyelim ki",
    note: "Varsayım kurar ya da yaklaşık bir sayı verir: 'let's say twenty people'.",
    examples: [
      { en: "Let's say you're right.", tr: "Diyelim ki haklısın." },
      { en: "Let's say we meet at six.", tr: "Diyelim ki altıda buluşuyoruz." },
      { en: "It costs, let's say, a hundred lira.", tr: "Diyelim ki yüz lira tutuyor." }
    ],
    practice: [
      { tr: "Diyelim ki yarın yağmur yağdı.", en: "Let's say it rains tomorrow." },
      { tr: "Diyelim ki on kişi geliyor.", en: "Let's say ten people are coming." },
      { tr: "Diyelim ki kabul etti, sonra ne olacak?", en: "Let's say he accepted, what then?" }
    ]
  },
  {
    group: "Konuşma kalıbı",
    chunk: "hang on a second",
    tr: "bir saniye",
    note: "'hold on' ile aynıdır, daha samimi durur. Telefonda ve yüz yüze kullanılır.",
    examples: [
      { en: "Hang on a second, I'm coming.", tr: "Bir saniye, geliyorum." },
      { en: "Hang on, that's not what I said.", tr: "Dur bir dakika, ben öyle demedim." },
      { en: "Hang on a sec.", tr: "Bir saniye." }
    ],
    practice: [
      { tr: "Bir saniye, ayakkabılarımı giyeyim.", en: "Hang on a second, let me put on my shoes." },
      { tr: "Bir saniye, kim demiş bunu?", en: "Hang on a second, who said that?" },
      { tr: "Bir saniye, yanlış anlamışsın.", en: "Hang on a second, you misunderstood." }
    ]
  }
,

  /* ——— Edatlı ve bağlayıcı ek kalıplar ——— */

  {
    group: "Edatlı kalıplar",
    chunk: "in advance",
    tr: "önceden, peşinen",
    note: "Ne kadar önce olduğunu söylerken sayı başa gelir: 'two weeks in advance'.",
    examples: [
      { en: "Book your ticket in advance.", tr: "Biletini önceden al." },
      { en: "Thanks in advance for your help.", tr: "Yardımın için şimdiden teşekkürler." },
      { en: "We paid three months in advance.", tr: "Üç ay peşin ödedik." }
    ],
    practice: [
      { tr: "Masayı önceden ayırt.", en: "Book the table in advance." },
      { tr: "Parayı iki hafta önceden ödedik.", en: "We paid the money two weeks in advance." },
      { tr: "Bana önceden haber verir misin?", en: "Can you let me know in advance?" }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "on average",
    tr: "ortalama olarak",
    note: "Cümlenin başında ya da ortasında durur; 'in average' diye bir kullanım yoktur.",
    examples: [
      { en: "On average, he works ten hours a day.", tr: "Ortalama günde on saat çalışıyor." },
      { en: "Prices rose by five percent on average.", tr: "Fiyatlar ortalama yüzde beş arttı." },
      { en: "We get twenty emails a day on average.", tr: "Günde ortalama yirmi e-posta alıyoruz." }
    ],
    practice: [
      { tr: "Ortalama haftada üç kitap okuyor.", en: "On average, she reads three books a week." },
      { tr: "Ortalama olarak otuz dakika sürüyor.", en: "On average, it takes thirty minutes." },
      { tr: "Ortalama olarak fiyatlar daha düşük.", en: "On average, the prices are lower." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in a row",
    tr: "üst üste, arka arkaya",
    note: "Kesintisiz tekrarı anlatır ve sayının arkasından gelir: 'three days in a row'.",
    examples: [
      { en: "She won three times in a row.", tr: "Üst üste üç kez kazandı." },
      { en: "It rained for five days in a row.", tr: "Beş gün arka arkaya yağmur yağdı." },
      { en: "That's the second time in a row.", tr: "Bu üst üste ikinci oldu." }
    ],
    practice: [
      { tr: "Üst üste iki gün çalıştı.", en: "He worked two days in a row." },
      { tr: "Arka arkaya dört maç kazandık.", en: "We won four matches in a row." },
      { tr: "Üst üste üçüncü kez geç kaldın.", en: "You're late for the third time in a row." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "at once",
    tr: "hemen / aynı anda",
    note: "İki anlamı var ve bağlam ayırır: 'come at once' hemen demek, 'all at once' aynı anda demek.",
    examples: [
      { en: "Come here at once.", tr: "Hemen buraya gel." },
      { en: "Don't do everything at once.", tr: "Her şeyi aynı anda yapma." },
      { en: "They all started talking at once.", tr: "Hepsi aynı anda konuşmaya başladı." }
    ],
    practice: [
      { tr: "Herkes hemen dışarı çıksın.", en: "Everyone go out at once." },
      { tr: "Bana hemen haber ver.", en: "Tell me at once." },
      { tr: "Hepsini aynı anda taşıyamam.", en: "I can't carry them all at once." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "by far",
    tr: "açık ara",
    note: "Üstünlük bildiren sıfatları güçlendirir: 'by far the best', 'by far the cheapest'.",
    examples: [
      { en: "This is by far the best option.", tr: "Açık ara en iyi seçenek bu." },
      { en: "She's by far the fastest runner.", tr: "Açık ara en hızlı koşucu o." },
      { en: "It was by far the hardest exam.", tr: "Açık ara en zor sınavdı." }
    ],
    practice: [
      { tr: "Açık ara en güzel gündü.", en: "It was by far the best day." },
      { tr: "Bu açık ara en ucuz otel.", en: "This is by far the cheapest hotel." },
      { tr: "Açık ara en iyi cevabı o verdi.", en: "She gave by far the best answer." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "out of the blue",
    tr: "birdenbire, damdan düşer gibi",
    note: "Hiç beklenmedik bir anda olan şeyler için; genelde bir haber ya da telefonla gelir.",
    examples: [
      { en: "He called me out of the blue.", tr: "Damdan düşer gibi aradı beni." },
      { en: "The news came out of the blue.", tr: "Haber birdenbire geldi." },
      { en: "Out of the blue, she quit her job.", tr: "Durduk yere işi bıraktı." }
    ],
    practice: [
      { tr: "Damdan düşer gibi bir mektup geldi.", en: "A letter came out of the blue." },
      { tr: "Birdenbire ortaya çıktı.", en: "He appeared out of the blue." },
      { tr: "Durduk yere bana bağırdı.", en: "She shouted at me out of the blue." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in the middle of",
    tr: "ortasında, tam ... yaparken",
    note: "Hem yer hem zaman için. 'in the middle of nowhere' ise 'ıssız bir yerde' demektir.",
    examples: [
      { en: "I'm in the middle of something.", tr: "Bir işin ortasındayım." },
      { en: "He called in the middle of the night.", tr: "Gecenin bir yarısı aradı." },
      { en: "The hotel was in the middle of nowhere.", tr: "Otel ıssız bir yerdeydi." }
    ],
    practice: [
      { tr: "Toplantının ortasında telefonu çaldı.", en: "His phone rang in the middle of the meeting." },
      { tr: "Gecenin ortasında uyandım.", en: "I woke up in the middle of the night." },
      { tr: "Ev ormanın ortasındaydı.", en: "The house was in the middle of the forest." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "up to date",
    tr: "güncel",
    note: "İsimden önce gelirse tire alır: 'an up-to-date list'. Birini bilgilendirmek 'bring someone up to date'tir.",
    examples: [
      { en: "Is this list up to date?", tr: "Bu liste güncel mi?" },
      { en: "Keep your software up to date.", tr: "Yazılımını güncel tut." },
      { en: "Let me bring you up to date.", tr: "Seni bir güncelleyeyim." }
    ],
    practice: [
      { tr: "Numaran güncel mi?", en: "Is your number up to date?" },
      { tr: "Listeyi güncel tutmalıyız.", en: "We should keep the list up to date." },
      { tr: "Haberler güncel değil.", en: "The news is not up to date." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "out of date",
    tr: "güncelliğini yitirmiş, modası geçmiş",
    note: "Bilgi, yazılım ve moda için kullanılır; yiyecekler için 'expired' daha doğaldır.",
    examples: [
      { en: "This information is out of date.", tr: "Bu bilgi güncelliğini yitirmiş." },
      { en: "My phone is completely out of date.", tr: "Telefonum iyice eskidi." },
      { en: "That style went out of date years ago.", tr: "O tarzın modası yıllar önce geçti." }
    ],
    practice: [
      { tr: "Bu harita güncelliğini yitirmiş.", en: "This map is out of date." },
      { tr: "Kurallar iyice eskimiş.", en: "The rules are quite out of date." },
      { tr: "Bilgisayarı modası geçmiş ama çalışıyor.", en: "His computer is out of date but it works." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "on behalf of",
    tr: "adına, namına",
    note: "Resmî dilde sık geçer. 'on my behalf' gibi iyelikle de kullanılır.",
    examples: [
      { en: "I'm speaking on behalf of the team.", tr: "Ekip adına konuşuyorum." },
      { en: "She signed on behalf of the company.", tr: "Şirket adına imzaladı." },
      { en: "Thank you on behalf of all of us.", tr: "Hepimiz adına teşekkür ederim." }
    ],
    practice: [
      { tr: "Ailem adına teşekkür ederim.", en: "I thank you on behalf of my family." },
      { tr: "Onun adına konuşamam.", en: "I can't speak on behalf of him." },
      { tr: "Belgeyi şirket adına imzaladı.", en: "She signed the document on behalf of the company." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in terms of",
    tr: "... açısından, bakımından",
    note: "Hangi ölçüte göre konuştuğunu belirtir; arkasından isim gelir, cümle gelmez.",
    examples: [
      { en: "In terms of price, it's reasonable.", tr: "Fiyat açısından makul." },
      { en: "It's better in terms of quality.", tr: "Kalite bakımından daha iyi." },
      { en: "What does that mean in terms of cost?", tr: "Bu maliyet açısından ne demek?" }
    ],
    practice: [
      { tr: "Zaman açısından bu daha iyi.", en: "In terms of time, this is better." },
      { tr: "Deneyim bakımından o daha güçlü.", en: "In terms of experience, he is stronger." },
      { tr: "Bu maliyet açısından ne anlama geliyor?", en: "What does this mean in terms of cost?" }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "apart from",
    tr: "dışında, haricinde",
    note: "Hem 'onun dışında' hem 'ona ek olarak' anlamına gelebilir; Amerikan İngilizcesinde 'aside from' tercih edilir.",
    examples: [
      { en: "Apart from the price, it's perfect.", tr: "Fiyatı dışında kusursuz." },
      { en: "Apart from me, nobody knew.", tr: "Benim dışımda kimse bilmiyordu." },
      { en: "Apart from English, she speaks German.", tr: "İngilizcenin yanı sıra Almanca konuşuyor." }
    ],
    practice: [
      { tr: "Ondan başka kimseyi tanımıyorum.", en: "I don't know anyone apart from him." },
      { tr: "Fiyat dışında her şey iyi.", en: "Everything is good apart from the price." },
      { tr: "Matematiğin yanı sıra fizik de okuyor.", en: "Apart from maths, he also studies physics." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "due to",
    tr: "... yüzünden, nedeniyle",
    note: "Arkasından isim gelir. Cümle gelecekse 'because' kullanılır: 'due to the rain' ama 'because it rained'.",
    examples: [
      { en: "The flight was delayed due to fog.", tr: "Uçuş sis nedeniyle rötar yaptı." },
      { en: "Due to the traffic, we were late.", tr: "Trafik yüzünden geç kaldık." },
      { en: "It closed due to lack of funding.", tr: "Fon eksikliği nedeniyle kapandı." }
    ],
    practice: [
      { tr: "Maç yağmur nedeniyle ertelendi.", en: "The match was postponed due to rain." },
      { tr: "Hastalık nedeniyle gelemedi.", en: "She couldn't come due to illness." },
      { tr: "Gecikme trafik yüzündendi.", en: "The delay was due to traffic." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in spite of",
    tr: "rağmen",
    note: "'despite' ile aynıdır ama 'despite of' diye bir kullanım yoktur; ikisini karıştırma.",
    examples: [
      { en: "In spite of the rain, we went out.", tr: "Yağmura rağmen dışarı çıktık." },
      { en: "He succeeded in spite of everything.", tr: "Her şeye rağmen başardı." },
      { en: "In spite of his age, he still works.", tr: "Yaşına rağmen hâlâ çalışıyor." }
    ],
    practice: [
      { tr: "Soğuğa rağmen yürüdük.", en: "We walked in spite of the cold." },
      { tr: "Uyarılara rağmen devam etti.", en: "He continued in spite of the warnings." },
      { tr: "Her şeye rağmen mutluyuz.", en: "We are happy in spite of everything." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "as well as",
    tr: "hem ... hem de, -in yanı sıra",
    note: "Özneyi çoğullaştırmaz: 'Ali, as well as his brothers, is coming' — fiil tekil kalır.",
    examples: [
      { en: "She speaks French as well as English.", tr: "İngilizcenin yanı sıra Fransızca da konuşuyor." },
      { en: "He works as well as studies.", tr: "Hem çalışıyor hem okuyor." },
      { en: "Bring your passport as well as the form.", tr: "Formun yanında pasaportunu da getir." }
    ],
    practice: [
      { tr: "Hem İngilizce hem İspanyolca öğreniyor.", en: "She is learning English as well as Spanish." },
      { tr: "Kalemin yanı sıra defter de getir.", en: "Bring a notebook as well as a pen." },
      { tr: "Fiyatın yanı sıra kalite de önemli.", en: "Quality matters as well as price." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "rather than",
    tr: "yerine, -mektense",
    note: "İki seçenekten birini elerken kullanılır; iki tarafında da aynı tür yapı bulunur.",
    examples: [
      { en: "I'd walk rather than take a taxi.", tr: "Taksiye binmektense yürürüm." },
      { en: "Let's meet on Friday rather than Monday.", tr: "Pazartesi yerine cuma buluşalım." },
      { en: "It's a habit rather than a rule.", tr: "Bu bir kuraldan çok alışkanlık." }
    ],
    practice: [
      { tr: "Otobüs yerine trenle gidelim.", en: "Let's go by train rather than by bus." },
      { tr: "Şikâyet etmektense yardım et.", en: "Help rather than complain." },
      { tr: "Bu bir şans değil, emek meselesi.", en: "This is a matter of effort rather than luck." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "not to mention",
    tr: "bir de ... var, ayrıca",
    note: "Zaten güçlü olan bir argümanın üstüne bir şey daha ekler.",
    examples: [
      { en: "It's expensive, not to mention slow.", tr: "Pahalı, bir de yavaş." },
      { en: "He's late, not to mention unprepared.", tr: "Geç kaldı, üstüne bir de hazırlıksız." },
      { en: "The noise, not to mention the smell, was awful.", tr: "Gürültü bir yana, bir de o koku berbattı." }
    ],
    practice: [
      { tr: "Pahalı, bir de çok uzak.", en: "It's expensive, not to mention very far." },
      { tr: "Yorgunum, üstüne bir de açım.", en: "I'm tired, not to mention hungry." },
      { tr: "Gürültü bir yana, bir de kalabalıktı.", en: "Not to mention the noise, it was crowded." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "in addition",
    tr: "ayrıca, buna ek olarak",
    note: "Tek başına kullanılır; arkasına isim gelecekse 'in addition to' olur.",
    examples: [
      { en: "In addition, we offer free delivery.", tr: "Ayrıca ücretsiz teslimat sunuyoruz." },
      { en: "In addition to the fee, there's a deposit.", tr: "Ücrete ek olarak bir de depozito var." },
      { en: "In addition, the deadline has changed.", tr: "Ayrıca son tarih değişti." }
    ],
    practice: [
      { tr: "Ayrıca iki gün izin verdiler.", en: "In addition, they gave two days off." },
      { tr: "Ayrıca kahvaltı da dahil.", en: "In addition, breakfast is included." },
      { tr: "Buna ek olarak bir de kargo ücreti var.", en: "In addition, there is a delivery fee." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "for the sake of",
    tr: "uğruna, hatırına",
    note: "'for the sake of argument' ise 'tartışma olsun diye' demektir, ayrı bir kalıptır.",
    examples: [
      { en: "He did it for the sake of his family.", tr: "Bunu ailesi için yaptı." },
      { en: "Let's stop arguing for the sake of peace.", tr: "Huzur olsun diye tartışmayı bırakalım." },
      { en: "For the sake of clarity, I'll repeat it.", tr: "Anlaşılsın diye tekrar edeyim." }
    ],
    practice: [
      { tr: "Çocukların hatırına sessiz olalım.", en: "Let's be quiet for the sake of the children." },
      { tr: "Sağlığın uğruna sigarayı bırak.", en: "Quit smoking for the sake of your health." },
      { tr: "Bunu barış uğruna yaptı.", en: "He did it for the sake of peace." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "at any rate",
    tr: "her hâlükârda, neyse",
    note: "Ya söylenenleri toparlar ya da konuyu değiştirir; konuşma dilinde 'anyway' ile aynı işi görür.",
    examples: [
      { en: "At any rate, we should leave early.", tr: "Her hâlükârda erken çıkmalıyız." },
      { en: "It's late; at any rate, I'm tired.", tr: "Geç oldu; neyse, ben yorgunum." },
      { en: "At any rate, the decision is made.", tr: "Her hâlükârda karar verildi." }
    ],
    practice: [
      { tr: "Her hâlükârda yarın görüşürüz.", en: "At any rate, we'll see each other tomorrow." },
      { tr: "Neyse, artık çok geç.", en: "At any rate, it's too late now." },
      { tr: "Her hâlükârda denemeliyiz.", en: "At any rate, we should try." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "on the whole",
    tr: "genel itibarıyla",
    note: "Ayrıntılardaki aksaklıkları kabul edip genel bir olumlu hüküm verir.",
    examples: [
      { en: "On the whole, it was a good year.", tr: "Genel itibarıyla iyi bir yıldı." },
      { en: "On the whole, I'm satisfied.", tr: "Genel olarak memnunum." },
      { en: "The team played well on the whole.", tr: "Takım genel itibarıyla iyi oynadı." }
    ],
    practice: [
      { tr: "Genel itibarıyla film güzeldi.", en: "On the whole, the film was good." },
      { tr: "Genel itibarıyla sonuçlardan memnunuz.", en: "On the whole, we are happy with the results." },
      { tr: "Genel itibarıyla plan işe yaradı.", en: "On the whole, the plan worked." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "in particular",
    tr: "özellikle",
    note: "Genelde bahsettiği ismin arkasına gelir: 'one thing in particular'.",
    examples: [
      { en: "I liked the ending in particular.", tr: "Özellikle sonunu beğendim." },
      { en: "Nothing in particular, just tired.", tr: "Özel bir şey yok, sadece yorgunum." },
      { en: "One student in particular stood out.", tr: "Özellikle bir öğrenci öne çıktı." }
    ],
    practice: [
      { tr: "Özellikle bu şarkıyı seviyorum.", en: "I like this song in particular." },
      { tr: "Özellikle biri çok yardımcı oldu.", en: "One person in particular was very helpful." },
      { tr: "Özellikle bir sebep yok.", en: "There is no reason in particular." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "as opposed to",
    tr: "... yerine, ...ın aksine",
    note: "İki seçeneği net biçimde karşı karşıya koyar; arkasından isim ya da -ing gelir.",
    examples: [
      { en: "I prefer tea as opposed to coffee.", tr: "Kahve yerine çayı tercih ederim." },
      { en: "We're talking about quality as opposed to quantity.", tr: "Nicelik değil nitelikten bahsediyoruz." },
      { en: "He works from home, as opposed to the office.", tr: "Ofis yerine evden çalışıyor." }
    ],
    practice: [
      { tr: "Et yerine balık tercih ediyorum.", en: "I prefer fish as opposed to meat." },
      { tr: "Yazmak yerine konuşmayı seviyor.", en: "He likes speaking as opposed to writing." },
      { tr: "Kiralamak yerine satın aldık.", en: "We bought it as opposed to renting." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "to some extent",
    tr: "bir ölçüde, kısmen",
    note: "Kısmi katılımı gösterir; genelde arkasından bir itiraz gelir.",
    examples: [
      { en: "To some extent, I agree with you.", tr: "Bir ölçüde sana katılıyorum." },
      { en: "That's true to some extent.", tr: "Bu kısmen doğru." },
      { en: "To some extent it worked, but not fully.", tr: "Bir ölçüde işe yaradı ama tam değil." }
    ],
    practice: [
      { tr: "Bir ölçüde haklısın.", en: "To some extent, you are right." },
      { tr: "Bu kısmen bizim hatamız.", en: "This is our fault to some extent." },
      { tr: "Bir ölçüde durumu anlıyorum.", en: "I understand the situation to some extent." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in return",
    tr: "karşılığında",
    note: "Neye karşılık olduğunu söylerken 'in return for' olur.",
    examples: [
      { en: "He helped me and asked nothing in return.", tr: "Yardım etti ve karşılığında bir şey istemedi." },
      { en: "In return for the discount, we sign for a year.", tr: "İndirim karşılığında bir yıllık imzalıyoruz." },
      { en: "She smiled in return.", tr: "Karşılığında gülümsedi." }
    ],
    practice: [
      { tr: "Ona yardım ettim, karşılığında bana kitap verdi.", en: "I helped him and in return he gave me a book." },
      { tr: "Karşılığında hiçbir şey beklemiyorum.", en: "I expect nothing in return." },
      { tr: "Karşılığında ne istiyorsun?", en: "What do you want in return?" }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "at risk",
    tr: "risk altında",
    note: "Neyin riski olduğunu söylerken 'at risk of' gelir: 'at risk of losing'.",
    examples: [
      { en: "Thousands of jobs are at risk.", tr: "Binlerce iş risk altında." },
      { en: "You're putting your health at risk.", tr: "Sağlığını riske atıyorsun." },
      { en: "They're at risk of losing the contract.", tr: "Sözleşmeyi kaybetme riskleri var." }
    ],
    practice: [
      { tr: "Sağlığı risk altında.", en: "His health is at risk." },
      { tr: "Bu karar işleri riske atıyor.", en: "This decision puts jobs at risk." },
      { tr: "Çocuklar en çok risk altındaki grup.", en: "Children are the group most at risk." }
    ]
  },
  {
    group: "Edatlı kalıplar",
    chunk: "in favor of",
    tr: "lehine, taraftarı",
    note: "Bir fikri desteklediğini söyler. İngiliz yazımında 'in favour of' olur.",
    examples: [
      { en: "Most people are in favor of the change.", tr: "Çoğu kişi değişiklikten yana." },
      { en: "The vote was ten in favor, two against.", tr: "Oylama on lehte, iki aleyhte sonuçlandı." },
      { en: "He dropped the plan in favor of a simpler one.", tr: "Planı bırakıp daha basitini tercih etti." }
    ],
    practice: [
      { tr: "Yeni kuraldan yanayım.", en: "I am in favor of the new rule." },
      { tr: "Çoğunluk plandan yana oy verdi.", en: "The majority voted in favor of the plan." },
      { tr: "Kimse bu fikirden yana değil.", en: "Nobody is in favor of this idea." }
    ]
  },
  {
    group: "Bağlayıcı",
    chunk: "in practice",
    tr: "uygulamada, pratikte",
    note: "Genelde teoriyle çelişkiyi vurgular; karşıtı 'in theory'dir.",
    examples: [
      { en: "In theory it works; in practice it doesn't.", tr: "Teoride işliyor, pratikte işlemiyor." },
      { en: "In practice, nobody follows that rule.", tr: "Uygulamada o kurala kimse uymuyor." },
      { en: "It sounds simple, but in practice it's hard.", tr: "Basit geliyor ama uygulamada zor." }
    ],
    practice: [
      { tr: "Kulağa hoş geliyor ama pratikte zor.", en: "It sounds nice but in practice it's hard." },
      { tr: "Uygulamada kimse bunu yapmıyor.", en: "In practice, nobody does this." },
      { tr: "Teoride basit, uygulamada karışık.", en: "Simple in theory, complicated in practice." }
    ]
  },

  /* ——— Deyimsel ifadeler ——— */

  {
    group: "Deyimsel",
    chunk: "a piece of cake",
    tr: "çocuk oyuncağı, çok kolay",
    note: "Bir işin ne kadar kolay olduğunu anlatır; genelde iş bittikten sonra söylenir.",
    examples: [
      { en: "The exam was a piece of cake.", tr: "Sınav çocuk oyuncağıydı." },
      { en: "Don't worry, it's a piece of cake.", tr: "Merak etme, çok kolay." },
      { en: "For her, that job is a piece of cake.", tr: "Onun için o iş çocuk oyuncağı." }
    ],
    practice: [
      { tr: "Bu soru çocuk oyuncağıydı.", en: "This question was a piece of cake." },
      { tr: "Merak etme, çok kolay olacak.", en: "Don't worry, it will be a piece of cake." },
      { tr: "Onun için araba kullanmak çocuk oyuncağı.", en: "Driving is a piece of cake for him." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "under the weather",
    tr: "keyifsiz, hafif hasta",
    note: "Ciddi bir hastalık için kullanılmaz; 'biraz kötüyüm' demenin kibar yoludur.",
    examples: [
      { en: "I'm feeling a bit under the weather.", tr: "Biraz keyifsizim." },
      { en: "She's under the weather today.", tr: "Bugün kendini iyi hissetmiyor." },
      { en: "He stayed home, feeling under the weather.", tr: "Keyifsiz olduğu için evde kaldı." }
    ],
    practice: [
      { tr: "Dün biraz keyifsizdim.", en: "I was a bit under the weather yesterday." },
      { tr: "Keyifsiz görünüyorsun, iyi misin?", en: "You look under the weather, are you okay?" },
      { tr: "Keyifsiz olduğu için gelmedi.", en: "He didn't come because he was under the weather." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "hit the road",
    tr: "yola koyulmak",
    note: "Yola çıkma anını vurgular, seyahatin tamamını değil. Ayrılırken 'I'd better hit the road' denir.",
    examples: [
      { en: "We should hit the road early.", tr: "Erkenden yola koyulmalıyız." },
      { en: "It's late, I'd better hit the road.", tr: "Geç oldu, ben kalkayım." },
      { en: "They hit the road at dawn.", tr: "Şafakta yola çıktılar." }
    ],
    practice: [
      { tr: "Hadi yola koyulalım.", en: "Let's hit the road." },
      { tr: "Sabah altıda yola koyulduk.", en: "We hit the road at six in the morning." },
      { tr: "Geç oldu, yola koyulmam lazım.", en: "It's late, I should hit the road." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "once in a blue moon",
    tr: "kırk yılda bir",
    note: "'once in a while'dan çok daha seyrek bir sıklığı anlatır.",
    examples: [
      { en: "We see each other once in a blue moon.", tr: "Kırk yılda bir görüşürüz." },
      { en: "He cooks once in a blue moon.", tr: "Kırk yılda bir yemek yapar." },
      { en: "That happens once in a blue moon.", tr: "O iş kırk yılda bir olur." }
    ],
    practice: [
      { tr: "Kırk yılda bir sinemaya giderim.", en: "I go to the cinema once in a blue moon." },
      { tr: "Kırk yılda bir arıyor.", en: "He calls once in a blue moon." },
      { tr: "Böyle bir fırsat kırk yılda bir çıkar.", en: "Such a chance comes once in a blue moon." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "cost an arm and a leg",
    tr: "servet tutmak",
    note: "Abartılı bir pahalılık ifadesidir; resmî yazıda kullanılmaz.",
    examples: [
      { en: "That car cost an arm and a leg.", tr: "O araba bir servete mal oldu." },
      { en: "Living here costs an arm and a leg.", tr: "Burada yaşamak servet tutuyor." },
      { en: "It didn't cost an arm and a leg, actually.", tr: "Aslında o kadar da pahalı değildi." }
    ],
    practice: [
      { tr: "Bu tamir bir servete mal oldu.", en: "This repair cost an arm and a leg." },
      { tr: "Yeni telefonlar servet tutuyor.", en: "New phones cost an arm and a leg." },
      { tr: "Umarım bir servete mal olmaz.", en: "I hope it doesn't cost an arm and a leg." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "get cold feet",
    tr: "son anda vazgeçmek, ayakları geri gitmek",
    note: "Genelde büyük bir karardan hemen önceki tereddüt için kullanılır.",
    examples: [
      { en: "He got cold feet before the wedding.", tr: "Düğünden önce ayakları geri gitti." },
      { en: "Don't get cold feet now.", tr: "Şimdi vazgeçme sakın." },
      { en: "She got cold feet and cancelled.", tr: "Son anda cayıp iptal etti." }
    ],
    practice: [
      { tr: "Sunumdan önce ayakları geri gitti.", en: "He got cold feet before the presentation." },
      { tr: "Sakın son anda vazgeçme.", en: "Don't get cold feet at the last minute." },
      { tr: "Sözleşmeyi imzalarken cayacak gibi oldu.", en: "She got cold feet while signing the contract." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "the last straw",
    tr: "bardağı taşıran son damla",
    note: "Tek başına küçük ama üst üste gelenlerin sonuncusu olduğu için dayanılmaz olan şey.",
    examples: [
      { en: "That was the last straw.", tr: "Bardağı taşıran son damla oydu." },
      { en: "His comment was the last straw for me.", tr: "Onun yorumu benim için son damlaydı." },
      { en: "Losing the file was the last straw.", tr: "Dosyayı kaybetmek bardağı taşırdı." }
    ],
    practice: [
      { tr: "Bu gecikme bardağı taşıran son damlaydı.", en: "This delay was the last straw." },
      { tr: "Onun bu sözü son damla oldu.", en: "That word of his was the last straw." },
      { tr: "Benim için son damla oydu.", en: "For me that was the last straw." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "be on the same page",
    tr: "aynı fikirde olmak, anlaşmış olmak",
    note: "İş hayatında çok geçer; bilgi ve beklenti birliğini anlatır, tam mutabakatı değil.",
    examples: [
      { en: "Let's make sure we're on the same page.", tr: "Aynı sayfada olduğumuzdan emin olalım." },
      { en: "We weren't on the same page about the budget.", tr: "Bütçe konusunda anlaşamamıştık." },
      { en: "Good, we're on the same page.", tr: "Güzel, aynı fikirdeyiz." }
    ],
    practice: [
      { tr: "Başlamadan önce aynı fikirde olalım.", en: "Let's be on the same page before we start." },
      { tr: "Konu hakkında aynı fikirde miyiz?", en: "Are we on the same page about the subject?" },
      { tr: "Ekip artık aynı fikirde.", en: "The team is on the same page now." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "in the same boat",
    tr: "aynı gemide, aynı durumda",
    note: "Ortak bir zorluğu paylaşmayı anlatır; dayanışma bildirir.",
    examples: [
      { en: "Don't worry, we're all in the same boat.", tr: "Merak etme, hepimiz aynı gemideyiz." },
      { en: "He's in the same boat as me.", tr: "O da benimle aynı durumda." },
      { en: "Everyone here is in the same boat.", tr: "Buradaki herkes aynı durumda." }
    ],
    practice: [
      { tr: "Endişelenme, ikimiz de aynı durumdayız.", en: "Don't worry, we're both in the same boat." },
      { tr: "Bütün öğrenciler aynı durumda.", en: "All the students are in the same boat." },
      { tr: "O da bizimle aynı gemide.", en: "He is in the same boat as us." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "beat around the bush",
    tr: "lafı dolandırmak",
    note: "'cut to the chase'in tam karşıtıdır. İngiliz İngilizcesinde 'beat about the bush' olur.",
    examples: [
      { en: "Stop beating around the bush.", tr: "Lafı dolandırmayı bırak." },
      { en: "He beat around the bush for ten minutes.", tr: "On dakika lafı dolandırdı." },
      { en: "Don't beat around the bush, just ask.", tr: "Dolandırma, sor gitsin." }
    ],
    practice: [
      { tr: "Lafı dolandırma, ne oldu?", en: "Don't beat around the bush, what happened?" },
      { tr: "Yarım saat lafı dolandırdı.", en: "She beat around the bush for half an hour." },
      { tr: "Lafı dolandırmayı bırakıp gerçeği söyle.", en: "Stop beating around the bush and tell the truth." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "hit the nail on the head",
    tr: "tam üstüne basmak, taşı gediğine koymak",
    note: "Birinin söylediğinin tam isabet olduğunu onaylar.",
    examples: [
      { en: "You hit the nail on the head.", tr: "Tam üstüne bastın." },
      { en: "Her comment hit the nail on the head.", tr: "Yorumu taşı gediğine koydu." },
      { en: "I think he hit the nail on the head there.", tr: "Bence orada tam isabet ettirdi." }
    ],
    practice: [
      { tr: "Sorunu söylerken tam üstüne bastın.", en: "You hit the nail on the head about the problem." },
      { tr: "Cevabı taşı gediğine koydu.", en: "His answer hit the nail on the head." },
      { tr: "Bence tam isabet ettirdin.", en: "I think you hit the nail on the head." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "go the extra mile",
    tr: "fazladan çaba göstermek",
    note: "Beklenenden fazlasını yapmayı anlatır; iş ve hizmet bağlamında sık geçer.",
    examples: [
      { en: "She always goes the extra mile for her students.", tr: "Öğrencileri için hep fazladan çaba gösterir." },
      { en: "Going the extra mile pays off.", tr: "Fazladan çaba karşılığını veriyor." },
      { en: "They went the extra mile to fix it.", tr: "Düzeltmek için ellerinden geleni fazlasıyla yaptılar." }
    ],
    practice: [
      { tr: "Müşteriler için fazladan çaba gösteriyoruz.", en: "We go the extra mile for our customers." },
      { tr: "Fazladan çaba gösterdi ve kazandı.", en: "She went the extra mile and won." },
      { tr: "Fazladan çaba göstermeye hazır mısın?", en: "Are you ready to go the extra mile?" }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "pull someone's leg",
    tr: "birine takılmak, dalga geçmek",
    note: "Kötü niyetli değil, şakacı bir kandırmacadır. 'Are you pulling my leg?' kalıplaşmıştır.",
    examples: [
      { en: "Relax, I'm just pulling your leg.", tr: "Sakin ol, sadece takılıyorum." },
      { en: "Are you pulling my leg?", tr: "Dalga mı geçiyorsun?" },
      { en: "He was pulling her leg about the test.", tr: "Sınav konusunda ona takılıyordu." }
    ],
    practice: [
      { tr: "Merak etme, sana takılıyorum.", en: "Don't worry, I'm pulling your leg." },
      { tr: "Bana takılıyor musun?", en: "Are you pulling my leg?" },
      { tr: "Bütün akşam ona takıldılar.", en: "They pulled his leg all evening." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "call the shots",
    tr: "kararları vermek, sözü geçmek",
    note: "Kimin gerçekten yetkili olduğunu anlatır; resmî unvandan çok fiilî güce işaret eder.",
    examples: [
      { en: "She calls the shots around here.", tr: "Burada sözü geçen o." },
      { en: "Who calls the shots in this company?", tr: "Bu şirkette kararları kim veriyor?" },
      { en: "He doesn't call the shots anymore.", tr: "Artık kararları o vermiyor." }
    ],
    practice: [
      { tr: "Bu evde kararları annem verir.", en: "My mother calls the shots in this house." },
      { tr: "Artık kararları o veriyor.", en: "He calls the shots now." },
      { tr: "Kararları kimin verdiğini bilmiyorum.", en: "I don't know who calls the shots." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "the ball is in your court",
    tr: "top sende",
    note: "Sıranın karşı tarafa geçtiğini söyler; genelde bir teklif sunulduktan sonra kullanılır.",
    examples: [
      { en: "I've made my offer. The ball is in your court.", tr: "Teklifimi yaptım. Top sende." },
      { en: "Now the ball is in their court.", tr: "Artık top onlarda." },
      { en: "We're waiting; the ball is in his court.", tr: "Bekliyoruz, top onda." }
    ],
    practice: [
      { tr: "Cevabımı verdim, top sende.", en: "I gave my answer, the ball is in your court." },
      { tr: "Artık top onların sahasında.", en: "The ball is in their court now." },
      { tr: "Top sende, karar senin.", en: "The ball is in your court, it's your decision." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "jump to conclusions",
    tr: "hemen sonuca varmak",
    note: "Yeterli bilgi olmadan karar vermeyi eleştirir; genelde uyarı olarak kullanılır.",
    examples: [
      { en: "Don't jump to conclusions.", tr: "Hemen sonuca varma." },
      { en: "He jumped to conclusions without asking.", tr: "Sormadan hemen bir sonuca vardı." },
      { en: "Let's not jump to conclusions yet.", tr: "Daha sonuca varmayalım." }
    ],
    practice: [
      { tr: "Lütfen hemen sonuca varma.", en: "Please don't jump to conclusions." },
      { tr: "Dinlemeden hemen sonuca vardı.", en: "He jumped to conclusions without listening." },
      { tr: "Hemen sonuca varmak yanlış olur.", en: "It would be wrong to jump to conclusions." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "play it by ear",
    tr: "duruma göre karar vermek",
    note: "Önceden plan yapmayıp anında karar vermeyi anlatır; müzikten gelir.",
    examples: [
      { en: "Let's play it by ear.", tr: "Duruma göre bakarız." },
      { en: "We didn't plan anything; we played it by ear.", tr: "Plan yapmadık, duruma göre ilerledik." },
      { en: "I'll play it by ear and see how it goes.", tr: "Duruma göre karar veririm, bakalım nasıl gidecek." }
    ],
    practice: [
      { tr: "Plan yapmayalım, duruma göre bakarız.", en: "Let's not plan, we'll play it by ear." },
      { tr: "Hava nasıl olursa, duruma göre karar veririz.", en: "Whatever the weather, we'll play it by ear." },
      { tr: "O gün duruma göre hareket ettik.", en: "We played it by ear that day." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "sit on the fence",
    tr: "kararsız kalmak, tarafsız durmak",
    note: "Taraf seçmemeyi eleştirel bir tonla anlatır.",
    examples: [
      { en: "Stop sitting on the fence and decide.", tr: "Kararsız kalmayı bırak ve karar ver." },
      { en: "He's still sitting on the fence.", tr: "Hâlâ arada kalmış durumda." },
      { en: "You can't sit on the fence forever.", tr: "Sonsuza kadar tarafsız kalamazsın." }
    ],
    practice: [
      { tr: "Kararsız kalma, bir taraf seç.", en: "Don't sit on the fence, choose a side." },
      { tr: "Konuyla ilgili hâlâ kararsız.", en: "He is still sitting on the fence about it." },
      { tr: "Sonsuza kadar kararsız kalamazsın.", en: "You can't sit on the fence forever." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "take it with a grain of salt",
    tr: "ihtiyatla karşılamak",
    note: "Bir bilgiye tam güvenilmemesi gerektiğini söyler. İngiliz kullanımında 'a pinch of salt' olur.",
    examples: [
      { en: "Take his advice with a grain of salt.", tr: "Tavsiyesini ihtiyatla karşıla." },
      { en: "I take those reviews with a grain of salt.", tr: "O yorumlara pek güvenmiyorum." },
      { en: "Take the numbers with a grain of salt.", tr: "Rakamlara temkinli yaklaş." }
    ],
    practice: [
      { tr: "Bu haberi ihtiyatla karşıla.", en: "Take this news with a grain of salt." },
      { tr: "Söylediklerini temkinli karşılıyorum.", en: "I take what he says with a grain of salt." },
      { tr: "Yorumları ihtiyatla karşılamalısın.", en: "You should take the comments with a grain of salt." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "when it comes to",
    tr: "söz konusu olunca",
    note: "Konuyu daraltır; arkasından isim ya da -ing gelir, mastar gelmez.",
    examples: [
      { en: "When it comes to cooking, he's the best.", tr: "Yemek söz konusu olunca en iyisi o." },
      { en: "When it comes to money, be careful.", tr: "Para söz konusu olunca dikkatli ol." },
      { en: "She's shy when it comes to speaking English.", tr: "İngilizce konuşmak söz konusu olunca çekiniyor." }
    ],
    practice: [
      { tr: "Matematik söz konusu olunca çok hızlı.", en: "When it comes to maths, he is very fast." },
      { tr: "Para söz konusu olunca kimseye güvenmiyor.", en: "When it comes to money, he trusts nobody." },
      { tr: "Yemek pişirmek söz konusu olunca acemiyim.", en: "When it comes to cooking, I'm a beginner." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "have a lot on your plate",
    tr: "işi başından aşkın olmak",
    note: "Yoğunluğu nazikçe anlatır; birini mazur görürken sık kullanılır.",
    examples: [
      { en: "She has a lot on her plate right now.", tr: "Şu an işi başından aşkın." },
      { en: "I've got a lot on my plate this week.", tr: "Bu hafta çok yoğunum." },
      { en: "He can't help; he has too much on his plate.", tr: "Yardım edemez, üstünde çok iş var." }
    ],
    practice: [
      { tr: "Bu ara işim başımdan aşkın.", en: "I have a lot on my plate these days." },
      { tr: "İşi başından aşkın, onu rahatsız etme.", en: "He has a lot on his plate, don't disturb him." },
      { tr: "Üstünde çok iş varken yardım istedi.", en: "She asked for help when she had a lot on her plate." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "it's not rocket science",
    tr: "roket bilimi değil ya, o kadar da zor değil",
    note: "Bir işin abartıldığını söyler; ters anlaşılabileceği için tonuna dikkat et.",
    examples: [
      { en: "Come on, it's not rocket science.", tr: "Hadi ama, o kadar da zor değil." },
      { en: "Cooking pasta isn't rocket science.", tr: "Makarna haşlamak roket bilimi değil." },
      { en: "It's not rocket science, just read the manual.", tr: "Zor bir şey değil, kılavuzu oku yeter." }
    ],
    practice: [
      { tr: "Merak etme, o kadar da zor değil.", en: "Don't worry, it's not rocket science." },
      { tr: "Form doldurmak roket bilimi değil.", en: "Filling in a form is not rocket science." },
      { tr: "O kadar da zor değil, sen yaparsın.", en: "It's not rocket science, you can do it." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "better late than never",
    tr: "geç olsun güç olmasın",
    note: "Geciken bir şeyin yine de değerli olduğunu söyler; hafif bir sitem de taşıyabilir.",
    examples: [
      { en: "You finally called. Better late than never.", tr: "Sonunda aradın. Geç olsun güç olmasın." },
      { en: "He apologized after a year — better late than never.", tr: "Bir yıl sonra özür diledi, geç olsun güç olmasın." },
      { en: "I started at forty. Better late than never.", tr: "Kırkında başladım. Hiç yoktan iyidir." }
    ],
    practice: [
      { tr: "Sonunda bitirdin, geç olsun güç olmasın.", en: "You finally finished it, better late than never." },
      { tr: "İki saat geç geldi ama geç olsun güç olmasın.", en: "He came two hours late, but better late than never." },
      { tr: "Ellisinde başladı, hiç yoktan iyidir.", en: "She started at fifty, better late than never." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "easier said than done",
    tr: "söylemesi kolay",
    note: "Bir tavsiyenin uygulamada zor olduğunu belirtir; genelde tavsiyeye cevap olarak gelir.",
    examples: [
      { en: "Just relax? Easier said than done.", tr: "Rahatla mı? Söylemesi kolay." },
      { en: "Quitting is easier said than done.", tr: "Bırakmak söylendiği kadar kolay değil." },
      { en: "That's easier said than done.", tr: "Onu söylemek kolay." }
    ],
    practice: [
      { tr: "Erken kalkmak söylemesi kolay.", en: "Getting up early is easier said than done." },
      { tr: "Söylemesi kolay ama denemeye değer.", en: "It's easier said than done, but it's worth trying." },
      { tr: "Affetmek söylendiği kadar kolay değil.", en: "Forgiving is easier said than done." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "get the ball rolling",
    tr: "işi başlatmak, çarkı döndürmek",
    note: "Bir sürecin ilk adımını atmayı anlatır; toplantı ve proje dilinde sık geçer.",
    examples: [
      { en: "Let's get the ball rolling.", tr: "Hadi işi başlatalım." },
      { en: "Her email got the ball rolling.", tr: "Onun e-postası süreci başlattı." },
      { en: "We need someone to get the ball rolling.", tr: "İşi başlatacak birine ihtiyacımız var." }
    ],
    practice: [
      { tr: "Kısa bir toplantıyla işi başlatalım.", en: "Let's get the ball rolling with a short meeting." },
      { tr: "Onun fikri işi başlattı.", en: "His idea got the ball rolling." },
      { tr: "İşi başlatmak için bir imza yeter.", en: "One signature is enough to get the ball rolling." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "in a nutshell",
    tr: "kısacası, özetle",
    note: "Uzun bir açıklamayı tek cümleye indirirken kullanılır.",
    examples: [
      { en: "In a nutshell, we need more time.", tr: "Kısacası daha fazla vakit lazım." },
      { en: "That's the project in a nutshell.", tr: "Proje özetle bu." },
      { en: "In a nutshell, it didn't work.", tr: "Özetle, olmadı." }
    ],
    practice: [
      { tr: "Kısacası plan işe yaramadı.", en: "In a nutshell, the plan didn't work." },
      { tr: "Özetle, iki seçeneğimiz var.", en: "In a nutshell, we have two options." },
      { tr: "Kısacası onu görmek istemiyor.", en: "In a nutshell, she doesn't want to see him." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "the bottom line",
    tr: "işin özü, netice",
    note: "Kâr-zarar dilinden gelir; en önemli noktayı ya da nihai sonucu işaret eder.",
    examples: [
      { en: "The bottom line is we can't afford it.", tr: "İşin özü, buna gücümüz yetmiyor." },
      { en: "What's the bottom line here?", tr: "Peki netice ne?" },
      { en: "The bottom line is that he lied.", tr: "İşin özü şu ki yalan söyledi." }
    ],
    practice: [
      { tr: "İşin özü, vaktimiz kalmadı.", en: "The bottom line is, we have no time left." },
      { tr: "Netice ne, kaç para tutuyor?", en: "What's the bottom line, how much does it cost?" },
      { tr: "İşin özü şu ki kimse hazır değildi.", en: "The bottom line is that nobody was ready." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "a blessing in disguise",
    tr: "hayırlısı olmuş, kılık değiştirmiş nimet",
    note: "Önce kötü görünen ama sonradan iyi çıkan durumlar için; genelde geçmiş zamanla gelir.",
    examples: [
      { en: "Losing that job was a blessing in disguise.", tr: "O işi kaybetmek hayırlısı olmuş." },
      { en: "The delay turned out to be a blessing in disguise.", tr: "Gecikme sonunda hayra vesile oldu." },
      { en: "Maybe it's a blessing in disguise.", tr: "Belki de hayırlısı budur." }
    ],
    practice: [
      { tr: "Trenin kaçması hayırlısı olmuş.", en: "Missing the train was a blessing in disguise." },
      { tr: "O ayrılık hayra vesile oldu.", en: "That break-up was a blessing in disguise." },
      { tr: "Belki de bu gecikme hayırlısıdır.", en: "Maybe this delay is a blessing in disguise." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "see eye to eye",
    tr: "aynı fikirde olmak",
    note: "Çoğunlukla olumsuz kullanılır: 'we don't see eye to eye' yani anlaşamıyoruz.",
    examples: [
      { en: "We don't see eye to eye on this.", tr: "Bu konuda anlaşamıyoruz." },
      { en: "They finally saw eye to eye.", tr: "Sonunda aynı fikirde buluştular." },
      { en: "He and his boss never see eye to eye.", tr: "Patronuyla hiç anlaşamıyor." }
    ],
    practice: [
      { tr: "Bu konuda onunla anlaşamıyoruz.", en: "We don't see eye to eye with him on this." },
      { tr: "Sonunda fiyatta anlaştılar.", en: "They finally saw eye to eye on the price." },
      { tr: "Babamla hiç anlaşamıyoruz.", en: "My father and I never see eye to eye." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "walk on eggshells",
    tr: "kırk dereden su getirmek, tedirgin davranmak",
    note: "Birini kızdırmamak için aşırı dikkatli davranmayı anlatır; rahatsız bir hâli tarif eder.",
    examples: [
      { en: "I feel like I'm walking on eggshells around him.", tr: "Yanında tedirgin davranıyorum." },
      { en: "Everyone was walking on eggshells that day.", tr: "O gün herkes aşırı dikkatliydi." },
      { en: "Stop walking on eggshells and say it.", tr: "Bu kadar tedirgin olma, söyle gitsin." }
    ],
    practice: [
      { tr: "Onun yanında tedirgin davranıyoruz.", en: "We walk on eggshells around him." },
      { tr: "Bütün hafta tedirgin davrandım.", en: "I walked on eggshells all week." },
      { tr: "Bu kadar tedirgin olmana gerek yok.", en: "You don't need to walk on eggshells." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "the tip of the iceberg",
    tr: "buzdağının görünen kısmı",
    note: "Görünen sorunun çok daha büyük bir sorunun küçük parçası olduğunu söyler.",
    examples: [
      { en: "This is just the tip of the iceberg.", tr: "Bu buzdağının sadece görünen kısmı." },
      { en: "The complaints are the tip of the iceberg.", tr: "Şikâyetler işin görünen yüzü." },
      { en: "What we found was the tip of the iceberg.", tr: "Bulduğumuz şey buzdağının ucuydu." }
    ],
    practice: [
      { tr: "Bu rakamlar buzdağının görünen kısmı.", en: "These numbers are the tip of the iceberg." },
      { tr: "Gördüğün şey buzdağının sadece ucu.", en: "What you see is only the tip of the iceberg." },
      { tr: "Bu şikâyet buzdağının görünen kısmıydı.", en: "This complaint was the tip of the iceberg." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "keep your chin up",
    tr: "başını dik tut, moralini bozma",
    note: "Zor bir dönemden geçen birine destek olurken söylenir.",
    examples: [
      { en: "Keep your chin up, it'll get better.", tr: "Moralini bozma, düzelecek." },
      { en: "She kept her chin up through it all.", tr: "Her şeye rağmen dimdik durdu." },
      { en: "Chin up, you did your best.", tr: "Başını dik tut, elinden geleni yaptın." }
    ],
    practice: [
      { tr: "Moralini bozma, yarın yeni bir gün.", en: "Keep your chin up, tomorrow is a new day." },
      { tr: "Kaybettiler ama moralleri bozulmadı.", en: "They lost but they kept their chins up." },
      { tr: "Başını dik tut, sonu güzel olacak.", en: "Keep your chin up, it will end well." }
    ]
  },
  {
    group: "Deyimsel",
    chunk: "touch base",
    tr: "temas kurmak, kısaca görüşmek",
    note: "İş dilinde kısa bir güncelleme görüşmesi için kullanılır; kişiyle 'with' bağlanır.",
    examples: [
      { en: "Let's touch base next week.", tr: "Gelecek hafta kısaca görüşelim." },
      { en: "I wanted to touch base with you about the report.", tr: "Rapor konusunda seninle bir konuşmak istedim." },
      { en: "We touch base every Monday.", tr: "Her pazartesi kısa bir görüşme yapıyoruz." }
    ],
    practice: [
      { tr: "Hafta ortasında kısaca görüşelim.", en: "Let's touch base in the middle of the week." },
      { tr: "Proje için müşteriyle kısaca görüştüm.", en: "I touched base with the client about the project." },
      { tr: "Yarın seninle bir görüşürüm.", en: "I'll touch base with you tomorrow." }
    ]
  }
,

  /* ——— İş, okul ve akademik dil ——— */

  {
    group: "İş ve akademik",
    chunk: "meet a deadline",
    tr: "süreye yetişmek, teslim tarihine uymak",
    note: "Fiil 'catch' değil 'meet'tir. Yetişememek için 'miss a deadline' denir.",
    examples: [
      { en: "We met the deadline by two hours.", tr: "Teslim tarihine iki saat kala yetiştik." },
      { en: "Can you meet the deadline?", tr: "Süreye yetişebilir misin?" },
      { en: "He missed the deadline again.", tr: "Yine süreyi kaçırdı." }
    ],
    practice: [
      { tr: "Bu teslim tarihine yetişemem.", en: "I can't meet this deadline." },
      { tr: "Ekip süreye zar zor yetişti.", en: "The team barely met the deadline." },
      { tr: "Süreye yetişmek için gece çalıştık.", en: "We worked at night to meet the deadline." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "reach an agreement",
    tr: "anlaşmaya varmak",
    note: "'come to an agreement' ile eş anlamlıdır; kimle olduğunu söylerken 'with' gelir.",
    examples: [
      { en: "The two sides reached an agreement.", tr: "İki taraf anlaşmaya vardı." },
      { en: "We couldn't reach an agreement on price.", tr: "Fiyat konusunda anlaşamadık." },
      { en: "They reached an agreement with the union.", tr: "Sendikayla anlaşmaya vardılar." }
    ],
    practice: [
      { tr: "Sonunda bir anlaşmaya vardık.", en: "We finally reached an agreement." },
      { tr: "İki ülke anlaşmaya varamadı.", en: "The two countries couldn't reach an agreement." },
      { tr: "Umarım bugün anlaşmaya varırız.", en: "I hope we reach an agreement today." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "take into account",
    tr: "hesaba katmak, göz önünde bulundurmak",
    note: "Nesne araya da girebilir: 'take the cost into account'. 'take account of' hâli daha resmîdir.",
    examples: [
      { en: "You have to take the cost into account.", tr: "Maliyeti hesaba katman gerek." },
      { en: "We took everything into account.", tr: "Her şeyi göz önünde bulundurduk." },
      { en: "Take into account that he's new.", tr: "Yeni olduğunu hesaba kat." }
    ],
    practice: [
      { tr: "Yaşını da hesaba kat.", en: "Take his age into account." },
      { tr: "Trafiği hesaba katmadık.", en: "We didn't take the traffic into account." },
      { tr: "Tüm masrafları göz önünde bulundurmalısın.", en: "You should take all the costs into account." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "play a role",
    tr: "rol oynamak, payı olmak",
    note: "Büyüklüğü sıfatla belirtilir: 'play a key role', 'play a major role'. Alan 'in' ile gelir.",
    examples: [
      { en: "Luck played a big role in this.", tr: "Bunda şansın büyük payı vardı." },
      { en: "She plays a key role in the team.", tr: "Ekipte kilit bir rol oynuyor." },
      { en: "Diet plays an important role in health.", tr: "Beslenme sağlıkta önemli rol oynar." }
    ],
    practice: [
      { tr: "Öğretmenler bu değişimde rol oynadı.", en: "Teachers played a role in this change." },
      { tr: "Şans önemli bir rol oynuyor.", en: "Luck plays an important role." },
      { tr: "Bu kararda hiç rol oynamadım.", en: "I played no role in this decision." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "draw a conclusion",
    tr: "sonuç çıkarmak",
    note: "Akademik yazıda 'draw', konuşmada 'come to a conclusion' daha doğal durur.",
    examples: [
      { en: "It's too early to draw conclusions.", tr: "Sonuç çıkarmak için çok erken." },
      { en: "What conclusion do you draw from this?", tr: "Bundan ne sonuç çıkarıyorsun?" },
      { en: "The study draws a clear conclusion.", tr: "Çalışma net bir sonuca varıyor." }
    ],
    practice: [
      { tr: "Bu verilerden sonuç çıkarmak zor.", en: "It's hard to draw a conclusion from this data." },
      { tr: "Aceleyle bir sonuç çıkarmayalım.", en: "Let's not draw a conclusion in a hurry." },
      { tr: "Rapor açık bir sonuç çıkarıyor.", en: "The report draws a clear conclusion." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "take action",
    tr: "harekete geçmek",
    note: "Bu anlamda sayılamaz, artikel almaz: 'take action', 'take an action' değil.",
    examples: [
      { en: "We need to take action now.", tr: "Şimdi harekete geçmemiz lazım." },
      { en: "The government took action quickly.", tr: "Hükümet hızla harekete geçti." },
      { en: "Nobody took any action.", tr: "Kimse bir adım atmadı." }
    ],
    practice: [
      { tr: "Geç olmadan harekete geçelim.", en: "Let's take action before it's too late." },
      { tr: "Belediye sonunda harekete geçti.", en: "The council finally took action." },
      { tr: "Şikâyetten sonra harekete geçtiler.", en: "They took action after the complaint." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "set a goal",
    tr: "hedef koymak",
    note: "Kendine koymak için 'set yourself a goal' denir; ulaşmak 'reach' ya da 'achieve' ile olur.",
    examples: [
      { en: "Set a realistic goal for this month.", tr: "Bu ay için gerçekçi bir hedef koy." },
      { en: "She set herself a goal of reading daily.", tr: "Kendine her gün okuma hedefi koydu." },
      { en: "We reached our goal early.", tr: "Hedefimize erken ulaştık." }
    ],
    practice: [
      { tr: "Bu yıl için bir hedef koydum.", en: "I set a goal for this year." },
      { tr: "Ulaşabileceğin bir hedef koy.", en: "Set a goal you can reach." },
      { tr: "Takım yeni bir hedef koydu.", en: "The team set a new goal." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "meet expectations",
    tr: "beklentileri karşılamak",
    note: "Aşmak için 'exceed expectations', karşılayamamak için 'fall short of expectations' kullanılır.",
    examples: [
      { en: "The results met our expectations.", tr: "Sonuçlar beklentilerimizi karşıladı." },
      { en: "It didn't meet expectations.", tr: "Beklentileri karşılamadı." },
      { en: "She exceeded all expectations.", tr: "Tüm beklentileri aştı." }
    ],
    practice: [
      { tr: "Yeni model beklentileri karşılamadı.", en: "The new model didn't meet expectations." },
      { tr: "Sonuçlar beklentileri fazlasıyla karşıladı.", en: "The results met expectations easily." },
      { tr: "Beklentileri karşılamak kolay değil.", en: "It's not easy to meet expectations." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "attend a meeting",
    tr: "toplantıya katılmak",
    note: "'attend' edat almaz: 'attend to the meeting' yanlıştır. 'attend to' ise ilgilenmek demektir.",
    examples: [
      { en: "I have to attend a meeting at three.", tr: "Üçte bir toplantıya katılmam gerek." },
      { en: "How many people attended?", tr: "Kaç kişi katıldı?" },
      { en: "He couldn't attend the meeting.", tr: "Toplantıya katılamadı." }
    ],
    practice: [
      { tr: "Yarın iki toplantıya katılacağım.", en: "I will attend two meetings tomorrow." },
      { tr: "Onun yerine toplantıya katılabilir misin?", en: "Can you attend the meeting instead of him?" },
      { tr: "Hasta olduğu için toplantıya katılmadı.", en: "He didn't attend the meeting because he was ill." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "give a presentation",
    tr: "sunum yapmak",
    note: "Fiil 'make' değil 'give' ya da 'do'dur. Konu 'on' ile gelir: 'a presentation on safety'.",
    examples: [
      { en: "I'm giving a presentation tomorrow.", tr: "Yarın sunum yapıyorum." },
      { en: "She gave a presentation on the results.", tr: "Sonuçlar üzerine bir sunum yaptı." },
      { en: "Who's giving the presentation?", tr: "Sunumu kim yapıyor?" }
    ],
    practice: [
      { tr: "Cuma günü sunum yapacağım.", en: "I will give a presentation on Friday." },
      { tr: "İklim üzerine bir sunum yaptı.", en: "She gave a presentation on climate." },
      { tr: "Sunum yapmaktan hoşlanmıyorum.", en: "I don't like giving presentations." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "raise a concern",
    tr: "endişe dile getirmek",
    note: "Resmî ve nazik bir itiraz yoludur; aynı fiil 'raise a question', 'raise an issue' diye de gelir.",
    examples: [
      { en: "Several people raised concerns about the plan.", tr: "Birkaç kişi plan hakkında endişe dile getirdi." },
      { en: "I'd like to raise a concern.", tr: "Bir endişemi dile getirmek istiyorum." },
      { en: "He raised the issue in the meeting.", tr: "Konuyu toplantıda gündeme getirdi." }
    ],
    practice: [
      { tr: "Güvenlikle ilgili bir endişe dile getirdi.", en: "He raised a concern about safety." },
      { tr: "Kimse endişe dile getirmedi.", en: "Nobody raised a concern." },
      { tr: "Bu endişeyi toplantıda dile getireceğim.", en: "I will raise this concern in the meeting." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "follow up",
    tr: "takibini yapmak, dönüş yapmak",
    note: "Konuyla 'on', kişiyle 'with' bağlanır. İsim hâli tire alır: 'a follow-up email'.",
    examples: [
      { en: "I'll follow up with him tomorrow.", tr: "Yarın ona bir dönüş yaparım." },
      { en: "Can you follow up on that request?", tr: "Şu talebin takibini yapar mısın?" },
      { en: "She sent a follow-up email.", tr: "Takip e-postası gönderdi." }
    ],
    practice: [
      { tr: "E-postanın takibini yapar mısın?", en: "Can you follow up on the email?" },
      { tr: "Onunla yarın bir dönüş yaparım.", en: "I'll follow up with him tomorrow." },
      { tr: "Kimse şikâyetin takibini yapmadı.", en: "Nobody followed up on the complaint." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "lose track of",
    tr: "takibini kaybetmek, aklından çıkmak",
    note: "'lose track of time' kalıbı 'saatin nasıl geçtiğini anlamamak' demektir.",
    examples: [
      { en: "I lost track of time.", tr: "Saatin nasıl geçtiğini anlamadım." },
      { en: "I've lost track of how many there are.", tr: "Kaç tane olduğunun sayısını kaçırdım." },
      { en: "We lost track of each other after school.", tr: "Okuldan sonra birbirimizi kaybettik." }
    ],
    practice: [
      { tr: "Kitap okurken saatin nasıl geçtiğini anlamadım.", en: "I lost track of time while reading." },
      { tr: "Kaç kere aradığını unuttum.", en: "I lost track of how many times he called." },
      { tr: "Taşındıktan sonra onu kaybettim.", en: "I lost track of him after the move." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "make the most of",
    tr: "en iyi şekilde değerlendirmek",
    note: "Sınırlı bir imkânı sonuna kadar kullanmayı anlatır; arkasından isim gelir.",
    examples: [
      { en: "Make the most of your time here.", tr: "Buradaki vaktini en iyi şekilde değerlendir." },
      { en: "We made the most of a bad situation.", tr: "Kötü bir durumu elimizden geldiğince iyi kullandık." },
      { en: "Make the most of this opportunity.", tr: "Bu fırsatı iyi değerlendir." }
    ],
    practice: [
      { tr: "Tatilini en iyi şekilde değerlendir.", en: "Make the most of your holiday." },
      { tr: "Kısa zamanı en iyi şekilde kullandık.", en: "We made the most of the short time." },
      { tr: "Bu fırsatı değerlendirmelisin.", en: "You should make the most of this chance." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "come to terms with",
    tr: "kabullenmek, içine sindirmek",
    note: "Zor bir gerçeği zamanla kabul etmeyi anlatır; genelde kayıp ve başarısızlıkla gelir.",
    examples: [
      { en: "He's coming to terms with the loss.", tr: "Kaybı yavaş yavaş kabulleniyor." },
      { en: "It took me years to come to terms with it.", tr: "Bunu kabullenmem yıllarımı aldı." },
      { en: "She never came to terms with the decision.", tr: "Kararı hiçbir zaman içine sindiremedi." }
    ],
    practice: [
      { tr: "Kaybı kabullenmesi zor oldu.", en: "It was hard for him to come to terms with the loss." },
      { tr: "Bunu kabullenmeye çalışıyorum.", en: "I'm trying to come to terms with this." },
      { tr: "Sonunda gerçeği kabullendi.", en: "She finally came to terms with the truth." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "meet the requirements",
    tr: "şartları karşılamak",
    note: "Başvuru ve şartname dilinde standart kalıptır; tek tek şart için 'meet a requirement' olur.",
    examples: [
      { en: "Your application meets all the requirements.", tr: "Başvurunuz tüm şartları karşılıyor." },
      { en: "It doesn't meet the safety requirements.", tr: "Güvenlik şartlarını karşılamıyor." },
      { en: "Do I meet the requirements for this course?", tr: "Bu ders için şartları karşılıyor muyum?" }
    ],
    practice: [
      { tr: "Başvurum şartları karşılamıyor.", en: "My application doesn't meet the requirements." },
      { tr: "Bina yeni şartları karşılıyor.", en: "The building meets the new requirements." },
      { tr: "Şartları karşılamak için bir belge eksik.", en: "One document is missing to meet the requirements." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "take the initiative",
    tr: "inisiyatif almak, ilk adımı atmak",
    note: "Kimse söylemeden harekete geçmeyi anlatır; arkasından mastar gelebilir.",
    examples: [
      { en: "She took the initiative to fix it.", tr: "Düzeltmek için inisiyatif aldı." },
      { en: "Someone has to take the initiative.", tr: "Birinin ilk adımı atması gerek." },
      { en: "He took the initiative and called them.", tr: "İnisiyatif alıp onları aradı." }
    ],
    practice: [
      { tr: "İnisiyatif alıp toplantıyı ayarladı.", en: "She took the initiative and set up the meeting." },
      { tr: "Birinin inisiyatif alması gerekiyordu.", en: "Someone had to take the initiative." },
      { tr: "İnisiyatif almaktan korkma.", en: "Don't be afraid to take the initiative." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "make a commitment",
    tr: "taahhütte bulunmak, söz vermek",
    note: "Neye söz verdiğini 'to' ile bağlarsın; 'be committed to' hâlinde arkasından -ing gelir.",
    examples: [
      { en: "They made a commitment to reduce waste.", tr: "Atığı azaltma taahhüdünde bulundular." },
      { en: "I can't make a commitment right now.", tr: "Şu an söz veremem." },
      { en: "She's committed to finishing it.", tr: "Onu bitirmeye kararlı." }
    ],
    practice: [
      { tr: "Henüz bir taahhütte bulunamam.", en: "I can't make a commitment yet." },
      { tr: "Yardım edeceğine dair söz verdi.", en: "He made a commitment to help." },
      { tr: "Şirket bir taahhütte bulundu.", en: "The company made a commitment." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "gain experience",
    tr: "deneyim kazanmak",
    note: "Bu anlamda sayılamaz, 'experiences' olmaz. Alan 'in' ile gelir: 'experience in marketing'.",
    examples: [
      { en: "I want to gain experience in design.", tr: "Tasarım alanında deneyim kazanmak istiyorum." },
      { en: "She gained a lot of experience there.", tr: "Orada çok deneyim kazandı." },
      { en: "You gain experience by doing.", tr: "Deneyim yaparak kazanılır." }
    ],
    practice: [
      { tr: "Yurt dışında deneyim kazanmak istiyorum.", en: "I want to gain experience abroad." },
      { tr: "Staj sırasında çok deneyim kazandı.", en: "She gained a lot of experience during the internship." },
      { tr: "Bu iş sana deneyim kazandırır.", en: "This job will help you gain experience." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "be responsible for",
    tr: "sorumlu olmak",
    note: "Arkasından isim ya da -ing gelir: 'responsible for hiring'. Kişiye karşı sorumluluk 'responsible to' olur.",
    examples: [
      { en: "I'm responsible for the schedule.", tr: "Programdan ben sorumluyum." },
      { en: "Who's responsible for this mess?", tr: "Bu dağınıklıktan kim sorumlu?" },
      { en: "She's responsible for training new staff.", tr: "Yeni personeli eğitmekten sorumlu." }
    ],
    practice: [
      { tr: "Bu hatadan ben sorumluyum.", en: "I am responsible for this mistake." },
      { tr: "Kim yemekten sorumlu?", en: "Who is responsible for the food?" },
      { tr: "Yeni ekibi yönetmekten sorumlu.", en: "He is responsible for managing the new team." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "be aware of",
    tr: "farkında olmak, haberdar olmak",
    note: "Arkasına cümle gelecekse 'aware that' olur. Olumsuzu 'unaware of'tur.",
    examples: [
      { en: "Are you aware of the risks?", tr: "Risklerin farkında mısın?" },
      { en: "I wasn't aware that he'd left.", tr: "Gittiğinden haberim yoktu." },
      { en: "Be aware of your surroundings.", tr: "Etrafında olan bitenin farkında ol." }
    ],
    practice: [
      { tr: "Tehlikenin farkında değildi.", en: "He was not aware of the danger." },
      { tr: "Kuralların farkında mısınız?", en: "Are you aware of the rules?" },
      { tr: "Sorunun farkındayız.", en: "We are aware of the problem." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "be based on",
    tr: "dayanmak, temel almak",
    note: "Edat 'on'dur. Yer bildirirken 'based in' olur: 'the company is based in İstanbul'.",
    examples: [
      { en: "The film is based on a true story.", tr: "Film gerçek bir hikâyeye dayanıyor." },
      { en: "My opinion is based on experience.", tr: "Fikrim deneyime dayanıyor." },
      { en: "The company is based in Ankara.", tr: "Şirketin merkezi Ankara'da." }
    ],
    practice: [
      { tr: "Karar gerçek verilere dayanıyor.", en: "The decision is based on real data." },
      { tr: "Bu roman bir efsaneye dayanıyor.", en: "This novel is based on a legend." },
      { tr: "Fiyat mesafeye göre belirleniyor.", en: "The price is based on the distance." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "result in",
    tr: "ile sonuçlanmak, yol açmak",
    note: "'result in' sonucu gösterir, 'result from' ise sebebi; ikisi ters yönde çalışır.",
    examples: [
      { en: "The delay resulted in extra costs.", tr: "Gecikme ek maliyetle sonuçlandı." },
      { en: "This resulted in a lot of confusion.", tr: "Bu, epey karışıklığa yol açtı." },
      { en: "The damage resulted from poor design.", tr: "Hasar, kötü tasarımdan kaynaklandı." }
    ],
    practice: [
      { tr: "Hata büyük bir kayıpla sonuçlandı.", en: "The mistake resulted in a big loss." },
      { tr: "Bu değişiklik neyle sonuçlanacak?", en: "What will this change result in?" },
      { tr: "Yağmur sele yol açtı.", en: "The rain resulted in a flood." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "lead to",
    tr: "yol açmak, götürmek",
    note: "Arkasından isim ya da -ing gelir, mastar gelmez: 'lead to losing', 'lead to lose' değil.",
    examples: [
      { en: "Stress can lead to health problems.", tr: "Stres sağlık sorunlarına yol açabilir." },
      { en: "One mistake led to another.", tr: "Bir hata diğerini getirdi." },
      { en: "This road leads to the village.", tr: "Bu yol köye çıkıyor." }
    ],
    practice: [
      { tr: "Bu yol sahile çıkıyor.", en: "This road leads to the beach." },
      { tr: "Az uyku hatalara yol açar.", en: "Too little sleep leads to mistakes." },
      { tr: "Tartışma hiçbir şeye yol açmadı.", en: "The argument led to nothing." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "consist of",
    tr: "oluşmak, ibaret olmak",
    note: "Edilgen yapılmaz: 'is consisted of' yanlıştır. 'be made up of' ile eş anlamlıdır.",
    examples: [
      { en: "The team consists of five people.", tr: "Ekip beş kişiden oluşuyor." },
      { en: "Breakfast consisted of bread and cheese.", tr: "Kahvaltı ekmek ve peynirden ibaretti." },
      { en: "What does the course consist of?", tr: "Kurs nelerden oluşuyor?" }
    ],
    practice: [
      { tr: "Kitap on bölümden oluşuyor.", en: "The book consists of ten chapters." },
      { tr: "Menü üç yemekten oluşuyor.", en: "The menu consists of three dishes." },
      { tr: "Ekip kaç kişiden oluşuyor?", en: "How many people does the team consist of?" }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "focus on",
    tr: "odaklanmak, yoğunlaşmak",
    note: "Arkasından isim ya da -ing gelir. 'focus to' diye bir kullanım yoktur.",
    examples: [
      { en: "Let's focus on the main problem.", tr: "Asıl soruna odaklanalım." },
      { en: "I'm focusing on improving my English.", tr: "İngilizcemi geliştirmeye odaklanıyorum." },
      { en: "Try to focus.", tr: "Odaklanmaya çalış." }
    ],
    practice: [
      { tr: "Şimdi sadece sınava odaklan.", en: "Focus on the exam only now." },
      { tr: "Kaliteye odaklanmayı tercih ediyoruz.", en: "We prefer to focus on quality." },
      { tr: "Gürültüde odaklanamıyorum.", en: "I can't focus in the noise." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "rely on",
    tr: "güvenmek, bel bağlamak",
    note: "'depend on' ile yakındır ama 'rely on' daha çok güven ve süreklilik taşır.",
    examples: [
      { en: "You can rely on her.", tr: "Ona güvenebilirsin." },
      { en: "Don't rely on the weather forecast.", tr: "Hava tahminine bel bağlama." },
      { en: "We rely on public transport.", tr: "Toplu taşımaya bağımlıyız." }
    ],
    practice: [
      { tr: "Bu takıma güvenebilirsin.", en: "You can rely on this team." },
      { tr: "Ona güvenmemeliydik.", en: "We shouldn't have relied on him." },
      { tr: "Sadece bir kaynağa bel bağlama.", en: "Don't rely on only one source." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "apply for",
    tr: "başvurmak",
    note: "İşe 'apply for', kuruma 'apply to' başvurulur; ikisi farklı edat alır.",
    examples: [
      { en: "I applied for the job last week.", tr: "Geçen hafta işe başvurdum." },
      { en: "She applied to three universities.", tr: "Üç üniversiteye başvurdu." },
      { en: "You can apply for a visa online.", tr: "Vize başvurusunu internetten yapabilirsin." }
    ],
    practice: [
      { tr: "Bu ilana başvurmayı düşünüyorum.", en: "I'm thinking of applying for this job." },
      { tr: "Bursa başvurdun mu?", en: "Did you apply for the scholarship?" },
      { tr: "Yeni bir pasaporta başvurdu.", en: "He applied for a new passport." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "bring about",
    tr: "yol açmak, meydana getirmek",
    note: "Genelde büyük ve kasıtlı değişiklikler için: 'bring about change'.",
    examples: [
      { en: "The law brought about real change.", tr: "Yasa gerçek bir değişiklik getirdi." },
      { en: "What brought about this decision?", tr: "Bu karara ne yol açtı?" },
      { en: "Technology brought about a new era.", tr: "Teknoloji yeni bir dönem başlattı." }
    ],
    practice: [
      { tr: "Bu karar büyük bir değişiklik getirdi.", en: "This decision brought about a big change." },
      { tr: "Kriz neye yol açtı?", en: "What did the crisis bring about?" },
      { tr: "İnternet hayatımızda köklü bir değişim getirdi.", en: "The internet brought about a deep change in our lives." }
    ]
  },
  {
    group: "İş ve akademik",
    chunk: "carry on",
    tr: "devam etmek, sürdürmek",
    note: "Arkasından -ing gelir: 'carry on working'. İngiliz İngilizcesinde çok yaygındır.",
    examples: [
      { en: "Carry on, I'm listening.", tr: "Devam et, dinliyorum." },
      { en: "They carried on working despite the noise.", tr: "Gürültüye rağmen çalışmaya devam ettiler." },
      { en: "Let's carry on where we left off.", tr: "Kaldığımız yerden devam edelim." }
    ],
    practice: [
      { tr: "Gürültüye aldırmadan çalışmaya devam etti.", en: "He carried on working despite the noise." },
      { tr: "Sen devam et, ben dinliyorum.", en: "You carry on, I'm listening." },
      { tr: "Yağmura rağmen yürümeye devam ettik.", en: "We carried on walking despite the rain." }
    ]
  },

  /* ——— Sık kullanılan kalıp yapılar ——— */

  {
    group: "Kalıp yapılar",
    chunk: "get used to",
    tr: "alışmak",
    note: "Buradaki 'to' edattır, arkasından -ing gelir. 'used to' tek başına ise geçmiş alışkanlıktır.",
    examples: [
      { en: "I'm getting used to the new schedule.", tr: "Yeni programa alışıyorum." },
      { en: "You'll get used to it.", tr: "Alışacaksın." },
      { en: "She never got used to living alone.", tr: "Yalnız yaşamaya hiç alışamadı." }
    ],
    practice: [
      { tr: "Soğuk havaya alışamadım.", en: "I couldn't get used to the cold weather." },
      { tr: "Yeni işine çabuk alıştı.", en: "She got used to her new job quickly." },
      { tr: "Erken kalkmaya alışman lazım.", en: "You need to get used to waking up early." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "used to",
    tr: "eskiden ... yapardım",
    note: "Artık devam etmeyen geçmiş alışkanlıklar için; arkasından mastar gelir, -ing gelmez.",
    examples: [
      { en: "I used to smoke, but I quit.", tr: "Eskiden sigara içerdim ama bıraktım." },
      { en: "We used to live in Izmir.", tr: "Eskiden İzmir'de otururduk." },
      { en: "Didn't you use to play guitar?", tr: "Eskiden gitar çalmaz mıydın?" }
    ],
    practice: [
      { tr: "Eskiden her sabah koşardım.", en: "I used to run every morning." },
      { tr: "Eskiden burada bir fırın vardı.", en: "There used to be a bakery here." },
      { tr: "Eskiden çay içmez miydin?", en: "Didn't you use to drink tea?" }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "be fed up with",
    tr: "bıkmak, gına gelmek",
    note: "Arkasından isim ya da -ing gelir. 'be sick of' ile aynı anlamdadır.",
    examples: [
      { en: "I'm fed up with the traffic.", tr: "Trafikten bıktım." },
      { en: "She's fed up with waiting.", tr: "Beklemekten gına geldi." },
      { en: "He got fed up and left.", tr: "Bıktı ve çekip gitti." }
    ],
    practice: [
      { tr: "Bu gürültüden bıktım.", en: "I'm fed up with this noise." },
      { tr: "Aynı yemekten gına geldi.", en: "I'm fed up with the same food." },
      { tr: "Beklemekten bıktılar ve gittiler.", en: "They got fed up with waiting and left." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "can't stand",
    tr: "çekememek, hiç katlanamamak",
    note: "Güçlü bir hoşlanmama ifadesidir; arkasından -ing ya da isim gelir.",
    examples: [
      { en: "I can't stand loud music.", tr: "Yüksek sesli müziğe katlanamıyorum." },
      { en: "She can't stand waiting in line.", tr: "Sırada beklemeye hiç gelemiyor." },
      { en: "I can't stand it anymore.", tr: "Artık dayanamıyorum." }
    ],
    practice: [
      { tr: "Sıcağa hiç katlanamıyorum.", en: "I can't stand the heat." },
      { tr: "Geç kalmaya hiç gelemez.", en: "He can't stand being late." },
      { tr: "Bu sesi artık çekemiyorum.", en: "I can't stand this noise anymore." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "feel free to",
    tr: "çekinmeden ... yapabilirsin",
    note: "İzin veren nazik bir kalıptır; arkasından mastar gelir. E-postalarda çok geçer.",
    examples: [
      { en: "Feel free to ask any questions.", tr: "İstediğin soruyu çekinmeden sor." },
      { en: "Feel free to call me anytime.", tr: "İstediğin zaman çekinmeden ara." },
      { en: "Feel free to help yourself.", tr: "Buyur, rahatça al." }
    ],
    practice: [
      { tr: "Bir sorun olursa çekinmeden ara.", en: "Feel free to call if there's a problem." },
      { tr: "İstediğini çekinmeden sor.", en: "Feel free to ask whatever you want." },
      { tr: "Çekinmeden fikrini söyle.", en: "Feel free to say what you think." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "be willing to",
    tr: "yapmaya razı olmak, gönüllü olmak",
    note: "İstekli olmaktan çok 'itiraz etmemek' anlamı taşır; arkasından mastar gelir.",
    examples: [
      { en: "Are you willing to help?", tr: "Yardım etmeye razı mısın?" },
      { en: "He's willing to pay more.", tr: "Daha fazla ödemeye razı." },
      { en: "She wasn't willing to compromise.", tr: "Taviz vermeye yanaşmadı." }
    ],
    practice: [
      { tr: "Yardım etmeye razıyım.", en: "I am willing to help." },
      { tr: "Beklemeye razı mısın?", en: "Are you willing to wait?" },
      { tr: "Fikrini değiştirmeye yanaşmadı.", en: "He wasn't willing to change his mind." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "be likely to",
    tr: "olması muhtemel",
    note: "Tahmin bildirir; arkasından mastar gelir. Olumsuzu 'unlikely to'dur.",
    examples: [
      { en: "It's likely to rain tonight.", tr: "Bu gece yağmur yağması muhtemel." },
      { en: "He's likely to say no.", tr: "Muhtemelen hayır diyecek." },
      { en: "That's unlikely to happen.", tr: "Bunun olması pek olası değil." }
    ],
    practice: [
      { tr: "Yarın kar yağması muhtemel.", en: "It is likely to snow tomorrow." },
      { tr: "Muhtemelen geç kalacak.", en: "He is likely to be late." },
      { tr: "Fiyatların düşmesi pek olası değil.", en: "Prices are not likely to fall." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "be about to",
    tr: "tam ... mak üzere",
    note: "Çok yakın gelecek için; genelde araya giren bir olayla birlikte 'when' ile gelir.",
    examples: [
      { en: "I was about to call you.", tr: "Tam seni arayacaktım." },
      { en: "The film is about to start.", tr: "Film başlamak üzere." },
      { en: "We were about to leave when he arrived.", tr: "Tam çıkacakken o geldi." }
    ],
    practice: [
      { tr: "Tam çıkmak üzereydim.", en: "I was about to leave." },
      { tr: "Tren kalkmak üzere.", en: "The train is about to depart." },
      { tr: "Tam uyuyacakken telefon çaldı.", en: "The phone rang when I was about to sleep." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "had better",
    tr: "-sen iyi olur",
    note: "Uyarı tonu taşır, tavsiyeden daha serttir. Arkasından yalın fiil gelir, 'to' almaz.",
    examples: [
      { en: "You'd better leave now.", tr: "Şimdi çıksan iyi olur." },
      { en: "We'd better not be late.", tr: "Geç kalmasak iyi olur." },
      { en: "You'd better tell her the truth.", tr: "Ona doğruyu söylesen iyi edersin." }
    ],
    practice: [
      { tr: "Acele etsek iyi olur.", en: "We had better hurry." },
      { tr: "Doktora gitsen iyi edersin.", en: "You had better see a doctor." },
      { tr: "Bunu ona söylemesek iyi olur.", en: "We had better not tell him this." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "might as well",
    tr: "bari, madem öyle ... yapalım",
    note: "Daha iyi bir seçenek olmadığı için bir şeyi yapmayı önerir; arkasından yalın fiil gelir.",
    examples: [
      { en: "We're here early, we might as well wait.", tr: "Erken geldik, bari bekleyelim." },
      { en: "You might as well tell him.", tr: "Madem öyle, söyle gitsin." },
      { en: "I might as well walk.", tr: "Bari yürüyeyim." }
    ],
    practice: [
      { tr: "Madem buradayız, bari içeri girelim.", en: "Since we're here, we might as well go in." },
      { tr: "Bari şimdi bitirelim.", en: "We might as well finish it now." },
      { tr: "Madem öyle, bari ben gideyim.", en: "I might as well go then." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "be bound to",
    tr: "kaçınılmaz olarak olacak",
    note: "Güçlü bir kesinlik bildirir; 'likely to'dan daha emindir.",
    examples: [
      { en: "He's bound to find out.", tr: "Er ya da geç öğrenecek." },
      { en: "Mistakes are bound to happen.", tr: "Hata olması kaçınılmaz." },
      { en: "They're bound to be late.", tr: "Kesin geç kalacaklar." }
    ],
    practice: [
      { tr: "Bu kadar acele edersen hata yapman kaçınılmaz.", en: "You are bound to make a mistake if you rush." },
      { tr: "Kesin öğrenecekler.", en: "They are bound to find out." },
      { tr: "Böyle giderse kaybetmemiz kaçınılmaz.", en: "We are bound to lose if it goes on like this." }
    ]
  },
  {
    group: "Kalıp yapılar",
    chunk: "be into",
    tr: "ilgi duymak, meraklısı olmak",
    note: "Samimi konuşma dilidir; arkasından isim ya da -ing gelir.",
    examples: [
      { en: "He's really into photography.", tr: "Fotoğrafçılığa gerçekten meraklı." },
      { en: "I'm not into horror films.", tr: "Korku filmlerinden hoşlanmam." },
      { en: "She's into running these days.", tr: "Bu aralar koşuya merak sardı." }
    ],
    practice: [
      { tr: "Kardeşim basketbola meraklı.", en: "My brother is into basketball." },
      { tr: "Bu tür müzikten hoşlanmıyorum.", en: "I'm not into this kind of music." },
      { tr: "Son zamanlarda yemek yapmaya merak sardı.", en: "She is into cooking lately." }
    ]
  }
];
