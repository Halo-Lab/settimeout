import { lazy } from "@prostory/edelweiss";

import { Email } from "/shared/types";

export const emails = lazy<readonly Email[]>(
	async () =>
		globalThis
			.fetch?.("/.netlify/functions/emails")
			.then((response) => response.json()) ?? [],
	[]
);
