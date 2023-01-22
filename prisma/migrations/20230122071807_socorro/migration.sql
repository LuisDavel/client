-- CreateTable
CREATE TABLE "QrCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hash" TEXT,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "animals" TEXT,
    CONSTRAINT "QrCode_animals_fkey" FOREIGN KEY ("animals") REFERENCES "animals" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ViewRegister" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "view_Animal" TEXT,
    "view_QrCode" TEXT,
    "address" TEXT,
    "number" TEXT,
    "district" TEXT,
    "city" TEXT,
    "CEP" TEXT,
    "state" TEXT,
    "complement" TEXT,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "ViewRegister_view_QrCode_fkey" FOREIGN KEY ("view_QrCode") REFERENCES "QrCode" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ViewRegister_view_Animal_fkey" FOREIGN KEY ("view_Animal") REFERENCES "animals" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Snap_QrCode" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "latitude" TEXT NOT NULL,
    "longetude" TEXT NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_Qrcode" TEXT NOT NULL,
    CONSTRAINT "Snap_QrCode_id_Qrcode_fkey" FOREIGN KEY ("id_Qrcode") REFERENCES "QrCode" ("hash") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "animals" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "relation_animal" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type_animal" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "temeperament" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "dt_born" TEXT NOT NULL,
    "photo_profile" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "animals_relation_animal_fkey" FOREIGN KEY ("relation_animal") REFERENCES "entitys" ("userGoogle") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "entitys" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userGoogle" TEXT NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "cpf" TEXT,
    "dt_born" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "number" TEXT,
    "photo_user" TEXT,
    "gender" TEXT,
    CONSTRAINT "entitys_userGoogle_fkey" FOREIGN KEY ("userGoogle") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "QrCode_hash_key" ON "QrCode"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "QrCode_animals_key" ON "QrCode"("animals");

-- CreateIndex
CREATE UNIQUE INDEX "ViewRegister_view_Animal_key" ON "ViewRegister"("view_Animal");

-- CreateIndex
CREATE UNIQUE INDEX "ViewRegister_view_QrCode_key" ON "ViewRegister"("view_QrCode");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "entitys_userGoogle_key" ON "entitys"("userGoogle");

-- CreateIndex
CREATE UNIQUE INDEX "entitys_cpf_key" ON "entitys"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
