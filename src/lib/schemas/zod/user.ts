// src/lib/schemas/user.ts
import { z } from 'zod';
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { user } from '../../server/auth/auth-schema';

// Select schema (for querying users)
export const userSelectSchema = createSelectSchema(user).extend({
	id: z.string().min(1, 'ID is required'),
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	emailVerified: z.boolean(),
	image: z.string().nullable(), // Optional field
	createdAt: z
		.number()
		.int()
		.transform((val) => new Date(val)), // Timestamp to Date
	updatedAt: z
		.number()
		.int()
		.transform((val) => new Date(val)),
	role: z.string().optional(), // Could be z.enum(['user', 'admin']) if roles are fixed
	banned: z.boolean().nullable(),
	banReason: z.string().nullable(),
	banExpires: z
		.number()
		.int()
		.nullable()
		.transform((val) => (val ? new Date(val) : null)),
	password: z.string().min(1, 'Password is required') // Hashed password (Grok 3 addition)
});

export type UserSelect = z.infer<typeof userSelectSchema>;

// Insert schema (for creating users)
export const userInsertSchema = createInsertSchema(user)
	.omit({ id: true, createdAt: true, updatedAt: true }) // Auto-generated
	.extend({
		name: z.string().min(1, 'Name is required').max(100),
		email: z.string().email('Invalid email address'),
		emailVerified: z.boolean().default(false),
		image: z.string().optional(),
		role: z.string().default('user'),
		banned: z.boolean().default(false).optional(),
		banReason: z.string().optional(),
		banExpires: z
			.number()
			.int()
			.nullable()
			.transform((val) => (val ? new Date(val) : null)),
		password: z.string().min(8, 'Password must be at least 8 characters') // Pre-hash validation
	});

export type UserInsert = z.infer<typeof userInsertSchema>;
