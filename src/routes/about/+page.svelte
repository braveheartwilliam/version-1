<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	console.log('data', data);
</script>

<div
	style="background-color: lightblue; height: 100vh; display: flex; flex-direction: column; justify-content: space-between; align-items: center;"
>
	<h2 style="color: blue; font-size: align-self:left; 4vw; margin-top: 0;align-self: flex-start; margin-left: 0;"
	>
		Welcome {data.user.name}
	</h2>
	<h1 style="color: red; text-align: center; font-size: 20vw; margin: auto 0;">About</h1>
</div>
