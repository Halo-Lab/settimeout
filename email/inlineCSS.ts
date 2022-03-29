// @ts-ignore
import CSSInliner from "css-inliner";

const inliner = new CSSInliner({ directory: "./dist" });

export const inlineCSS = (html: string): string => inliner.inlineCSSAsync(html);
