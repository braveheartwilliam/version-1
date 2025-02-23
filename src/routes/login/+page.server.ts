// the following is from Grok3

// src/routes/login/+page.server.ts
import { auth } from '$lib/auth/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
// import data from './+page.svelte';
// let { pageData } = data;
// let message = pageData;
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

		if (!email || !password) {
			return fail(400, { message: 'Email and password are required' });
		}
		console.log('login email', email, 'login password', password);

		try {
			const loginResponse = await auth.api.signInEmail({
				body: {
					email: email,
					password: password
				},
				asResponse: true
			});
			console.log('login - session', loginResponse);

			// cookies.set('session', loginResponse.session.id, {
			// 	path: '/',
			// 	expires: loginResponse.session.expiresAt
			// });
		} catch (e) {
			console.log('login catch', e);

			// return fail(401, { message: 'Invalid credentials' });
		}
		throw redirect(303, '/home');
	}
};
