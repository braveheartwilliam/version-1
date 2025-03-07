// src/routes/protected/+page.server.ts
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	console.log('load - home  ', 'locals', locals);

	// Check if the user is authenticated
	// if (!locals.user) {
	// 	throw redirect(303, '/login');
	// }

	// Check if the user is authorized (e.g., has a specific role)
	if (locals?.user?.role === 'admin' || locals?.user?.role === 'user') {
		return { user: locals.user };
	} else {
		throw redirect(303, '/unauthorized');
	}

	// If authenticated and authorized, return user data
};
