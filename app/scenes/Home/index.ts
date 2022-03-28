import { html } from "@prostory/edelweiss";

import { AppBar } from "/app/components/AppBar";
import { resource } from "./resource";
import { MailBlock } from "./components/MailBlock";
import { SubscriptionBlock } from "./components/SubscriptionBlock";

import "./index.css";

export const Home = html`
	<div class="page-wrap">
		${AppBar}
		<div class="main-content-wrap">
			${() => {
				const data = resource();

				return data !== null ? MailBlock(data) : "";
			}}
		</div>
		${SubscriptionBlock}
	</div>
`;

export const HomeMeta = html` <title>SetTimeout, developer</title> `;

export { resource as homeResource };
