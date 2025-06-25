import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','clerkUserId','email','name','imageUrl','role','createdAt','updatedAt','credits','specialty','experience','credentialUrl','description','verificationStatus']);

export default UserScalarFieldEnumSchema;
