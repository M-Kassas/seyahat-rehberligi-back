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
    let {ad, resim, video} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");
    if (!video || !video.trim()) throw new ApiError("video boş olmaz.");

    ad = ad.trim();
    resim = resim.trim();
    video = video.trim();

    const sehir = await sehirService.olustur(ad, resim, video);
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
    let {ad, resim, video} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");
    if (!video || !video.trim()) throw new ApiError("video boş olmaz.");

    const guncelBilgiler = {};
    guncelBilgiler.ad = ad.trim();
    guncelBilgiler.resim = resim.trim();
    guncelBilgiler.video = video.trim();

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