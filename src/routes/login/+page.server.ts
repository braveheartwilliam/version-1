// the following is from Grok3

// src/routes/login/+page.server.ts
import type { PageServerLoad } from './$types';
import { auth } from '$lib/auth/auth';
import { fail, redirect, type Cookies } from '@sveltejs/kit';
// import type { Actions } from '@sveltejs/kit';
// export const actions: Actions = {
// default: async ({ request, cookies }) => {

export const load: PageServerLoad = async ({ request, cookies, locals }) => {
	console.log('login page.server.ts - load', request);

	// const formData = await request.formData();
	// const email = formData.get('email')?.toString();

	// *************  hard code password so doesn't have to be entered
	// const password = formData.get('password')?.toString();
	const email = 'braveheartwilliam@protonmail.com';
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

		// ****************  Set Locals
		// locals.user = {
		// 	email: loginResponse.user.email,
		// 	role: 'user',
		// 	id: loginResponse.user.id // Assuming loginResponse.user has an email
		// };
		// console.log('locals-email', locals.user.email);
		// console.log('locals-role', locals.user.role);
		// *************  Set Locals

		// *** parser signin cookie to decode token

		const setCookieHeader = loginResponse.headers.get('set-cookie');
		if ( setCookieHeader )
		{
			const parsedCookie = setCookieHeader.split( ';' )[ 0 ];
			const [ cookieName, encodedToken ] = parsedCookie.split( '=' );
			// need to decode it first
			const decodedToken = decodeURIComponent( encodedToken );


			cookies.set( cookieName, decodedToken, {
				path: '/',
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				maxAge: 60 * 60 * 24 // 1 day
			} );
		}
		const checkCookie = cookies.get('better-auth.session_token');
		console.log('checkCookie', checkCookie);



		// request.headers.set('better-auth.session_token', loginResponse.token);

		console.log('login page.server - headers', request.headers);
		console.log('%$#%$#@%$#@%$#@ login - loginResponse', loginResponse);
	} catch (e) {
		console.log('login catch', e);

		// return fail(401, { message: 'Invalid credentials' });
	}
	throw redirect(308, '/home');
};
