// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
// src/app.d.ts
declare global {
	namespace App {
		interface Locals {
			session?: {
				id: string;
				userId: string;
				expiresAt: Date;
			};
			user?: {
				id: string;
				email: string;
				role: string; // Add role here
			};
		}
	}
}

export {};
