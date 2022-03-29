import "dotenv/config";
import { env } from "process";
import { basename } from "path";

import { plugins } from "./rollup.common.config.js";

const emailEntryName = "email/index.ts";

export default {
	input: emailEntryName,
	output: {
		dir: "dist",
		format: "es",
		assetFileNames: "[name].[ext]",
	},
	plugins: plugins({
		urlOptions: { emitFiles: false, publicPath: env.DOMAIN + "/build/" },
		replaceOptions: {
			__styles__: `./${basename(emailEntryName).replace(/[jt]s$/, "css")}`,
		},
	}),
	external: ["css-inliner", "@prostory/edelweiss"],
};
