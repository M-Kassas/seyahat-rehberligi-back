/*
  Warnings:

  - You are about to drop the `SehirOzellilk` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hissetAciklama` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hissetMetin` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hissetResim` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kesfedinAciklama` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kesfedinMetin` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kesfedinResim` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lezzetAciklama` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lezzetMetin` to the `Sehir` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lezzetResim` to the `Sehir` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SehirOzellilk" DROP CONSTRAINT "SehirOzellilk_sehirId_fkey";

-- AlterTable
ALTER TABLE "Sehir" ADD COLUMN     "hissetAciklama" TEXT NOT NULL,
ADD COLUMN     "hissetMetin" TEXT NOT NULL,
ADD COLUMN     "hissetResim" TEXT NOT NULL,
ADD COLUMN     "kesfedinAciklama" TEXT NOT NULL,
ADD COLUMN     "kesfedinMetin" TEXT NOT NULL,
ADD COLUMN     "kesfedinResim" TEXT NOT NULL,
ADD COLUMN     "lezzetAciklama" TEXT NOT NULL,
ADD COLUMN     "lezzetMetin" TEXT NOT NULL,
ADD COLUMN     "lezzetResim" TEXT NOT NULL;

-- DropTable
DROP TABLE "SehirOzellilk";
