-- CreateTable
CREATE TABLE "TecrubeBirimi" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "resim" TEXT NOT NULL,
    "aciklama" TEXT NOT NULL,
    "metin" TEXT NOT NULL,
    "tecrubeId" INTEGER NOT NULL,

    CONSTRAINT "TecrubeBirimi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TecrubeBirimi_id_key" ON "TecrubeBirimi"("id");

-- AddForeignKey
ALTER TABLE "TecrubeBirimi" ADD CONSTRAINT "TecrubeBirimi_tecrubeId_fkey" FOREIGN KEY ("tecrubeId") REFERENCES "Tecrube"("id") ON DELETE CASCADE ON UPDATE CASCADE;
