import { html } from "@prostory/edelweiss";

export const Card = ({ link, title, author, description }) => html`
	<div style="font-size: 16px; margin-bottom: 15px">
		<a
			rel="noopener noreferrer"
			href=${link}
			style="
							border-bottom-color: #000;
							border-bottom-style: solid;
							border-bottom-width: 1px;
							color: #000;
							font-weight: 700;
							line-height: 1.5em;
							text-decoration: none;
						"
			target="_blank"
		>
			${title}
		</a>
		<span>
			- ${description}
			<span style="color: #888"> - ${author} </span>
		</span>
	</div>
`;
