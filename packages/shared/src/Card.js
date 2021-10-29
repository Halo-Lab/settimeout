import { html } from "@prostory/edelweiss";

export const Card = ({ link, title, description, author }) => html`
	<div class="mb-6">
		<a href="${link}">
			<em class="font-bold not-italic underline">${title}</em>
		</a>
		-
		<p class="inline">${description}</p>
		-
		<address class="inline text-gray-500 not-italic">${author}</address>
	</div>
`;
