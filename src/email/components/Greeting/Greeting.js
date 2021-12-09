import { html } from "@prostory/edelweiss";

export const Greeting = () => {
	const greetingPNG = "../shared/assets/img/greeting.png";

	return html`<style>
			@import "./components/Greeting/Greeting.css";
		</style>

		<div class="greeting">
			<table class="greeting-table">
				<tr>
					<td class="greeting-left">
						<div class="greeting-title">Привет, это SetTimeout!&nbsp;✌</div>
						<div class="greeting-text">
							Подготовили для тебя новую подборку полезных материалов о
							разработке, технологиях и опенсорсе.
						</div>
					</td>
					<td>
						<img
							class="greeting-img"
							src=${greetingPNG}
							alt="Greeting picture"
							width="127"
							height="133"
						/>
					</td>
				</tr>
			</table>
		</div>`;
};
