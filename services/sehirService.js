const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function olustur(ad, resim, video, kesfedinResim, kesfedinAciklama, kesfedinMetin, hissetResim, hissetAciklama, hissetMetin, lezzetResim, lezzetAciklama, lezzetMetin) {
  const sehir = await prisma.sehir.create({
    data: {
      ad,
      resim,
      video,
      kesfedinResim,
      kesfedinAciklama,
      kesfedinMetin,
      hissetResim,
      hissetAciklama,
      hissetMetin,
      lezzetResim,
      lezzetAciklama,
      lezzetMetin,
    }
  });
  return sehir;
}

async function guncelle(id, guncelBilgiler) {
  const sehir = await prisma.sehir.update({
    where: {
      id,
    },
    data: guncelBilgiler,
  });
  return sehir;
}

async function getir(id) {
  const sehir = await prisma.sehir.findFirst({
    where: {
      id,
    },
  });
  return sehir;
}

async function getirTum() {
  const sehirler = await prisma.sehir.findMany();
  return sehirler;
}

async function sil(id) {
  const sehir = await prisma.sehir.delete({
    where: {
      id,
    },
  });
  return sehir;
}

module.exports = {
  olustur,
  guncelle,
  getir,
  getirTum,
  sil,
};