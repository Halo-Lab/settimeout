import { html, current } from "@prostory/edelweiss";

import { AppBar } from "../../components/AppBar/AppBar";
import "./SubscriptionThanks.css";

const onBackHomeLinkClick = (e) => {
	e.preventDefault();

	current("/");
};

export const SubscriptionThanks = html`
	${AppBar}
	<div class="thanks-wrap">
		<h1 class="thanks-title">
			Спасибо <span class="gratitude-reason">за подписку!</span>
		</h1>
		<p class="thanks-notification">
			Проверьте свою почту, скоро мы пришлем вам подтверждение. Обещаем не
			спамить, а присылать только полезные материалы!
		</p>
		<a href="/" class="back-home-link" @click=${(e) => onBackHomeLinkClick(e)}
			>Вернуться на главную</a
		>

		<div class="thanks-hero">
			<a href="mailto:hey@settimeout.dev" class="settimeout-mailto-link"
				>📨 hey@settimeout.dev</a
			>
		</div>

		<footer class="thanks-footer">
			<p class="thanks-footer-copyright">
				&copy; SetTimeout.dev ${new Date().getFullYear()}
			</p>
		</footer>
	</div>
`;
