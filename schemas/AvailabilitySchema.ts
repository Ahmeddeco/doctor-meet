import SlotStatusSchema from '@/prisma/generated/inputTypeSchemas/SlotStatusSchema'
import { z } from 'zod'


export const AvailabilitySchema = z.object({
  status: SlotStatusSchema,
  id: z.string(),
  doctorId: z.string(),
  startTime: z.date(),
  endTime: z.date(),
})
