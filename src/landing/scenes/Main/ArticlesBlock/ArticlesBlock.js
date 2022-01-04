import { html, lazy, effect } from "@prostory/edelweiss";

import { Section } from "~src/shared";
import { IssueInfo } from "../../../components/IssueInfo/IssueInfo";
import {
	Pagination,
	getMailingNumber
} from "../../../components/Pagination/Pagination";

import "./ArticlesBlock.css";


const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);

effect(()=>{getMailingNumber(emails().length - 1)})

export const ArticlesBlock = () => {
	
	let articlesData = emails()[getMailingNumber()];

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
