import { db } from '$lib/server/db/index';
import { tbl1 } from '$lib/server/db/schema';
import type { Tbl1 } from '$lib/server/db/schema';

export async function load() {
	console.log('load - plumbing  ', 'db', db);
	// const tbl1 = db.tbl1;

	const result: Tbl1[] = await db.select({one: tbl1.one, two: tbl1.two}).from(tbl1);
	console.log('result', result);

	return { result };
}
