import { html, lazy } from "@prostory/edelweiss";

import { Section } from "~src/shared";
import { IssueInfo } from "../../../components/IssueInfo/IssueInfo";
import { Pagination } from "../../../components/Pagination/Pagination";
import "./ArticlesBlock.css";

const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);

export const ArticlesBlock = html`
	<section class="articles">
		${() => {
			const articlesData = emails()[0];
			const issueDate = articlesData?.createdAt;

			return articlesData ? IssueInfo(issueDate) : "";
		}}

		<div class="container">
			${() => {
				const currentEmail = emails()[0];

				return currentEmail !== undefined
					? currentEmail.sections.map(Section)
					: "";
			}}
		</div>
		${Pagination}
	</section>
`;
