const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function olustur(ad, resim) {
  const tecrube = await prisma.tecrube.create({
    data: {
      ad,
      resim,
    }
  });
  return tecrube;
}

async function guncelle(id, guncelBilgiler) {
  const tecrube = await prisma.tecrube.update({
    where: {
      id,
    },
    data: guncelBilgiler,
  });
  return tecrube;
}

async function getir(id) {
  const tecrube = await prisma.tecrube.findFirst({
    where: {
      id,
    },
  });
  return tecrube;
}

async function getirTum() {
  const tecrubeler = await prisma.tecrube.findMany();
  return tecrubeler;
}

async function sil(id) {
  const tecrube = await prisma.tecrube.delete({
    where: {
      id,
    },
  });
  return tecrube;
}

module.exports = {
  olustur,
  guncelle,
  getir,
  getirTum,
  sil,
};