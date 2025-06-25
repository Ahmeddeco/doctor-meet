import TransactionTypeSchema from '@/prisma/generated/inputTypeSchemas/TransactionTypeSchema'
import { z } from 'zod'

export const CreditTransactionSchema = z.object({
  type: TransactionTypeSchema,
  id: z.string(),
  userId: z.string(),
  amount: z.number(),
  packageId: z.string().nullish(),
  createdAt: z.date(),
})

