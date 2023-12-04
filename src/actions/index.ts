import prisma from '@/prisma/client';

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

export { getAllTenders, getTotalTenders, getAllBriefings, getTotalBriefings };
