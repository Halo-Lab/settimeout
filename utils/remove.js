import { promises, existsSync } from "fs";

import { when } from "@fluss/core";

export const remove = when(existsSync)(
	(path) => promises.rm(path, { recursive: true }),
	Promise.resolve.bind(Promise)
);
