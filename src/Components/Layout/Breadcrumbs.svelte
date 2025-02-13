<script lang="ts">
	import { breadcrumbs } from '../../routes/shared.svelte';
	import { goto } from '$app/navigation';

	function handleBreadcrumbClick(index: number, path: string) {
		// Now you have access to both the index and the path
		console.log(
			`Clicked breadcrumb at index ${index}: ${path} array ${breadcrumbs.arrBreadcrumbs}`
		);
		breadcrumbs.fnRemoveBreadcrumb(index);
		// Navigate to the path
		goto(path);
	}

	// console.log('Breadcrumbs - LayoutProps', layout);

	// let addRoute = data.route;
	// console.log('Breadcrumbs - addRoute', addRoute);

	// let { addRoute } = $props();
	// console.log('addRoute', addRoute);

	// let updatedBreadcrumbs: string[] = $state([]);
	// updatedBreadcrumbs = addBreadcrumb(addRoute);

	// console.log('route - Breadcrumbs - line 8', addRoute, 'action', action);

	// if (action === 'add') {
	// 	$inspect('Breadcrumbs-line 11', updatedBreadcrumbs);
	// 	console.log('addRoute', addRoute);
	// 	updatedBreadcrumbs = addBreadcrumb(addRoute);
	// 	$inspect('Breadcrumbs-line 14', updatedBreadcrumbs);
	// 	console.log('this is the route being added', addRoute);
	// } else if (action === 'remove') {
	// 	$effect(() => {
	// 		// updatedBreadcrumbs = breadcrumbs.splice(-1, 1);
	// 	});
	// }

	// $inspect('updatedBreadcrumbs', updatedBreadcrumbs);

	// let unsubscribe = breadcrumbs.subscribe((value) => {
	// 	$breadcrumbs = value;
	// });
	// onDestroy(() => {
	// 	unsubscribe();
	// });
	$inspect('Breadcrumbs - breadcrumbs', breadcrumbs);
</script>

{#each breadcrumbs.arrBreadcrumbs as crumb, i}
	{#if crumb != null}
		{#if crumb === '/'}
			{@const trimCrumb = 'Home'}
			<button onclick={() => handleBreadcrumbClick(i, crumb)}> ...{trimCrumb}</button>
		{:else}
			{@const trimCrumb = crumb.slice(1)}
			<button onclick={() => handleBreadcrumbClick(i, crumb)}> ...{trimCrumb}</button>
		{/if}

		<!-- <h5 class="breadcrumbs"><a href={crumb}>...{trimCrumb}</a></h5> -->
		<!-- <button onclick={() => handleBreadcrumbClick(i, crumb)}> ...{trimCrumb}</button> -->
	{/if}
{/each}

<style>
	.breadcrumbs {
		display: inline;
	}
</style>
