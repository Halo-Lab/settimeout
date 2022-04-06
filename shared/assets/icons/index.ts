import StarIcon from "./star.png";
import LightIcon from "./light.png";
import SmileIcon from "./smile.png";
import AsteriskIcon from "./asterisk.png";

export enum Icon {
	MARKUP = "Layout design",
	UNKNOWN = "Unknown",
	JAVASCRIPT = "JavaScript",
	FRAMEWORKS = "Frameworks and libraries",
	PSYCHOLOGY = "Productivity, soft skills",
	WEB_DEVELOPMENT = "Web development",
}

export interface IconsData {
	readonly key: Icon;
	readonly url?: string;
	readonly name: string;
}

const iconsData: readonly IconsData[] = [
	{
		key: Icon.MARKUP,
		name: "star",
		url: StarIcon,
	},
	{
		key: Icon.WEB_DEVELOPMENT,
		name: "light",
		url: LightIcon,
	},
	{
		key: Icon.JAVASCRIPT,
		name: "light",
		url: LightIcon,
	},
	{
		key: Icon.FRAMEWORKS,
		name: "asterisk",
		url: AsteriskIcon,
	},
	{
		key: Icon.PSYCHOLOGY,
		name: "smile",
		url: SmileIcon,
	},
	{
		key: Icon.UNKNOWN,
		name: "unknown",
		url: "#",
	},
];

export const getIcon = (title: Icon) =>
	iconsData.find(({ key }) => key.toLowerCase() === title.toLowerCase()) ??
	iconsData[iconsData.length - 1];
