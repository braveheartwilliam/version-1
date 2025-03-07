<script lang="ts">
	import { apple } from 'better-auth/social-providers';
	import type { PageProps } from './$types';
	import '../../style.css';
	let { data }: PageProps = $props();
</script>

<div
	style="background-color: lightblue; height: 100vh; display: flex; flex-direction: column; justify-content: space-between; align-items: center;"
>
	<h2
		style="color: blue; font-size: align-self:left; 4vw; margin-top: 0;align-self: flex-start; margin-left: 0;"
	>
		Welcome {data.user.name}
	</h2>

	<button class="dayZ-btn dayZ-btn-secondary">Test Click</button>

	<h1 style="color: red; text-align: center; font-size: 20vw; margin: auto 0;">Home</h1>
</div>
