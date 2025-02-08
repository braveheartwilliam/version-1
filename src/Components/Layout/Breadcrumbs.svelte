<script lang="ts">
	import { addBreadcrumb } from '../../routes/shared.svelte';
	let { route, action } = $props();
	// let updatedBreadcrumbs: string[] = $state([]);
	let updatedBreadcrumbs: string[] = $state([]);

	console.log('route', route, '...', 'action', action);

	if (action === 'add') {
		$effect(() => {
			updatedBreadcrumbs = addBreadcrumb(route);
		});
		console.log('this is the route being added', route);
	} else if (action === 'remove') {
		$effect(() => {
			// updatedBreadcrumbs = breadcrumbs.splice(-1, 1);
		});
	}
</script>

{#each updatedBreadcrumbs as crumb}
	{#if ( crumb != '')}
		{@const trimCrumb = crumb.slice(1)}
		<h5 class="breadcrumbs"><a href={crumb}>...{trimCrumb}</a></h5>
	{/if}
{/each}

<style>
	.breadcrumbs {
		display: inline;
	}
</style>
