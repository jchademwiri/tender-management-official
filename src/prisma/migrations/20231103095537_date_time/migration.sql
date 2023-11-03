-- CreateTable
CREATE TABLE `Tender` (
    `id` VARCHAR(191) NOT NULL,
    `tenderNumber` VARCHAR(191) NOT NULL,
    `tenderDescription` TEXT NOT NULL,
    `closingDate` DATETIME(3) NOT NULL,
    `closingTime` VARCHAR(191) NOT NULL DEFAULT '10:00',
    `Status` ENUM('OPEN', 'IN_PROGRESS', 'SUBMITED', 'AWARDED') NOT NULL DEFAULT 'OPEN',
    `tenderClient` VARCHAR(255) NOT NULL,
    `briefing` ENUM('YES', 'NO') NOT NULL DEFAULT 'NO',
    `briefingDate` DATETIME(3) NULL,
    `briefingLocation` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Tender_tenderNumber_key`(`tenderNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
