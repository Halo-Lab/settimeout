import { basename, join, resolve } from "path";

import { maybe } from "@fluss/core";

import { read } from "./read.js";
import { toDate } from "../src/shared/utils/toDate.js";

const dataFolder = resolve("data");

export const loadJSON = async (fileName) =>
	read("file")(join(dataFolder, fileName))
		.then(JSON.parse)
		.catch(() => []);

export const loadMailingListData = async () =>
	read("dir")(dataFolder)
		.then((files) =>
			files
				.filter((file) => file.isFile())
				.map(({ name }) => name)
				.sort((firstName, secondName) => toDate(firstName) - toDate(secondName))
		)
		.catch(() => []);

export const loadLastAddedData = async () => {
	const files = await loadMailingListData();

	return maybe(files.at(-1))
		.map((name) =>
			loadJSON(name).then((data) => ({ name: basename(name, ".json"), data }))
		)
		.fill(() => Promise.resolve({ name: "", data: [] }))
		.extract();
};
