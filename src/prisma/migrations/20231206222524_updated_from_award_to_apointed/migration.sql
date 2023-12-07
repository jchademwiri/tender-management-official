/*
  Warnings:

  - The values [AWARDED] on the enum `Tender_Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `tender` MODIFY `Status` ENUM('OPEN', 'IN_PROGRESS', 'SUBMITTED', 'APPOINTED') NOT NULL DEFAULT 'OPEN';
