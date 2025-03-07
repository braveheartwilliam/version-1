import { betterAuth } from 'better-auth';
import { dbAUTH } from '../server/db'; //  lib/server/db/index.ts
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { account, session, user, verification } from './auth-schema';
import type { InferSelectModel } from 'drizzle-orm';

type User = InferSelectModel<typeof user>;
type Session = InferSelectModel<typeof session>;

export const auth = betterAuth({
	database: drizzleAdapter(dbAUTH, {
		provider: 'sqlite',
		schema: { user, session, account, verification }
	}),

	session: {
		strategy: 'database',
		// storeSessionInDatabase: true,
		// preserveSessionInDatabase: true,
		secret: process.env.BETTER_AUTH_SECRET,

		expiresIn: 30 * 24 * 60 * 60,
		onSession: async (ctx, session) => {
			// You can access the ctx object here
			console.log('From db update', 'ctx', ctx, 'session', session);
		},
		freshAge: 60 * 5,
		cookieCache: {
			maxAge: 60 * 60 * 24 * 30,
			enabled: true
		},
		cookie: {
			name: 'better-auth.session_token',
			path: '/',
			maxAge: 60 * 60 * 24 * 30, // 30 days
			secure: process.env.NODE_ENV === 'production',
			httpOnly: true,
			sameSite: 'Lax'
		}
	},
	emailAndPassword: {
		enabled: true
		// async onSignIn({ user, session }: { user: User; session: Session }) {
		// 	console.log('auth - onSignIn - user', user, 'session', session);

		// 	return { session, user };
	},

	// advanced: {
	// useSecureCookies: true,
	// cookiePrefix: 'version1',
	// session_token: {
	// 	name: 'version1_token'
	// }

	user: {
		additionalFields: {
			role: {
				type: 'string',
				default: 'user', // Set default role to 'user'
				enum: ['user', 'moderator', 'admin']
			}
		}
	}
});
// type Session = typeof auth.$Infer.Session;
//  may need to add the following to the end of the file:
// schema: {
//          ...schema,
//         user: schema.users,
//       },
//       //if all of them are just using plural form, you can just pass the option below
//     usePlural: true

// Grok 3 adds
// emailAndPassword: {
// enabled: true,
// },
// after "database: drizzleAdapter(dbAUTH, { provider: 'sqlite' })"
// export const auth = betterAuth({
//database: drizzleAdapter(db, {
//  provider: "sqlite",
//  usersTable: users,
//  sessionsTable: sessions,
//// }),
// emailAndPassword: {
//   enabled: true,
//  },
//});
// and changes ** import { db, users, sessions } from "$lib/server/db";
