// src/lib/schemas/account.ts
import { z } from 'zod';
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { account } from '../../server/auth/auth-schema';

// Select schema (for querying accounts)
export const accountSelectSchema = createSelectSchema(account).extend({
	id: z.string().min(1, 'ID is required'),
	accountId: z.string().min(1, 'Account ID is required'),
	providerId: z.string().min(1, 'Provider ID is required'),
	userId: z.string().min(1, 'User ID is required'),
	accessToken: z.string().nullable(),
	refreshToken: z.string().nullable(),
	idToken: z.string().nullable(),
	accessTokenExpiresAt: z
		.number()
		.int()
		.nullable()
		.transform((val) => (val ? new Date(val) : null)),
	refreshTokenExpiresAt: z
		.number()
		.int()
		.nullable()
		.transform((val) => (val ? new Date(val) : null)),
	scope: z.string().nullable(),
	password: z.string().nullable(), // Optional password field
	createdAt: z
		.number()
		.int()
		.transform((val) => new Date(val)),
	updatedAt: z
		.number()
		.int()
		.transform((val) => new Date(val))
});

export type AccountSelect = z.infer<typeof accountSelectSchema>;

// Insert schema (for creating accounts)
export const accountInsertSchema = createInsertSchema(account)
	.omit({ id: true, createdAt: true, updatedAt: true }) // Auto-generated
	.extend({
		accountId: z.string().min(1, 'Account ID is required'),
		providerId: z.string().min(1, 'Provider ID is required'),
		userId: z.string().min(1, 'User ID is required'),
		accessToken: z.string().optional(),
		refreshToken: z.string().optional(),
		idToken: z.string().optional(),
		accessTokenExpiresAt: z
			.number()
			.int()
			.nullable()
			.transform((val) => (val ? new Date(val) : null)),
		refreshTokenExpiresAt: z
			.number()
			.int()
			.nullable()
			.transform((val) => (val ? new Date(val) : null)),
		scope: z.string().optional(),
		password: z.string().min(8, 'Password must be at least 8 characters').optional()
	});

export type AccountInsert = z.infer<typeof accountInsertSchema>;
