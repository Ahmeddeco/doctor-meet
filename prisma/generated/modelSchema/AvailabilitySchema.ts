import { z } from 'zod';
import { SlotStatusSchema } from '../inputTypeSchemas/SlotStatusSchema'

/////////////////////////////////////////
// AVAILABILITY SCHEMA
/////////////////////////////////////////

export const AvailabilitySchema = z.object({
  status: SlotStatusSchema,
  id: z.string(),
  doctorId: z.string(),
  startTime: z.date(),
  endTime: z.date(),
})

export type Availability = z.infer<typeof AvailabilitySchema>

export default AvailabilitySchema;
