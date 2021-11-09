import { html } from "@prostory/edelweiss";

export const Header = html`
	<header class="bg-indigo-600">
		<div>
			<div
				@click=${() => console.log(1)}
				@mouseup=${() => console.log(2)}
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
					<div class="text-white text-lg font-bold">SetTimeout, developer</div>
				</div>
			</div>
		</div>
	</header>
`;
