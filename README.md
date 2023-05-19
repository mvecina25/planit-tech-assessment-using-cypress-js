## MAC Setup
1. Open terminal
2. Type command `brew install node`
3. Open VSCode then create a project
4. Open terminal and cd to the project
5. Type command `npm init -y`
6. Type command `npm install cypress --save-dev`
7. Type command `npm i --save-dev cypress-mochawesome-reporter`
8. Open package.json and add this command under scripts:<br />
	`cy:open": "cypress open`<br />
	`cy:run": "cypress run`
9. Type command `npm run cypress:run`
10. Type command `npm i -D cypress-wait-until`

## Folder Structure
`fixtures` Fixtures folder is used to store test data.
<br />
<br />
`supports` Supports folder is used to write and store reusable code and use it in our tests.
<br />
<br />
`e2e` This folder contains all the end to end test files.
<br />
<br />
`downloads` This folder is automatically created when your test downloads any file and stores all the downloaded files.
<br />
<br />
`command.js` Command file is where you add your commonly used functions and custom commands. It includes functions you may call to use in different tests, such as the login function. Cypress created some functions for you, and you can override them here if you want.
<br />
<br />
`e2e.js (component.js)` This file is a great place to put global configuration and behavior that modifies Cypress like before or before each. By default, it imports only commands.js, but you can import other files to keep things organized.
<br />
<br />
`component-index.html` This file is created only when you choose component testing option. By default, Cypress renders your components into this HTML file. Use this file to edit the spec's fixtured HTML or styling components. It lets you add your application's fonts and global CDN downloads.

### How To Open Cypress Window App
Type command `npm run cy:open`

### How To Run All Tests
Type command `npm run cy:run`

### How To Run A Single Test
Type command `npx cypress run --spec ./cypress/e2e/tests.spec.cy.js`
