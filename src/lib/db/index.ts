'use server';
import prisma from '@/prisma/client';
import { unstable_noStore as noStore } from 'next/cache';

const currentDate = new Date();

const getTotalTenders = async () => {
  const totalTenders = await prisma.tender.count();
  return totalTenders;
};

const getCompanies = async () => {
  const companies = await prisma.company.findMany();
};

const getAllSubmitedTenders = async () => {
  const totalSubmitedTenders = await prisma.tender.count({
    where: {
      status: 'SUBMITTED',
    },
  });
  return totalSubmitedTenders;
};

const getTotalBriefings = async () => {
  const totalBriefings = await prisma.briefing.count();
  return totalBriefings;
};

const getAllTenders = async () => {
  const allTenders = await prisma.tender.findMany({
    // where: {
    //   closingDate: {
    //     gte: currentDate, // Fetch tenders closing on or after the current date
    //   },
    // },
    orderBy: {
      status: 'asc', // asc or 'desc' for descending order
    },
  });
  return allTenders;
};

const getAllOpenTenders = async () => {
  const allOpenTenders = await prisma.tender.findMany({
    where: {
      closingDate: {
        gte: currentDate, // Fetch tenders closing on or after the current date
      },
      status: {
        in: ['IN_PROGRESS', 'OPEN'],
      },
    },
    orderBy: {
      status: 'desc', // asc or 'desc' for descending order
    },
  });
  return allOpenTenders;
};

const getSubmitedTenders = async () => {
  const submittedTenders = await prisma.tender.findMany({
    where: {
      status: 'SUBMITTED',
    },
    orderBy: {
      closingDate: 'desc', // or 'desc' for descending order
    },
  });
  return submittedTenders;
};
const getAppointedTenders = async () => {
  const appointedTenders = await prisma.tender.findMany({
    where: {
      status: 'APPOINTED',
    },
    orderBy: {
      closingDate: 'desc', // or 'desc' for descending order
    },
  });
  return appointedTenders;
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
      status: 'SUBMITTED',
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
      status: 'SUBMITTED',
    },
  });
  return totalTendersMonthToDate;
};

const nextClosingTenders = async () => {
  const nextTenders = await prisma.tender.findMany({
    where: {
      closingDate: {
        gte: currentDate, // Fetch tenders closing on or after the current date
      },
      status: {
        in: ['IN_PROGRESS', 'OPEN'],
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
  getAllSubmitedTenders,
  getSubmitedTenders,
  getAllOpenTenders,
  getAppointedTenders,
  getAllBriefings,
  getTotalBriefings,
  getCompanies,
  YearToDateTenders,
  MonthToDateTenders,
  nextClosingTenders,
};
