const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://costgptpro.dev.codebuddy.review',
    defaultCommandTimeout: 10000,   
    pageLoadTimeout: 60000,    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
