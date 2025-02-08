import type { LayoutLoad } from './$types';
console.log('page.ts - top');

export const load: LayoutLoad = ({ route }) => {
	return {
		post: {
			// title: `Title for ${params.slug} goes here`,
			// content: `Content for ${ params.slug } goes here`

			title: <string>`Title goes here -- ${route.id}`,
			content: <string>`Content for  goes here`,
			route: <string>`${route.id}`
		}
	};
};
