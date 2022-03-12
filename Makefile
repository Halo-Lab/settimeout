site_dev: clean_site
	@npx rollup --config rollup.site.config.js --watch

build_site: clean_site
	@NODE_ENV=production npx rollup --config rollup.site.config.js

email_dev: clean_email
	@npx rollup --config rollup.email.config.js --watch

build_email: clean_email
	@NODE_ENV=production npx rollup --config rollup.email.config.js
	@node dist/index.js

format:
	@echo "Start formatting files..."
	@npx prettier --write .
	@echo "Finish formatting files."

clean_email:
	@echo "Start cleaning the previous build."
	@rm -rf dist
	@echo "Output files and artifacts were cleaned."

clean_site:
	@echo "Start cleaning the previous build."
	@rm -rf public/build
	@echo "Output files and artifacts were cleaned."

