import type { LayoutServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/delete-auth/auth';
import { json } from '@sveltejs/kit';
import { reader } from 'stream';

export const load: LayoutServerLoad = async ({ request }) => {
	console.log('Login - layout.server.ts - load', request.headers);

	const session = await auth.api.getSession({
		headers: request.headers,
		asResponse: true
	});
	if (!session) {
		console.log('Layout: No session');
		console.log('Layout: session', session);

		// throw redirect(302, '/login');
	}
	console.log('Layout: session', session);
	const reader = session?.body?.getReader();
	const data = await reader?.read();
	console.log('data', data);
	console.log('Layout: session.body', session.body);
	console.log('Layout: session.headers', JSON.stringify(session.headers));

	// if (session.user.role !== 'admin') {
	// 	console.log('Admin : Not admin');
	// 	// throw error(403, 'Forbidden');
	// }
	return undefined;
};
