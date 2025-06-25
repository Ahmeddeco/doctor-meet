import AppointmentStatusSchema from '@/prisma/generated/inputTypeSchemas/AppointmentStatusSchema'
import { z } from 'zod'


export const AppointmentSchema = z.object({
  status: AppointmentStatusSchema,
  id: z.string(),
  patientId: z.string(),
  doctorId: z.string(),
  startTime: z.date(),
  endTime: z.date(),
  notes: z.string().nullish(),
  patientDescription: z.string().nullish(),
  videoSessionId: z.string().nullish(),
  videoSessionToken: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
