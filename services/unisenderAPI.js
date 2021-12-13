const BASIC_URL = "https://api.unisender.com/ru/api";
const API_KEY = "663pdm8xxe86r73bcas8p8gpihn86wn8ba9ruqqy";
const LIST_ID = "1"; //{"id":1,"title":"Мій перший список"}
//https://api.unisender.com/ru/api/subscribe?format=json&api_key=663pdm8xxe86r73bcas8p8gpihn86wn8ba9ruqqy&list_ids=1&fields[email]=test@example.org&double_optin=0&overwrite=0 //subscribe

// https://api.unisender.com/ru/api/getContact?format=json&api_key=663pdm8xxe86r73bcas8p8gpihn86wn8ba9ruqqy&email=test123@gmail.com //getContact

function addContact(email) {
	return fetch(
		`${BASIC_URL}/subscribe?format=json&api_key=${API_KEY}&
	list_ids=${LIST_ID}&fields[email]=${email}&double_optin=0&overwrite=0`,
		{ mode: "no-cors" }
	).then((res) => res.json());
}

function getContact(email) {
	return fetch(
		`${BASIC_URL}/async/getContact?format=json&api_key=${API_KEY}&email=${email}`,
		{ mode: "no-cors" }
	).then((res) => res.json());
}

function exportContact(email) {
	return fetch(
		`${BASIC_URL}/async/exportContacts?api_key=${API_KEY}&email=${email}`,
		{ mode: "no-cors" }
	).then((res) => res.json());
}

const unisenderAPI = { addContact, exportContact, getContact };

export default unisenderAPI;
