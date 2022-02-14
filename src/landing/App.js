import { html, router } from "@prostory/edelweiss";

import { AppBar } from "./components/AppBar/AppBar.js";
import { ArticlesBlock } from "./scenes/Main/ArticlesBlock/ArticlesBlock.js";
import { SubscriptionBlock } from "./scenes/Main/SubscriptionBlock/SubscriptionBlock.js";
import { SubscriptionThanks } from "./scenes/SubscriptionThanks/SubscriptionThanks.js";
import { EmailConfirmation } from "./scenes/EmailConfirmation/EmailConfirmation.js";
import { Unsubscribe } from "./scenes/Unsubscribe/Unsubscribe.js";
import { ErrorPage } from "./scenes/Error/Error.js";

export const App = html`
		${router(
			{
				pattern: "/",
				template: html`
					<div class="page-wrap">
						${AppBar}
						<div class="main-content-wrap">${ArticlesBlock}</div>
						${SubscriptionBlock}
					</div>
				`,
			},
			{ pattern: "/thanks", template: SubscriptionThanks },
			{ pattern: "/email-confirmation", template: EmailConfirmation },
			{ pattern: "/unsubscribe", template: Unsubscribe },
			{ pattern: "", template: ErrorPage }
		)}
	</div>
`;
