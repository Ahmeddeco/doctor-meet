import { z } from 'zod';
import { TransactionTypeSchema } from '../inputTypeSchemas/TransactionTypeSchema'

/////////////////////////////////////////
// CREDIT TRANSACTION SCHEMA
/////////////////////////////////////////

export const CreditTransactionSchema = z.object({
  type: TransactionTypeSchema,
  id: z.string(),
  userId: z.string(),
  amount: z.number(),
  packageId: z.string().nullish(),
  createdAt: z.date(),
})

export type CreditTransaction = z.infer<typeof CreditTransactionSchema>

export default CreditTransactionSchema;
