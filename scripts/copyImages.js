import { join, resolve } from "path";

import { read } from "../utils/read.js";
import { write } from "../utils/write.js";

const sourcePrefix = "src/shared";
const outputPrefix = "dist";

const copyImagesFrom = async (assets) => {
	const items = await read("dir")(resolve(sourcePrefix, assets));

	await Promise.all(
		items
			.filter((item) => !/\.(?:js)$/.test(item.name))
			.map(async (item) =>
				item.isDirectory()
					? copyImagesFrom(join(assets, item.name))
					: write({
							file: resolve(outputPrefix, assets, item.name),
							data: await read("file")(
								resolve(sourcePrefix, assets, item.name)
							),
					  })
			)
	);
};

copyImagesFrom("assets");
