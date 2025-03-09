<script lang="ts">
	import { goto } from '$app/navigation';
	console.log('Unauthorized');

	async function handleGotoLogin() {
		console.log('Unauthorized - handleLogin executing');
		try {
			goto('/login');
		} catch (error) {
			console.log('error in Unauthorized', error);
		}
	}
</script>

div style="background-color: bg-primary; height: 100vh;align-content: center;">
<h1
	style="color:red; text-align:center;align-items: center;vertical-align: middle;font-size: 20vw;"
>
	Unauthorized Access
</h1>

<h2>Access Denied - Please Login</h2>
<button on:click={handleGotoLogin}>Login</button>
