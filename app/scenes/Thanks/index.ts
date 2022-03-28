import { html, effect, data } from "@prostory/edelweiss";

import { Logo } from "/app/components/Logo";
import { subscriberName } from "/app/scenes/Home/components/SubscriptionBlock";

import "./index.css";

const userName = data("");

effect(() => {
	const name = subscriberName().trim();

	if (name !== "") {
		userName(name);
	}
});

export const Thanks = html`
	<div class="thanks-page">
		<header class="header">
			<div class="header-container">
				${Logo}
				<a href="mailto:hey@settimeout.dev" class="settimeout-mailto-link">
					📨 hey@settimeout.dev
				</a>
			</div>
		</header>
		<div class="main-wrap">
			<div class="thanks-container">
				<main class="thanks-main">
					<section class="thanks-main-content">
						<h1 class="thanks-title">
							Thank you
							<span class="gratitude-reason">
								for
								subscription${() => (userName() === "" ? "" : `, ${userName()}`)}!
							</span>
						</h1>
						<p class="thanks-notification">
							Check your email, we will send confirmation soon. Only useful information, no wasting time messages.
						</p>
						<a href="/" class="back-home-link"> Back to the Homepage </a>
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
