const router = require("express").Router();
const ApiError = require("../utils/ApiError");
const girisMiddleware = require("../utils/girisMiddleware");
const yoneticiMiddleware = require('../utils/yoneticiMiddleware');
const tecrubeBirimiService = require("../services/tecrubeBirimiService");

// getir
router.get("/:tecrubeBirimiId", async (req, res, next) => {
  try {
    const tecrubeBirimiId = parseInt(req.params.tecrubeBirimiId);
    const tecrubeBirimi = await tecrubeBirimiService.getir(tecrubeBirimiId);
    res.json({
      tecrubeBirimi,
    });
  } catch (error) {
    next(error);
  }
});

// getir tüm
router.get("/", async (req, res, next) => {
  try {
    const tecrubeBirimleri = await tecrubeBirimiService.getirTum();
    res.json({
      tecrubeBirimleri,
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
    let {ad, resim, aciklama, metin, tecrubeId} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");
    if (!aciklama || !aciklama.trim()) throw new ApiError("açıklama boş olmaz.");
    if (!metin || !metin.trim()) throw new ApiError("metin boş olmaz.");
    if (!tecrubeId) throw new ApiError("tecrube boş olmaz.");

    ad = ad.trim();
    resim = resim.trim();
    aciklama = aciklama.trim();
    metin = metin.trim();
    tecrubeId = parseInt(tecrubeId);

    const tecrubeBirimi = await tecrubeBirimiService.olustur(ad, resim, aciklama, metin, tecrubeId);
    res.json({
      tecrubeBirimi,
    });
  } catch (error) {
     next(error);
  }
});

// guncelle
router.patch('/:tecrubeBirimiId', async (req, res, next) => {
  try {
    const tecrubeBirimiId = parseInt(req.params.tecrubeBirimiId);
    let {ad, resim, aciklama, metin, tecrubeId} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");
    if (!aciklama || !aciklama.trim()) throw new ApiError("açıklama boş olmaz.");
    if (!metin || !metin.trim()) throw new ApiError("metin boş olmaz.");
    if (!tecrubeId) throw new ApiError("tecrube boş olmaz.");

    const guncelBilgiler = {};
    guncelBilgiler.ad = ad.trim();
    guncelBilgiler.resim = resim.trim();
    guncelBilgiler.aciklama = aciklama.trim();
    guncelBilgiler.metin = metin.trim();
    guncelBilgiler.tecrubeId = parseInt(tecrubeId);

    const tecrubeBirimi = await tecrubeBirimiService.guncelle(tecrubeBirimiId, guncelBilgiler);
    res.json({
      tecrubeBirimi,
    });
  } catch (error) {
     next(error);
  }
});

// sil
router.delete("/:tecrubeBirimiId", async (req, res, next) => {
  try {
    const tecrubeBirimiId = parseInt(req.params.tecrubeBirimiId);
    const tecrubeBirimi = await tecrubeBirimiService.sil(tecrubeBirimiId);
    res.json({
      tecrubeBirimi,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;