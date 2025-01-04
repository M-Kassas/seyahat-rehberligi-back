-- CreateTable
CREATE TABLE "Kullanici" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,
    "resim" TEXT NOT NULL DEFAULT '',
    "kullaniciadi" TEXT NOT NULL,
    "sifre" TEXT NOT NULL,
    "yonetici" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Kullanici_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sehir" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "resim" TEXT NOT NULL,
    "video" TEXT NOT NULL,

    CONSTRAINT "Sehir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SehirOzellilk" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "aciklama" TEXT NOT NULL,
    "resim" TEXT NOT NULL,
    "metin" TEXT NOT NULL,
    "sehirId" INTEGER NOT NULL,

    CONSTRAINT "SehirOzellilk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kullanici_id_key" ON "Kullanici"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Kullanici_kullaniciadi_key" ON "Kullanici"("kullaniciadi");

-- CreateIndex
CREATE UNIQUE INDEX "Sehir_id_key" ON "Sehir"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SehirOzellilk_id_key" ON "SehirOzellilk"("id");

-- AddForeignKey
ALTER TABLE "SehirOzellilk" ADD CONSTRAINT "SehirOzellilk_sehirId_fkey" FOREIGN KEY ("sehirId") REFERENCES "Sehir"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
