/*
  Warnings:

  - Changed the type of `image_height` on the `Request` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Request" DROP COLUMN "image_height",
ADD COLUMN     "image_height" INTEGER NOT NULL;
