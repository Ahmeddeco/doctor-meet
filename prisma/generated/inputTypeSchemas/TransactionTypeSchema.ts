import { z } from 'zod';

export const TransactionTypeSchema = z.enum(['CREDIT_PURCHASE','APPOINTMENT_DEDUCTION','ADMIN_ADJUSTMENT']);

export type TransactionTypeType = `${z.infer<typeof TransactionTypeSchema>}`

export default TransactionTypeSchema;
