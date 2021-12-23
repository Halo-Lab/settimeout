import { resolve } from "path";

import { write } from "../utils/write.js";
import { toDate } from "../src/shared/utils/toDate.js";
import { loadJSON, loadMailingListData } from "../utils/loadData.js";

loadMailingListData()
	.then((files) =>
		Promise.all(
			files.map((name, index) =>
				loadJSON(name).then((content) => ({
					...content,
					name,
					number: index + 1,
					createdAt: toDate(name.replace(/\.json/, "")),
				}))
			)
		)
	)
	.then(JSON.stringify)
	.then((data) => write({ file: resolve("dist", "data.json"), data }));
