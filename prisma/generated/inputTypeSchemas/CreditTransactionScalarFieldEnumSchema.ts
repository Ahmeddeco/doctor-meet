import { z } from 'zod';

export const CreditTransactionScalarFieldEnumSchema = z.enum(['id','userId','amount','type','packageId','createdAt']);

export default CreditTransactionScalarFieldEnumSchema;
