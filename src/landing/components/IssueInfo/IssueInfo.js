import { html } from "@prostory/edelweiss";

import "./IssueInfo.css";

export const IssueInfo = (number, date) => {
	const dateFullOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const dateFull = new Date(date)
		.toLocaleString("Ru-ru", dateFullOptions)
		.replace(/г\./, "");

	const dateWeekDay = new Date(date).toLocaleString("Ru-ru", {
		weekday: "long",
	});

	const dateElement = date
		? html`
				<span class="issue-date">
					<span class="week-day">${dateWeekDay}, </span> ${dateFull}
				</span>
		  `
		: "";

	return html`
		<div class="issue">
			<div class="container">
				<div class="issue-description">
					<span class="issue-title">Выпуск </span>
					<span class="issue-number">#${number}</span>
				</div>
				${dateElement}
			</div>
		</div>
	`;
};
