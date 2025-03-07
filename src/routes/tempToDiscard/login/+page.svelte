<!-- src/routes/login/+page.svelte -->
<script lang="ts">
	// import { enhance } from '$app/forms';
	import { authClient } from '$lib/delete-auth/auth-client';
	// export let data: { message?: string };

	console.log('***** >>>>>>>> This is where the form would be rendered');

	let email = 'test@example.com';
	let password = 'password1234';
	let errorMessage = '';
	let sessionData;
	let errorText;
	let data;
	let error;

	// Handle form submission
	async function handleLogin() {
		console.log('Login - handleLogin');
		try {
			const { user, tokens, session } = await authClient.signIn.email(
				{
					email,
					password
				},
				{
					onError: async (ctx) => {
						// Handle the error

						console.log('ctx.error.status', ctx.error.status);
						console.log('ctx.response', ctx.response); // ctx.response
						if (ctx.error.status === 403) {
							console.log('Please verify your email address');
						} else {
							console.log(
								'An error occurred, please try again making sure your credentials are correct'
							);
						}
					}
				}
			);
			console.log('tokens', tokens);
			console.log('user', user);
			console.log('session', session);

			// sessionData = data;
			// errorText = error?.status;

			// Redirect or update UI after successful login
			console.log('Login successful');
		} catch (err) {
			errorMessage = 'Login failed. Check your credentials.';
			console.error('Login error:', err);
		}
	}

	console.log('after handleLogin');
	console.log('Login - sessionData', sessionData);
	console.log('Login - errorMessage', errorText);

</script>

<h1>Login</h1>

<form on:submit|preventDefault={handleLogin}>
	<!-- <form on:submit|preventDefault={() => console.log('Form submitted')}> -->
	<label>
		Email
		<input type="email" bind:value={email} required />
	</label>
	<label>
		Password
		<input type="password" bind:value={password} required />
	</label>
	<button type="submit">Login</button>
</form>

{#if errorMessage}
	<p style="color: red">{errorMessage}</p>
{/if}

<!-- <form method="POST" use:enhance>
	<label>
		Email
		<input type="email" name="email" required />
	</label>
	<label>
		Password
		<input type="password" name="password" required />
	</label>
	<button type="submit">Login</button>
</form>

{#if data?.message}
	<p>{data.message}</p>
{/if}
<br />
<h1>{data.message}</h1> -->
