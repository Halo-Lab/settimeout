import { Handler } from "@netlify/functions";
import { current, html, language, renderToString } from "@prostory/edelweiss";

import { OpenGraph } from "./components/OpenGraph";
import { App, Head } from "/app/App";
import { fetchHomeResource } from "./routes/home";
import { AnalyticsBody, AnalyticsHead } from "./components/analytics";

const page = html`
	<!DOCTYPE html>
	<html lang="${language()}">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Manrope:wght@700&display=swap"
				rel="stylesheet"
			/>

			<link rel="stylesheet" href="__styles__" />

			${Head}

			<meta
				name="description"
				content="Weekly newsletter about the development of JavaScript, HTML, CSS, React, Vue, Svelte and other tools. Helpful emails once a week."
			/>
			<meta
				name="keywords"
				content="web development newsletter, useful articles about JavaScript, mailing list about programming and HTML, developer education, articles about soft skills"
			/>
			<meta name="author" content="Halo Lab Developers" />

			${OpenGraph}

			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

			${AnalyticsHead}
		</head>
		<body>
			${App}
			<script type="module" src="__scripts__"></script>
			${AnalyticsBody}
		</body>
	</html>
`;

export const handler: Handler = async (event, context) => {
	current(event.path);

	if (current() === "/" || current().startsWith("/mail")) {
		await fetchHomeResource();
	}

	return {
		statusCode: 200,
		headers: {
			"content-type": "text/html",
		},
		body: renderToString(page),
	};
};
