/*
  Warnings:

  - You are about to drop the column `briefing` on the `tender` table. All the data in the column will be lost.
  - You are about to drop the column `briefingDate` on the `tender` table. All the data in the column will be lost.
  - You are about to drop the column `briefingLocation` on the `tender` table. All the data in the column will be lost.
  - The values [SUBMITED] on the enum `Tender_Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `tender` DROP COLUMN `briefing`,
    DROP COLUMN `briefingDate`,
    DROP COLUMN `briefingLocation`,
    MODIFY `Status` ENUM('OPEN', 'IN_PROGRESS', 'SUBMITTED', 'AWARDED') NOT NULL DEFAULT 'OPEN';

-- CreateTable
CREATE TABLE `Briefing` (
    `id` VARCHAR(191) NOT NULL,
    `tenderId` VARCHAR(191) NOT NULL,
    `briefingStatus` ENUM('YES', 'NO') NOT NULL DEFAULT 'NO',
    `briefingDate` DATETIME(3) NOT NULL,
    `briefingLocation` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Briefing_tenderId_key`(`tenderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Briefing` ADD CONSTRAINT `Briefing_tenderId_fkey` FOREIGN KEY (`tenderId`) REFERENCES `Tender`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
