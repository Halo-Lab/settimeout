import { get as httpsGet } from "https";

export const get = async (url: string | URL): Promise<string> =>
	await new Promise((resolve, reject) =>
		httpsGet(url, (res) => {
			res.setEncoding("utf8");

			let rawData = "";

			res.on("data", (chunk) => (rawData += chunk));
			res.on("end", () => resolve(rawData));
		}).on("error", reject)
	);
