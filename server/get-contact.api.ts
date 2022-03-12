import { env } from "process";

import { Handler } from "@netlify/functions";

import { get } from "/server/utils/request";

const API_KEY = env.UNISENDER_API_KEY;
const BASIC_URL = env.UNISENDER_BASE_URL;

export const handler: Handler = async (event, context) => {
	const { email } = event.queryStringParameters ?? {};

	const requestURL = `${BASIC_URL}/getContact?format=json&api_key=${API_KEY}&email=${email}&include_lists=1`;

	const response = await get(requestURL);

	return {
		statusCode: 200,
		body: response,
	};
};
