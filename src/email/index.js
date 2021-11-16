import { resolve } from "path";

import { page } from "@prostory/edelweiss-ssr";
import { render } from "@prostory/edelweiss";

import "./init.js";

import { Email } from "./Email.js";
import { write } from "../../utils/write.js";
import { inlineCSS } from "./inline_css.js";
import { loadLastAddedData } from "../../utils/loadData.js";

loadLastAddedData()
	.then(({ name, data }) => {
		render(document.body, Email(data));
		return name;
	})
	.then((name) => inlineCSS(page()).then((result) => ({ name, html: result })))
	.then(({ html }) =>
		write({ file: resolve("src", "email", "email.html"), data: html })
	);
