import { html } from "@prostory/edelweiss";

import { Section } from "/shared/Section";
import { IssueInfo } from "/app/components/IssueInfo";
import { Pagination } from "/app/components/Pagination";
import { HomeResource } from "../../resource";

import "./index.css";

export const MailBlock = ({ nextUrl, content, previousUrl }: HomeResource) => {
	const { number, createdAt, sections } = content;

	return html`
		<section class="articles">
			${IssueInfo(number, createdAt)}

			<div class="container">${sections.map(Section)}</div>
			${Pagination(previousUrl, nextUrl)}
		</section>
	`;
};
