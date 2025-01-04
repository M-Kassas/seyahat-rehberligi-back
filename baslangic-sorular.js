const soruService = require("./services/soruService");

let x = [
  {
    "soru": "Geçilmekte olan araç sürücüsü aşağıdakilerden hangisini yapmalıdır?",
    "a": "Hızını arttırmalıdır.",
    "b": "Bulunduğu şeridi izlemelidir.",
    "c": "Önündeki aracı geçmeye çalışmalıdır.",
    "d": "Dönüş lambalarıyla geç işareti vermelidir.",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki trafik tanzim işaretine  göre hangi numaralı araçlar geçme yasağına uymamıştır?",
    "a": "Yalnız 3",
    "b": "1 ve 2",
    "c": "2 ve 3",
    "d": "2, 3 ve 4",
    "dogruCevap": "A",
    "link": "genel1",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aksine bir durum yoksa, otoyollarda yolcu sepetsiz iki tekerlekli motosikletlerin azami hız sınırı saatte kaç kilometredir?",
    "a": "Hoşgörülü olması",
    "b": "Bencil davranması",
    "c": "Aşırı stres yapması",
    "d": "Sürekli kornaya basması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aksine bir durum yoksa, otoyollarda yolcu sepetsiz iki tekerlekli motosikletlerin azami hız sınırı saatte kaç kilometredir?",
    "a": 70,
    "b": 80,
    "c": 90,
    "d": 100,
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisinin her periyodik bakımda değiştirilmesi gerekir?",
    "a": "Polen filtresinin",
    "b": "Fren hidroliğinin",
    "c": "Araç lastiklerinin",
    "d": "Soğutma suyunun",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Geceleri araç kullanırken aydınlatmanın yeterli olduğu yerlerde araç ışıklarından hangisi kullanılmalıdır?",
    "a": "Sis ışıkları",
    "b": "Acil uyarı ışıkları",
    "c": "Uzağı gösteren ışıklar",
    "d": "Yakını gösteren ışıklar",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi trafiğin düzenlenmesinde en yüksek önceliğe sahiptir?",
    "a": "Trafik ışıkları",
    "b": "Trafik görevlisi",
    "c": "Yer işaretleri",
    "d": "Trafik levhaları",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi çıkıklarda yapılan ilk yardım uygulamasıdır?",
    "a": "Çıkan bölge üzerine masaj yapmak",
    "b": "Çıkan bölge üzerine sıcak uygulama yapmak",
    "c": "Çıkan bölge ile kalp arasına turnike uygulamak",
    "d": "Çıkan bölgenin hareketsizliğini sağlayarak, sevk etmek",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "- Ölüm korkusu ve yoğun sıkıntı hissedilir.\n\n- Ağrı şiddetli ve uzun sürelidir, dinlenmekle geçmez.\n\n- Ağrı hissi; sıklıkla kravat bölgesinde görülür, omuzlara, boyuna, çeneye ve sol kola doğru yayılır.\n\nBu belirtiler, acil bakım gerektiren hastalıklardan hangisiyle ilgilidir?",
    "a": "Bayılma",
    "b": "Kalp krizi",
    "c": "Sara krizi",
    "d": "Havale",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Bayılan kazazedeye aşağıdaki ilk yardım uygulamalarından hangisi yapılır?",
    "a": "Duyu organları uyarılır.",
    "b": "Vücut sıcaklığı düşürülür.",
    "c": "Bekerli, soğuk içecek verilir.",
    "d": "Hastahaneye götürülür.",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Kara yolunda, ticari olarak tescil edilmiş bir motorlu taşıtı süren kişiye ne ad verilir?",
    "a": "Sürücü",
    "b": "İşleten",
    "c": "Şoför",
    "d": "Araç sahibi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki kara yolu bölümünde hangi numaralı taşıtın ok yönündeki hareketi yasaktır?",
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "dogruCevap": "B",
    "link": "genel13",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerin hangisinde kanama olduğunda, kasık kıvrımının iç kısmına basınç uygulanır?",
    "a": "Kol",
    "b": "Bacak",
    "c": "Göğüs",
    "d": "Boyun",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Hangisi alternatörün üretmiş olduğu elektriğin voltajını ve şiddetini kontrol altıda tutan şarj sistemi parçasıdır?",
    "a": "Karbüratör",
    "b": "Regülâtör",
    "c": "Marş motoru",
    "d": "Sigorta",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Hangisi trafik kaza oranını etkileyen etmenlerden biri değildir?",
    "a": "Aracın yük durumu",
    "b": "Kural ihlalleri",
    "c": "Araç bakımları",
    "d": "Aracın beygir gücü",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Motorun çalışma sıcaklığına çok geç ulaşması, aşağıdakilerden hangisinin arızalı olduğunu gösterir?",
    "a": "Radyatör",
    "b": "Termostat",
    "c": "Yağ filtresi",
    "d": "Devridaim pompası",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi araçlarda kirli yakıt kullanılmasının bir sonucudur?",
    "a": "Motor rölanti devrinin yüksek olması",
    "b": "Yağlama sisteminin görev yapamaması",
    "c": "Motorun düzensiz ve tekleyerek çalışması",
    "d": "Marş yapıldığında, marş motorunun yavaş dönmesi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Görseldeki otoyol bilgi levhası hangisini bildirir?",
    "a": "Cep telefonu sinyalinin güçlü olduğunu",
    "b": "Radyo yayınlarının yol boyunca dinlenebileceğini",
    "c": "Ücretli otoyola girileceğini",
    "d": "Yol boyunca elektronik denetleme sisteminin olduğunu",
    "dogruCevap": "C",
    "link": "genel19",
    "kategori": "ehliyet"
  },
  {
    "soru": "Lastiklerin hava basıncı dengesizse frenleme anında aşağıdakilerden hangisi olur?",
    "a": "Araç bir tarafa çeker.",
    "b": "Fren pedalı sertleşir.",
    "c": "Frenlerden ses gelir.",
    "d": "Fren hidroliği azalır.",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Kazazedenin dolaşımı değerlendirilirken;\n\nI. Bebeklerde kol atardamarından,\n\nII. Çocuk ve yetişkinlerde şah damarından nabız alınır.\n\nVerilenler için aşağıdakilerden hangisi söylenebilir?",
    "a": "I. doğru, II. yanlış",
    "b": "I. yanlış, II. doğru",
    "c": "Her ikisi de doğru",
    "d": "Her ikisi de yanlış",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I. Kaygıları artar.\n\nII. Kalp atışları hızlanır.\n\nIII. Saldırgan tutum sergilemezler.\n\nTrafikte yaşanan stresin, bireyler üzerindeki etkileriyle ilgili numaralanmış ifadeler doğru (D), yanlış (Y) olarak değerlendirildiğinde sıralama hangisi olur?",
    "a": "D - D - Y",
    "b": "D - Y - D",
    "c": "D - D - D",
    "d": "Y - D - D",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Kendinden çok başkalarını düşünen, başkalarının iyiliği için fedakârlık yapan ve özgeci şeklinde tanımlanır. Yardım etme davranışının bir alt kategorisidir.\n\nYukarıdaki açıklama hangi davranış özelliğine aittir?",
    "a": "Bencillik",
    "b": "Saldırganlık",
    "c": "Diğergamlık",
    "d": "Sorumsuzluk",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Hangisi, servis veya tamir atölyeleri tarafından yapılmalıdır?",
    "a": "Silecek lastiklerinin kontrolü",
    "b": "Antifiriz yoğunluk derecesi kontrolü",
    "c": "Lastik hava basınç kontrolü",
    "d": "Motor yağı seviyesinin kontrolü",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "- Park probleminin artması\n- Çevrenin bozulması ve kirlilik\n- Yakıt tüketiminin artması ve israf\n- Aracın yıpranması ve ömrünün azalması\n- Trafiğin yoğunlaşması ve trafik kargaşası\n\nVerilen sorunlara aşağıdakilerden hangisi daha fazla yol açar?",
    "a": "Trafiğin yoğun olmadığı saatlerde trafiğe çıkılması",
    "b": "Özel araçların zaruri olmayan durumlarda kullanılması",
    "c": "Aynı istikamete giden kişilerle aracın müşterek kullanılması",
    "d": "Mümkün olduğunca toplu taşıma araçlarının tercih edilmesi",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi, marşa basılıp motor çalıştığında sönmesi gerekir?",
    "a": "El fren lambasının",
    "b": "Park lambasının",
    "c": "Sinyal lambasının",
    "d": "Yağ lambasının",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi, ülkemizde trafik kazalarında can ve mal kaybının, gelişmiş ülkelerden daha fazla olmasının nedenlerinden değildir?",
    "a": "Trafik kurallarına uyulmaması",
    "b": "Ülkemizde iklim şartlarının daha farklı olması",
    "c": "Dikkatsiz ve sorumsuz araç kullanılması",
    "d": "İlk yardım eğitiminin yeterince dikkate alınmaması",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Görseldeki gibi bir karşılaşmada, 2 numaralı araç sürücüsü ne yapmalıdır?",
    "a": "Geçiş önceliğini kendisi kullanmalı",
    "b": "Hızlanıp köprüye 1 numaralı araçtan önce girmeli",
    "c": "Geçiş önceliğini 1 numaralı araca vermeli",
    "d": "1 numaralı aracın daralan yol bölümüne girmemesi için selektör yaparak uyarmalı",
    "dogruCevap": "C",
    "link": "genel28",
    "kategori": "ehliyet"
  },
  {
    "soru": "Seyir hâlindeyken araçtan yanık kablo kokusu alınırsa aşağıdakilerden hangisi yapılır?",
    "a": "Yakıt seviyesi kontrol edilir.",
    "b": "Önemsenmez, devam edilir.",
    "c": "Lastiklerin hava basıncı kontrol edilir.",
    "d": "Durulur, kontak kapatılır ve akü bağlantısı çıkartılır.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki trafik işaretinin anlamı nedir?",
    "a": "Dur",
    "b": "Durak",
    "c": "Devam et",
    "d": "Dikkat",
    "dogruCevap": "B",
    "link": "genel30",
    "kategori": "ehliyet"
  },
  {
    "soru": "Yağ seviyesi normalin çok altında iken motorun çalışması devam ettirilirse aşağıdakilerden hangisinin olması beklenir?",
    "a": "Motor gücünün artması",
    "b": "Motorun çabuk soğuması",
    "c": "Motorun aşırı ısınarak zarar görmesi",
    "d": "Motorun normal çalışmasını sürdürmesi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Hangisini yapmak çevrenin temiz kalmasına katkı sağlar?",
    "a": "Gereksiz yere korna çalmak",
    "b": "Seyahat esnasında, yiyecek atıklarını otoyol kenarlarına bırakmak",
    "c": "Egzoz emisyon ölçümünü geciktirmek",
    "d": "Araç bakımlarını zamanında yaptırmak",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Turnike uygulamasında ilk bir saat içinde, kaç dakikada bir boğucu sargı gevşetilmelidir?",
    "a": "1-2 dakika",
    "b": "5-10 dakika",
    "c": "15-20 dakika",
    "d": "30-40 dakika",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki kontrolsüz kavşakta 1 numaralı aracın sürücüsü ne yapmalıdır?",
    "a": "Hızlanıp kavşağa girmeli",
    "b": "Geçiş hakkını kendi kullanmalı",
    "c": "2 numaralı aracın geçmesini beklemeli",
    "d": "İkazda bulunup 2 numaralı aracı durdurmalı",
    "dogruCevap": "C",
    "link": "genel34",
    "kategori": "ehliyet"
  },
  {
    "soru": "Araçların durma ve duraklama halleri dışında, genelde uzun süreli olarak bekletilmek üzere bırakılmasına ne ad verilir?",
    "a": "Park etme",
    "b": "İşaretleme",
    "c": "Trafik kazası",
    "d": "Trafikten men",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi frenleme esnasında fren pedalının titremesine neden olur?",
    "a": "Balataların ıslanması",
    "b": "Balataların yeni olması",
    "c": "Fren ayarının düşük olması",
    "d": "Disk veya kampana yüzeylerinin bozuk olması",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekilde verilen pozisyonun adı nedir?",
    "a": "Alt-çene pozisyonu",
    "b": "Koma pozisyonu",
    "c": "Şok pozisyonu",
    "d": "Baş-çene pozisyonu",
    "dogruCevap": "D",
    "link": "genel37",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi karterdeki yağı basınçlı olarak motor parçalarına gönderir?",
    "a": "Radyatör",
    "b": "Distribütör",
    "c": "Su pompası",
    "d": "Yağ pompası",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I. Geçme yasağı olan yerlerden geçme\nII. Kavşaklarda geçiş önceliğine uymama\nIII. Doğrultu değiştirme manevralarını yanlış yapma\nIV. Kırmızı ışıklı trafik işaretinde veya yetkili memurun dur işaretinde geçme\n\nVerilenlerden hangileri trafik kazalarında sürücüler için asli kusurlu sayılacak hâllerdendir?",
    "a": "I ve II.",
    "b": "I, III ve IV.",
    "c": "II, III ve IV.",
    "d": "I, II, III ve IV.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi yakıt sisteminde yapılan ayarlardandır?",
    "a": "Rölanti ayarı",
    "b": "Debriyaj ayarı",
    "c": "Platin ayarı",
    "d": "Buji ayarı",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Dizel motorlu aracın gösterge panelinde bulunan şekildeki uyarı lambasının yanıyor olması neyi bildirir?",
    "a": "Fren hidrolik seviyesinin çok düştüğünü",
    "b": "Arka sis lambasının yanmakta olduğunu",
    "c": "Ön ısıtma bujilerinin çalışmakta olduğunu",
    "d": "Egzozdan çevreyi tehdit edecek boyutta gaz yayıldığını",
    "dogruCevap": "C",
    "link": "genel41",
    "kategori": "ehliyet"
  },
  {
    "soru": "Kamyon, kamyonet ve römorklarda yükle birlikte yolcu taşınırken aşağıdakilerden hangisinin yapılması yasaktır?",
    "a": "Yolcuların kasa içinde ayrılmış bir yerde oturtulması",
    "b": "Kasanın yan ve arka kapaklarının kapatılması",
    "c": "Yolcuların, yüklerin üzerine oturtulması",
    "d": "Yüklerin bağlanması",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Yapılan en son değişikliklerle birlikte 1 yıl içerisinde kırmızı ışık ihlali yapan sürücünün, sürücü belgesi geçici süreyle geri alınmaktadır.\n\n1 yıl içerisinde 3-6 ve 9 defa kırmızı ışık ihlali yapan sürücülerin, sürücü belgeleri sırasıyla kaçar gün ini geri alınır?",
    "a": "10-15-20",
    "b": "15-20-25",
    "c": "30-40-50",
    "d": "30-45-60",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi, solunum yolu tıkanıklığı olan bir kazazedenin tam tıkanma yaşadığını gösteren belirtilerden biri değildir?",
    "a": "Konuşabilmesi",
    "b": "Renginin morarması",
    "c": "Nefes almasının durması",
    "d": "Acı çekip ellerini boynuna götürmesi",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi silindir kapağının görevlerindendir?",
    "a": "Krank miline yataklık etmek",
    "b": "Motordaki yağı soğutmak",
    "c": "Supaplara yataklık etmek",
    "d": "Akslara yataklık etmek",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I. LPG\n\nII. Benzin\n\nIII. Motorin\n\nİçten yanmalı motorlarda yukarıdaki yakıtlardan hangileri kullanılır?",
    "a": "Yalnız I.",
    "b": "I ve II.",
    "c": "II ve III.",
    "d": "I, II ve III.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki kara yolu üzerine çizilmiş yatay işaretlemelere göre 1 numaralı araç sürücüsü nasıl davranmalıdır?",
    "a": "En sol şeride geçmeli",
    "b": "Yavaşlamalı, sağ şeride girmeli",
    "c": "Hızlanmalı, bulunduğu şeritte devam etmeli",
    "d": "2 numaralı aracı uyararak yavaşlamasını sağlamalı",
    "dogruCevap": "B",
    "link": "genel47",
    "kategori": "ehliyet"
  },
  {
    "soru": "Otomobillerde, mekanizmayı oluşturan motor, tekerlek, şasi vb. bölümlerin dışında kalan, görünen dış bölüme ne ad verilir?",
    "a": "Kavrama",
    "b": "Karoseri",
    "c": "Manifold",
    "d": "Süspansiyon",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi trafik kazalarında asli kusur sayılır?",
    "a": "Tek yönlü yola ters yönden girmek",
    "b": "Taşıma sınırı üstünde yolcu taşımak",
    "c": "Sürücü belgesini yanında bulundurmamak",
    "d": "Araçta bulunması zorunlu gereçleri bulundurmamak",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Seyir hâlindeyken araçtan “sürekli yakıt kokusu” alınması durumunda aşağıdakilerden hangisi yapılır?",
    "a": "Açık camlar kapatılır.",
    "b": "Önemsenmez yola devam edilir.",
    "c": "Lastiklerin hava basıncı kontrol edilir.",
    "d": "Trafik kurallarına uyarak durulur ve kontak kapatılır.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi sürücülerden beklenen olumlu davranış özelliklerindendir?",
    "a": "Yolcuların isteğine göre araç kullanmak",
    "b": "Karşılaştığı trafik kazasında yaralılara ilk yardım uygulamak",
    "c": "Her durumda geçiş üstünlüğüne sahip olduğunu düşünmek",
    "d": "Emniyet görevlisinin olmadığı yerlerde kendi koyduğu kuralları uygulamak",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Boyun, sırt ve bel omurları kırıklarında, yaralının uygun şekilde tespiti yapılmadan nakli  gerçekleştirilirse aşağıdakilerden hangisinin olması beklenir?",
    "a": "Vücudun bir bölgesinde felç oluşması",
    "b": "Nabız atışlarının sürekli hızlanması",
    "c": "Bulantı ve kusmanın olması",
    "d": "Vücut sıcaklığının artması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Motorlu bisiklet, motosiklet ve sürücüleri ile ilgili olarak aşağıda verilenlerden hangisinin yapılması yasaktır?",
    "a": "Gidiş yönüne göre yolun en sağından seyredilmesi",
    "b": "İkiden fazlasının taşıt yolunun bir şeridinde yan yana sürülmesi",
    "c": "Tehlikeli madde taşıyan araçların geçilmesi",
    "d": "Geçme yaparken sinyal verilmesi",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Geceleri kara yolunda seyrederken, resimde görüldüğü gibi karşı yönden gelen araç sürücülerinin ve kara yolunu kullanan diğer kişilerin gözlerini kamaştırmamak için uzağı gösteren ışıkların yerine hangisi yakılmalıdır?",
    "a": "Sis ışıkları",
    "b": "Park ışıkları",
    "c": "Acil uyarı ışıkları",
    "d": "Yakını gösteren ışıklar",
    "dogruCevap": "D",
    "link": "genel54",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekilde soru işareti (?) ile gösterilen motor soğutma sistemi parçasının adı nedir?",
    "a": "Kayış",
    "b": "Radyatör",
    "c": "Soğutma fanı",
    "d": "Alternatör",
    "dogruCevap": "C",
    "link": "genel55",
    "kategori": "ehliyet"
  },
  {
    "soru": "Motor soğutma suyu sıcaklığını sürücüye bildiren gösterge aşağıdakilerden hangisidir?",
    "a": "Şarj göstergesi",
    "b": "Yakıt göstergesi",
    "c": "Hararet göstergesi",
    "d": "Fren hidroliği göstergesi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Araçta yakıt tasarrufu sağlamak için aşağıdakilerden hangisi yapılır?",
    "a": "Motor daima yüksek devirde çalıştırılır.",
    "b": "Lastiklerin hava basıncının normal değerde olmasına dikkat edilir.",
    "c": "Trafiğin yoğun olduğu yollar seçilir.",
    "d": "Aracın yükü ve ağırlığı artırılır.",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Motor çalışır durumda iken aracın gösterge panelinde akü şarj ikaz ışığı yanıyorsa muhtemel arıza aşağıdakilerden hangisinde olabilir?",
    "a": "Alternatörde",
    "b": "Marş motorunda",
    "c": "Far ampullerinde",
    "d": "Fan motorunda",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki trafik işaretinin anlamı nedir?",
    "a": "Sola dönülmez",
    "b": "Sola zorunlu yön",
    "c": "Sağa zorunlu yön",
    "d": "Sağa dönülmez",
    "dogruCevap": "A",
    "link": "genel59",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi araçtaki soğutma sisteminin görevidir?",
    "a": "Motoru çalışma sıcaklığında tutmak",
    "b": "Diferansiyeli çalışma sıcaklığında tutmak",
    "c": "Vites kutusunu çalışma sıcaklığında tutmak",
    "d": "Alternatörü çalışma sıcaklığında tutmak",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Sağlıklı yetişkin bir kişinin dakikadaki solunum sayısı kaçtır?",
    "a": "10 - 18",
    "b": "12 - 20",
    "c": "14 - 22",
    "d": "16 – 24",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Trafik zabıtası veya yetkililerce Kanunda ve yönetmelikte belirtilen hâllerde araçla ilgili belgelerin alınması ve aracın belirli bir yere çekilerek trafikten alıkonulmasına ne denir?",
    "a": "Trafik suçu",
    "b": "Trafik terörü",
    "c": "Trafik kusuru",
    "d": "Trafikten men",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Trafik uygun olsa bile şekildeki kavşakta hangi numaralı araçların ok yönündeki hareketi kesinlikle yasaktır?",
    "a": "Yalnız 1",
    "b": "Yalnız 3",
    "c": "1 ve 3",
    "d": "2 ve 4",
    "dogruCevap": "D",
    "link": "genel63",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi trafik psikolojisinin hedeflerindendir?",
    "a": "Stresli olarak araç kullanmayı teşvik etmek",
    "b": "Kurallara uymayan sürücüleri cezalandırmak",
    "c": "Saygısız ve tedbirsiz davranışlar kazandırmak",
    "d": "Toplumda insan faktöründen kaynaklanan trafik kazalarının azalmasını sağlamak",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekle göre sürücünün aşağıdakilerden hangisini yapması yanlıştır?",
    "a": "Yayanın geçmesini beklemesi",
    "b": "Yaya geçidine uygun mesafede durması",
    "c": "Yayayı ikaz ederek beklemesini istemesi",
    "d": "Yaya geçidine yaklaşırken hızını azaltması",
    "dogruCevap": "C",
    "link": "genel65",
    "kategori": "ehliyet"
  },
  {
    "soru": "İlk yardımın ABC'si olarak kabul edilen uygulamalardan \"B\" neyi ifade etmektedir?",
    "a": "Vücut ısısının düşürülmesini",
    "b": "Solunumun değerlendirilmesini",
    "c": "Kan dolaşımının değerlendirilmesini",
    "d": "Hava yolu açıklığının değerlendirilmesini",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Resimde görülen koruma başlığını, aşağıda verilenlerden hangilerinin kullanması zorunludur?",
    "a": "I ve II",
    "b": "III ve IV",
    "c": "I, II ve III",
    "d": "I, II, III ve IV",
    "dogruCevap": "D",
    "link": "genel67",
    "kategori": "ehliyet"
  },
  {
    "soru": "I- Frenler\nII- Lastikler\nIII- Yakıt seviyesi\n\nAracı kullanmaya başlamadan önce, yukarıda verilenlerden hangilerinin durumu iyi olmalıdır?",
    "a": "Yalnız I",
    "b": "I ve II",
    "c": "II ve III",
    "d": "I, II ve III",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şok pozisyonunda hastanın ayaklarının yukarıya kaldırılmasının amacı nedir?",
    "a": "Sindirime yardımcı olmak",
    "b": "Vücut sıcaklığını düşürmek",
    "c": "Beyne yeterince kan gitmesini sağlamak",
    "d": "Solunumun düzenli olmasını sağlamak",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Çekilen aracın freni bozuksa, çeken ve çekilen araçlar arasındaki bağlantı uzunluğu en fazla kaç metre olmalıdır?",
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Trafik kazası geçiren kişiler:\n\nI. Canlarına bir zarar gelmese bile psikolojik olarak zarar görürler. \n\nII. Kişilerin bu bozuk psikolojileri ailelerin eve topluma olumsuz yansır.\n\nVerilenler için aşağıdakilerden hangisi söylenebilir?",
    "a": "I. doğru, II. yanlış",
    "b": "I. yanlış, II. doğru",
    "c": "Her ikisi de doğru",
    "d": "Her ikisi de yanlış",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I- Araçlarını ve araçlarının etrafını kontrol etmeleri\n\nII- Işıkla veya kolla, gerekli hâllerde her ikisi ile çıkış işareti vermeleri\n\nIII- Görüş alanları dışında kalan yerler varsa uyarılmaları için bir gözcü bulundurmaları\n\nDuraklanan ve park edilen yerden çıkılırken sürücülerin yukarıdakilerden hangilerini yapmaları zorunludur?",
    "a": "I - II",
    "b": "I - III",
    "c": "II - III",
    "d": "I - II - III",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Trafik kazası geçiren kişiler:\n\nI. Canlarına bir zarar gelmese bile psikolojik olarak zarar görürler. \n\nII. Kişilerin bu bozuk psikolojileri ailelerin eve topluma olumsuz yansır.\n\nVerilenler için aşağıdakilerden hangisi söylenebilir?",
    "a": "I. doğru, II. yanlış",
    "b": "I. yanlış, II. doğru",
    "c": "Her ikisi de doğru",
    "d": "Her ikisi de yanlış",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I- Araçlarını ve araçlarının etrafını kontrol etmeleri\n\nII- Işıkla veya kolla, gerekli hâllerde her ikisi ile çıkış işareti vermeleri\n\nIII- Görüş alanları dışında kalan yerler varsa uyarılmaları için bir gözcü bulundurmaları\n\nDuraklanan ve park edilen yerden çıkılırken sürücülerin yukarıdakilerden hangilerini yapmaları zorunludur?",
    "a": "I - II",
    "b": "I - III",
    "c": "II - III",
    "d": "I - II - III",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi diferansiyelin görevlerindendir?",
    "a": "Motora ilk hareketi vermek",
    "b": "Motorun durmasını sağlamak",
    "c": "Motorun rölantide çalışmasını sağlamak",
    "d": "Vites kutusundan gelen hareketi akslara iletmek",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi sürücüden kaynaklanan trafik kazası sebebidir?",
    "a": "Alkollü olarak araç kullanması",
    "b": "Yol yapımında hata olması",
    "c": "Aracın bakımsız olması",
    "d": "Havanın yağışlı olması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Sinyal verildiğinde, gösterge panelindeki sinyal lambası ikaz ışığı çok sık yanıp sönüyorsa sebebi aşağıdakilerden hangisi olabilir?",
    "a": "Geri vites lambalarından biri yanmıyordur.",
    "b": "Sinyal lambalarından biri yanmıyordur.",
    "c": "Fren lambalarından biri yanmıyordur.",
    "d": "Far lambalarından biri yanmıyordur.",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Kemikler, eklemler ve kaslar vücudumuzun hangi sistemini oluşturan yapılardandır?",
    "a": "Hareket sistemi",
    "b": "Sindirim sistemi",
    "c": "Dolaşım sistemi",
    "d": "Solunum sistemi",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Trafik ortamında bazen hak kendinizden yana iken bile bu hakkınızı diğer sürücüye vermek size bir şey kaybettirmeyeceği gibi daha huzurlu bir trafik ortamı sağlamaya katkıda bulunacaktır.\n\nYukarıdaki açıklama trafikteki temel değerlerden hangisine aittir?",
    "a": "Sabırsızlık",
    "b": "Saldırganlık",
    "c": "Tahammülsüzlük",
    "d": "Feragat ve fedakârlık",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Haritada yeri gösterilen illerden hangisi daha güneydedir?",
    "a": "Uşak",
    "b": "Sivas",
    "c": "Trabzon",
    "d": "Konya",
    "dogruCevap": "D",
    "link": "genel80",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aracın hareketi için gerekli gücü sağlayan aşağıdakilerden hangisidir?",
    "a": "Fren",
    "b": "Egzoz",
    "c": "Motor",
    "d": "Diferansiyel",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Kontrolsüz demir yolu geçidine yaklaşan sürücülerin aşağıdakilerden hangisini yapması doğrudur?",
    "a": "Hızlarını artırarak geçmesi",
    "b": "Uygun mesafede mutlaka durması",
    "c": "Demir yolu çok hatlı ise yavaş geçmesi",
    "d": "Demir yolu tek hatlı ise hızlı bir şekilde geçmesi",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Motor çalıştığı sürece aracın elektrik ihtiyacını karşılayan sistem aşağıdakilerden hangisidir?",
    "a": "Marş sistemi",
    "b": "Şarj sistemi",
    "c": "Yakıt sistemi",
    "d": "Soğutma sistemi",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I. Öz eleştiri yapabilmek\nII. Risk almaya meyilli olmak\nIII. Trafikte diğer araç sürücülerini taciz etmek\nIV. Hata yapan sürücüleri uygun bir dille uyarmak\n\nYukarıdakilerden hangileri güvenli sürüşü olumsuz yönde etkileyen kişilik özelliklerindendir?",
    "a": "I ve IV.",
    "b": "II ve III.",
    "c": "I, II ve III.",
    "d": "II, III ve IV.",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Yaya yolu bulunmayan kara yollarında, yayaların aşağıdakilerden hangisinde yürümesi zorunludur?",
    "a": "Trafiğin yoğun olmadığı şeritte",
    "b": "Gidiş yönüne göre sağ bankette",
    "c": "Gidiş yönüne göre sol bankette",
    "d": "Taşıt yolunun en sağındaki şeritte",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Şekildeki trafik işareti sürücüye neyi bildirir?",
    "a": "Yolda çalışma olduğunu",
    "b": "Yolda gizli buzlanma olabileceğini",
    "c": "Kaza sebebiyle yolun trafiğe kapatıldığını",
    "d": "Düşük banketli yol kesimine yaklaşıldığını",
    "dogruCevap": "A",
    "link": "genel86",
    "kategori": "ehliyet"
  },
  {
    "soru": "Motor yağ seviyesinin tavsiye edilenden az veya çok olması aşağıdakilerden hangisine neden olur?",
    "a": "El freninin daha iyi tutmasına",
    "b": "Motor parçalarının zarar görmesine",
    "c": "Egzoz susturucusunun delinmesine",
    "d": "Lastik hava basınçlarının düşmesine",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Marş yapıldığında marş motoru çalışmayıp, korna da çalmıyorsa muhtemel arıza aşağıdakilerin hangisinde olabilir?",
    "a": "Aküde",
    "b": "Bujilerde",
    "c": "Jikle devresinde",
    "d": "Rölanti devresinde",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Fren hidroliğinin seviyesi hangi bakımda kontrol edilir?",
    "a": "Haftalık",
    "b": "Günlük",
    "c": "Aylık",
    "d": "Altı aylık",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "I- El freninin çekilmesi\nII- Kontağın kapatılması\nIII- LPG'li ise tüpün vanasının kapatılması\n\nVerilenlerden hangileri, kazaya uğrayan bir araçta alınması gereken güvenlik önlemlerindendir?",
    "a": "Yalnız I",
    "b": "I ve II",
    "c": "II ve III",
    "d": "I, II ve III",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ehliyet"
  },
  {
    "soru": "Aşağıdakilerden hangisi çıkıklarda yapılması gereken ilk yardım uygulamalarındandır?",
    "a": "Çıkığın yerine oturtulmaya çalışılması",
    "b": "Eklemin düzeltildikten sonra tespit edilmesi",
    "c": "Çıkık olan bölgeye kuvvetli masaj yapılması",
    "d": "Bölgenin nabzının, deri renginin ve ısısının kontrol edilmesi",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi delici karın yaralanması olan kazazedeye yapılması gereken ilk yardım uygulamalarından biri değildir?",
    "a": "Bilinç kontrolünün yapılması",
    "b": "Yaşam bulgularının sık sık izlenmesi",
    "c": "Dışarı çıkan organlarının içeri sokulmaya çalışılması",
    "d": "Bilinci yerinde ise sırtüstü pozisyonda bacakları bükülmüş olarak yatırılması",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi dış kanamalarda yapılan hatalı ilk yardım uygulamalarındandır?",
    "a": "Kanayan bölgeyi aşağıya indirmek",
    "b": "Kanayan yer üzerine temiz bir bezle bastırmak",
    "c": "Uzuv kopması varsa boğucu sargı (turnike) uygulamak",
    "d": "Kanayan yere en yakın basınç noktasına baskı uygulamak",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdaki durumların hangisinde kazazedeye Heimlich Manevrası uygulanır?",
    "a": "Kan şekeri düştüğünde",
    "b": "Tam tıkanma yaşadığında",
    "c": "Kanaması olduğunda",
    "d": "Kalbi durduğunda",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi ilk yardımcıda bulunması gereken özelliklerdendir?",
    "a": "Telaşlı ve tedirgin olması",
    "b": "İletişim becerilerinin zayıf olması",
    "c": "Önce çevrenin güvenliğini sağlaması",
    "d": "İnsan vücudu ile ilgili temel bilgilere sahip olması",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Yetişkin bir kazazedenin solunum yapıp yapmadığı bak-dinle-hisset yöntemiyle kaç saniye süre ile kontrol edilir?",
    "a": 10,
    "b": 20,
    "c": 30,
    "d": 40,
    "dogruCevap": "A",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Kazazedeye sözlü uyaranla ya da hafifçe omzuna dokunarak “iyi misiniz?” diye sorularak - - - - değerlendirmesi yapılır. Yukarıdaki açıklamada boş bırakılan yere hangisi yazılmalıdır?",
    "a": "dolaşım",
    "b": "bilinç durumu",
    "c": "solunum",
    "d": "hava yolu açıklığı",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "- Bir el alına yerleştirilir.\n\n- Diğer elin iki parmağı çene kemiğinin üzerine yerleştirilir.\n\n- Alından bastırılıp çeneden kaldırılarak baş geriye doğru itilir.\n\nUygulama basamakları verilen ve kazazedenin hava yolunu açmak için kullanılan pozisyon aşağıdakilerden hangisidir?",
    "a": "Şok pozisyonu",
    "b": "Yarı oturuş pozisyonu",
    "c": "Baş geri-çene yukarı pozisyonu",
    "d": "Yarı yüzükoyun-yan pozisyon",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Beyne giden kan akışının azalması sonucu oluşan kısa süreli, yüzeysel ve geçici bilinç kaybına ne ad verilir?",
    "a": "Koma",
    "b": "Bayılma",
    "c": "Sara krizi",
    "d": "Ateşli havale",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Kaza sonrası solunum durması, yangın tehlikesi, patlama gibi tehlikeli durumların olasılığı mevcut ise kazazedenin omuriliğine zarar vermeden araçtan çıkarılmasında kullanılan teknik aşağıdakilerden hangisidir?",
    "a": "Rentek manevrası",
    "b": "İtfaiyeci yöntemi ile omuzda taşıma",
    "c": "Ayak bileklerinden sürükleme yöntemi",
    "d": "Koltuk altından tutarak sürükleme yöntemi",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi, 112'nin aranması sırasında dikkat edilmesi gereken hususlardan biri değildir?",
    "a": "Kesin yer ve adres bilgilerini vermekten kaçınılması",
    "b": "Kimin, hangi numaradan aradığının bildirilmes",
    "c": "112 merkezi tarafından sorulan sorulara net bir şekilde cevap verilmesi",
    "d": "Herhangi bir ilk yardım uygulaması yapıldıysa nasıl bir yardım verildiğinin belirtilmesi",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Kanı süzerek gerekli maddelerin vücutta tutulması, zararlı olanların atılması gibi görevleri olan ve vücutta iç dengeyi koruyan sistem, aşağıdakilerden hangisidir?",
    "a": "Sinir sistemi",
    "b": "Hareket sistemi",
    "c": "Boşaltım sistemi",
    "d": "Dolaşım sistemi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Kazazedenin durumu değerlendirilirken yaşam bulgularının var veya yok olması yapılacak müdahaleler için önem taşımaktadır.Buna göre, aşağıdakilerden hangisi kazazedenin yaşam bulguları içerisinde yer alır?",
    "a": "Yaşı",
    "b": "Boyu",
    "c": "Cinsiyeti",
    "d": "Vücut ısısı",
    "dogruCevap": "D",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "-Geçici hafıza kaybı\n-Burundan kan gelmesi\n-Göz bebeklerinde büyüklük farkı \nYukarıdaki belirtiler, hangi bölge yaralanmalarında daha çokgörülür?",
    "a": "Baş",
    "b": "Karın",
    "c": "Göğüs",
    "d": "Omurga",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi şok belirtilerindendir?",
    "a": "Zihinsel aktivitenin artması",
    "b": "Cildin soğuk ve nemli olması",
    "c": "Vücut sıcaklığının hızla yükselmesi",
    "d": "Dilin gevşeyerek geriye doğru toplanması",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Yetişkinlere yapılan dış kalp masajı uygulamasıyla ilgili verilenlerden hangisi doğrudur?",
    "a": "Göğüs kemiğinin alt ve üst ucunun tespit edilerek üst yarısına orta ve yüzük parmağının dik olarak yerleştirilmesi",
    "b": "Basıyı tam uygulayabilmek için kazazedeye uzak mesafede durulması",
    "c": "Göğüs kemiğine bası uygulama ve kaldırmanın ritmik olarak yapılması",
    "d": "Göğüs kemiği 1 cm çökecek şekilde bası Uygulanması",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Resimde görülen pozisyon, aşağıdaki durumların hangisinde uygulanır?",
    "a": "Kalp durması",
    "b": "Bacak kemiği kırılması",
    "c": "Solunum yolu tıkanması",
    "d": "Delici göğüs yaralanması",
    "dogruCevap": "D",
    "link": "ilkyardim107",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi çıkıklarda yapılan ilk yardım uygulamalarındandır?",
    "a": "Kazazedenin hareket ettirilmesi",
    "b": "Çıkığın yerine oturtulmaya çalışılması",
    "c": "Çıkığın alt bölgesindeki deri rengi, ısı ve nabzın kontrol edilmesi",
    "d": "Eklemin düzeltildikten sonra tespit edilmesi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi bilinç kaybının en ileri durumudur?",
    "a": "Şok",
    "b": "Koma",
    "c": "Üşüme",
    "d": "Bayılma",
    "dogruCevap": "B",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Yürüyemeyen ya da bilinci kapalı olan kişiler için kullanılır. Bir ilk yardımcı tarafından uygulanır. İlk yardımcının bir kolu boşta olacağından merdiven ya da bir yerden rahatlıkla destek alınabilir.Verilen bilgi, acil taşıma tekniklerinden hangisiyle ilgilidir?",
    "a": "İtfaiyeci yöntemi",
    "b": "Rentek manevrası",
    "c": "Sürükleme yöntemi",
    "d": "Heimlich manevrası",
    "dogruCevap": "A",
    "link": "",
    "kategori": "ilkyardim"
  },
  {
    "soru": "Aşağıdakilerden hangisi araçlarda gücün kaynağıdır?",
    "a": "Şaft",
    "b": "Motor",
    "c": "Tekerlek",
    "d": "Vites kutusu",
    "dogruCevap": "B",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi buji ile ateşlemeli motorların yakıtıdır?",
    "a": "Benzin",
    "b": "Motorin",
    "c": "Antifriz",
    "d": "Gaz yağı",
    "dogruCevap": "A",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aracın gösterge panelinde bulunan şekildeki gösterge sürücüye neyi bildirir?",
    "a": "Karterdeki yağ miktarını",
    "b": "Depodaki yakıt miktarını",
    "c": "Soğutma suyu sıcaklığını",
    "d": "Radyatördeki su seviyesini",
    "dogruCevap": "C",
    "link": "motor113",
    "kategori": "motor"
  },
  {
    "soru": "Yakıt içerisinde toz, su veya pislik varsa motor nasıl çalışır?",
    "a": "Yüksek devirde",
    "b": "Zengin karışımla",
    "c": "Yüksek performansla",
    "d": "Düzensiz, tekleyerek",
    "dogruCevap": "D",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Kışın aşırı soğuktan dolayı motor soğutma suyu donduğu zaman meydana gelen genleşme kuvveti; silindir bloğu, silindir kapağı ve radyatörü çatlatabilir. Buna göre donmayı önlemek için motor soğutma suyuna aşağıdakilerden hangisinin yeterli miktarda karıştırılması gerekir?",
    "a": "Asit",
    "b": "Antifriz",
    "c": "Saf su",
    "d": "Motor yağı",
    "dogruCevap": "B",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Lastiklerin hava basıncı dengesizse frenleme anında aşağıdakilerden hangisi olur?",
    "a": "Araç bir tarafa çeker.",
    "b": "Fren pedalı sertleşir.",
    "c": "Frenlerden ses gelir",
    "d": "Fren hidroliği azalır.",
    "dogruCevap": "A",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi elektrik devresindeki sigortanın görevidir?",
    "a": "Aküyü şarj etmek",
    "b": "Bujilere giden akımı yükseltmek",
    "c": "Kısa devre olduğunda sistemi korumak",
    "d": "Endüksiyon bobinine giden akımı yükseltmek",
    "dogruCevap": "C",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Seyir hâlindeyken araçtan “sürekli yakıt kokusu” alınması durumunda aşağıdakilerden hangisi yapılır?",
    "a": "Açık camlar kapatılır.",
    "b": "Önemsenmez yola devam edilir.",
    "c": "Lastiklerin hava basıncı kontrol edilir.",
    "d": "Trafik kurallarına uyarak durulur ve kontak kapatılır.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Araçlarda yakıt tasarrufu sağlamak için aşağıdakilerden hangisi yapılmalıdır?",
    "a": "Termostat çıkartılmalı",
    "b": "Eskimiş bujiler değiştirilmeli",
    "c": "Lastiklerin hava basıncı indirilmel",
    "d": "Motor yüksek devirde çalıştırılmalı",
    "dogruCevap": "B",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi aracı istenilen yöne sevk eder?",
    "a": "Marş sistemi",
    "b": "Yağlama sistemi",
    "c": "Direksiyon sistemi",
    "d": "Aydınlatma sistemi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "I. LPG\n\nII. Benzin\n\nIII. Motorin\n\nİçten yanmalı motorlarda yukarıdaki yakıtlardan hangileri kullanılır?",
    "a": "Yalnız I.",
    "b": "I ve II.",
    "c": "II ve III.",
    "d": "I, II ve III.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi aracı kullanmaya başlamadan önce yapılması gereken hazırlıklardan biri değildir?",
    "a": "Klimanın açılması",
    "b": "Koltuğun ayarlanması",
    "c": "Aynaların ayarlanması",
    "d": "Emniyet kemerinin takılması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Motorlu araçlarda motorun yağ seviyesini kontrol etmeye yarayan ve özel işaretleri bulunan parçaya ne ad verilir?",
    "a": "Yağdanlık",
    "b": "Yağ çubuğu",
    "c": "Yağ filtresi",
    "d": "Yağ pompası",
    "dogruCevap": "B",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aracın elektrik devresinde, akım yüksek olduğunda eriyerek güvenliği sağlayan parça aşağıdakilerden hangisidir?",
    "a": "Akü",
    "b": "Platin",
    "c": "Sigorta",
    "d": "Alternatör",
    "dogruCevap": "C",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Kriko ile aracı kaldırırken tekerleklere takoz konulmasının nedeni aşağıdakilerden hangisidir?",
    "a": "Aracın motorunu çalıştırabilmek",
    "b": "Aracın hareket etmesini engellemek",
    "c": "Araç yakıtının buharlaşmasını engellemek",
    "d": "Araç motorunun sarsıntısız çalışmasını sağlamak",
    "dogruCevap": "B",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Seyir hâlindeyken araçtan “sürekli yakıt kokusu” alınması durumunda aşağıdakilerden hangisi yapılır?",
    "a": "Antifriz kontrol edilir.",
    "b": "Önemsenmez yola devam edilir",
    "c": "Lastiklerin hava basıncı kontrol edilir.",
    "d": "Trafik kurallarına uyarak durulur ve kontak kapatılır.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi yakıt tüketiminin artmasında sürücüden kaynaklanan kusurdur?",
    "a": "Aşırı hız yapılması",
    "b": "Frenlerin ayarsız olması",
    "c": "Rölanti ayarının bozuk olması",
    "d": "Lastiklerin havasının az olması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi dört zamanlı bir motorun çalışma zamanlarından biri değildir?",
    "a": "İş zamanı",
    "b": "Marş zamanı",
    "c": "Emme zamanı",
    "d": "Sıkıştırma zamanı",
    "dogruCevap": "B",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aşağıdakilerden hangisi araca binmeden önce yapılması gereken kontrollerdendir?",
    "a": "Ayna ayarları",
    "b": "Yakıt seviyesi",
    "c": "Araç lastikleri",
    "d": "Koltuk ayarları",
    "dogruCevap": "C",
    "link": "",
    "kategori": "motor"
  },
  {
    "soru": "Aracın gösterge panelinde şekildeki uyarı lambasının yanıyor olması neyi bildirir?",
    "a": "Lastik basıncının düşük olduğunu",
    "b": "El freninin çekili olduğunu",
    "c": "Sis lambalarının yandığını",
    "d": "Fren balatalarının bittiğini",
    "dogruCevap": "D",
    "link": "motor130",
    "kategori": "motor"
  },
  {
    "soru": "Sürücü, trafik içinde yapacağı bir kural ihlalinde kendisinin ya da sevdiklerinin canını tehlikeye attığının farkında olmalıdır. Bu farkındalığı kazanmak için yapılması gereken aşağıdakilerden hangisidir?",
    "a": "Trafikteki her kuralın altında yatan güvenlik gerekçelerinin sorgulanıp öğrenilmesi",
    "b": "Kural ihlalinin sonucunda sadece maddi ceza olduğunun düşünülmesi",
    "c": "Karşılıklı saygının öncelikle başkalarından beklenmesi",
    "d": "Kızgın ve yarışmacı motivasyon ile araç kullanılması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Sürücünün trafik ortamında yaptığı davranışlardan hangisi, diğer sürücülerin dikkatinin dağılmasına ya da paniğe kapılmalarına sebep olabilir?",
    "a": "Davranışlarının sonuçlarını düşünerek hareket etmesi",
    "b": "Sürekli şerit değiştirerek (slalom yaparak) araç kullanması",
    "c": "Aracını kullanırken trafik kurallarının bilincinde olması",
    "d": "Trafik içindeki davranışlarının sorumluluğunu üstlenerek araç kullanması",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Ters yönden gelen bir sürücüye “Bu sokak tek yönlü, herhalde siz girişteki levhayı görmediniz, lütfen daha dikkatli olun.” diyen bir sürücü, trafikte aşağıdaki değerlerden hangisine uygun davranmıştır?",
    "a": "İnatlaşmaya",
    "b": "Aşırı tepki göstermeye",
    "c": "Kaba ve saldırgan davranmaya",
    "d": "Trafik kültüründe birbirini uyarmaya",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Geçilmekte olan araç sürücüsünün yavaşlayıp geçme yapan araca kolaylık sağlaması durumu, trafikte aşağıdaki değerlerden hangisiyle ifade edilir?",
    "a": "Bencillik",
    "b": "İnatlaşmak",
    "c": "Diğergamlık",
    "d": "Sorumsuzluk",
    "dogruCevap": "C",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisinin trafikte öfke duygusuna kapılan sürücülerde görülme olasılığı diğer sürücülere göre daha fazladır?",
    "a": "Dikkatin dağılması",
    "b": "Kural ihlallerinin azalması",
    "c": "Direksiyon hâkimiyetinin artması",
    "d": "Kazaya karışma olasılığının azalması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "I. Orta refüjlere ve yol kenarlarına dikilen ağaçların zarar görmesi\n\nII. Köprü ve tünel gibi noktalarda yaşanan kazalarda ulaşımın aksaması\n\nIII. Trafo ve elektrik direğine çarpma gibi durumlarda kesintilerin yaşanması\n\nIV. Yakıt, kimyasal madde, tıbbi atık vs. yüklü araçların yaptığı kazalar neticesinde büyük ekolojik zararların görülmesi\n\nYukarıdakilerden hangileri kara yolunda meydana gelen trafik kazalarının kişiye, topluma, kamuya ve çevreye verdiği zararlardandır?",
    "a": "I ve II.",
    "b": "I, III ve IV.",
    "c": "II, III ve IV.",
    "d": "I, II, III ve IV.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "I. Trafikteki bütün kuralların nedenini öğrenir.\n\nII. Araç kullanırken yapacağı bir kural ihlalinin sonucunda sadece maddi ceza olduğunu düşünür.\n\nIII. Trafik içinde yapacağı bir kural ihlalinde, kendisinin ya da sevdiklerinin canını tehlikeye attığının farkında olur.\n\nYukarıdakilerden hangileri trafik adabına sahip olan bir sürücü için söylenebilir?",
    "a": "I ve II",
    "b": "I ve III",
    "c": "II ve III",
    "d": "I, II ve III",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aracı arıza yaptığı için yolda kalmış ve trafiğin aksamasına sebep olmuş sürü- cünün sorununa, yoldan geçen diğer bir sürücünün durup çözüm bulması hâli, trafikte hangi temel değere sahip olunduğuna örnektir?",
    "a": "Yardımlaşmaya",
    "b": "Öfke duygusuna",
    "c": "Bencil davranmaya",
    "d": "Aşırı tepki göstermeye",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Kırmızı ışıkta beklerken ışık sarıya döner dönmez önündeki araca korna çalan sürücünün, ışığın yeşile dönmesi için 1 saniye bile bekleyememesi durumu, bu sürücünün trafikte hangi temel değere sahip olmadığını gösterir?",
    "a": "Öfke",
    "b": "İnatlaşma",
    "c": "Sabır",
    "d": "Aşırı tepki",
    "dogruCevap": "C",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Bir olay ya da durumda, karşımızdaki kişi hakkında herhangi bir yargıda bulunmadan önce kendimizi onun yerine koyarak olayı/ durumu onun gibi yaşamamız anlamına gelmektedir.\n\nYukarıdaki açıklama, trafik adabı açısından da çok ciddi bir öneme sahip olan hangi davranış özelliğine aittir?",
    "a": "Öfke",
    "b": "Empati",
    "c": "Bastırma",
    "d": "Engellenme",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Trafikte yaşanan öfke duygusu aşağıdakilerden hangisine yol açabilmektedir?",
    "a": "Kural ihlallerinin azalmasına",
    "b": "Direksiyon hâkimiyetinin artmasına",
    "c": "Kazaya karışma olasılığının azalmasına",
    "d": "Sürücülük yeteneğinin olumsuz yönde etkilenmesine",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisi trafikte bireye yapılan hak ihlallerindendir?",
    "a": "Aşırı hız yapmaktan kaçınılması",
    "b": "Geçiş önceliğine sahip araçlara yol verilmesi",
    "c": "Engelli kişiler için ayrılmış yerlere park edilmesi",
    "d": "Trafikte sürücülerin tek başına olmadığının düşünülmesi",
    "dogruCevap": "C",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisi, araç kullanırken öfke duygusuna kapılan bir sürücünün kendisini sakinleştirmek için uygulaması gereken yöntemlerden biri değildir?",
    "a": "Trafik ortamında gerilimli durumların olabileceğini kabul etmesi",
    "b": "Karşılaşılan durumla ilgili negatif çözümler üretmesi",
    "c": "Radyo veya müzik açması",
    "d": "Derin nefes alması",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisi, kara yolunda meydana gelen trafik kazalarının çevreye verdiği zararlardan biri değildir?",
    "a": "Açılan çok sayıda dava ile yargı sisteminde iş yükünün artması",
    "b": "Orta refüjlere ve yol kenarlarına dikilen ağaçların zarar görmesi",
    "c": "Köprü, tünel gibi noktalarda yaşanan kazalarda ulaşımın aksaması",
    "d": "Trafo, elektrik direğine çarpma gibi durumlarda kesintiler yaşanması",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "- Trafikte temel değerleri içselleştirerek doğru davranış göstermek\n- Trafikte karşılaşılan sorunları doğru yöntemlerle çözmek\n- Sağlıklı ve güvenli bir trafik ortamı oluşmasına katkı sağlamak\nVerilenler aşağıdakilerden hangisinin amacını oluşturur?",
    "a": "Mizacın",
    "b": "Beden dilinin",
    "c": "Trafik adabının",
    "d": "Konuşma üslubunun",
    "dogruCevap": "C",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Hangi temel değere sahip sürücü, yoğun trafikte bir dizi hâlinde gitmekte olan diğer sürücülerin önlerine geçip, trafiği daha da sıkışık hâle getirerek yoluna devam etmez?",
    "a": "Bencil",
    "b": "Sorumsuz",
    "c": "Görgü seviyesi düşük",
    "d": "Empati düzeyi yüksek",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisi hoşgörü sahibi olmayan sürücülerin özelliklerindendir?",
    "a": "Öfkeli olmak",
    "b": "Sabırlı olmak",
    "c": "Başarılı iletişim kurmak",
    "d": "Bencillikten uzak durmak",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdaki değerlerden hangisine sahip olan sürücü, yoğun trafikte bir dizi hâlinde gitmekte olan diğer sürücülerin önlerine geçip trafiği daha da sıkışık hâle getirerek yoluna devam etmez?",
    "a": "Bencil",
    "b": "Sorumsuz",
    "c": "Görgü seviyesi düşük",
    "d": "Empati düzeyi yüksek",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Seyir hâlindeki sürücünün, yaptığı bir hatadan dolayı eliyle veya yüz ifadesiyle diğer sürücülerden özür dilemesi trafikte aşağıdakilerden hangisinin kullanıldığına örnek olur?",
    "a": "Beden dilinin",
    "b": "Bencilliğin",
    "c": "İnatlaşmanın",
    "d": "Tahammülsüzlüğün",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisi trafikte bireye yapılan hak ihlallerindendir?",
    "a": "Aşırı hız yapmaktan kaçınılması",
    "b": "Geçiş önceliğine sahip araçlara yol verilmesi",
    "c": "Trafikte sürücülerin tek başına olmadığının düşünülmesi",
    "d": "Engeli olmadığı hâlde engelli kişiler için ayrılmış yerlere park edilmesi",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafikadabi"
  },
  {
    "soru": "Aşağıdakilerden hangisi tüm kara yollarındaki işaretleme standartlarının tespiti, yayınlanması ve kontrolü ile görevlidir?",
    "a": "Sağlık Bakanlığı",
    "b": "Millî Eğitim Bakanlığı",
    "c": "Emniyet Genel Müdürlüğü",
    "d": "Karayolları Genel Müdürlüğü",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Kamu hizmeti yapan yolcu taşıtlarının yolcu veya hizmetlileri bindirmeleri, indirmeleri veya duraklamaları için yatay ve düşey işaretlerle belirlenmiş yere ne ad verilir?",
    "a": "Garaj",
    "b": "Durak",
    "c": "Otopark",
    "d": "Park yeri",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Şekildeki trafik işaretini gören sürücü aşağıdakilerden hangisini yapmalıdır?",
    "a": "Banketten gitmelidir.",
    "b": "Aracının hızını artırmalıdır.",
    "c": "Öndeki aracı geçmemelidir.",
    "d": "Geçiş hakkını kendisi kullanmalıdır.",
    "dogruCevap": "C",
    "link": "trafik153",
    "kategori": "trafik"
  },
  {
    "soru": "Taşıt yolu üzerine çizilen şekildeki çizgilerin anlamı nedir?",
    "a": "Yaya geçidi",
    "b": "Bisiklet yolu",
    "c": "Taralı alana girilmez",
    "d": "Yavaşlama uyarı çizgileri",
    "dogruCevap": "D",
    "link": "trafik154",
    "kategori": "trafik"
  },
  {
    "soru": "Trafik kuruluşunca, uyuşturucu veya uyarıcı madde kullandığı tespit edilen sürücüye aşağıdaki işlemlerden hangisi uygulanır?",
    "a": "Sürücü belgesi 5 yıl süreyle geçici olarak geri alınır.",
    "b": "Sadece şehir içinde araç sürmesine izin verilir.",
    "c": "Sürücü belgesi 6 ay süreyle geri alınır.",
    "d": "Sadece para cezası verilir.",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Aksine bir işaret bulunmadıkça otoyolda minibüs ve otobüsler için azami hız saatte kaç kilometredir?",
    "a": 80,
    "b": 90,
    "c": 100,
    "d": 110,
    "dogruCevap": "C",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Arkadan çarpma şeklindeki trafik kazalarının en önemli sebebi aşağıdakilerden hangisidir?",
    "a": "Öndeki aracın durması",
    "b": "Öndeki aracın yavaşlaması",
    "c": "Görüş mesafesinin kötü olması",
    "d": "Takip mesafesi kurallarına uyulmaması",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Şekle göre hangi numaralı aracın sürücüsü hatalı davranmıştır?",
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "dogruCevap": "C",
    "link": "trafik158",
    "kategori": "trafik"
  },
  {
    "soru": "Manevra yapacak sürücü aşağıdakilerden hangisini yapmalıdır?",
    "a": "Ön, arka ve yanlardaki trafiği kontrol etmeli",
    "b": "İşaret verdiği anda manevraya başlamalı",
    "c": "Manevraya başladıktan sonra işaret vermeli",
    "d": "Manevra bitmeden önce işaret vermeyi sona erdirmeli",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Şekildeki akaryakıt istasyonundan çıkmak isteyen 2 numaralı aracın sürücüsü ne yapmalıdır?",
    "a": "Korna çalıp 1 numaralı aracı durdurmalı",
    "b": "1 numaralı aracın geçmesini beklemeli",
    "c": "Hızlanarak yoluna devam etmeli",
    "d": "Geçiş hakkını kendisi kullanmalı",
    "dogruCevap": "B",
    "link": "trafik160",
    "kategori": "trafik"
  },
  {
    "soru": "Geçiş üstünlüğüne sahip araç sürücüsü, bu hakkı kullanırken aşağıdakilerden hangisine dikkat etmek zorundadır?",
    "a": "Hız sınırlamasına",
    "b": "Trafik yasaklarına",
    "c": "Çevreyi rahatsız etmemeye",
    "d": "Can ve mal güvenliğini tehlikeye sokmamaya",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Şekildeki aracın sürücüsü, kamu hizmeti yapan yolcu taşıtı durağının en az kaç metre mesafe dışına aracını park edebilir?",
    "a": 5,
    "b": 10,
    "c": 15,
    "d": 20,
    "dogruCevap": "C",
    "link": "trafik162",
    "kategori": "trafik"
  },
  {
    "soru": "Geceleyin, görüşün yeterli olmadığı kavşağa yaklaşan sürücü gelişini nasıl haber vermelidir?",
    "a": "Birkaç defa selektör yaparak",
    "b": "Acil uyarı ışıklarını yakarak",
    "c": "Birkaç defa korna çalarak",
    "d": "Dönüş ışıklarını yakarak",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "I. Yüklerin üzerine yolcu bindirilmesi\n\nII. Kasanın yan ve arka kapaklarının kapalı olması\n\nIII. Yüklerin sağlam olarak yerleştirilmiş ve bağlanmış olması\n\nKamyon, kamyonet ve römorklarda yükle birlikte yolcu taşınırken yukarıda verilenlerden hangilerinin yapılması zorunludur?",
    "a": "Yalnız I.",
    "b": "I ve II.",
    "c": "II ve III.",
    "d": "I, II ve III.",
    "dogruCevap": "C",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Park hâlindeki araca çarpan sürücünün aşağıdakilerden hangisini yapması yanlıştır?",
    "a": "Aracın sahibini bulamazsa yazılı bilgi bırakması",
    "b": "Zarar fazla değilse olay yerinden uzaklaşması",
    "c": "Zarar verdiği aracın sahibini bulması",
    "d": "Trafik görevlisine haber vermesi",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "I. Reflektör\n\nII. İlk yardım çantası\n\nIII. Yangın söndürme cihazı\n\nYukarıdakilerden hangilerinin otomobillerde bulundurulması zorunludur?",
    "a": "Yalnız I.",
    "b": "I ve II.",
    "c": "II ve III.",
    "d": "I, II ve III.",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Aşağıdakilerden hangisi Karayolları Trafik Kanunu’na göre sürücü olabilmenin şartlarından biri değildir?",
    "a": "Bir meslek sahibi olmak",
    "b": "Belirli bir eğitim seviyesine sahip olmak",
    "c": "Kullanacağı araca göre belirli bir yaşın üzerinde olmak",
    "d": "Sürücülük yapmaya uygun olduğunu gösterir sağlık raporu almak",
    "dogruCevap": "A",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "- Aracın hızı arttıkça fren mesafesi azalır.\n\n- Yol yüzeyinde su birikmesi, buz ya da kar olması fren mesafesini artıran faktörlerdendir.\n\nFren mesafesi ile ilgili verilen cümleler doğru (D)- yanlış (Y) olarak değerlendirildiğinde sıralama aşağıdakilerden hangisi olur?",
    "a": "D - Y",
    "b": "Y - D",
    "c": "D - D",
    "d": "Y - Y",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Aşağıdakilerden hangisi atıkların çevreye verdiği zararlardan biri değildir?",
    "a": "Kötü koku yayması",
    "b": "Çirkin görünüm arz etmesi",
    "c": "Hastalık bulaştıran zararlıların üremesine sebep olması",
    "d": "Toplanıp işlenerek tekrar kullanılabilir hâle getirilmesi",
    "dogruCevap": "D",
    "link": "",
    "kategori": "trafik"
  },
  {
    "soru": "Aşağıdakilerden hangisi trafiğin düzenlenmesinde diğerlerine göre önceliğe sahiptir?",
    "a": "Trafik ışıkları",
    "b": "Trafik görevlisi",
    "c": "Trafik levhaları",
    "d": "Yer işaretlemeleri",
    "dogruCevap": "B",
    "link": "",
    "kategori": "trafik"
  }
]
