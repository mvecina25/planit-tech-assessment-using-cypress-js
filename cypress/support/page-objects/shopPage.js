export default class ShopPage {
    elements = {
        shopTab : '#nav-shop > a',
        buyStuffedFrog : '#product-2 > div > p > .btn',
        buyFluffyBunny : '#product-4 > div > p > .btn',
        buyValentineBear : '#product-7 > div > p > .btn',
        cartButton : '#nav-cart > a',
        cartTableRowOneColumnOne : 'tbody > :nth-child(1) > :nth-child(1)',
        cartTableRowTwoColumnOne : 'tbody > :nth-child(2) > :nth-child(1)',
        cartTableRowThreeColumnOne : 'tbody > :nth-child(3) > :nth-child(1)',
        cartTableRowOneColumnTwo : 'tbody > :nth-child(1) > :nth-child(2)',
        cartTableRowTwoColumnTwo : 'tbody > :nth-child(2) > :nth-child(2)',
        cartTableRowThreeColumnTwo : 'tbody > :nth-child(3) > :nth-child(2)',
        cartTableRowOneColumnThree : ':nth-child(1) > :nth-child(3) > .input-mini',
        cartTableRowTwoColumnThree : ':nth-child(2) > :nth-child(3) > .input-mini',
        cartTableRowThreeColumnThree : ':nth-child(3) > :nth-child(3) > .input-mini',
        cartTableRowOneColumnFour : 'tbody > :nth-child(1) > :nth-child(4)',
        cartTableRowTwoColumnFour : 'tbody > :nth-child(2) > :nth-child(4)',
        cartTableRowThreeColumnFour : 'tbody > :nth-child(3) > :nth-child(4)',
        cartTableTotal : '.total'
    }

    constructor() {
        // The baseUrl is inside the cypress.config.js
        this.url = '#/shop'
    }

    visit() {
        cy.visit(this.url)
    }
}