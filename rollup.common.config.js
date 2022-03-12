import "dotenv/config";
import { env } from "process";

import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import styles from "rollup-plugin-styles";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const toReplace = {
	preventAssignment: true,

	__public__: "/build",
	"import.meta.env.LIST_ID": JSON.stringify(env.LIST_ID),
	"import.meta.env.GTAG_ID": JSON.stringify(env.GTAG_ID),
	"import.meta.env.BASE_NETLIFY_URL": JSON.stringify(env.BASE_NETLIFY_URL),
};

const isProduction = env.NODE_ENV === "production";

export const plugins = ({
	replaceOptions = {},
	urlOptions = {},
	stylesOptions = {},
	additionalPlugins = [],
} = {}) => [
	replace({ ...toReplace, ...replaceOptions }),
	alias({
		entries: [],
	}),
	url({
		limit: 0,
		fileName: `[name][extname]`,
		...urlOptions,
	}),
	json(),
	styles({
		mode: "extract",
		onExtract: () => true,
		url: false,
		minimize: isProduction,
		...stylesOptions,
	}),
	typescript(),
	nodeResolve({ resolveOnly: Object.keys(pkg.dependencies) }),
	...additionalPlugins,
	isProduction ? terser() : null,
];
