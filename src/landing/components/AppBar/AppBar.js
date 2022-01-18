import { html } from "@prostory/edelweiss";
import { Logo } from "../Logo/Logo.js";

import "./AppBar.css";

export const AppBar = html`
	<section class="app-bar">
		<div class="app-bar-content-wrap">${Logo}</div>
	</section>
`;
