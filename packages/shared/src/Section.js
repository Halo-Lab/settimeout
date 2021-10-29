import { html } from "@prostory/edelweiss";

import { Card } from "./Card.js";

export const Section = ({ title, cards }) => html`
	<div>
		<h2 class="text-2xl font-thin mb-5">${title}</h2>
		${cards.map(Card)}
	</div>
`;
