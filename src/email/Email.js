import { html } from "@prostory/edelweiss";

import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { Section } from "../shared/index.js";
import { Greeting } from "./components/Greeting/Greeting.js";
import { ContentFooter } from "./components/ContentFooter/ContentFooter.js";

export const Email = ({ greetingTitle, greetingSubtitle, sections, number }) =>
	html`
		<div class="frame">
			${Header({ issueNumber: number })}${Greeting(
				greetingTitle,
				greetingSubtitle
			)}
			<div class="content">${sections.map(Section)} ${ContentFooter}</div>
			${Footer}
		</div>
	`;
