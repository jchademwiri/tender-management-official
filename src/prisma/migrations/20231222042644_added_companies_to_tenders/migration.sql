/*
 Warnings:
 
 - You are about to drop the column `briefing` on the `tender` table. All the data in the column will be lost.
 - You are about to drop the column `userId` on the `tender` table. All the data in the column will be lost.
 - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
 - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.
 - Added the required column `companyId` to the `Tender` table without a default value. This is not possible if the table is not empty.
 
 */
-- DropForeignKey
ALTER TABLE `account` DROP FOREIGN KEY `Account_userId_fkey`;
-- DropForeignKey
ALTER TABLE `session` DROP FOREIGN KEY `Session_userId_fkey`;
-- DropForeignKey
ALTER TABLE `tender` DROP FOREIGN KEY `Tender_userId_fkey`;
-- AlterTable
ALTER TABLE `tender` DROP COLUMN `briefing`,
    DROP COLUMN `userId`,
    ADD COLUMN `companyId` VARCHAR(191) NOT NULL,
    ADD COLUMN `hasBriefing` ENUM('YES', 'NO') NOT NULL DEFAULT 'NO';
-- DropTable
DROP TABLE `account`;
-- DropTable
DROP TABLE `session`;
-- DropTable
DROP TABLE `user`;
-- DropTable
DROP TABLE `verificationtoken`;
-- CreateTable
CREATE TABLE `Company` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `tenderId` VARCHAR(191) NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- CreateTable
CREATE TABLE `TenderToCompany` (
    `tenderId` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`tenderId`, `companyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- AddForeignKey
ALTER TABLE `TenderToCompany`
ADD CONSTRAINT `TenderToCompany_tenderId_fkey` FOREIGN KEY (`tenderId`) REFERENCES `Tender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE `TenderToCompany`
ADD CONSTRAINT `TenderToCompany_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;