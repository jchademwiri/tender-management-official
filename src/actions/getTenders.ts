'use server';

import prisma from '@/prisma/client';

const getTenders = async () => {
  const totalTenders = await prisma.tender.count();
  console.log(totalTenders);
};
export default getTenders;
