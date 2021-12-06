import { html, lazy } from "@prostory/edelweiss";

import { Section } from "~src/shared";
import "./MailBlock.css";

const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);

export const MailBlock = html`
	<section class="mail-block">
		<div class="container">
			${() => {
				const currentEmail = emails()[0];

				return currentEmail !== undefined
					? currentEmail.sections.map(Section)
					: "";
			}}
		</div>
	</section>
`;
