// the following is from Grok3

// src/routes/login/+page.server.ts
import { auth } from '$lib/auth/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { cookies } from '@sveltejs/kit';
export const actions: Actions = {
	default: async ({ request, cookies }) => {
		// const formData = await request.formData();
		// const email = formData.get('email')?.toString();

		// *************  hard code password so doesn't have to be entered
		// const password = formData.get('password')?.toString();
		const email = '2fH0H@example.com';
		const password = '12345Wonk@';
		// *************  hard code password so doesn't have to be entered

		// if (!email || !password) {
		// 	return fail(400, { message: 'Email and password are required' });
		// }
		// console.log('login email', email, 'login password', password);

		// console.log('??????? login - before try - headers', request.headers, cookies);
		// const cookieValue = request.headers.get('cookie');
		// let reqCookieName = '';
		// if (cookieValue) {
		// 	reqCookieName = cookieValue.split('=')[0];
		// 	console.log('GETSETCOOKIE - login - before try', reqCookieName);
		// } else {
		// 	console.log('No cookie value found');
		// }

		// console.log('GETSETCOOKIE - login - before try', reqCookieName);

		try {
			const loginResponse = await auth.api.signInEmail({
				body: {
					email: email,
					password: password
				},
				asResponse: true,
				headers: request.headers
			});
			console.log('login page.server - headers', request.headers);
			console.log('%$#%$#@%$#@%$#@ login - loginResponse', loginResponse);

			// console.log('login - session', JSON.stringify(loginResponse, null, 2));
			// console.log('***login - session', loginResponse.headers);
			// console.log(
			// `@@@@@loginResponse.headers.get('set-cookie')`,
			// loginResponse.headers.get('set-cookie')
			// );
			// if (!loginResponse.token) {
			// 	throw new Error('No token returned');
			// }
			// request.headers.set('Cookie', loginResponse.headers.get('set-cookie')?.toString() ?? '');
			// console.log('%%%%%%%request.headers', request.headers);

			// new code to set cookie in header so passed to next page

			// const setCookieHeader = loginResponse.headers.get('set-cookie');
			// console.log('login - set-cookie:', setCookieHeader);

			// if (!setCookieHeader) {
			// 	throw new Error('No set-cookie header returned');
			// }

			// const cookieParts = setCookieHeader.split(';').flatMap((item) => item.split(','));
			// console.log('1111 cookieParts', cookieParts);
			// const cookieName = cookieParts[0].split('=')[0]; // e.g., "better-auth.session_token"
			// console.log('2222 cookieName', cookieName);

			// // const [nameValue] = cookieParts[0].split('=');
			// // const cookieName = nameValue.split('=')[0]; // e.g., "better-auth.session_token"
			// let cookieValue = cookieParts[0].split('=')[1]; // Signed token
			// console.log('3333 cookieValue', cookieValue);
			// console.log('+!+!+!+!+ cookieParts', cookieParts[1]);

			// console.log('#$%#$%#$% cookieParts-Options', cookieParts[1]);

			// // const cookieValue = nameValue.split('=')[1]; // Signed token
			// const options: Record<string, string> = {};
			// cookieParts.slice(1).forEach((part) => {
			// 	const [key, val] = part.trim().split('=');
			// 	console.log('HhHhHhHhH Options key', key, 'val', val);

			// 	options[key.toLowerCase()] = (val || true) as string;
			// });
			// console.log(
			// 	'WwWwWwWw -new cookie - cookieName',
			// 	cookieName,
			// 	'cookieValue',
			// 	cookieValue,
			// 	'options',
			// 	options
			// );
			// // ********  trying just the token
			// cookieValue = cookieValue.split('.')[0];
			// // ********  trying just the token

			// // Set the cookie using cookies.set
			// const newCookie = cookies.set(reqCookieName, cookieValue, {
			// 	path: '/',
			// 	maxAge: 60 * 60 * 24 * 30, // 30 days
			// 	expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000), // 30 days
			// 	httpOnly: true,
			// 	secure: process.env.NODE_ENV === 'production',
			// 	sameSite: 'lax'
			// });

			// // 	path: options.path || '/',
			// // 	maxAge: options['max-age'] ? parseInt(options['max-age']) : undefined,
			// // 	expires: options.expires ? new Date(options.expires) : undefined,
			// // 	httpOnly: options.httponly !== undefined,
			// // 	secure: options.secure !== undefined || process.env.NODE_ENV === 'production',
			// // 	sameSite: (options.samesite as 'lax' | 'strict' | 'none' | undefined) || 'lax'
			// // });

			// console.log('ALL COOKIES:');
			// const cookie = cookies.getAll();
			// console.log(cookie.expires);

			// console.log('ZzZzZzZzZ -new cookie - cookies', cookies.getAll());
			// console.log('YyYyYyYyY -new result.header', request.headers, request.headers);

			// Clear old better-auth-session cookie
			// cookies.delete('better-auth-session', { path: '/' });
			// console.log('login - cleared old better-auth-session');
		} catch (e) {
			console.log('login catch', e);

			return fail(401, { message: 'Invalid credentials' });
		}
		throw redirect(302, '/home');
	}
};
