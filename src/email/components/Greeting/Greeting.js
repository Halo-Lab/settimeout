import { html } from "@prostory/edelweiss";

import { getImageURL, Image } from "../../../shared/index.js";

export const Greeting = (greetingTitle, greetingSubtitle) => {
	const defaultGreetingTitle = "Привет, это SetTimeout!&nbsp;✌";
	const defaultGreetingSubtitle =
		"Подготовили для тебя новую подборку полезных материалов.";

	if (greetingTitle === undefined || greetingTitle.trim() === "")
		greetingTitle = defaultGreetingTitle;
	if (greetingSubtitle === undefined || greetingSubtitle.trim() === "")
		greetingSubtitle = defaultGreetingSubtitle;

	return html`
		<style>
			@import "./components/Greeting/Greeting.css";
		</style>

		<div class="greeting">
			<table class="greeting-table">
				<tr>
					<td class="greeting-left">
						<div class="greeting-title">${greetingTitle}</div>
						<div class="greeting-text">${greetingSubtitle}</div>
					</td>
					<td>
						<img
							class="greeting-img"
							.src=${getImageURL(Image.GREETING)}
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
