import { isProduction } from "../utils/environment.js";

/**
 * @param {string} path
 */
const assets = (path) => `${process.env.BASE_URL ?? ""}/assets/${path}`;

/**
 * @param {URL} url
 */
export const normalizeURL = (url) =>
	url.href.startsWith("file://") ? url.href.replace("file://", "") : url;

const Tag = Object.freeze({
	ENGLISH: "english",
	TWITTER: "twitter",
	YOUTUBE: "youtube",
	UNKNOWN: "unknown",
	TRANSLATE: "translate",
});

const tagsData = [
	{
		name: "Twitter",
		key: Tag.TWITTER,
		url: isProduction()
			? assets("tags/twitter.png")
			: normalizeURL(
					new URL("/src/shared/assets/tags/twitter.png", import.meta.url)
			  ),
	},
	{
		name: "Youtube",
		key: Tag.YOUTUBE,
		url: isProduction()
			? assets("tags/youtube.png")
			: normalizeURL(
					new URL("/src/shared/assets/tags/youtube.png", import.meta.url)
			  ),
	},
	{ name: "English", key: Tag.ENGLISH },
	{ name: "Переведено", key: Tag.TRANSLATE },
	{
		name: "Unknown",
		key: Tag.UNKNOWN,
	},
];

/**
 * @param {string} name
 */
export const getTag = (name) =>
	tagsData.find(
		({ name: predefinedName }) =>
			name.toLowerCase() === predefinedName.toLowerCase()
	) ?? tagsData[tagsData.length - 1];

const Icon = Object.freeze({
	MARKUP: "Верстка",
	UNKNOWN: "Unknown",
	JAVASCRIPT: "JavaScript",
	WEB_DEVELOPMENT: "Веб-разработка",
});

const iconsData = [
	{
		key: Icon.MARKUP,
		name: "star",
		url: isProduction()
			? assets("icons/star.png")
			: normalizeURL(
					new URL("/src/shared/assets/icons/star.png", import.meta.url)
			  ),
	},
	{
		key: Icon.WEB_DEVELOPMENT,
		name: "light",
		url: isProduction()
			? assets("icons/light.png")
			: normalizeURL(
					new URL("/src/shared/assets/icons/light.png", import.meta.url)
			  ),
	},
	{
		key: Icon.JAVASCRIPT,
		name: "light",
		url: isProduction()
			? assets("icons/light.png")
			: normalizeURL(
					new URL("/src/shared/assets/icons/light.png", import.meta.url)
			  ),
	},
	{
		key: Icon.UNKNOWN,
		name: "unknown",
	},
];

/**
 * @param {string} title
 */
export const getIcon = (title) =>
	iconsData.find(({ key }) => key.toLowerCase() === title.toLowerCase()) ??
	iconsData[iconsData.length - 1];

export const Image = Object.freeze({
	MAN: "men",
	NOTE: "note",
	BOOK: "book",
	LOGO: "logo",
	MAIL: "mail",
	UNKNOWN: "unknown",
	GREETING: "greeting",
	LOGO_FOOTER: "logo-footer",
});

const Images = {
	[Image.BOOK]: isProduction()
		? assets("img/book.png")
		: normalizeURL(new URL("/src/shared/assets/img/book.png", import.meta.url)),
	[Image.GREETING]: isProduction()
		? assets("img/greeting.png")
		: normalizeURL(
				new URL("/src/shared/assets/img/greeting.png", import.meta.url)
		  ),
	[Image.LOGO_FOOTER]: isProduction()
		? assets("img/logo-footer.png")
		: normalizeURL(
				new URL("/src/shared/assets/img/logo-footer.png", import.meta.url)
		  ),
	[Image.LOGO]: isProduction()
		? assets("img/logo.png")
		: normalizeURL(new URL("/src/shared/assets/img/logo.png", import.meta.url)),
	[Image.MAIL]: isProduction()
		? assets("img/mail.png")
		: normalizeURL(new URL("/src/shared/assets/img/mail.png", import.meta.url)),
	[Image.MAN]: isProduction()
		? assets("img/men.svg")
		: normalizeURL(new URL("/src/shared/assets/img/men.svg", import.meta.url)),
	[Image.NOTE]: isProduction()
		? assets("img/note.png")
		: normalizeURL(new URL("/src/shared/assets/img/note.png", import.meta.url)),
	[Image.UNKNOWN]: "#",
};

/**
 * @param {keyof Image} name
 */
export const getImageURL = (name) => Images[name] ?? Images[Image.UNKNOWN];
