const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://jupiter.cloud.planittesting.com',
    defaultCommandTimeout: 4000, // Default Timeout
    execTimeout: 60000, // Default Timeout
    taskTimeout: 60000, // Default Timeout
    pageLoadTimeout: 60000, // Default Timeout
    requestTimeout: 5000, // Default Timeout
    responseTimeout: 30000, // Default Timeout
    watchForFileChanges: false, // This won't run automatically when there's a change

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    FORENAME_ERROR_MESSAGE: 'Forename is required',
    EMAIL_ERROR_MESSAGE: 'Email is required',
    MESSAGE_ERROR_MESSAGE: 'Message is required',
    ALERT_FEEDBACK_MESSAGE: ', we appreciate your feedback.'
  },
});
