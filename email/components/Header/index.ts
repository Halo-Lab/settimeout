import { html } from "@prostory/edelweiss";

import { getImageURI, Image } from "/shared/assets";

import "./index.css";

export const Header = (issueNumber: number) =>
	html`
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
								src="${getImageURI(Image.LOGO)}"
								alt="SetTimeout logo"
								width="168"
								height="27"
							/>
						</a>
					</td>
					<td class="issue">
						issue <span class="issue-num">#${issueNumber}</span>
					</td>
				</tr>
			</table>
		</div>
	`;
