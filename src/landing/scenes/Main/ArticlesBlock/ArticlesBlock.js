import { html, lazy } from "@prostory/edelweiss";

import { Section } from "~src/shared";
import { IssueInfo } from "../../../components/IssueInfo/IssueInfo";
import "./ArticlesBlock.css";

const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);

export const ArticlesBlock = html`
	<section class="articles">
		${IssueInfo}
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
