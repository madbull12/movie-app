/*
  Warnings:

  - A unique constraint covering the columns `[userId,movieId]` on the table `Bookmark` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,movieId]` on the table `Favourite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_userId_movieId_key" ON "Bookmark"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Favourite_userId_movieId_key" ON "Favourite"("userId", "movieId");
