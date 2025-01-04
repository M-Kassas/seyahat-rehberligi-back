const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function olustur(ad, resim, aciklama, metin, tecrubeId) {
  const tecrubeBirimi = await prisma.tecrubeBirimi.create({
    data: {
      ad,
      resim,
      aciklama,
      metin,
      tecrubeId,
    }
  });
  return tecrubeBirimi;
}

async function guncelle(id, guncelBilgiler) {
  const tecrubeBirimi = await prisma.tecrubeBirimi.update({
    where: {
      id,
    },
    data: guncelBilgiler,
  });
  return tecrubeBirimi;
}

async function getir(id) {
  const tecrubeBirimi = await prisma.tecrubeBirimi.findFirst({
    where: {
      id,
    },
  });
  return tecrubeBirimi;
}

async function getirTum() {
  const tecrubeler = await prisma.tecrubeBirimi.findMany();
  return tecrubeler;
}

async function sil(id) {
  const tecrubeBirimi = await prisma.tecrubeBirimi.delete({
    where: {
      id,
    },
  });
  return tecrubeBirimi;
}

module.exports = {
  olustur,
  guncelle,
  getir,
  getirTum,
  sil,
};