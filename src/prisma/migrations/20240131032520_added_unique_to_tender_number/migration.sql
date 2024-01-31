/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Tender` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tender_number_key" ON "Tender"("number");
