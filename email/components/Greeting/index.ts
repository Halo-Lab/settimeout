import { html } from "@prostory/edelweiss";

import { getImageURI, Image } from "/shared/assets";

import "./index.css";

export const Greeting = (title?: string, subtitle?: string) => {
	const defaultTitle = "Hello, this is SetTimeout!&nbsp;✌";
	const defaultSubtitle =
		"Here are new useful articles for you.";

	if (title === undefined || title.trim() === "") title = defaultTitle;
	if (subtitle === undefined || subtitle.trim() === "")
		subtitle = defaultSubtitle;

	return html`
		<div class="greeting">
			<table class="greeting-table">
				<tr>
					<td class="greeting-left">
						<div class="greeting-title">${title}</div>
						<div class="greeting-text">${subtitle}</div>
					</td>
					<td>
						<img
							class="greeting-img"
							src="${getImageURI(Image.GREETING)}"
							alt="Greeting picture"
							width="127"
							height="133"
						/>
					</td>
				</tr>
			</table>
		</div>
	`;
};
