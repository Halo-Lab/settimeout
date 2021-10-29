import { page } from "@prostory/edelweiss-ssr";
import { render } from "@prostory/edelweiss";

import "./init.js";

import { Email } from "./Email.js";
import { write } from "./write.js";
import { loadLastAddedData } from "./load.js";

loadLastAddedData()
	.then(({ name, data }) => {
		render(document.body, Email(data));
		return name;
	})
	.then((name) => write(page(), name));
