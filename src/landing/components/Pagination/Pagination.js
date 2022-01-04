import { html, data } from "@prostory/edelweiss";

import "./Pagination.css";
// const getMailingNumber = data(1);


export const Pagination = (getMailingNumber,lastMailingNumber) => {
	getMailingNumber(lastMailingNumber);

const onPaginationLinkClick = (e) => {
	e.preventDefault();
	
	getMailingNumber(lastMailingNumber -= 1);
	console.log("onPaginationLinkClick");
	console.log('lastMailingNumber',lastMailingNumber);
	
	
};
	
	return html`
	<div class="pagination">
		<div class="container">
			<a
				href="#"
				class="pagination-link"
				@click=${(e) => onPaginationLinkClick(e)}
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
			</a>
		</div>
	</div>
`};
