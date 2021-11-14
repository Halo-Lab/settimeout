import { resolve } from "path";
import { promises } from "fs";

import { mkdir } from "./mkdir.js";

export const write = (data, to = resolve("packages/email/email.html")) => {
	const filePath = to;

	mkdir(filePath).then(() =>
		promises.writeFile(filePath, data, {
			encoding: "utf8",
		})
	);
};
