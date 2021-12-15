const https = require("https");
const BASIC_URL = "https://api.unisender.com/ru/api";
const API_KEY = process.env.UNISENDER_API_KEY;
const LIST_ID = process.env.LIST_ID;

exports.handler = async function (event, context) {
	const responce = await new Promise((resolve, reject) =>
		https
			.get(
				`${BASIC_URL}/async/getContact?format=json&api_key=${API_KEY}&email=ivani@mail.com`,
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
		body: responce,
	};
};
