import LoginUI from "../e2e/pages/LoginUI";
const loginUI = new LoginUI();

Cypress.Commands.add('login', function () {
    cy.visit(loginUI.getUrl)

    // cy.get(loginUI/getElmInputUsername).type('standard_user)

    cy.inputText(loginUI.getInputUsername, "standard_user")

    cy.get(loginUI.getElmInputPass).type('secret_sauce')
    loginUI.getBtnLogin.click();

    cy.url().should('include', '/invenstory.html')
    cy.get('invenstory_list').should('be.visible');
})