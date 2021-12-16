const https = require("https");
const makeResponse = require("./makeResponse");

const BASIC_URL = "https://api.unisender.com/ru/api";
const API_KEY = process.env.UNISENDER_API_KEY;
const LIST_ID = process.env.LIST_ID; //the list of contacts in unisender to which you want to add a new contact

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

exports.handler = async function (event, context) {
	const { email } = event.queryStringParameters;

	const requestData = `${BASIC_URL}/subscribe?format=json&api_key=${API_KEY}&list_ids=${LIST_ID}&fields[email]=${email}&double_optin=3&overwrite=0`;

	const response = await makeResponse(requestData);

	return {
		statusCode: 200,
		body: response,
	};
};
