import { html } from "@prostory/edelweiss";

import "./index.css";

export const Footer = html`
	<div class="footer">
		<div class="footer-list">
			<a class="footer-list-item" href="mailto:hey@settimeout.dev"
				>Напишите нам</a
			>
			<span class="footer-list-separator"></span>
			<a class="footer-list-item" href="{{UnsubscribeUrl}}">Отписаться</a>
		</div>
		<div class="footer-copy">
			© SetTimeout.dev ${new Date().getFullYear()}. Все права защищены
		</div>
	</div>
`;
