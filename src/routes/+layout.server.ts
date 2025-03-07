import type { LayoutServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/auth/auth';

export const load: LayoutServerLoad = async ({ request }) => {
	console.log('layout.server.ts - load', request.headers);

// 	const session = await auth.api.getSession({
// 		headers: request.headers
// 	});
// 	console.log('routes/+layout.server.ts - session', session);

// 	if (!session) {
// 		console.log('Admin : No session');
// 		throw redirect(302, '/login');
// 	}
// 	if (session.user.role !== 'admin') {
// 		console.log('Admin : Not admin');
// 		throw error(403, 'Forbidden');
// 	}
};
