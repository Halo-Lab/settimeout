import { html } from "@prostory/edelweiss";

import { AppBar } from "./components/AppBar/AppBar.js";
import { ArticlesBlock } from "./scenes/Main/ArticlesBlock/ArticlesBlock.js";
import { SubscriptionBlock } from "./scenes/Main/SubscriptionBlock/SubscriptionBlock.js";

export const App = html`
	<div class="page-wrap">
		${AppBar}
		<div class="main-content-wrap">${ArticlesBlock}</div>
		${SubscriptionBlock}
	</div>
`;
