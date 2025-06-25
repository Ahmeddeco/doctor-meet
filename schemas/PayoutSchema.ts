import PayoutStatusSchema from '@/prisma/generated/inputTypeSchemas/PayoutStatusSchema'
import { z } from 'zod'

export const PayoutSchema = z.object({
  status: PayoutStatusSchema,
  id: z.string(),
  doctorId: z.string(),
  amount: z.number(),
  credits: z.number(),
  platformFee: z.number(),
  netAmount: z.number(),
  paypalEmail: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  processedAt: z.date().nullish(),
  processedBy: z.string().nullish(),
})

