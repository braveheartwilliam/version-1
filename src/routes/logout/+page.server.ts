// the following from Grok3

// src/routes/logout/+page.server.ts
import { auth } from '$lib/delete-auth/auth';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ cookies }) => {
		const sessionId = cookies.get('session');
		if (sessionId) {
			await auth.api.signOut({ sessionId });
			cookies.delete('session', { path: '/' });
		}
		throw redirect(303, '/login');
	}
};
