// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const clickTimeout = 5000;
const inputTextTimeout = 1000;
const verifyTimeout = 5000;

  // -- Click the element identified by `locator`
  Cypress.Commands.add('clickElement', (locator, timeout = clickTimeout) => {
    cy.get(locator, {timeout : timeout}).scrollIntoView().click({ force: true });
  });
  
    // -- Types the given `text` into the text field identified by `locator`
  Cypress.Commands.add('inputText', (locator, text, timeout = inputTextTimeout) => {
    cy.get(locator, {timeout : timeout}).clear().type(text);
  });

// -- Verifies that element equals to specific text
Cypress.Commands.add('verifyElementEquals', (locator, expectedText, timeout = verifyTimeout) => {
  cy.get(locator, {timeout : timeout}).invoke('text').then((actualText) => {
    expect(expectedText).to.equal(actualText.trim());
    });
});

// -- Verifies that element contains text
Cypress.Commands.add('verifyElementContains', (locator, expectedValue, timeout = verifyTimeout) => {
  cy.get(locator, {timeout : timeout}).invoke('val').then((actualValue) => {
    expect(expectedValue).to.contain(actualValue);
    });
});

// -- Verifies that element should not exit
Cypress.Commands.add('verifyElementShouldNotExist', (locator) => {
  cy.get(locator).should('not.exist');
});

// -- Wait until element is visible
Cypress.Commands.add('waitUntilElementIsVisible', (locator, timeout) => {
  cy.get(locator, { timeout: timeout }).should('be.visible');
});
