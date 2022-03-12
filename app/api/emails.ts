import { lazy } from "@prostory/edelweiss";

import { Email } from "/shared/types";

export const emails = lazy<readonly Email[]>(
	async () =>
		globalThis
			.fetch?.(`${import.meta.env.BASE_NETLIFY_URL}/emails`)
			.then((response) => response.json()) ?? [],
	[]
);
