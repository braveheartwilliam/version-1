/// from Grok 3
// src/routes/sign-up/+page.server.ts
import { auth } from '$lib//auth/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();
		console.log('signup email', email, 'signup password', password);

		if (!email || !password) {
			console.log('signup - no email and/or no password');

			return fail(400, { message: 'Email and password are required' });
		}
		console.log('signup - before try');

		try {
			const response = await auth.api.signUpEmail({
				body: {
					email: email,
					password: password,
					name: email.split('@')[0]
				}
			});
			console.log('signup response', response);

			throw redirect(303, '/login');
		} catch (e) {
			console.log('signup catch', e);

			return fail(400, { message: 'Sign-up failed, email might already exist' });
		}
	}
};
