export const toDate = (name: string) => {
	const [day, month, year] = name.split("-").map(Number);

	return new Date(year, month - 1, day);
};
