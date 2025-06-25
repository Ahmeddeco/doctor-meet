import { z } from 'zod';

export const AppointmentScalarFieldEnumSchema = z.enum(['id','patientId','doctorId','startTime','endTime','status','notes','patientDescription','videoSessionId','videoSessionToken','createdAt','updatedAt']);

export default AppointmentScalarFieldEnumSchema;
