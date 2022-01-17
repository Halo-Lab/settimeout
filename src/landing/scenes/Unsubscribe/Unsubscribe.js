import { html, current } from "@prostory/edelweiss";

import "./Unsubscribe.css";

const onBackHomeLinkClick = (e) => {
	e.preventDefault();

	current("/");
};

export const Unsubscribe = html`
	<div class="unsubscribe-page">
		<header class="unsubscribe-header">
			<div class="unsubscribe-header-container">
				<a href="/" class="unsubscribe-logo-link">
					<svg
						width="42"
						height="39"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						class="unsubscribe-logo-icon"
					>
						<path
							class="center"
							d="M19.205 13.148 15.583 23.48h-4.927l3.623-10.333h4.926ZM27.91 13.148 24.263 23.48h-4.926l3.645-10.333h4.926Z"
							fill="#currentColor"
						/>
						<path
							class="left-edge"
							d="m7.63 31.503 1.546-4.422-.265-.244a12.625 12.625 0 0 1-4.043-9.223c0-5.778 4.065-10.91 9.676-12.2.84-.2 1.723-.289 2.74-.289h13.651L32.504.66H17.305c-.309 0-.574 0-.839.022C7.475 1.125.45 8.57.45 17.614c0 5.29 2.386 10.2 6.561 13.422l.619.467Z"
							fill="#currentColor"
						/>
						<path
							class="right-edge"
							d="m30.935 5.126-1.547 4.422.265.245a12.588 12.588 0 0 1 4.043 9.222c0 5.778-4.065 10.911-9.676 12.2-.84.2-1.723.289-2.739.289H7.629L6.061 35.97h15.198c.31 0 .574 0 .84-.022 8.968-.444 15.993-7.889 15.993-16.933 0-5.289-2.386-10.2-6.56-13.422l-.597-.467Z"
							fill="#currentColor"
						/>
					</svg>
					<span class="unsubscribe-logo-text">SetTimeout.dev</span>
				</a>
				<a href="mailto:hey@settimeout.dev" class="unsubscribe-header-mailto"
					>📨 hey@settimeout.dev</a
				>
			</div>
		</header>
		<main class="unsubscribe-main">
			<section class="unsubscribe">
				<div class="unsubscribe-container">
					<h1 class="unsubscribe-title">Мы будем скучать по вам :(</h1>
					<p class="unsubscribe-notification">
						Вы отписались и больше не будете получать сообщений от
						SetTimeout.dev
					</p>
					<a
						href="/"
						class="subscribe-again"
						@click=${(e) => onBackHomeLinkClick(e)}
						>Подписаться снова</a
					>
					<div class="unsubscribe-hero"></div>
				</div>
			</section>
		</main>
		<footer class="unsubscribe-footer">
			<a href="mailto:hey@settimeout.dev" class="unsubscribe-footer-mailto"
				>Остались вопросы? Напишите нам</a
			>
			<p class="unsubscribe-footer-copyright">
				&copy; SetTimeout.dev ${new Date().getFullYear()}
			</p>
		</footer>
	</div>
`;
