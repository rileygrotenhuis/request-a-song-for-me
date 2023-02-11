-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "image_height" TEXT NOT NULL,
    "image_width" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_url_key" ON "Request"("url");
