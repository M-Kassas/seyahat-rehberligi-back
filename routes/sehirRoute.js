const router = require("express").Router();
const ApiError = require("../utils/ApiError");
const girisMiddleware = require("../utils/girisMiddleware");
const yoneticiMiddleware = require('../utils/yoneticiMiddleware');
const sehirService = require("../services/sehirService");

// getir
router.get("/:sehirId", async (req, res, next) => {
  try {
    const sehirId = parseInt(req.params.sehirId);
    const sehir = await sehirService.getir(sehirId);
    res.json({
      sehir,
    });
  } catch (error) {
    next(error);
  }
});

// getir tüm
router.get("/", async (req, res, next) => {
  try {
    const sehirler = await sehirService.getirTum();
    res.json({
      sehirler,
    });
  } catch (error) {
    next(error);
  }
});

router.use(girisMiddleware);
router.use(yoneticiMiddleware);


// olustur
router.post('/', async (req, res, next) => {
  try {
    let {ad, resim, video, kesfedinResim, kesfedinAciklama, kesfedinMetin, hissetResim, hissetAciklama, hissetMetin, lezzetResim, lezzetAciklama, lezzetMetin} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");
    if (!video || !video.trim()) throw new ApiError("video boş olmaz.");
    if (!kesfedinResim || !kesfedinResim.trim()) throw new ApiError("keşfedin resim boş olmaz");
    if (!kesfedinAciklama || !kesfedinAciklama.trim()) throw new ApiError("keşfedin açıklama boş olmaz");
    if (!kesfedinMetin || !kesfedinMetin.trim()) throw new ApiError("keşfedin metin boş olmaz");
    if (!hissetResim || !hissetResim.trim()) throw new ApiError("hisset Resim boş olmaz");
    if (!hissetAciklama || !hissetAciklama.trim()) throw new ApiError("hisset açıklama boş olmaz");
    if (!hissetMetin || !hissetMetin.trim()) throw new ApiError("hisset metin boş olmaz");
    if (!lezzetResim || !lezzetResim.trim()) throw new ApiError("lezzet Resim boş olmaz");
    if (!lezzetAciklama || !lezzetAciklama.trim()) throw new ApiError("lezzet açıklama boş olmaz");
    if (!lezzetMetin || !lezzetMetin.trim()) throw new ApiError("lezzet metin boş olmaz");

    ad = ad.trim();
    resim = resim.trim();
    video = video.trim();
    kesfedinResim = kesfedinResim.trim();
    kesfedinAciklama = kesfedinAciklama.trim();
    kesfedinMetin = kesfedinMetin.trim();
    hissetResim = hissetResim.trim();
    hissetAciklama = hissetAciklama.trim();
    hissetMetin = hissetMetin.trim();
    lezzetResim = lezzetResim.trim();
    lezzetAciklama = lezzetAciklama.trim();
    lezzetMetin = lezzetMetin.trim();

    const sehir = await sehirService.olustur(ad, resim, video, kesfedinResim, kesfedinAciklama, kesfedinMetin, hissetResim, hissetAciklama, hissetMetin, lezzetResim, lezzetAciklama, lezzetMetin);
    res.json({
      sehir,
    });
  } catch (error) {
     next(error);
  }
});

// guncelle
router.patch('/:sehirId', async (req, res, next) => {
  try {
    const sehirId = parseInt(req.params.sehirId);
    let {ad, resim, video, kesfedinResim, kesfedinAciklama, kesfedinMetin, hissetResim, hissetAciklama, hissetMetin, lezzetResim, lezzetAciklama, lezzetMetin} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");
    if (!video || !video.trim()) throw new ApiError("video boş olmaz.");

    const guncelBilgiler = {};
    guncelBilgiler.ad = ad.trim();
    guncelBilgiler.resim = resim.trim();
    guncelBilgiler.video = video.trim();
    guncelBilgiler.kesfedinResim = kesfedinResim.trim();
    guncelBilgiler.kesfedinAciklama = kesfedinAciklama.trim();
    guncelBilgiler.kesfedinMetin = kesfedinMetin.trim();
    guncelBilgiler.hissetResim = hissetResim.trim();
    guncelBilgiler.hissetAciklama = hissetAciklama.trim();
    guncelBilgiler.hissetMetin = hissetMetin.trim();
    guncelBilgiler.lezzetResim = lezzetResim.trim();
    guncelBilgiler.lezzetAciklama = lezzetAciklama.trim();
    guncelBilgiler.lezzetMetin = lezzetMetin.trim();

    const sehir = await sehirService.guncelle(sehirId, guncelBilgiler);
    res.json({
      sehir,
    });
  } catch (error) {
     next(error);
  }
});

// sil
router.delete("/:sehirId", async (req, res, next) => {
  try {
    const sehirId = parseInt(req.params.sehirId);
    const sehir = await sehirService.sil(sehirId);
    res.json({
      sehir,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;