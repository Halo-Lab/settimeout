const makeResponse = async (request) =>
	await new Promise((resolve, reject) =>
		https
			.get(request, (res) => {
				res.setEncoding("utf8");

				let rawData = "";

				res.on("data", (chunk) => {
					rawData += chunk;
				});
				res.on("end", () => {
					resolve(rawData);
				});
			})
			.on("error", reject)
	);
