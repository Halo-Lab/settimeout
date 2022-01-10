import { html } from "@prostory/edelweiss";

export const Footer = html`
	<style>
		@import "./components/Footer/Footer.css";
	</style>

	<div class="footer">
		<div class="footer-list">
			<a class="footer-list-item" href="#">Напишите нам</a>
			<span class="footer-list-separator"></span>
			<a class="footer-list-item" href="#">Отписаться</a>
		</div>
		<div class="footer-copy">
			© SetTimeout.dev ${new Date().getFullYear()}. Все права защищены
		</div>
	</div>
`;
