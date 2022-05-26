-- DropForeignKey
ALTER TABLE "MediaFile" DROP CONSTRAINT "MediaFile_postId_fkey";

-- AddForeignKey
ALTER TABLE "MediaFile" ADD CONSTRAINT "MediaFile_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
