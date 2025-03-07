<script lang="ts">
	import { goto } from '$app/navigation';
	function handleGotoLogin() {
		goto('/login');
	}
	function handleGotoSignup() {
		goto('/signup');
	}
</script>

<div style="background-color: lightblue; height: 100vh;align-content: center;">
	<h1
		style="color:red; text-align:center;align-items: center;vertical-align: middle;font-size: 20vw;"
	>
		Sign Up
	</h1>
	<button on:click={handleGotoLogin}>Login</button>
	<button on:click={handleGotoSignup}>Sign Up</button>
</div>
