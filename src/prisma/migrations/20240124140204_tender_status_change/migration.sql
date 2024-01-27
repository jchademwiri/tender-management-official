/*
  Warnings:

  - You are about to drop the column `Status` on the `tender` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tender` DROP COLUMN `Status`,
    ADD COLUMN `status` ENUM('OPEN', 'IN_PROGRESS', 'SUBMITTED', 'APPOINTED') NOT NULL DEFAULT 'OPEN';
