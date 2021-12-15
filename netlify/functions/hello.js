exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Hello World" }),
	};
};

///////////////////////////

// `${BASIC_URL}/async/getContact?format=json&api_key=${API_KEY}&email=${email}`

// const fetch = require("node-fetch");

// const API_ENDPOINT = "https://cat-fact.herokuapp.com/facts";

// exports.handler = async (event, context) => {
// 	try {
// 		const response = await fetch(API_ENDPOINT);
// 		const data = await response.json();
// 		return { statusCode: 200, body: JSON.stringify({ data }) };
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			statusCode: 500,
// 			body: JSON.stringify({ error: "Failed fetching data" }),
// 		};
// 	}
// };
