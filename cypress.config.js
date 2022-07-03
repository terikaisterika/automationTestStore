const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: { host: "https://automationteststore.com/" },
  e2e: {
    baseUrl: "https://automationteststore.com",
    excludeSpecPattern: [
      "**/1-getting-started/**",
      "**/2-advanced-examples/**",
    ],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
