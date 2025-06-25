import { z } from 'zod';

export const VerificationStatusSchema = z.enum(['PENDING','VERIFIED','REJECTED']);

export type VerificationStatusType = `${z.infer<typeof VerificationStatusSchema>}`

export default VerificationStatusSchema;
