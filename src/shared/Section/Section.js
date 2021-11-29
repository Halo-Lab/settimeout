import { html } from "@prostory/edelweiss";

import { Card } from "../Card/Card.js";

import { sectionsData } from "../data/sectionsData.js";

export const Section = ({ title, cards }) => {
	const section = sectionsData[title];
	const iconPath = `./assets/icons/${section.icon}.png`;

	return html`
		<style>
			@import "../shared/Section/Section.css";
		</style>

		<div class="section">
			<div class="section-title">
				<img class="section-title-ico" src=${iconPath} alt="" />
				${title}
			</div>
			${cards.map(Card)}
		</div>
	`;
};
