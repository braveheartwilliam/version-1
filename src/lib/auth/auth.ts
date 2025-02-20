import { betterAuth } from 'better-auth';
import { dbAUTH } from '../../lib/server/db';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

export const auth = betterAuth({
	database: drizzleAdapter(dbAUTH, { provider: 'sqlite' })
});
//  may need to add the following to the end of the file:
// schema: {
//          ...schema,
//         user: schema.users,
//       },
//       //if all of them are just using plural form, you can just pass the option below
//       usePlural: true
