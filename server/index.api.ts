import { Handler } from "@netlify/functions";
import { current, html, renderToString } from "@prostory/edelweiss";

import { App, Head } from "/app/App";
import { OpenGraph } from "./components/OpenGraph";
import { AnalyticsBody, AnalyticsHead } from "./components/analytics";

const page = html`
	<!DOCTYPE html>
	<html lang="ru">
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
				content="Еженедельная рассылка о разработке: JavaScript, HTML, CSS, React, Vue, Svelte и другие инструменты. Полезные письма раз в неделю."
			/>
			<meta
				name="keywords"
				content="рассылка о веб-разработке, полезные статьи о JavaScript, email рассылка о программировании и вёрстке, развитие программиста, статьи о soft skills программиста"
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

	return {
		statusCode: 200,
		headers: {
			"content-type": "text/html",
		},
		body: renderToString(page),
	};
};
