import { html, current } from "@prostory/edelweiss";

import { getImageURL, Image } from "../../../shared/index.js";

import "./Error.css";

const onBackHomeLinkClick = () => {
	current("/");
};

export const ErrorPage = html`
	<div class="error-page">
		<header class="error-header">
			<div class="error-header-container">
				<img 
				  src=${getImageURL(Image.ERRORLOGO)} 
				  loading="eager" 
				  alt="SetTimeout logo"
				  width="241"
				  height="36"
				/>
				<a href="mailto:hey@settimeout.dev" class="mailto-link"
					>📨 hey@settimeout.dev</a
				>
			</div>
		</header>
		<main class="main-content">
          <div class="main-content-container"> 
            <img 
			  src=${getImageURL(Image.NOPAGEIMAGE)} 
			  loading="eager" 
			  class="notfound-image"
			  width="588"
			  height="327"
			/>
			<h1 class="main-headline">Страница не найдена :(</h1>
			<p class="notfound-message">Вернитесь на главную, чтоб увидеть много полезной информации</p>
			<button
			  class="backhome-button"
			  @click=${(e) => onBackHomeLinkClick(e)}
			>
			  Вернуться на главную
			</button>
		  </div>
		</main>
	</div>
`;
