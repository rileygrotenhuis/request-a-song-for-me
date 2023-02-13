/*
  Warnings:

  - A unique constraint covering the columns `[preview_url]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `preview_url` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "preview_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Request_preview_url_key" ON "Request"("preview_url");
