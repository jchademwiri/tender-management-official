/*
  Warnings:

  - You are about to drop the column `companyId` on the `tender` table. All the data in the column will be lost.
  - Added the required column `company` to the `Tender` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tender` DROP FOREIGN KEY `Tender_companyId_fkey`;

-- AlterTable
ALTER TABLE `tender` DROP COLUMN `companyId`,
    ADD COLUMN `company` VARCHAR(191) NOT NULL;
