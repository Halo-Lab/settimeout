import { html, data, effect } from "@prostory/edelweiss";

import "./Pagination.css";

import { emails } from "../../scenes/Main/ArticlesBlock/ArticlesBlock";

export const getMailingNumber = data(0);

const onPreviousMailingBtnClick = () => {
	let currentMailingNumber = getMailingNumber();

	if (currentMailingNumber > 0) getMailingNumber((currentMailingNumber -= 1));
};

const onNextMailingBtnClick = () => {
	let currentMailingNumber = getMailingNumber();

	getMailingNumber((currentMailingNumber += 1));
};

const PreviousMailingBtn = () => {
	if (getMailingNumber() !== 0) {
		return html`
			<button
				class="pagination-button previous-mailing-btn"
				@click=${() => onPreviousMailingBtnClick()}
			>
				<svg
					width="18"
					height="14"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					class="arrow-left-icon"
				>
					<path
						d="M17 7.9a.9.9 0 1 0 0-1.8v1.8ZM.364 6.364a.9.9 0 0 0 0 1.272l5.727 5.728a.9.9 0 0 0 1.273-1.273L2.273 7l5.091-5.091A.9.9 0 0 0 6.091.636L.364 6.364ZM17 6.1H1v1.8h16V6.1Z"
						fill="currentColor"
					/>
				</svg>
				<span>Предыдущая рассылка</span>
			</button>
		`;
	} else {
		return "";
	}
};

const NextMailingBtn = () => {
	const mailingTotalCount = emails().length - 1;

	if (getMailingNumber() < mailingTotalCount) {
		return html`
			<button
				class="pagination-button next-mailing-btn"
				@click=${() => onNextMailingBtnClick()}
			>
				<span>Следующая рассылка</span>
				<svg
					width="18"
					height="14"
					viewBox="0 0 18 15"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					class="arrow-right-icon"
				>
					<path
						d="M1 8.5C0.447715 8.5 0 8.05228 0 7.5C0 6.94772 0.447715 6.5 1 6.5L1 8.5ZM17.7071 6.79289C18.0976 7.18342 18.0976 7.81658 17.7071 8.20711L11.3431 14.5711C10.9526 14.9616 10.3195 14.9616 9.92893 14.5711C9.53841 14.1805 9.53841 13.5474 9.92893 13.1569L15.5858 7.5L9.92893 1.84315C9.53841 1.45262 9.53841 0.819457 9.92893 0.428932C10.3195 0.0384078 10.9526 0.0384078 11.3431 0.428932L17.7071 6.79289ZM1 6.5L17 6.5V8.5L1 8.5L1 6.5Z"
						fill="currentColor"
					/>
				</svg>
			</button>
		`;
	} else {
		return "";
	}
};

export const Pagination = html`
	<div class="pagination">
		<div class="container">${PreviousMailingBtn} ${NextMailingBtn}</div>
	</div>
`;
