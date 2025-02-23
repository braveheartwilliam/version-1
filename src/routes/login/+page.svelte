<!-- src/routes/login/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	export let data: { message?: string };
</script>

<h1>Login</h1>
<form method="POST" use:enhance>
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
<h1>{data.message}</h1>
