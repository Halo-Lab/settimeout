const Environment = Object.freeze({
	PRODUCTION: "production",
	DEVELOPMENT: "development",
});

/**
 * @param {string} environment
 */
const isEnvironment = (environment) => process.env.NODE_ENV === environment;

export const isProduction = () => isEnvironment(Environment.PRODUCTION);
