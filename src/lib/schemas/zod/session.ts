// src/lib/schemas/session.ts
import { z } from 'zod';
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';
import { session } from '../../server/auth/auth-schema';

// Select schema (for querying sessions)
export const sessionSelectSchema = createSelectSchema(session).extend({
	id: z.string().min(1, 'ID is required'),
	expiresAt: z
		.number()
		.int()
		.transform((val) => new Date(val)),
	token: z.string().min(1, 'Token is required'),
	createdAt: z
		.number()
		.int()
		.transform((val) => new Date(val)),
	updatedAt: z
		.number()
		.int()
		.transform((val) => new Date(val)),
	ipAddress: z.string().nullable(),
	userAgent: z.string().nullable(),
	userId: z.string().min(1, 'User ID is required'),
	impersonatedBy: z.string().nullable()
});

export type SessionSelect = z.infer<typeof sessionSelectSchema>;

// Insert schema (for creating sessions)
export const sessionInsertSchema = createInsertSchema(session)
	.omit({ id: true, createdAt: true, updatedAt: true }) // Auto-generated
	.extend({
		expiresAt: z
			.number()
			.int()
			.transform((val) => new Date(val)),
		token: z.string().min(1, 'Token is required'),
		ipAddress: z.string().optional(),
		userAgent: z.string().optional(),
		userId: z.string().min(1, 'User ID is required'),
		impersonatedBy: z.string().optional()
	});

export type SessionInsert = z.infer<typeof sessionInsertSchema>;
