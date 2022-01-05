import { html } from "@prostory/edelweiss";

import { Card } from "../Card/Card.js";
import { getIcon } from "../assets/index.js";

const buildSectionIcon = (title) => {
	const { url } = getIcon(title);

	return url
		? html` <img class="section-title-ico" .src="${url}" alt="section title icon" /> `
		: "";
};

export const Section = ({ title, cards }) =>
	html`
		<div class="section">
			<div class="section-title">${buildSectionIcon(title)} ${title}</div>
			${cards.map((item, index) => Card(item, index === cards.length - 1))}
		</div>
	`;
