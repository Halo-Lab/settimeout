import { html } from "@prostory/edelweiss";

import { Card } from "/shared/Card";
import { getIcon, Icon } from "/shared/assets";
import { type Section as ISection } from "../types";

import "./index.css";

const buildSectionIcon = (title: Icon) => {
	const { url } = getIcon(title);

	return url
		? html`
				<img
					class="section-title-ico"
					src="${url}"
					alt="section title icon"
					width="21"
					height="28"
				/>
		  `
		: "";
};

export const Section = ({ title, cards }: ISection) => html`
	<div class="section">
		<table
			width="100%"
			cellspacing="0"
			cellpadding="0"
			border="0"
			class="section-title"
		>
			<tr>
				<td class="icon-td">${buildSectionIcon(title as Icon)}</td>
				<td class="section-title-text">${title}</td>
			</tr>
		</table>
		${cards.map((item, index) => Card(item, index === cards.length - 1))}
	</div>
`;
