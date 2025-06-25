import { z } from 'zod';

export const UserRoleSchema = z.enum(['UNASSIGNED','PATIENT','DOCTOR','ADMIN']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export default UserRoleSchema;
