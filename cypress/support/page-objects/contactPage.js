export default class ContactPage {
    elements = {
        contactTab: '[id="nav-contact"]',
        submitButton: '.btn-contact',
        backButton: 'div.ng-scope > .btn',
        forenameTextField: '[id="forename"]',
        surnameTextField: '[id="surname"]',
        emailTextField: '[id="email"]',
        messageTextField: '[id="message"]',
        forenameError: '[id="forename-err"]',
        emailError: '[id="email-err"]',
        messageError: '[id="message-err"]',
        alertMessage: '.alert'
    }

    constructor() {
        // The baseUrl is inside the cypress.config.js
        this.url = '#/contact'
    }

    visit() {
        cy.visit(this.url)
    }
}