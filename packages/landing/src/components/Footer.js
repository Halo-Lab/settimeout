import { html } from "@prostory/edelweiss";

import { ShortLogo } from "./ShortLogo.js";

export const Footer = html`
	<footer class="bg-dark-blue" aria-labelledby="footer-heading">
		<div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
			<div class="flex items-center">
				${ShortLogo}
				<p class="text-base text-gray-400 px-4 xl:text-center">
					&copy; Halo-lab. All rights reserved
				</p>
			</div>
		</div>
	</footer>
`;
