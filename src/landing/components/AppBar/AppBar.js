import { html } from "@prostory/edelweiss";

import "./AppBar.css";

export const AppBar = html`
	<section class="app-bar">
		<div class="app-bar-content-wrap">
			<a href="/" class="logo-link">
				<svg
					width="42"
					height="39"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					class="logo-icon"
				>
					<path
						d="M19.205 13.148 15.583 23.48h-4.927l3.623-10.333h4.926ZM27.91 13.148 24.263 23.48h-4.926l3.645-10.333h4.926Z"
						fill="#currentColor"
					/>
					<path
						d="m7.63 31.503 1.546-4.422-.265-.244a12.625 12.625 0 0 1-4.043-9.223c0-5.778 4.065-10.91 9.676-12.2.84-.2 1.723-.289 2.74-.289h13.651L32.504.66H17.305c-.309 0-.574 0-.839.022C7.475 1.125.45 8.57.45 17.614c0 5.29 2.386 10.2 6.561 13.422l.619.467Z"
						fill="#currentColor"
					/>
					<path
						d="m30.935 5.126-1.547 4.422.265.245a12.588 12.588 0 0 1 4.043 9.222c0 5.778-4.065 10.911-9.676 12.2-.84.2-1.723.289-2.739.289H7.629L6.061 35.97h15.198c.31 0 .574 0 .84-.022 8.968-.444 15.993-7.889 15.993-16.933 0-5.289-2.386-10.2-6.56-13.422l-.597-.467Z"
						fill="#currentColor"
					/>
				</svg>
				<span class="logo-text">SetTimeout.dev</span>
			</a>
		</div>
	</section>
`;
