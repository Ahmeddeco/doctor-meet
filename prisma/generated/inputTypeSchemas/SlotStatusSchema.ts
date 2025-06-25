import { z } from 'zod';

export const SlotStatusSchema = z.enum(['AVAILABLE','BOOKED','BLOCKED']);

export type SlotStatusType = `${z.infer<typeof SlotStatusSchema>}`

export default SlotStatusSchema;
