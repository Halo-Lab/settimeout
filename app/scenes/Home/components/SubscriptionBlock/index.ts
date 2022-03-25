import { html, data, current } from "@prostory/edelweiss";

import { addContact, getContact, isSuccessResult } from "/app/api/unisender";

import "./index.css";

const isSubscribed = data(false);
const subscriberEmail = data("");
export const subscriberName = data("");

const onSubscriptionFormSubmit = async (event: SubmitEvent) => {
	event.preventDefault();

	const name = subscriberName();
	const email = subscriberEmail();

	try {
		const contactData = await getContact(email);

		if (isSuccessResult(contactData)) {
			const isInSubscribeList: boolean = contactData.result.lists.some(
				({ id }) => id === import.meta.env.LIST_ID
			);

			if (contactData.result.email.status === "active" && isInSubscribeList) {
				isSubscribed(true);
				return;
			}
		}

		const newContactData = await addContact(email, name);

		if (isSuccessResult(newContactData)) {
			if (newContactData.result.person_id) current("/thanks");

			subscriberName("");
			subscriberEmail("");
		}
	} catch (error) {
		if (error) console.error((error as Error).message);
	}
};

const subscriptionMessage = html`
	<span class="subscription-message">
		It seems you've already subscribed
	</span>
`;

export const SubscriptionBlock = html`
	<section class="subscription">
		<div class="subscription-content-wrap">
			<div class="subscription-content-img"></div>
			<div class="subscription-content">
				<h2 class="subscription-appeal-title">Subscribe to get useful information</h2>
				<p class="subscription-appeal-description">
					Read articles about web-development once a week!
				</p>

				<form class="subscription-form" @submit=${onSubscriptionFormSubmit}>
					<label class="subscription-form-label">
						<input
							type="text"
							.value=${subscriberName}
							placeholder="Your name"
							autocomplete="name"
							name="name"
							id="name"
							class="subscription-form-input"
							@input=${(event: InputEvent) => {
								isSubscribed(false);
								subscriberName((event.target as HTMLInputElement).value);
							}}
						/>
					</label>
					<label class="subscription-form-label">
						<input
							type="email"
							.value=${subscriberEmail}
							placeholder="Your Email"
							autocomplete="email"
							required
							name="email-address"
							id="email-address"
							class="subscription-form-input"
							@input=${(event: InputEvent) => {
								isSubscribed(false);
								subscriberEmail((event.target as HTMLInputElement).value);
							}}
						/>
					</label>
					<button type="submit" class="subscription-form-btn-submit">
						Subscribe
					</button>
					${() => (isSubscribed() ? subscriptionMessage : "")}
				</form>
			</div>

			<div class="subscription-footer">
				<a href="mailto:hey@settimeout.dev" class="subscription-footer-mailto">
					Do you have questions? Contact us
				</a>
				<p class="subscription-footer-copyright">
					&copy; SetTimeout.dev ${new Date().getFullYear()}
				</p>
			</div>
		</div>
	</section>
`;
