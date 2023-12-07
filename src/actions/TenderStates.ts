import prisma from '@/prisma/client';

const MonthToDateTenders = async () => {
  const totalTendersMonthToDate = await prisma.tender.count({
    where: {
      closingDate: {
        gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      },
    },
  });
  const appointedTenders = await prisma.tender.findMany({
    where: {
      Status: 'APPOINTED',
    },
    orderBy: {
      closingDate: 'desc', // or 'desc' for descending order
    },
  });
  return [totalTendersMonthToDate, appointedTenders];
};

export { MonthToDateTenders };
