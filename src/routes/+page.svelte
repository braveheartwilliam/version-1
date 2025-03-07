<script lang="ts">
	import type { PageProps } from './$types';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import '../style.css';

	// import '../app.css';
	let { data }: PageProps = $props();
	// goto('/signup-login');
	console.log('+page.svelte', data);

	// throw redirect('/home');
</script>

<button class="dayZ-btn dayZ-btn-secondary">Test Click</button>
