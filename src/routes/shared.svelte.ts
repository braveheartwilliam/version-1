export const currentRoute = $state({ currRoute: '/' });
export const previousRoute = $state({ prevRoute: '/' });

let breadcrumbs: string[] = [''];

export function addBreadcrumb(breadcrumb: string) {
	breadcrumbs = [...breadcrumbs, breadcrumb];
	console.log('breadcrumbs', breadcrumbs);

	return breadcrumbs;
}
