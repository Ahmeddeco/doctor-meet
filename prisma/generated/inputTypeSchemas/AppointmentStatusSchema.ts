import { z } from 'zod';

export const AppointmentStatusSchema = z.enum(['SCHEDULED','COMPLETED','CANCELLED']);

export type AppointmentStatusType = `${z.infer<typeof AppointmentStatusSchema>}`

export default AppointmentStatusSchema;
