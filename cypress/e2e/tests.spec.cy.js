import ContactPage from "../support/page-objects/contactPage";
import HomePage from "../support/page-objects/homePage";
import ShopPage from "../support/page-objects/shopPage";

const homePage = new HomePage
const contactPage = new ContactPage
const shopPage = new ShopPage

describe('Test Case 1', () => {
    it('should visit home page and then go to contact page', () => {
      homePage.visit();
      cy.clickElement(contactPage.elements.contactTab);
    });
    it('should verify the errors and mandatory fields', () => {
      contactPage.visit();
      cy.clickElement(contactPage.elements.submitButton);
      cy.verifyElementEquals(contactPage.elements.forenameError, Cypress.env('FORENAME_ERROR_MESSAGE'));
      cy.verifyElementEquals(contactPage.elements.emailError, Cypress.env('EMAIL_ERROR_MESSAGE'));
      cy.verifyElementEquals(contactPage.elements.messageError, Cypress.env('MESSAGE_ERROR_MESSAGE'));
      cy.inputText(contactPage.elements.forenameTextField, 'Meds');
      cy.inputText(contactPage.elements.surnameTextField, 'Vecina');
      cy.inputText(contactPage.elements.emailTextField, 'medel.vecina@gmail.com');
      cy.inputText(contactPage.elements.messageTextField, 'Planit Testing');
      cy.verifyElementShouldNotExist(contactPage.elements.forenameError);
      cy.verifyElementShouldNotExist(contactPage.elements.emailError);
      cy.verifyElementShouldNotExist(contactPage.elements.messageError);
      cy.clickElement(contactPage.elements.submitButton);
    });
  });

  describe('Test Case 2', () => {
    it('should verify the submission alert message', () => {
      contactPage.visit();
      // Data Driven using Fixture
      cy.fixture("testdata.json").then((strData) => {
        strData.forEach((strUserData) => {
          cy.reload();
          cy.inputText(contactPage.elements.forenameTextField, strUserData.forename);
          cy.inputText(contactPage.elements.surnameTextField, strUserData.surname);
          cy.inputText(contactPage.elements.emailTextField, strUserData.email);
          cy.inputText(contactPage.elements.messageTextField, strUserData.message);
          cy.clickElement(contactPage.elements.submitButton);
          cy.waitUntilElementIsVisible(contactPage.elements.alertMessage, 20000);
          cy.verifyElementEquals(contactPage.elements.alertMessage, 'Thanks ' + strUserData.forename + Cypress.env('ALERT_FEEDBACK_MESSAGE'));
          cy.clickElement(contactPage.elements.backButton);
          cy.reload();
        });
        }
      )
    });
  });

  describe('Test Case 3', () => {
    it('should verify the items in the cart', () => {
      shopPage.visit();
      cy.clickElement(shopPage.elements.buyStuffedFrog);
      cy.clickElement(shopPage.elements.buyFluffyBunny);
      cy.clickElement(shopPage.elements.buyValentineBear);
      cy.clickElement(shopPage.elements.cartButton);
      cy.verifyElementEquals(shopPage.elements.cartTableRowOneColumnOne, "Stuffed Frog");
      cy.verifyElementEquals(shopPage.elements.cartTableRowTwoColumnOne, "Fluffy Bunny");
      cy.verifyElementEquals(shopPage.elements.cartTableRowThreeColumnOne, "Valentine Bear");
    });
  });

  describe('Test Case 4', () => {
    it('should verify the subtotal, price, quantity, and the total', () => {
      shopPage.visit();
      cy.clickElement(shopPage.elements.buyStuffedFrog);
      cy.clickElement(shopPage.elements.buyStuffedFrog);
      cy.clickElement(shopPage.elements.buyFluffyBunny);
      cy.clickElement(shopPage.elements.buyFluffyBunny);
      cy.clickElement(shopPage.elements.buyFluffyBunny);
      cy.clickElement(shopPage.elements.buyFluffyBunny);
      cy.clickElement(shopPage.elements.buyFluffyBunny);
      cy.clickElement(shopPage.elements.buyValentineBear);
      cy.clickElement(shopPage.elements.buyValentineBear);
      cy.clickElement(shopPage.elements.buyValentineBear);
      cy.clickElement(shopPage.elements.cartButton);
      cy.verifyElementEquals(shopPage.elements.cartTableRowOneColumnOne, "Stuffed Frog").then(isTrue =>{
        if (isTrue){
          cy.verifyElementEquals(shopPage.elements.cartTableRowOneColumnTwo, "$10.99");
          cy.verifyElementContains(shopPage.elements.cartTableRowOneColumnThree, "2");
          cy.verifyElementEquals(shopPage.elements.cartTableRowOneColumnFour, "$21.98");
        }
      });
      cy.verifyElementEquals(shopPage.elements.cartTableRowTwoColumnOne, "Fluffy Bunny").then(isTrue => {
        if (isTrue){
          cy.verifyElementEquals(shopPage.elements.cartTableRowTwoColumnTwo, "$9.99");
          cy.verifyElementContains(shopPage.elements.cartTableRowTwoColumnThree, "5");
          cy.verifyElementEquals(shopPage.elements.cartTableRowTwoColumnFour, "$49.95");
        }
      });
      cy.verifyElementEquals(shopPage.elements.cartTableRowThreeColumnOne, "Valentine Bear").then(isTrue => {
        if (isTrue){
          cy.verifyElementEquals(shopPage.elements.cartTableRowThreeColumnTwo, "$14.99");
          cy.verifyElementContains(shopPage.elements.cartTableRowThreeColumnThree, "3");
          cy.verifyElementEquals(shopPage.elements.cartTableRowThreeColumnFour, "$44.97");
        }
      });
      cy.verifyElementContains(shopPage.elements.cartTableTotal, "116.9");
    });
  });