import { html, lazy, data, effect } from "@prostory/edelweiss";

import { Section } from "~src/shared";
import { IssueInfo } from "../../../components/IssueInfo/IssueInfo";
import {
	Pagination,
} from "../../../components/Pagination/Pagination";

import "./ArticlesBlock.css";

const getMailingNumber = data();

const emails = lazy(
	() => fetch("/data.json").then((response) => response.json()),
	[]
);


export const ArticlesBlock = () => {
	const lastMailingNumber =
		emails()?.length > 0 ? emails().length - 1 : emails().length;// лог начальное значение 0

	// const lastMailingNumber = emails().length - 1;// лог начальное значение -1
	console.log('lastMailingNumber', lastMailingNumber);

	

	const mailingNumber = getMailingNumber();
	console.log('mailingNumber', mailingNumber);
	
	let articlesData = emails()[mailingNumber];
	
	

	// const articlesData = emails()[emails().length - 1];
	
	
	// console.log("articlesData", articlesData);

	return html`
		<section class="articles">
			${articlesData
				? IssueInfo(articlesData.number, articlesData.createdAt)
				: ""}

			<div class="container">
				${articlesData ? articlesData.sections.map(Section) : ""}
			</div>
			${Pagination(getMailingNumber,lastMailingNumber)}
		</section>
	`;
};
