export const toDate = (name) => {
	const [day, month, year] = name.split("-");

	return new Date(year, month - 1, day);
};
