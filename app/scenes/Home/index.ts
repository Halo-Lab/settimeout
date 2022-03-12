import { html } from "@prostory/edelweiss";

import { AppBar } from "/app/components/AppBar";
import { ArticlesBlock } from "./components/ArticlesBlock";
import { SubscriptionBlock } from "./components/SubscriptionBlock";

import "./index.css";

export const Home = html`
	<div class="page-wrap">
		${AppBar}
		<div class="main-content-wrap">${ArticlesBlock}</div>
		${SubscriptionBlock}
	</div>
`;

export const HomeMeta = html` <title>SetTimeout, developer</title> `;
