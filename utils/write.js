import { promises } from "fs";

import { pipe } from "@fluss/core";

import { mkdir } from "./mkdir.js";

export const write = pipe(
	({ file, data }) => mkdir(file).then(() => ({ file, data })),
	({ file, data }) => promises.writeFile(file, data, { encoding: "utf8" })
);
