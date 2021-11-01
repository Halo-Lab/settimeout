import { page } from "@prostory/edelweiss-ssr";
import { render } from "@prostory/edelweiss";

import "./init.js";

import { Email } from "./Email.js";
import { write } from "./write.js";
import { inlineCSS } from "./inline_css.js";
import { loadLastAddedData } from "./load.js";

loadLastAddedData()
	.then(({ name, data }) => {
		render(document.body, Email(data));
		return name;
	})
	.then((name) => inlineCSS(page()).then((result) => ({ name, html: result })))
	.then(({ name, html }) => write(html, name));
