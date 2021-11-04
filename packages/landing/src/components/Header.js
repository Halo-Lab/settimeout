import { html } from "@prostory/edelweiss";

import { Logo } from "./Logo.js";

export const Header = html`
	<header class="relative bg-dark-blue">
		<div
			class="absolute inset-0 shadow z-30 pointer-events-none"
			aria-hidden="true"
		></div>
		<div class="relative z-20">
			<div
				class="
						max-w-7xl
						mx-auto
						flex
						justify-between
						items-center
						px-4
						py-5
						sm:px-6 sm:py-4
						lg:px-8
						md:justify-start md:space-x-10
					"
			>
				<div>
					<a
						rel="noopener noreferrer"
						href="https://www.halo-lab.com"
						class="flex"
						target="_blank"
					>
						<span class="sr-only">Halo lab</span>
						${Logo}
					</a>
				</div>
			</div>
		</div>
	</header>
`;
