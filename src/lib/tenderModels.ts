import { z } from 'zod';

// Zod schema for the Status enum
const TenderStatus = z.enum(['OPEN', 'IN_PROGRESS', 'SUBMITTED', 'APPOINTED']);

// Zod schema for the BriefingStatus enum
const BriefingStatus = z.enum(['YES', 'NO']);

// Zod schema for the Tender model
const TenderSchema = z.object({
  number: z.string(),
  description: z.string(),
  closingDate: z.date(),
  closingTime: z.string(),
  Status: TenderStatus,
  client: z.string(),
  hasBriefing: BriefingStatus,
  briefing: z
    .object({
      id: z.string(),
      tenderId: z.string(),
      date: z.date(),
      location: z.string(),
    })
    .nullable(),
  companies: z.array(
    z.object({
      tender: z.object({
        id: z.string(),
        number: z.string(),
        description: z.string(),
        closingDate: z.date(),
        closingTime: z.string(),
        Status: TenderStatus,
        client: z.string(),
        hasBriefing: BriefingStatus,
        createdAt: z.date(),
        updatedAt: z.date(),
        briefing: z
          .object({
            id: z.string(),
            tenderId: z.string(),
            date: z.date(),
            location: z.string(),
            createdAt: z.date(),
            updatedAt: z.date(),
          })
          .nullable(),
      }),
      tenderId: z.string(),
      company: z.object({
        id: z.string(),
        name: z.string(),
        tenders: z.array(
          z.object({
            tenderId: z.string(),
            tender: z.object({
              id: z.string(),
              number: z.string(),
              description: z.string(),
              closingDate: z.date(),
              closingTime: z.string(),
              Status: TenderStatus,
              client: z.string(),
              hasBriefing: BriefingStatus,
              createdAt: z.date(),
              updatedAt: z.date(),
              briefing: z
                .object({
                  id: z.string(),
                  tenderId: z.string(),
                  date: z.date(),
                  location: z.string(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
                })
                .nullable(),
            }),
            assignedAt: z.date(),
          })
        ),
        tenderId: z.string().nullable(),
      }),
      companyId: z.string(),
      assignedAt: z.date(),
    })
  ),
  companyId: z.string(),
});

// Zod schema for the Company model
const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  tenders: z.array(
    z.object({
      tender: TenderSchema,
      tenderId: z.string(),
      company: z.object({
        id: z.string(),
        name: z.string(),
        tenders: z.array(
          z.object({
            tenderId: z.string(),
            tender: TenderSchema,
            assignedAt: z.date(),
          })
        ),
        tenderId: z.string().nullable(),
      }),
      companyId: z.string(),
      assignedAt: z.date(),
    })
  ),
  tenderId: z.string().nullable(),
});

// Zod schema for the Briefing model
const BriefingSchema = z.object({
  id: z.string(),
  tenderId: z.string(),
  tender: TenderSchema,
  date: z.date(),
  location: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export {
  TenderStatus,
  BriefingStatus,
  TenderSchema,
  CompanySchema,
  BriefingSchema,
};


export type {};
