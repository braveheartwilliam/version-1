<!-- src/routes/sign-up/+page.svelte -->
<script lang="ts">
	// **** the following is from Grok3

	import { enhance } from '$app/forms';
	export let data: { message?: string };
</script>


<h1>Sign Up</h1>
<form method="POST" use:enhance>
	<label>
		Email
		<input type="email" name="email" required />
	</label>
	<label>
		Password
		<input type="password" name="password" required />
	</label>
	<button type="submit" color="red">Sign Up</button>
</form>
{#if data?.message}
	<p>{data.message}</p>
{/if}
