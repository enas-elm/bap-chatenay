/*
  Warnings:

  - A unique constraint covering the columns `[formResponseId]` on the table `labels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[formResponseId]` on the table `priorities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[formResponseId]` on the table `statuses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `formResponseId` to the `labels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formResponseId` to the `priorities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formResponseId` to the `statuses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "labels" ADD COLUMN     "formResponseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "priorities" ADD COLUMN     "formResponseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "statuses" ADD COLUMN     "formResponseId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "labels_formResponseId_key" ON "labels"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "priorities_formResponseId_key" ON "priorities"("formResponseId");

-- CreateIndex
CREATE UNIQUE INDEX "statuses_formResponseId_key" ON "statuses"("formResponseId");

-- AddForeignKey
ALTER TABLE "labels" ADD CONSTRAINT "labels_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "statuses" ADD CONSTRAINT "statuses_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "priorities" ADD CONSTRAINT "priorities_formResponseId_fkey" FOREIGN KEY ("formResponseId") REFERENCES "FormResponse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
