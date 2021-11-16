import { promises } from "fs";

import { when } from "@fluss/core";

const readDir = (dir) => promises.readdir(dir, { withFileTypes: true });

const readFile = (file) => promises.readFile(file, { encoding: "utf8" });

export const read = (type = "dir") =>
	when((_path) => type === "dir")(readDir, readFile);
