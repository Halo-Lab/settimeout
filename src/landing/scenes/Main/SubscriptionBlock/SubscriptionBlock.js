import { html } from "@prostory/edelweiss";

import "./SubscriptionBlock.css";

export const SubscriptionBlock = html`
	<section class="subscription">
		<div class="subscription-container">
			<div class="subscription-content-wrap">
				<div class="subscription-content-img"></div>
				<div class="subscription-content">
					<h2 class="subscription-appeal-title">Подпишись на рассылку</h2>
					<p class="subscription-appeal-description">
						Узнавай первым новости в разработке и достигай большего ежедневно!
					</p>
					<form class="subscription-form">
						<label class="subscription-form-label">
							<input
								type="email"
								placeholder="Ваш Email"
								autocomplete="email"
								required
								name="email-address"
								id="email-address"
								class="subscription-form-input"
							/>
						</label>
						<button type="submit" class="subscription-form-btn-submit">
							Подписаться
						</button>
					</form>
				</div>
			</div>

			<div class="subscription-footer">
				<!-- <a href="mailto:example@gmail.com" class="subscription-footer-mailto"
				>Остались вопросы? Напишите нам</a
			> --><!--uncomment when there will be an email address -->
				<p class="subscription-footer-copyright">&copy; SetTimeout.dev 2021</p>
			</div>
		</div>
	</section>
`;
