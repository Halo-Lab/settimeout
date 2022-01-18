NODE_ENV = production
BASE_URL = https://settimeout.dev

build_email:
	@make clean
	@NODE_ENV=$(NODE_ENV) BASE_URL=$(BASE_URL) node ./src/email/index.js
	@npx parcel build ./src/email/email.html

build_site:
	@make clean
	@npx parcel build ./src/landing/index.html
	@make join_data
	@make copy_images
	@echo '/*    /index.html   200' > dist/_redirects

start_email:
	@make clean
	@node ./src/email/index.js
	@npx parcel ./src/email/email.html

start_site:
	@make clean
	@make join_data
	@npx parcel src/landing/index.html

copy_images:
	@echo "Start copying..."
	@node scripts/copyImages.js
	@echo "Finish copying."

join_data:
	@echo "Loading data..."
	@node scripts/prepareData.js
	@echo "Data was prepared."

clean:
	@echo "Start cleaning the previous build."
	@node scripts/cleanup.js
	@echo "Output files and artifacts were cleaned."

