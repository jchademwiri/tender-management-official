-- CreateEnum
CREATE TYPE "TenderStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'SUBMITTED', 'APPOINTED');

-- CreateEnum
CREATE TYPE "BriefingStatus" AS ENUM ('YES', 'NO');

-- CreateTable
CREATE TABLE "Tender" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "closingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closingTime" TEXT NOT NULL DEFAULT '10:00',
    "status" "TenderStatus" NOT NULL DEFAULT 'OPEN',
    "client" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "company" TEXT NOT NULL,

    CONSTRAINT "Tender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
