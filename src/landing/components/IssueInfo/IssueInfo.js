import { html } from "@prostory/edelweiss";

import "./IssueInfo.css";

export const IssueInfo = (issueNumber, issueDate) => {
	let issueDateFull, issueDateWeekDay;
	console.log("issueDate", issueDate);

	if (issueDate) {
		const issueDateFullOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		issueDateFull = new Date(issueDate)
			.toLocaleString("Ru-ru", issueDateFullOptions)
			.replace(/г\./, "");

		issueDateWeekDay = new Date(issueDate).toLocaleString("Ru-ru", {
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
					<span class="issue-number">#${issueNumber}</span>
				</div>
				${issueDateElement}
			</div>
		</div>
	`;
};
