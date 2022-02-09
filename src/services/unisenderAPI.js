const BASE_NETLIFY_URL = "/.netlify/functions";

function addContact(email, name) {
	return fetch(
		`${BASE_NETLIFY_URL}/add-contact?email=${email}&name=${name}`
	).then((res) => res.json());
}

function getContact(email) {
	return fetch(`${BASE_NETLIFY_URL}/get-contact?email=${email}`).then((res) =>
		res.json()
	);
}

const unisenderAPI = { addContact, getContact };

export default unisenderAPI;
