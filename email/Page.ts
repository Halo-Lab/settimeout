import { html, renderToString } from "@prostory/edelweiss";

import { Body } from "./Body";
import { Email } from "/shared/types";

export const Page = (email: Email) =>
	renderToString(html`
		<!DOCTYPE html>
		<html lang="ru">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
					rel="stylesheet"
				/>

				<link rel="stylesheet" href="__styles__" />

				<title>Mailing list | Halo Lab</title>
			</head>
			<body>
				${Body(email)}
			</body>
		</html>
	`);
