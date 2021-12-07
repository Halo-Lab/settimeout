import { html } from "@prostory/edelweiss";

export const Header = ({ issueNumber }) => {
	const logoPNG = "../shared/assets/img/logo.png";

	return html`<style>
			@import "./components/Header/Header.css";
		</style>

		<div class="header">
			<table class="header-table" cellspacing="0" cellpadding="0">
				<tr>
					<td class="logo">
						<a href="https://www.settimeout.dev" target="blank"
							><img
								src=${logoPNG}
								alt="SetTimeout logo"
								width="168"
								height="27"
						/></a>
					</td>
					<td class="issue">
						выпуск <span class="issue-num">#${issueNumber}</span>
					</td>
				</tr>
			</table>
		</div>`;
};
