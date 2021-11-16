import { resolve } from "path";

import { tap } from "@fluss/core";

import { write } from "../utils/write.js";
import { loadJSON, loadMailingListData } from "../utils/loadData.js";

loadMailingListData()
	.then(tap(() => console.log("Loading data...")))
	.then((files) => Promise.all(files.map(loadJSON)))
	.then(JSON.stringify)
	.then((data) => write({ file: resolve("dist", "data.json"), data }))
	.then(() => console.log("Data was prepared."));
