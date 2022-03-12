import { readFile, readdir } from "fs/promises";
import { basename, join, resolve } from "path";

import { maybe } from "@fluss/core";

import { Email } from "/shared/types";
import { toDate } from "/shared/utils/date";

const dataFolder = resolve("data");

export const loadJSON = async (name: string, index: number): Promise<Email> =>
	readFile(join(dataFolder, name), { encoding: "utf-8" })
		.then(JSON.parse)
		.then((data: Email) => {
			const fileName = basename(name, ".json");

			return {
				...data,
				name: fileName,
				number: index + 1,
				createdAt: toDate(fileName).toISOString(),
			};
		});

export const loadEmailsList = async (): Promise<readonly string[]> =>
	readdir(dataFolder, { withFileTypes: true })
		.then((files) =>
			files
				.filter((file) => file.isFile())
				.map(({ name }) => name)
				.sort(
					(firstName, secondName) =>
						toDate(firstName.replace(/\.json/, "")).getTime() -
						toDate(secondName.replace(/\.json/, "")).getTime()
				)
		)
		.catch(() => []);

export const loadLastAddedData = async () => {
	const files = await loadEmailsList();
	const issueNumber = files.length - 1;

	return maybe<string | undefined>(files[files.length - 1])
		.map((name) => loadJSON(name, issueNumber))
		.fill(() =>
			Promise.resolve({
				createdAt: new Date().toISOString(),
				name: "",
				number: -1,
				sections: [],
			})
		)
		.extract();
};
