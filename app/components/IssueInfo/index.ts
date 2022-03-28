import { html } from "@prostory/edelweiss";

import "./index.css";

export const IssueInfo = (number: number, date: string) => {
	const dateFullOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const dateFull = new Date(date)
		.toLocaleString("en-GB", dateFullOptions)
		.replace(/г\./, "");

	const dateWeekDay = new Date(date).toLocaleString("en-GB", {
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
					<span class="issue-title">Issue </span>
					<span class="issue-number">#${number}</span>
				</div>
				${dateElement}
			</div>
		</div>
	`;
};
