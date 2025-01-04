-- CreateTable
CREATE TABLE "Tecrube" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "resim" TEXT NOT NULL,

    CONSTRAINT "Tecrube_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tecrube_id_key" ON "Tecrube"("id");
