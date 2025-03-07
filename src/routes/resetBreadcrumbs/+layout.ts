console.log('layout.ts - breadcrumbs reset');
import { goto } from '$app/navigation';
import { breadcrumbs } from '../shared.svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ route }) => {
	console.log('resetBreadcrumbs - layout.ts');

	// breadcrumbs.update( ( crumb ) => [] );
	breadcrumbs.arrBreadcrumbs = [];
	goto('/home');

	return {
		// route: <string>route.id
		route: '/'
	};
};
