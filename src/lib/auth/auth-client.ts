import { createAuthClient } from 'better-auth/svelte'; // make sure to import from better-auth/svelte

export const authClient = createAuthClient({
	baseURL: 'http://localhost:5173'
} );


// const { data, error } = await authClient.signUp.email({
// 	email: 'test@example.com',
// 	password: 'password1234',
// 	name: 'test',
// 	image: 'https://example.com/image.png'
// });

// const { data, error } = await authClient.signIn.email({
// 	email: 'test@example.com',
// 	password: 'password1234',
// });