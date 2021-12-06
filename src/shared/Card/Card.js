import { html } from "@prostory/edelweiss";

import { getTagData } from "../data/tagsData.js";

export const Card = ({ link, title, author, description, tags }, isLast) => {
	const getTags = () => {
		return tags.map((key) => {
			let imgElement = "";
			const { name, img, tagKey } = getTagData(key);

			if (img) {
				const imgPath = `./assets/tags/${tagKey}.png`;
				imgElement = html`<img class="item-tag-ico" src=${imgPath} alt="" />`;
			}

			return html`<span class="item-tag item-tag--${tagKey}">
				${imgElement} #${name}
			</span>`;
		});
	};

	return html`
		<style>
			@import "../shared/Card/Card.css";
		</style>

		<div class="item ${isLast ? "item--last" : ""}">
			<div class="item-title">
				<a
					class="item-link"
					rel="noopener noreferrer"
					href=${link}
					target="_blank"
				>
					${title}
				</a>
			</div>
			<div class="item-description">— ${description}</div>
			<div class="item-footer">
				<span class="item-author">— ${author}</span>
				${getTags()}
			</div>
		</div>
	`;
};
