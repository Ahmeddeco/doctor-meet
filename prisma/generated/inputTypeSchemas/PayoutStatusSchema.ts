import { z } from 'zod';

export const PayoutStatusSchema = z.enum(['PROCESSING','PROCESSED']);

export type PayoutStatusType = `${z.infer<typeof PayoutStatusSchema>}`

export default PayoutStatusSchema;
