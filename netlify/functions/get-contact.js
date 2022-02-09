import https from "https";

const BASIC_URL = "https://api.unisender.com/ru/api";
const API_KEY = process.env.UNISENDER_API_KEY;

const makeResponse = async (request) =>
	await new Promise((resolve, reject) =>
		https
			.get(request, (res) => {
				res.setEncoding("utf8");

				let rawData = "";

				res.on("data", (chunk) => {
					rawData += chunk;
				});
				res.on("end", () => {
					resolve(rawData);
				});
			})
			.on("error", reject)
	);

export async function handler(event, context) {
	const { email } = event.queryStringParameters;

	const requestData = `${BASIC_URL}/getContact?format=json&api_key=${API_KEY}&email=${email}&include_lists=1`;

	const response = await makeResponse(requestData);

	return {
		statusCode: 200,
		body: response,
	};
}
