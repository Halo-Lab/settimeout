import { html } from "@prostory/edelweiss";

import { Logo } from "/app/components/Logo";

import "./index.css";

export const EmailConfirmation = html`
	<div class="confirmation-page">
		<header class="confirmation-header">
			<div class="confirmation-header-container">
				${Logo}
				<a href="mailto:hey@settimeout.dev" class="settimeout-mailto-link">
					📨 hey@settimeout.dev
				</a>
			</div>
		</header>
		<div class="main-wrap">
			<div class="confirmation-container">
				<main class="confirmation-main">
					<section class="confirmation-main-content">
						<h1 class="confirmation-title">
							Your email is confirmed! Thank you
							<span class="gratitude-reason">за подписку!</span>
						</h1>

						<a href="https://www.settimeout.dev/" class="back-home-button">
							Back to Homepage
						</a>
					</section>
				</main>

				<div class="confirmation-hero">
					<div class="confirmation-hero-image"></div>
				</div>
			</div>
			<div class="confirmation-container">
				<footer class="confirmation-footer">
					<p class="confirmation-footer-copyright">
						&copy; SetTimeout.dev ${new Date().getFullYear()}
					</p>
				</footer>
			</div>
		</div>
	</div>
`;
