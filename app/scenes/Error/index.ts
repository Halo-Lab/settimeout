import { html } from "@prostory/edelweiss";

import { getImageURI, Image } from "/shared/assets";

import "./index.css";

export const Error = html`
	<div class="error-page">
		<header class="error-header">
			<div class="error-header-container">
				<a href="/">
					<img
						src=${getImageURI(Image.ERROR_LOGO)}
						loading="eager"
						alt="SetTimeout logo"
						width="241"
						height="36"
					/>
				</a>
				<a href="mailto:hey@settimeout.dev" class="mailto-link">
					📨 hey@settimeout.dev
				</a>
			</div>
		</header>
		<main class="main-content">
			<div class="main-content-container">
				<img
					src=${getImageURI(Image.NOT_FOUND_PAGE)}
					loading="eager"
					class="notfound-image"
					width="588"
					height="327"
				/>
				<h1 class="main-headline">Page is not found :(</h1>
				<p class="notfound-message">
					Go to the homepage to get useful information
				</p>
				<a href="/" class="backhome-button"> Back to the homepage </a>
			</div>
		</main>
	</div>
`;
