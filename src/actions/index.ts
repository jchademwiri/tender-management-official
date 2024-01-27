'use server';
import { Company } from '@/components/Forms/CreateCompany';
import { Tender } from '@/components/Forms/CreateTender';
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

const addTender = async (tender: Tender) => {
  await prisma.tender.create({
    data: {
      number: tender.number,
      description: tender.description,
      closingDate: tender.closingDate,
      closingTime: tender.closingTime,
      client: tender.client,
      company: tender.company,
    },
  });
  revalidatePath('/dashboard');
};

export { addCompany, addTender };
