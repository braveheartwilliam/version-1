import { auth } from '$lib/auth/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Get the session
	console.log('hooks - event.request', event.request);
	console.log('hooks - locals', event.locals);
	console.log('hooks - event.url.pathname', event.url.pathname);

	if (event.locals) {
		delete event.locals.session;
		delete event.locals.user;
	}
	const fromUrl = event.request.url;
	if (fromUrl.endsWith('air') || fromUrl.endsWith('plumbing') || fromUrl.endsWith('fixit')) {
		return svelteKitHandler({ event, resolve, auth });
	}
	if (event.url.pathname === '/login') {
		console.log('hooks - event.url.pathname is /login');
		// return resolve(event);
		// redirect(308, '/login');
		return svelteKitHandler({ event, resolve, auth });
	} else if (event.url.pathname === '/' || event.url.pathname === '') {
		console.log('hooks - event.url.pathname is /');
		// return resolve(event);
		redirect(308, '/signup-login');
		// return svelteKitHandler({ event, resolve, auth });
	}

	const response = await svelteKitHandler({ event, resolve, auth });

	console.log('hooks - response', response);

	const session = await auth.api.getSession({
		headers: event.request.headers
	});
	console.log('hooks - session', session);

	if (!session) {
		console.log('Hooks : No session');
		throw redirect(302, '/login');
	}
	// Set session and user to locals
	event.locals.session = session?.session;
	event.locals.user = session?.user;

	// return resolve(event);

	return svelteKitHandler({ event, resolve, auth });
};
