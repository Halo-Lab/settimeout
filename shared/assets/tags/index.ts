import TwitterTag from "./twitter.png";
import YoutubeTag from "./youtube.png";

export enum Tag {
	ENGLISH = "english",
	TWITTER = "twitter",
	YOUTUBE = "youtube",
	UNKNOWN = "unknown",
	PODCAST = "podcast",
	TRANSLATE = "translate",
}

export interface TagData {
	readonly key: Tag;
	readonly url?: string;
	readonly name?: string;
}

const tagsData: readonly TagData[] = [
	{
		name: "Twitter",
		key: Tag.TWITTER,
		url: TwitterTag,
	},
	{
		name: "Youtube",
		key: Tag.YOUTUBE,
		url: YoutubeTag,
	},
	{ name: "English", key: Tag.ENGLISH },
	{ name: "Переведено", key: Tag.TRANSLATE },
	{ name: "Подкаст", key: Tag.PODCAST },
	{
		key: Tag.UNKNOWN,
	},
];

export const getTag = (name: Tag) =>
	tagsData.find(
		({ name: predefinedName }) =>
			name.toLowerCase() === predefinedName?.toLowerCase()
	) ?? tagsData[tagsData.length - 1];
