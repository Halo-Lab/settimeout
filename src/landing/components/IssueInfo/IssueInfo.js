import { html } from "@prostory/edelweiss";

import "./IssueInfo.css";
import { toDate } from "../../../shared/utils/toDate";

export const IssueInfo = (issueDate) => {
	let issueDateFull, issueDateWeekDay;

	if (issueDate) {
		const formattedIssueDate = toDate(issueDate);

		const issueDateFullOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		issueDateFull = new Date(formattedIssueDate)
			.toLocaleString("Ru-ru", issueDateFullOptions)
			.replace(/г\./, "");

		issueDateWeekDay = new Date(formattedIssueDate).toLocaleString("Ru-ru", {
			weekday: "long",
		});
	}

	const issueDateElement = issueDate
		? html`
				<span class="issue-date"
					><span class="week-day">${issueDateWeekDay}, </span>
					${issueDateFull}</span
				>
		  `
		: "";

	return html`
		<div class="issue">
			<div class="container">
				<div class="issue-description">
					<span class="issue-title">Выпуск </span>
					<span class="issue-number">#23</span>
				</div>
				${issueDateElement}
			</div>
		</div>
	`;
};
