import { html } from "@prostory/edelweiss";

import { getImageURL, Image } from "../../../shared/index.js";

export const Header = ({ issueNumber }) =>
	html`
		<style>
			@import "./components/Header/Header.css";
		</style>

		<div class="header">
			<table class="header-table" cellspacing="0" cellpadding="0">
				<tr>
					<td class="logo">
						<a
							href="https://www.settimeout.dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								.src=${getImageURL(Image.LOGO)}
								alt="SetTimeout logo"
								width="168"
								height="27"
							/>
						</a>
					</td>
					<td class="issue">
						выпуск <span class="issue-num">#${issueNumber}</span>
					</td>
				</tr>
			</table>
		</div>
	`;
