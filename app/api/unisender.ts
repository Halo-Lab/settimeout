import {
	Result,
	Contact,
	SuccessResult,
	AddedContactInfo,
} from "/shared/types";

const BASE_NETLIFY_URL = import.meta.env.BASE_NETLIFY_URL;

export const addContact = (
	email: string,
	name: string
): Promise<Result<AddedContactInfo>> =>
	fetch(`${BASE_NETLIFY_URL}/add-contact?email=${email}&name=${name}`).then(
		(res) => res.json()
	);

export const getContact = (email: string): Promise<Result<Contact>> =>
	fetch(`${BASE_NETLIFY_URL}/get-contact?email=${email}`).then((res) =>
		res.json()
	);

export const isSuccessResult = <T>(value: object): value is SuccessResult<T> =>
	"result" in value;
