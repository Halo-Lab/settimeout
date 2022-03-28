import { html } from "@prostory/edelweiss";

import "./index.css";

export const Footer = html`
	<div class="footer">
		<div class="footer-list">
			<a class="footer-list-item" href="mailto:hey@settimeout.dev"
				>Email us</a
			>
			<span class="footer-list-separator"></span>
			<a class="footer-list-item" href="{{UnsubscribeUrl}}">Unsubscribe</a>
		</div>
		<div class="footer-copy">
			© SetTimeout.dev ${new Date().getFullYear()}. All rights reserved.
		</div>
	</div>
`;
