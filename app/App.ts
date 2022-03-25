import { html, hydrate, meta, router } from "@prostory/edelweiss";

import { Error } from "./scenes/Error";
import { Thanks } from "/app/scenes/Thanks";
import { Unsubscribe } from "/app/scenes/Unsubscribe";
import { Home, HomeMeta } from "./scenes/Home";
import { EmailConfirmation } from "/app/scenes/EmailConfirmation";

import "reseter.css";

import "./App.css";

export const App = html`
	<!--data-body-unique-->
	${router(
		{ exact: true, pattern: "/", template: Home },
		{ pattern: "/thanks", template: Thanks },
		{ pattern: "/email-confirmation", template: EmailConfirmation },
		{ pattern: "/unsubscribe", template: Unsubscribe },
		{ pattern: "/not_found", template: Error }
	)}
`;

export const Head = html`
	<!--data-head-unique-->
	${meta({
		// TODO: uncomment it when there will be <title> for the each page
		// exact: true,
		route: "/",
		template: HomeMeta,
	})}
`;

if (!import.meta.env.IS_SERVER) {
	hydrate(Head, document.head);
	hydrate(App, document.body);
}
