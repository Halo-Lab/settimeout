const tagsData = [
	{ name: "English", img: false, tagKey: "english" },
	{ name: "Переведено", img: false, tagKey: "translate" },
	{ name: "Twitter", img: true, tagKey: "twitter" },
	{ name: "Youtube", img: true, tagKey: "youtube" },
];

export const getTagData = (key) => {
	return (
		tagsData.find(({ name }) => name.toLowerCase() === key.toLowerCase()) ?? {
			name: key,
			img: false,
			tagKey: "unknown",
		}
	);
};
