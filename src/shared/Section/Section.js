import { html } from "@prostory/edelweiss";

import { Card } from "../Card/Card.js";

import { sectionsData } from "../data/sectionsData.js";

export const Section = ({ title, cards }) => {
	const section = sectionsData(title);
	const icon = section.icon
		? html`<img
				class="section-title-ico"
				src="../shared/assets/icons/${section.icon}.png"
				alt=""
		  />`
		: "";

	const cardElement = cards.map((item, index) =>
		Card(item, index === cards.length - 1)
	);

	return html`
		<style>
			@import "../shared/Section/Section.css";
		</style>

		<div class="section">
			<div class="section-title">${title}</div>
			${cardElement}
		</div>
	`;
};
