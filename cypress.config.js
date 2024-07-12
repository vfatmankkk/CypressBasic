
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// const mysql = require('cypress-mysql');
 
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
 
  return config;
}
// npx cypress run --record --key f1684dae-d8cb-46e5-9740-29946bcd9013
// record_key f1684dae-d8cb-46e5-9740-29946bcd9013
module.exports = defineConfig({
  projectId: "bmghn1", 
  e2e: {
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    experimentalStudio: true,
    // specPattern: "**/*.feature", // setup cucumber feature
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    // setupNodeEvents(on, config) {
      // mysql.configurePlugin(on);
    // },
    // "env": {

    //   "db": {

    //     "host": "sql12.freemysqlhosting.net",

    //     "user": "sql12716277",

    //     "password": "Qn8xs3F9Bx",

    //     "database": "sql12716277"

    //   }

    // },
  },
});





