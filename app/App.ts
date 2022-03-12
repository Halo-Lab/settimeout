import { hydrate, isServer, meta, router } from "@prostory/edelweiss";

import { Error } from "./scenes/Error";
import { Thanks } from "/app/scenes/Thanks";
import { Unsubscribe } from "/app/scenes/Unsubscribe";
import { Home, HomeMeta } from "./scenes/Home";
import { EmailConfirmation } from "/app/scenes/EmailConfirmation";

import "reseter.css";

import "./App.css";

export const App = router(
	{ pattern: "/", template: Home },
	{ pattern: "/thanks", template: Thanks },
	{ pattern: "/email-confirmation", template: EmailConfirmation },
	{ pattern: "/unsubscribe", template: Unsubscribe },
	{ pattern: "/not_found", template: Error }
);

export const Head = meta({
	route: "/",
	template: HomeMeta,
});

if (!isServer()) {
	hydrate(document.body);
}
