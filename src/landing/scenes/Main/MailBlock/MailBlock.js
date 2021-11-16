import { html, lazy } from "@prostory/edelweiss";

import { Section } from "~src/shared";

const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);

export const MailBlock = html`
	<section class="px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
		<div style="margin: 0 auto 0 auto; max-width: 600px">
			${() => {
				const currentEmail = emails()[0];

				return currentEmail !== undefined
					? currentEmail.sections.map(Section)
					: "";
			}}
		</div>
	</section>
`;
