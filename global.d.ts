declare module "*.png" {
	const name: string;
	export default name;
}

declare module "*.svg" {
	const name: string;
	export default name;
}

declare module "*.jpg" {
	const name: string;
	export default name;
}

interface ImportMeta {
	readonly env: {
		readonly LIST_ID: string;
		readonly GTAG_ID: string;
	};
}
