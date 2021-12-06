export const sectionsData = (title) =>
	({
		["JavaScript"]: { icon: "light" },
		["Веб-разработка"]: { icon: "light" },
		["Верстка"]: { icon: "star" },
	}[title] ?? { icon: "" });
