import { html } from "@prostory/edelweiss";

import { emails } from "/app/api/emails";
import { Section } from "/shared/Section";
import { IssueInfo } from "/app/components/IssueInfo";
import { page, Pagination } from "/app/components/Pagination";

import "./index.css";

export const ArticlesBlock = () => {
	const articlesData = emails()[page()];

	return html`
		<section class="articles">
			${articlesData
				? IssueInfo(articlesData.number, articlesData.createdAt)
				: ""}

			<div class="container">
				${articlesData ? articlesData.sections.map(Section) : ""}
			</div>
			${Pagination}
		</section>
	`;
};
