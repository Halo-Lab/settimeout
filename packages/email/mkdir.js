import { dirname } from "path";
import { existsSync, promises } from "fs";

export const mkdir = async (path) => {
	const directory = dirname(path);

	if (!existsSync(directory)) {
		await promises.mkdir(directory, { recursive: true });
	}
};
