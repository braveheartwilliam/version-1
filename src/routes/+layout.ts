import type { LayoutLoad } from './$types';
import { breadcrumbs, previousRoute } from './shared.svelte';
console.log('layout.ts - top');
// console.log('+layout.ts - cookies', CookieApi);
export const load: LayoutLoad = async ({ route, url, params }) => {
	// console.log('layout.ts - LayoutLoad - route.id', route.id, 'LayoutLoad - url', url.pathname);
	const newRoute: string = route.id ?? '';
	let oldRoute = '';
	oldRoute = previousRoute.previousRouteId;
	// previousRoute.previousRouteId = oldRoute;

	// console.log('oldRoute', oldRoute, 'newRoute', newRoute);

	if (oldRoute !== newRoute) {
		const addRoute: string = url.pathname ?? '';
		console.log('layout.ts - addRoute', addRoute);
		console.log('layout.ts - params', params);
		// if (params.slug === '[]') {
		breadcrumbs.fnAddBreadcrumbs(addRoute);
		previousRoute.previousRouteId = newRoute;
	}

	return {
		// route: <string>route.id
	};
};
