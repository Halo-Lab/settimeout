import fs from "fs";
import path from "path";
import { DOMParser, XMLSerializer } from "@xmldom/xmldom";
import format from "xml-formatter";

const currentIssues = fs.readdirSync("./data");

const contentPagesUrls = currentIssues.map((issue) => {
	const lastSymbol = issue.length - 5;
	const sliced = issue.substring(0, lastSymbol);

	const siteUrlWithMailDir = "https://www.settimeout.dev/mail";
	const issueUrl = path.join(siteUrlWithMailDir, sliced);

	return issueUrl;
});

const urlsForUrlset = contentPagesUrls
	.map((url) => `<url><loc>${url}</loc></url>`)
	.join("");

const sitemapData = new DOMParser().parseFromString(
	`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsForUrlset}</urlset>`,
	"text/xml"
);

const serializedSitemap = new XMLSerializer().serializeToString(sitemapData);
const formattedSitemap = format(serializedSitemap);

fs.writeFileSync("./public/sitemap.xml", formattedSitemap);

console.log("Sitemap is updated");
