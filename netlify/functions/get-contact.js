const https = require("https");
const BASIC_URL = "https://api.unisender.com/ru/api";
const API_KEY = process.env.UNISENDER_API_KEY;

exports.handler = async function (event, context) {
	const { email } = event.queryStringParameters;

	const response = await new Promise((resolve, reject) =>
		https
			.get(
				`${BASIC_URL}/getContact?format=json&api_key=${API_KEY}&email=${email}`,
				(res) => {
					res.setEncoding("utf8");

					let rawData = "";

					res.on("data", (chunk) => {
						rawData += chunk;
					});
					res.on("end", () => {
						resolve(rawData);
					});
				}
			)
			.on("error", reject)
	);

	return {
		statusCode: 200,
		body: response,
	};
};
