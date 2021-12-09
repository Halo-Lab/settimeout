import { html, lazy } from "@prostory/edelweiss";

import { Section } from "~src/shared";
import { IssueInfo } from "../../../components/IssueInfo/IssueInfo";
import { Pagination } from "../../../components/Pagination/Pagination";
import "./ArticlesBlock.css";

const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);

export const ArticlesBlock = () => {
	const articlesData = emails()[emails().length - 1];
	const issueNumber = articlesData?.number;
	const issueDate = articlesData?.createdAt;

	return html`
		<section class="articles">
			${articlesData ? IssueInfo(issueNumber, issueDate) : ""}

			<div class="container">
				${articlesData !== undefined ? articlesData.sections.map(Section) : ""}
			</div>
			${Pagination}
		</section>
	`;
};
