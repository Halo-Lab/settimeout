import { resolve } from "path";

import { concurrently, sequentially } from "@fluss/core";

import { remove } from "../utils/remove.js";

sequentially(
	() => console.log("Start cleaning the previous build."),
	concurrently(
		() => remove(resolve(".parcel-cache")),
		() => remove(resolve("dist"))
	),
	() => console.log("Output files and artifacts were cleaned.")
)();
