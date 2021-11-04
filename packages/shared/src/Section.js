import { html } from "@prostory/edelweiss";

import { Card } from "./Card.js";

export const Section = ({ title, cards }) => html`
	<div style="margin-bottom: 30px">
		<h2 style="font-size: 24px; font-weight: 200; margin-bottom: 20px">
			${title}
		</h2>
		${cards.map(Card)}
	</div>
`;
