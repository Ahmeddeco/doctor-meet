import { z } from 'zod';
import { AppointmentStatusSchema } from '../inputTypeSchemas/AppointmentStatusSchema'

/////////////////////////////////////////
// APPOINTMENT SCHEMA
/////////////////////////////////////////

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

export type Appointment = z.infer<typeof AppointmentSchema>

export default AppointmentSchema;
