-- AlterTable
ALTER TABLE `tender` ADD COLUMN `briefing` ENUM('YES', 'NO') NOT NULL DEFAULT 'NO';
