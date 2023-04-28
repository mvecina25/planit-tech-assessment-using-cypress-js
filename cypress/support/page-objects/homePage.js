export default class HomePage {
    elements = {
        homeTab : () => cy.get('[id="nav-home"]')
    }

    constructor() {
        // The baseUrl is inside the cypress.config.js
        this.url = '#/home'
    }

    visit() {
        cy.visit(this.url)
    }

    clickHomeTab() {
        this.elements.homeTab().click();
    }
}