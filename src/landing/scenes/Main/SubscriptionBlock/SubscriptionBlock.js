import { html, data, effect, router, current } from "@prostory/edelweiss";

import "./SubscriptionBlock.css";
import unisenderAPI from "../../../../services/unisenderAPI";

const subscriptionEmail = data("");

const onSubscriptionFormSubmit = async (e) => {
	e.preventDefault();

	const email = subscriptionEmail();

	console.log("email", email);

	try {
		const contactData = await unisenderAPI.getContact(email);

		if (contactData?.result?.email) return current("/already-subscribed"); //- to go to the corresponding page

		const newContactData = await unisenderAPI.addContact(email);

		if (newContactData?.result?.person_id) return current("/thanks"); //- to go to the corresponding page
	} catch (error) {
		//for test
		console.log(error);
		if (error) current("/something-wrong");
		////////////
	}
};

export const SubscriptionBlock = html`
	<section class="subscription">
		<div class="subscription-content-wrap">
			<div class="subscription-content-img"></div>
			<div class="subscription-content">
				<h2 class="subscription-appeal-title">Подпишись на рассылку</h2>
				<p class="subscription-appeal-description">
					Узнавай первым новости в разработке и достигай большего ежедневно!
				</p>

				<form
					class="subscription-form"
					@submit=${(e) => onSubscriptionFormSubmit(e)}
				>
					<label class="subscription-form-label">
						<input
							type="email"
							.value=${() => subscriptionEmail()}
							placeholder="Ваш Email"
							autocomplete="email"
							required
							name="email-address"
							id="email-address"
							class="subscription-form-input"
							@input=${(e) => subscriptionEmail(e.target.value)}
						/>
					</label>
					<button type="submit" class="subscription-form-btn-submit">
						Подписаться
					</button>
				</form>
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
