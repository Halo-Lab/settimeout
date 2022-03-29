import { resolve } from "path";
import { writeFile } from "fs/promises";

import { Page } from "/email/Page";
import { inlineCSS } from "/email/inlineCSS";
import { loadLastAddedData } from "/server/utils/loadData";

loadLastAddedData()
	.then(Page)
	.then(inlineCSS)
	.then((html) => writeFile(resolve("dist", "email.html"), html));
