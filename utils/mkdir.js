import { dirname } from "path";
import { existsSync, promises } from "fs";

import { when, pipe } from "@fluss/core";

export const mkdir = pipe(
	dirname,
	when(existsSync)(Promise.resolve.bind(Promise), (path) =>
		promises.mkdir(path, { recursive: true })
	)
);
