import { promises } from "fs";

import { when } from "@fluss/core";

const readDir = (dir) => promises.readdir(dir, { withFileTypes: true });

const readFile = (file, encoding = null) =>
	promises.readFile(file, { encoding });

export const read = (type = "dir") =>
	when((_path, _encoding) => type === "dir")(readDir, readFile);
