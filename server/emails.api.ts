import { Handler } from "@netlify/functions";

import { loadEmailsList, loadJSON } from "./utils/loadData";

export const handler: Handler = async (event, context) => {
	const emails = await loadEmailsList().then((names) =>
		Promise.all(names.map(loadJSON))
	);

	return {
		statusCode: 200,
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(emails),
	};
};
