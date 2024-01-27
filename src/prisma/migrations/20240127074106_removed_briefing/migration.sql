/*
  Warnings:

  - You are about to drop the column `tenderId` on the `company` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Tender` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `company` DROP FOREIGN KEY `Company_tenderId_fkey`;

-- AlterTable
ALTER TABLE `company` DROP COLUMN `tenderId`;

-- AlterTable
ALTER TABLE `tender` ADD COLUMN `companyId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tender` ADD CONSTRAINT `Tender_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
