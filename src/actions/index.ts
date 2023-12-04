'use server';
import prisma from '@/prisma/client';
import { unstable_noStore as noStore } from 'next/cache';

const getTotalTenders = async () => {
  const totalTenders = await prisma.tender.count();
  return totalTenders;
};

const getTotalBriefings = async () => {
  const totalBriefings = await prisma.briefing.count();
  return totalBriefings;
};

const getAllTenders = async () => {
  const allTenders = await prisma.tender.findMany();
  return allTenders;
};

const getAllBriefings = async () => {
  const allBriefings = await prisma.briefing.findMany();
  return allBriefings;
};

const YearToDateTenders = async () => {
  const totalTendersYearToDate = await prisma.tender.count({
    where: {
      closingDate: {
        gte: new Date(new Date().getFullYear(), 0, 1),
        lte: new Date(new Date().getFullYear() + 1, 0, 1),
      },
    },
  });
  return totalTendersYearToDate;
};

const MonthToDateTenders = async () => {
  const totalTendersMonthToDate = await prisma.tender.count({
    where: {
      closingDate: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      },
    },
  });
  return totalTendersMonthToDate;
};

const nextClosingTenders = async () => {
  const currentDate = new Date();

  const nextTenders = await prisma.tender.findMany({
    where: {
      closingDate: {
        gte: currentDate, // Fetch tenders closing on or after the current date
      },
    },
    orderBy: [
      {
        closingDate: 'asc', // Order by closing date in ascending order
      },
      {
        closingTime: 'asc', // Order by closing time in ascending order
      },
    ],
    take: 7, // Limit the result to the next 7 tenders
  });

  return nextTenders;
};

export {
  getAllTenders,
  getTotalTenders,
  getAllBriefings,
  getTotalBriefings,
  YearToDateTenders,
  MonthToDateTenders,
  nextClosingTenders,
};
