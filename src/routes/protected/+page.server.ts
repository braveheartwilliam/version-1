// the following from Grok3

// src/routes/protected/+page.server.ts
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, "/login");
  }
  return { user: locals.user };
};