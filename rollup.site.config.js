import "dotenv/config";
import { cwd } from "process";
import { readdir } from "fs/promises";
import { basename, resolve, sep } from "path";

import { plugins } from "./rollup.common.config.js";

const apiDirectory = "server";
const appEntryName = "app/App.ts";
const buildDirectory = "build";
const publicDirectory = "public";
const functionsDirectory = "netlify/functions";

const serverPath = resolve(apiDirectory);
const apiSuffixRegExp = /\.api\.[jt]s$/;

const appEntry = {
	input: appEntryName,
	output: {
		dir: `${publicDirectory}${sep}${buildDirectory}`,
		format: "es",
		assetFileNames: "[name].[ext]",
	},
	plugins: plugins({
		replaceOptions: {
			"import.meta.env.IS_SERVER": false,
		},
		urlOptions: {
			publicPath: `/${buildDirectory}/`,
		},
	}),
	external: [],
};

const getApiFileNames = (path) =>
	readdir(path, { withFileTypes: true, encoding: "utf8" })
		.then((dirents) =>
			dirents.flatMap(async (dirent) =>
				dirent.isDirectory()
					? getApiFileNames(resolve(path, dirent.name))
					: resolve(path, dirent.name)
			)
		)
		.then(Promise.all.bind(Promise))
		.then((paths) =>
			paths
				.filter((name) => apiSuffixRegExp.test(name))
				.map((name) => name.replace(`${cwd()}${sep}`, ""))
		);

const buildFunctionName = (entryName) =>
	`${functionsDirectory}${sep}${entryName
		.replace(`${apiDirectory}${sep}`, "")
		.replace(apiSuffixRegExp, ".js")}`;

const createInputOutput = (paths) =>
	paths
		.map((entryName) => ({
			input: entryName,
			output: {
				file: buildFunctionName(entryName),
				format: "es",
			},
			plugins: plugins({
				replaceOptions: {
					"import.meta.env.IS_SERVER": true,
					__styles__: `/${buildDirectory}/${basename(appEntryName).replace(
						/[jt]s$/,
						"css"
					)}`,
					__scripts__: `/${buildDirectory}/${basename(appEntryName).replace(
						/[jt]s$/,
						"js"
					)}`,
				},
				urlOptions: { emitFiles: false, publicPath: `/${buildDirectory}/` },
				stylesOptions: { onExtract: () => false },
			}),
			external: ["process"],
		}))
		.concat(appEntry);

export default getApiFileNames(serverPath).then(createInputOutput);
