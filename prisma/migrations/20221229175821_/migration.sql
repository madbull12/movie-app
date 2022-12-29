/*
  Warnings:

  - Added the required column `type` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Favourite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Favourite" ADD COLUMN     "type" TEXT NOT NULL;
