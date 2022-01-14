import { html, router } from "@prostory/edelweiss";

import { AppBar } from "./components/AppBar/AppBar.js";
import { ArticlesBlock } from "./scenes/Main/ArticlesBlock/ArticlesBlock.js";
import { SubscriptionBlock } from "./scenes/Main/SubscriptionBlock/SubscriptionBlock.js";
import { SubscriptionThanks } from "./scenes/SubscriptionThanks/SubscriptionThanks.js";
import { SubscriptionAlready } from "./scenes/SubscriptionAlready/SubscriptionAlready.js";

export const App = html` ${SubscriptionThanks} `;

// export const App = html`
// 	<div class="page-wrap">
// 		${AppBar}
// 		<div class="main-content-wrap">${ArticlesBlock}</div>
// 		${SubscriptionBlock}
// 	</div>
// `;

//use when the design of the corresponding pages is ready
// export const App = html`

// 		${router(
// 			{
// 				pattern: "/",
// 				template: html`
// 					<div class="page-wrap">
// 						${AppBar}
// 						<div class="main-content-wrap">${ArticlesBlock}</div>
// 						${SubscriptionBlock}
// 					</div>
// 				`,
// 			},
// 			{ pattern: "/thanks", template: SubscriptionThanks },
// 			{ pattern: "/already-subscribed", template: SubscriptionAlready },
// 			{
// 				pattern: "/something-wrong",
// 				template: html`<p>
// 					Извините, что-то пошло не так... Попробуйте ещё раз позже
// 				</p>`,
// 			},
// 			{ pattern: "", template: html`<p>404 Not Found</p>` }
// 		)}
// 	</div>
// `;
