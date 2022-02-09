import { html } from "@prostory/edelweiss";

import { getImageURL, Image } from "../../../shared/index.js";

import "./Error.css";

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
				<a href="mailto:hey@settimeout.dev" class="settimeout-mailto-link"
					>📨 hey@settimeout.dev</a
				>
			</div>
		</header>
		<main class="main-content">
          <div class="main-content-container"> 
            <img src=${getImageURL(Image.NOPAGEIMAGE)} />
		  </div>
		</main>
	</div>
`;
