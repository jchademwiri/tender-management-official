'use server';

import { Company } from '@/components/Forms/CreateCompany';
import prisma from '@/prisma/client';
import { revalidatePath } from 'next/cache';

const addCompany = async (company: Company) => {
  await prisma.company.create({
    data: {
      name: company.name,
    },
  });

  revalidatePath('/dashboard');

  return { success: true };
};

export { addCompany };
