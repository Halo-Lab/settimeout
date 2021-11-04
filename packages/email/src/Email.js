import { html } from "@prostory/edelweiss";

import { Section } from "shared";

export const Email = ({ data }) => html`
	<div class="max-w-2xl mx-auto">
		<div class="text-xl mb-5 font-normal">
			Привет.
			<br />
			Это второе письмо, которое мы подготовили в
			<address class="inline">Halo Lab.</address>
			<p class="text-l">
				Авторы: Оля, Митя и Дима. Кнопку <strong>"Отправить"</strong> жмет
				Сережа.
			</p>
		</div>
		${data.map(Section)}
	</div>
`;
