import { html } from "@prostory/edelweiss";

export const OpenGraph = html`
	<meta property="og:title" content="SetTimeout, developer!" />
	<meta property="og:url" content="https://www.settimeout.dev/" />
	<meta property="og:image" content="__public__/og-image.jpg" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Get useful newsletters about web development every week!"
	/>

	<meta content="summary" name="twitter:card" />
	<meta content="SetTimeout, developer!" name="twitter:title" />
	<meta
		content="Get useful newsletters about web development every week!"
		name="twitter:description"
	/>
	<meta content="__public__/twitter-card-image.jpg" name="twitter:image" />
	<meta content="https://www.settimeout.dev/" name="twitter:url" />
`;
