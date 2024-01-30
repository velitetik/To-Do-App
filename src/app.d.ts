// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { PrismaClient } from "@prisma/client";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// eslint-disable-next-line no-var
	var prisma: PrismaClient
}

export {};