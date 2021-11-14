import CSSInliner from "css-inliner";

const inliner = new CSSInliner({ directory: "./dist" });

export const inlineCSS = (html) => inliner.inlineCSSAsync(html);
