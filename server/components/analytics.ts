import { html } from "@prostory/edelweiss";

const GTAG_ID = import.meta.env.GTAG_ID;

export const AnalyticsHead = html`
	<meta
		name="google-site-verification"
		content="07fb5n_6638PkfVMFqL1WYE4dXkquFG2BYiYB-mfo-o"
	/>

	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != "dataLayer" ? "&l=" + l : "";
			j.async = true;
			j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, "script", "dataLayer", "${GTAG_ID}");
	</script>
	<!-- End Google Tag Manager -->
`;

export const AnalyticsBody = html`
	<!-- Google Tag Manager (noscript) -->
	<noscript>
		<iframe
			src="https://www.googletagmanager.com/ns.html?id=${GTAG_ID}"
			height="0"
			width="0"
			style="display: none; visibility: hidden"
		>
		</iframe>
	</noscript>
	<!-- End Google Tag Manager (noscript) -->
`;
