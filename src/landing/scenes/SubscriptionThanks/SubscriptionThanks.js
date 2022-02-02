import { html, current } from "@prostory/edelweiss";

import { Logo } from "../../components/Logo/Logo";

import "./SubscriptionThanks.css";

const onBackHomeLinkClick = (e) => {
	e.preventDefault();

	current("/");
};

export const SubscriptionThanks = html`
	<div class="thanks-page">
		<header class="header">
			<div class="header-container">
				${Logo}
				<a href="mailto:hey@settimeout.dev" class="settimeout-mailto-link"
					>📨 hey@settimeout.dev</a
				>
			</div>
		</header>
		<div class="main-wrap">
			<div class="thanks-container">
				<main class="thanks-main">
					<section class="thanks-main-content">
						<h1 class="thanks-title">
							Спасибо <span class="gratitude-reason">за подписку!</span>
						</h1>
						<p class="thanks-notification">
							Проверьте свою почту, скоро мы пришлем вам подтверждение. Обещаем
							не спамить, а присылать только полезные материалы!
						</p>
						<a
							href="/"
							class="back-home-link"
							@click=${(e) => onBackHomeLinkClick(e)}
							>Вернуться на главную</a
						>
					</section>
				</main>

				<div class="thanks-hero">
					<div class="thanks-hero-image"></div>
				</div>
			</div>
			<div class="thanks-container">
				<footer class="thanks-footer">
					<p class="thanks-footer-copyright">
						&copy; SetTimeout.dev ${new Date().getFullYear()}
					</p>
				</footer>
			</div>
		</div>
	</div>
`;
