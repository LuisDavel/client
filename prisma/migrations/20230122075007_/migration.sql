/*
  Warnings:

  - You are about to drop the column `temeperament` on the `animals` table. All the data in the column will be lost.
  - Added the required column `temperament` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_animals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "relation_animal" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type_animal" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "temperament" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "dt_born" TEXT NOT NULL,
    "photo_profile" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "animals_relation_animal_fkey" FOREIGN KEY ("relation_animal") REFERENCES "entitys" ("userGoogle") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_animals" ("created_at", "dt_born", "id", "name", "photo_profile", "race", "relation_animal", "size", "type_animal") SELECT "created_at", "dt_born", "id", "name", "photo_profile", "race", "relation_animal", "size", "type_animal" FROM "animals";
DROP TABLE "animals";
ALTER TABLE "new_animals" RENAME TO "animals";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
