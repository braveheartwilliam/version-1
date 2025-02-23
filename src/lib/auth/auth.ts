import { betterAuth } from 'better-auth';
import { dbAUTH } from '../../lib/server/db'; //  lib/server/db/index.ts
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

export const auth = betterAuth({
	database: drizzleAdapter( dbAUTH, { provider: 'sqlite' } ),
	emailAndPassword: {
		enabled: true,			
	}
});
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