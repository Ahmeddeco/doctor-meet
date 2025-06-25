import { z } from 'zod';

export const PayoutScalarFieldEnumSchema = z.enum(['id','doctorId','amount','credits','platformFee','netAmount','paypalEmail','status','createdAt','updatedAt','processedAt','processedBy']);

export default PayoutScalarFieldEnumSchema;
