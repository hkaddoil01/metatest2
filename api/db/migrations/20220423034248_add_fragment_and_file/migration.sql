-- CreateTable
CREATE TABLE "Fragment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "fragmentTime" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "File" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "filetype" TEXT NOT NULL,
    "fragmentId" INTEGER,
    CONSTRAINT "File_fragmentId_fkey" FOREIGN KEY ("fragmentId") REFERENCES "Fragment" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
