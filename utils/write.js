import { promises } from "fs";

import { pipe } from "@fluss/core";

import { mkdir } from "./mkdir.js";

export const write = pipe(
	({ file, ...other }) => mkdir(file).then(() => ({ file, ...other })),
	({ file, data, encoding = null }) =>
		promises.writeFile(file, data, { encoding })
);
