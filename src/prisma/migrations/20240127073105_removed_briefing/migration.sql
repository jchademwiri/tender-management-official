/*
  Warnings:

  - You are about to drop the column `companyId` on the `tender` table. All the data in the column will be lost.
  - You are about to drop the column `hasBriefing` on the `tender` table. All the data in the column will be lost.
  - You are about to drop the `briefing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tendertocompany` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `briefing` DROP FOREIGN KEY `Briefing_tenderId_fkey`;

-- DropForeignKey
ALTER TABLE `tendertocompany` DROP FOREIGN KEY `TenderToCompany_companyId_fkey`;

-- DropForeignKey
ALTER TABLE `tendertocompany` DROP FOREIGN KEY `TenderToCompany_tenderId_fkey`;

-- AlterTable
ALTER TABLE `tender` DROP COLUMN `companyId`,
    DROP COLUMN `hasBriefing`;

-- DropTable
DROP TABLE `briefing`;

-- DropTable
DROP TABLE `tendertocompany`;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_tenderId_fkey` FOREIGN KEY (`tenderId`) REFERENCES `Tender`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
