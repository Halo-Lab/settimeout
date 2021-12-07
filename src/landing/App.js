import { html } from "@prostory/edelweiss";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { ArticlesBlock } from "./scenes/Main/ArticlesBlock/ArticlesBlock.js";
import { SubscriptionBlock } from "./scenes/Main/SubscriptionBlock/SubscriptionBlock.js";

export const App = html`
	<div class="page-wrap">
		${SubscriptionBlock}
		<div class="main-content-wrap">${Header} ${ArticlesBlock}</div>
	</div>
`;
