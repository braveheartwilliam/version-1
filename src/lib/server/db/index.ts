import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/delete-auth/auth-schema';
console.log('env.DATABASE_URL', env.DATABASE_URL);

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
const client = new Database(env.DATABASE_URL);
console.log('client', client);

export const db = drizzle(client);
console.log('db', db);

// +++++++++++++++  AUTH +++++++++++++++

console.log('env.AUTH_DATABASE_URL', env.AUTH_DATABASE_URL);

if (!env.AUTH_DATABASE_URL) throw new Error('AUTH_DATABASE_URL is not set');
const verboseLogger = (message: unknown, ...args: unknown[]) => console.log(message, ...args);
const client2 = new Database(env.AUTH_DATABASE_URL, { verbose: verboseLogger });
console.log('client2', client2);

export const dbAUTH = drizzle(client2, { schema });
console.log('dbAUTH', dbAUTH);
