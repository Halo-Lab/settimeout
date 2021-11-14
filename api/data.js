const { promises } = require("fs");
const { join, resolve } = require("path");

const dataFolder = resolve("data");

const awaitForAll = Promise.all.bind(Promise);

const defaultHeaders = { "Content-Type": "application/json" };

const createResponse = (status, body, headers = {}) => ({
	statusCode: status,
	headers: { ...defaultHeaders, ...headers },
	body,
});

const successResponse = (body, headers) => createResponse(200, body, headers);

const failServerResponse = (body, headers) =>
	createResponse(500, body, headers);

module.exports.handler = async (event, context) =>
	promises
		.readdir(dataFolder)
		.then((files) =>
			files
				.filter((name) => name.endsWith("json"))
				.map((name) => join(dataFolder, name))
				.map((name) => promises.readFile(name, { encoding: "utf8" }))
		)
		.then(awaitForAll)
		.then((data) => successResponse(`[${data.join(",")}]`))
		.catch((error) => failServerResponse(JSON.stringify(error)));
