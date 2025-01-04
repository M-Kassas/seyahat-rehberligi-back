const router = require("express").Router();
const ApiError = require("../utils/ApiError");
const girisMiddleware = require("../utils/girisMiddleware");
const yoneticiMiddleware = require('../utils/yoneticiMiddleware');
const tecrubeService = require("../services/tecrubeService");

// getir
router.get("/:tecrubeId", async (req, res, next) => {
  try {
    const tecrubeId = parseInt(req.params.tecrubeId);
    const tecrube = await tecrubeService.getir(tecrubeId);
    res.json({
      tecrube,
    });
  } catch (error) {
    next(error);
  }
});

// getir tüm
router.get("/", async (req, res, next) => {
  try {
    const tecrubeler = await tecrubeService.getirTum();
    res.json({
      tecrubeler,
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
    let {ad, resim} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");

    ad = ad.trim();
    resim = resim.trim();

    const tecrube = await tecrubeService.olustur(ad, resim);
    res.json({
      tecrube,
    });
  } catch (error) {
     next(error);
  }
});

// guncelle
router.patch('/:tecrubeId', async (req, res, next) => {
  try {
    const tecrubeId = parseInt(req.params.tecrubeId);
    let {ad, resim} = req.body;
    if (!ad || !ad.trim()) throw new ApiError("ad boş olmaz.");
    if (!resim || !resim.trim()) throw new ApiError("resim boş olmaz.");

    const guncelBilgiler = {};
    guncelBilgiler.ad = ad.trim();
    guncelBilgiler.resim = resim.trim();

    const tecrube = await tecrubeService.guncelle(tecrubeId, guncelBilgiler);
    res.json({
      tecrube,
    });
  } catch (error) {
     next(error);
  }
});

// sil
router.delete("/:tecrubeId", async (req, res, next) => {
  try {
    const tecrubeId = parseInt(req.params.tecrubeId);
    const tecrube = await tecrubeService.sil(tecrubeId);
    res.json({
      tecrube,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;