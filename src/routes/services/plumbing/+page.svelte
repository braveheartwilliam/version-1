<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div style="background-color: lightblue; height: 100vh;align-content: center;">
	<h1
		style="color:red; text-align:center;align-items: center;vertical-align: middle;font-size: 20vw;"
	>
		Plumbing
	</h1>

	<div>
		{#if data.result}
			{#each data.result as item:object}
				<div>
					<h2>{item.one}</h2>
					<p>{item.two}</p>
				</div>
			{/each}
		{:else}
			<h2>No data</h2>
		{/if}
	</div>
</div>
