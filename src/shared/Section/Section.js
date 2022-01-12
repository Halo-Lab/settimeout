import { html } from "@prostory/edelweiss";

import { Card } from "../Card/Card.js";
import { getIcon } from "../assets/index.js";

const buildSectionIcon = (title) => {
	const { url } = getIcon(title);

	return url
		? html`<img
				class="section-title-ico"
				.src="${url}"
				alt="section title icon"
				width="21"
				height="28"
		  />`
		: "";
};

export const Section = ({ title, cards }) =>
	html`
		<div class="section">
			<table
				width="100%"
				cellspacing="0"
				cellpadding="0"
				border="0"
				class="section-title"
			>
				<tr>
					<td class="icon-td">${buildSectionIcon(title)}</td>
					<td class="section-title-text">${title}</td>
				</tr>
			</table>
			${cards.map((item, index) => Card(item, index === cards.length - 1))}
		</div>
	`;
