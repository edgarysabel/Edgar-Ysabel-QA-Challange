const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
	defaultCommandTimeout: 30000,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			allureWriter(on, config);
			return config;
		},
	},
});
