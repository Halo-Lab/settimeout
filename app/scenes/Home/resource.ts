import { data } from "@prostory/edelweiss";

import { Email } from "/shared/types";

export interface HomeResource {
	readonly content: Email;
	readonly nextUrl?: string;
	readonly previousUrl?: string;
}

export const resource = data<HomeResource | null>(null);
