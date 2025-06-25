import UserRoleSchema from '@/prisma/generated/inputTypeSchemas/UserRoleSchema'
import VerificationStatusSchema from '@/prisma/generated/inputTypeSchemas/VerificationStatusSchema'
import { z } from 'zod'

export const UserSchema = z.object({
  role: UserRoleSchema,
  verificationStatus: VerificationStatusSchema.nullish(),
  id: z.string(),
  clerkUserId: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  imageUrl: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  credits: z.number(),
  specialty: z.string().nullish(),
  experience: z.number().nullish(),
  credentialUrl: z.string().nullish(),
  description: z.string().nullish(),
})
