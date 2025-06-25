import { z } from 'zod'
import { UserRoleSchema } from '../inputTypeSchemas/UserRoleSchema'
import { VerificationStatusSchema } from '../inputTypeSchemas/VerificationStatusSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

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

export type User = z.infer<typeof UserSchema>

export default UserSchema
