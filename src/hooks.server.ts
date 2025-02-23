
//***** Just below is from Grok3 */

//import type { Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ event, resolve }) => {
	// const session = await auth.handlers.session(event);
	// event.locals.session = session;
	// event.locals.user = session?.user;
	// return resolve(event);
// };
//
import { auth } from '$lib/auth/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';

export async function handle({ event, resolve }) {
	return svelteKitHandler({ event, resolve, auth });
}