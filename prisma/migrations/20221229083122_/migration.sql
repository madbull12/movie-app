/*
  Warnings:

  - Added the required column `poster_path` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `movieId` on the `Bookmark` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `poster_path` to the `Favourite` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `movieId` on the `Favourite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "poster_path" TEXT NOT NULL,
DROP COLUMN "movieId",
ADD COLUMN     "movieId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Favourite" ADD COLUMN     "poster_path" TEXT NOT NULL,
DROP COLUMN "movieId",
ADD COLUMN     "movieId" INTEGER NOT NULL;
