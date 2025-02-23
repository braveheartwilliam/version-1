<!-- src/routes/protected/+page.svelte -->
<script lang="ts">
	export let data: { user: { id: string; email: string } };
</script>

// the following is from Grok3

<h1>Welcome, {data.user.email}!</h1>
<a href="/logout">Logout</a>
