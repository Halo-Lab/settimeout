import { html } from "@prostory/edelweiss";

import { Email } from "/shared/types";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "/shared/Section";
import { Greeting } from "./components/Greeting";
import { ContentFooter } from "./components/ContentFooter";

import "./Body.css";

export const Body = ({
	number,
	sections,
	greetingTitle,
	greetingSubtitle,
}: Email) =>
	html`
		<div class="frame">
			${Header(number)} ${Greeting(greetingTitle, greetingSubtitle)}
			<div class="content">${sections.map(Section)} ${ContentFooter}</div>
			${Footer}
		</div>
	`;
