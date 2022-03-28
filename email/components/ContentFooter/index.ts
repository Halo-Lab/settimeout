import { html } from "@prostory/edelweiss";

import { Image, getImageURI } from "/shared/assets";

export const ContentFooter = html`
	<div class="content-footer">
		<div class="content-footer-text">Useful articles about web development 💙</div>
		<div class="content-footer-logo">
			<a
				href="https://www.settimeout.dev"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="${getImageURI(Image.LOGO_FOOTER)}"
					alt="SetTimeout logo"
					width="142"
					height="21"
				/>
			</a>
		</div>
	</div>
`;
