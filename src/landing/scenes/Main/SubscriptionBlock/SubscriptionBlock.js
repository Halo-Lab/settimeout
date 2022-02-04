import { html, data, effect, router, current } from "@prostory/edelweiss";

import "./SubscriptionBlock.css";
import unisenderAPI from "../../../../services/unisenderAPI";

const LIST_ID = process.env.LIST_ID;

export const subscriberName = data("");
const subscriberEmail = data("");
const isSubscribed = data(false);

const onSubscriptionFormSubmit = async (e) => {
	e.preventDefault();

	const name = subscriberName();
	const email = subscriberEmail();

	try {
		const contactData = await unisenderAPI.getContact(email);

		const isInSubscribeList = contactData?.result?.lists?.find(
			(list) => list.id === Number(LIST_ID)
		);

		if (
			contactData?.result?.email?.status === "active" &&
			isInSubscribeList !== undefined
		) {
			isSubscribed(true);
			return;
		}

		const newContactData = await unisenderAPI.addContact(email, name);

		if (newContactData?.result?.person_id) current("/thanks");

        subscriberName("");
		subscriberEmail("");
	} catch (error) {
		if (error) console.error(error.message);
	}
};

const subscriptionMessage = html`
	<span class="subscription-message"
		>Кажется, вы уже подписаны на эту рассылку</span
	>
`;

export const SubscriptionBlock = html`
	<section class="subscription">
		<div class="subscription-content-wrap">
			<div class="subscription-content-img"></div>
			<div class="subscription-content">
				<h2 class="subscription-appeal-title">Подпишись на рассылку</h2>
				<p class="subscription-appeal-description">
				  Получай полезные статьи о веб-разработке и инструментах раз в неделю!
				</p>

				<form
					class="subscription-form"
					@submit=${(e) => onSubscriptionFormSubmit(e)}
				>
					<label class="subscription-form-label">
						<input
							type="text"
							.value=${() => subscriberName()}
							placeholder="Ваше имя"
							autocomplete="name"
							name="name"
							id="name"
							class="subscription-form-input"
							@input=${(e) => {
								isSubscribed(false);
								subscriberName(e.target.value);
							}}
						/>
					</label>
					<label class="subscription-form-label">
						<input
							type="email"
							.value=${() => subscriberEmail()}
							placeholder="Ваш Email"
							autocomplete="email"
							required
							name="email-address"
							id="email-address"
							class="subscription-form-input"
							@input=${(e) => {
								isSubscribed(false);
								subscriberEmail(e.target.value);
							}}
						/>
					</label>
					<button type="submit" class="subscription-form-btn-submit">
						Подписаться
					</button>
					${() => (isSubscribed() ? subscriptionMessage : "")}
				</form>
			</div>

			<div class="subscription-footer">
				<a href="mailto:hey@settimeout.dev" class="subscription-footer-mailto"
					>Остались вопросы? Напишите нам</a
				>
				<p class="subscription-footer-copyright">
					&copy; SetTimeout.dev ${new Date().getFullYear()}
				</p>
			</div>
		</div>
	</section>
`;
