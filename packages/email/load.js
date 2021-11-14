import { promises } from "fs";
import { basename, join, resolve } from "path";

import { maybe } from "@fluss/core";
import { toDate } from "../shared/index.js";

const dataFolder = resolve("packages/data");

const loadJSON = async (fileName) =>
	promises
		.readFile(join(dataFolder, fileName), { encoding: "utf8" })
		.then(JSON.parse)
		.catch(() => []);

export const loadMailingList = async () =>
	promises
		.readdir(dataFolder, { withFileTypes: true })
		.then((files) =>
			files.filter((file) => file.isFile()).map(({ name }) => name)
		)
		.catch(() => []);

export const loadLastAddedData = async () => {
	const files = await loadMailingList();

	const lastFile = maybe(
		files
			.map((name) => ({ name, date: toDate(name) }))
			.sort(({ date: a }, { date: b }) => a - b)
			.at(-1)
	);

	return lastFile
		.map(({ name }) =>
			loadJSON(name).then((data) => ({ name: basename(name, ".json"), data }))
		)
		.fill(() => Promise.resolve({ name: "", data: [] }))
		.extract();
};
