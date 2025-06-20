const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://costgptpro.dev.codebuddy.review',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'COSTGPT/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 10000,   
    pageLoadTimeout: 60000,    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
