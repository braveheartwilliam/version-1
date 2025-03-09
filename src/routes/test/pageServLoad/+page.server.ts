// // src/routes/+page.server.ts
// import { superValidate } from 'sveltekit-superforms/server';
// import { userInsertSchema } from '$lib/schemas/zod/user';

// export const load = async () => {
// 	const form = await superValidate(userInsertSchema);
// 	return { form };
// };

// export const actions = {
// 	default: async ({ request }) => {
// 		const form = await superValidate(request, userInsertSchema);
// 		if (!form.valid) return { form };

// 		// Process validated data (e.g., save to DB)
// 		console.log('Validated user:', form.data);
// 		return { form };
// 	}
// };

//From codeium

// import { z } from 'zod';

// interface ZodValidationAdapter<T> {
// 	validate: (
// 		data: unknown
// 	) => Promise<{ success: true; data: T } | { success: false; error: z.ZodError }>;
// }

// const createZodValidationAdapter = <T>(schema: z.ZodType<T>): ZodValidationAdapter<T> => ({
// 	validate: async (data) => {
// 		try {
// 			const result = await schema.parseAsync(data);
// 			return { success: true, data: result };
// 		} catch (error) {
// 			if (error instanceof z.ZodError) {
// 				return { success: false, error };
// 			}
// 			throw error;
// 		}
// 	}
// });

// const userInsertValidationAdapter = createZodValidationAdapter(userInsertSchema);

// const form = await superValidate(userInsertValidationAdapter);

// Codeium alternative not using Superforms

import { z } from 'zod';
import type { PageServerLoad } from '../$types.js';
import { userInsertSchema } from '$lib/schemas/zod/user';

// const userInsertSchema = z.object({
// 	// your schema definition here
// });

// Define a sample Zod schema (replace with your actual userInsertSchema)
// const userInsertSchema = z.object({
//   name: z.string().min(1, "Name is required"),
//   email: z.string().email("Invalid email"),
// });

// Define the load function
export const load: PageServerLoad = async () => {
	try {
		// Simulate fetching or preparing data (e.g., from a DB or API)
		const rawData = {
			name: 'John Doe',
			email: 'john.doe@example.com',
			emailVerified: false,
			password: 'fakePassword',
			banExpires: null
		};

		// role: z.string().default('user'),
		// banned: z.boolean().default(false).optional(),
		// banReason: z.string().optional(),
		// banExpires: z
		// .number()
		// .int()
		// .nullable()
		// // .transform((val) => (val ? new Date(val) : null)),

		console.log('rawData', rawData);

		// Validate the data with the schema
		const validatedData = userInsertSchema.parse(rawData);

		// const validatedData = {
		// 	name: 'John Doe',
		// 	email: 'john.doe@example.com'
		// };

		console.log('!!!!validatedData', validatedData);
		// console.log('!!!!validatedData');
		// Return the validated data to the page
		return {
			user: validatedData,
			error: null
		};
		// return {
		// 	user: rawData,
		// 	error: null
		// };
	} catch (error) {
		if (error instanceof z.ZodError) {
			return {
				user: null,
				error: error.issues // Return validation errors
			};
		}
		throw error; // Rethrow unexpected errors
	}
};

// Explicitly export the load function
