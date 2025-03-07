// import containerQueries from '@tailwindcss/container-queries';
// import forms from '@tailwindcss/forms';
// import typography from '@tailwindcss/typography';
// import daisyui from 'daisyui';
// import type { Config } from 'tailwindcss';
import daisyui from 'daisyui'; // ESM import

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: ['daisyui'],
	// daisyui: {
	// 	styled: true,
	// 	themes: ['light', 'dark', 'cupcake'],
	// 	prefix: 'dayZ-',
	// 	base: true,
	// 	utils: true,
	// 	logs: true,
	// 	darkTheme: 'dark'
	// }

/*****  from grok */

// tailwind.config.js

//   daisyui: {
//     themes: [
//       {
//         light: {
//           ...require('daisyui/src/theming/themes')['light'], // Use require here for theme base
//           primary: 'lightblue',
//           secondary: 'teal',
//         },
//       },
//       'dark',
//       'cupcake',
//     ],
//     prefix: 'dayZ-', // Apply prefix
//     base: true, // Optional: Apply base styles
//     styled: true, // Optional: Enable styled components
//     utils: true, // Optional: Enable utility classes
//   },




/* ****** from grok */


};
