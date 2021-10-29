import { resolve } from "path";
import { promises } from "fs";

export const write = (data, fileName) =>
	promises.writeFile(resolve(`./dist/${fileName || "index"}.html`), data, {
		encoding: "utf8",
	});
