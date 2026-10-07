const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:5173",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // Configurações de events do Node aqui
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "reports",
      reportFilename: "[status]_[datetime]-report",
      html: true,
      json: true,
      overwrite: false,
      timestamp: "mm/dd/yyyy_HH:MM:ss",
    },
    video: false,
    screenshotOnRunFailure: true,
    fixturesFolder: "cypress/fixtures",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.js",
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
