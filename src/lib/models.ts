import z from 'zod';

const companyFormSchema = z.object({
  name: z.string().min(2, {
    message: 'A company name is required.',
  }),
});

type Company = z.infer<typeof companyFormSchema>;

const tenderFormSchema = z.object({
  number: z.string().min(2, {
    message: 'Tender Number must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Tender description must be at least 2 characters.',
  }),
  closingDate: z.date({
    required_error: 'A closing date is required.',
  }),
  closingTime: z.string().min(2, {
    message: 'Closing Time must be at least 2 characters.',
  }),
  status: z.string().optional(),
  client: z.string().min(2, {
    message: 'Company  must be at least 2 characters.',
  }),
  company: z.string({
    required_error: 'A client is required.',
  }),
});

type Tender = z.infer<typeof tenderFormSchema>;

export { companyFormSchema, tenderFormSchema };

export type { Company, Tender };
