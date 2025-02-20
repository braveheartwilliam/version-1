import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// export const user = sqliteTable('user', {
// 	id: text('id').primaryKey(),
// 	age: integer('age'),
// 	username: text('username').notNull().unique(),
// 	passwordHash: text('password_hash').notNull()
// });

// export const session = sqliteTable('session', {
// 	id: text('id').primaryKey(),
// 	userId: text('user_id')
// 		.notNull()
// 		.references(() => user.id),
// 	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
// });

// export type Session = typeof session.$inferSelect;

// export type User = typeof user.$inferSelect;

export const tbl1 = sqliteTable('tbl1', {
	one: text('one').notNull(),
	two: text('two').notNull()
});

export type Tbl1 = typeof tbl1.$inferSelect;
