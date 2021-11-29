import { html } from "@prostory/edelweiss";

import { tagsData } from "../data/tagsData.js";

export const Card = ({ link, title, author, description, tags }) => {
	const getTags = () => {
		return tags.map((key) => {
			const tag = tagsData[key];
			let img = "";

			if (tag.img) {
				const imgPath = `./assets/tags/${key}.png`;
				img = html`<img class="item-tag-ico" src=${imgPath} alt="" />`;
			}

			return html`<span class="item-tag item-tag--${key}">
				${img} #${tag.name}
			</span>`;
		});
	};

	return html`
		<style>
			@import "../shared/Card/Card.css";
		</style>

		<div class="item">
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
