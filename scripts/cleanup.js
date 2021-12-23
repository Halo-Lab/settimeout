import { resolve } from "path";

import { concurrently } from "@fluss/core";

import { remove } from "../utils/remove.js";

concurrently(
	() => remove(resolve(".parcel-cache")),
	() => remove(resolve("dist"))
)();
