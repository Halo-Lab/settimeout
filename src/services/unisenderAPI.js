const BASIC_URL = "https://api.unisender.com/ru/api";
const API_KEY = process.env.UNISENDER_API_KEY;
const LIST_ID = process.env.LIST_ID;

function addContact(email) {
	return fetch(
		`${BASIC_URL}/subscribe?format=json&api_key=${API_KEY}&
	list_ids=${LIST_ID}&fields[email]=${email}&double_optin=0&overwrite=0`
	).then((res) => {
		console.log("res", res);
		console.log("res.json()", res.json());
		res.json();
	});
}

function getContact(email) {
	return fetch(
		`${BASIC_URL}/async/getContact?format=json&api_key=${API_KEY}&email=${email}`
	).then((res) => {
		console.log("res", res);
		console.log("res.json()", res.json());
		res.json();
	});
}

function exportContact(email) {
	return fetch(
		`${BASIC_URL}/async/exportContacts?api_key=${API_KEY}&email=${email}`
	).then((res) => res.json());
}

const unisenderAPI = { addContact, exportContact, getContact };

export default unisenderAPI;
