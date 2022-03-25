import { basename } from "path";

import { current } from "@prostory/edelweiss";

import { homeResource } from "/app/App";
import { loadEmailsList, loadJSON } from "../utils/loadData";

const buildUrl = (fileName?: string) =>
	fileName ? `/mail/${basename(fileName, ".json")}` : undefined;

export const fetchHomeResource = async () => {
	const list = await loadEmailsList();

	const [, fileName = ""] = /^\/mail\/([\w-]+)$/.exec(current()) ?? [];

	const contentIndex =
		fileName === ""
			? list.length - 1
			: list.findIndex((fullName) => fullName.startsWith(fileName));

	homeResource(
		contentIndex === -1
			? null
			: {
					content: await loadJSON(list[contentIndex], contentIndex),
					nextUrl: buildUrl(list[contentIndex + 1]),
					previousUrl: buildUrl(list[contentIndex - 1]),
			  }
	);
};
