import { html } from "@prostory/edelweiss";

import { getTag } from "../assets/index.js";

const buildTags = (tags) =>
	tags.map((name) => {
		const { url, key, name: tagName } = getTag(name);

		return html`
			<span class="item-tag item-tag--${key}">
				${url
					? html`
							<img
								class="item-tag-ico"
								.src="${url}"
								alt="${tagName} icon"
								width="14"
								height="10"
							/>
					  `
					: ""}
				#${tagName ?? name}
			</span>
		`;
	});

export const Card = ({ link, title, author, description, tags }, isLast) =>
	html`
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
				${buildTags(tags)}
			</div>
		</div>
	`;
