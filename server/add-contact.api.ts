import { env } from "process";

import { Handler } from "@netlify/functions";

import { get } from "/server/utils/request";

const API_KEY = process.env.UNISENDER_API_KEY;
const LIST_ID = process.env.LIST_ID; // the list of contacts in unisender to which you want to add a new contact
const BASIC_URL = env.UNISENDER_BASE_URL;

export const handler: Handler = async (event, context) => {
	const { email, name } = event.queryStringParameters ?? {};

	const requestURL = `${BASIC_URL}/subscribe?format=json&api_key=${API_KEY}&list_ids=${LIST_ID}&fields[email]=${email}&fields[Name]=${name}&double_optin=0&overwrite=0`;

	const response = await get(requestURL);

	return {
		statusCode: 200,
		body: response,
	};
};
