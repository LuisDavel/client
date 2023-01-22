/*
  Warnings:

  - Added the required column `descript` to the `ViewRegister` table without a default value. This is not possible if the table is not empty.
  - Made the column `CEP` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `complement` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `district` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `number` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `view_Animal` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.
  - Made the column `view_QrCode` on table `ViewRegister` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ViewRegister" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "view_Animal" TEXT NOT NULL,
    "view_QrCode" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "CEP" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "descript" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ViewRegister_view_QrCode_fkey" FOREIGN KEY ("view_QrCode") REFERENCES "QrCode" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ViewRegister_view_Animal_fkey" FOREIGN KEY ("view_Animal") REFERENCES "animals" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ViewRegister" ("CEP", "address", "city", "complement", "district", "dt_create", "id", "number", "state", "view_Animal", "view_QrCode") SELECT "CEP", "address", "city", "complement", "district", "dt_create", "id", "number", "state", "view_Animal", "view_QrCode" FROM "ViewRegister";
DROP TABLE "ViewRegister";
ALTER TABLE "new_ViewRegister" RENAME TO "ViewRegister";
CREATE UNIQUE INDEX "ViewRegister_view_Animal_key" ON "ViewRegister"("view_Animal");
CREATE UNIQUE INDEX "ViewRegister_view_QrCode_key" ON "ViewRegister"("view_QrCode");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
