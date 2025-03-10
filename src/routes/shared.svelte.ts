// import { writable } from 'svelte/store';

export interface BreadcrumbStore {
	arrBreadcrumbs: string[];
	fnAddBreadcrumbs: (routeID: string) => void;
	fnRemoveBreadcrumb: (index: number) => void;
}

export const breadcrumbs = $state<BreadcrumbStore>({
	arrBreadcrumbs: [],
	fnAddBreadcrumbs: (routeID: string) => {
		breadcrumbs.arrBreadcrumbs = [...breadcrumbs.arrBreadcrumbs, routeID];
	},
	fnRemoveBreadcrumb: (index: number) => {
		breadcrumbs.arrBreadcrumbs.splice(index, breadcrumbs.arrBreadcrumbs.length - index);
	}
});

export const previousRoute = $state({
	routeId: '',
	previousRouteId: ''
});
