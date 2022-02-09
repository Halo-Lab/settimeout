import { html } from "@prostory/edelweiss";

import { Image, getImageURL } from "../../../shared/index.js";

export const ContentFooter = html`
	<style>
		@import "./components/ContentFooter/ContentFooter.css";
	</style>

	<div class="content-footer">
		<div class="content-footer-text">Узнавайте новое вместе с нами 💙</div>
		<div class="content-footer-logo">
			<a
				href="https://www.settimeout.dev"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					.src=${getImageURL(Image.LOGO_FOOTER)}
					alt="SetTimeout logo"
					width="142"
					height="21"
				/>
			</a>
		</div>
	</div>
`;
