import { z } from 'zod';

export const AvailabilityScalarFieldEnumSchema = z.enum(['id','doctorId','startTime','endTime','status']);

export default AvailabilityScalarFieldEnumSchema;
