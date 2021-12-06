import { html } from "@prostory/edelweiss";

import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { MailBlock } from "./scenes/Main/MailBlock/MailBlock.js";
import { SubscriptionBlock } from "./scenes/Main/SubscriptionBlock/SubscriptionBlock.js";
import { IssueBlock } from "./scenes/Main/IssueBlock/IssueBlock.js";

export const App = html`
	<div class="page-wrap">
		${SubscriptionBlock}
		<div class="main-content-wrap">${Header} ${IssueBlock} ${MailBlock}</div>
	</div>
`;
