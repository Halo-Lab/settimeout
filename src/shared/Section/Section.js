import { html } from "@prostory/edelweiss";

import { Card } from "../Card/Card.js";

import { sectionsData } from "../data/sectionsData.js";

export const Section = ({ title, cards }) => {
	const section = sectionsData(title);
	const icon = section.icon
		? html`<img
				class="section-title-ico"
				src="./assets/icons/${section.icon}.png"
				alt=""
		  />`
		: "";

	return html`
		<style>
			@import "../shared/Section/Section.css";
		</style>

		<div class="section">
			<div class="section-title">${icon} ${title}</div>
			${cards.map(Card)}
		</div>
	`;
};
