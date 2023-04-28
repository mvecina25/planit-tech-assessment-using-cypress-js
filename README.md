## MAC Setup
1. Open terminal
2. --- type command "brew install node"
3. Open VSCode then create a project
4. Open terminal and cd to the project
5. --- type command "npm init -y"
6. --- type command "npm install cypress --save-dev"
7. Open package.json and add this command under scripts:
	"cy:open": "cypress open"
8. --- type command "npm run cypress:open"
9. --- type command "npm i -D cypress-wait-until"

## Folder Structure
#### Fixtures: 
Fixtures folder is used to store test data.
#### Supports:
supports folder is used to write and store reusable code and use it in our tests.
#### e2e:
This folder contains all the end to end test files.
#### downloads:
This folder is automatically created when your test downloads any file and stores all the downloaded files.
#### command.js:
Command file is where you add your commonly used functions and custom commands. It includes functions you may call to use in different tests, such as the login function. Cypress created some functions for you, and you can override them here if you want.
#### e2e.js (component.js): This file is a great place to put global configuration and behavior that modifies Cypress like before or before each. By default, it imports only commands.js, but you can import other files to keep things organized.
#### component-index.html:
This file is created only when you choose component testing option. By default, Cypress renders your components into this HTML file. Use this file to edit the spec's fixtured HTML or styling components. It lets you add your application's fonts and global CDN downloads.

## How To Run
--- type command "npm run cy:open"
## How To Run A Single Test
--- type command "npx cypress run --spec ./cypress/e2e/tests.spec.cy.js"
