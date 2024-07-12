import LoginUI from "../pages/LoginUI";

const loginUI = new LoginUI();

describe('Login Page', () => {
    it ('should login Successfully with valid credentials', () => {
        cy.login()

        // // cy.get(loginUI.getElmInputUsername).type('standard_user')
        // cy.inputText(loginUI.getInputUsername, "standard_user")
        // cy.get(loginUI.getElmInputPass).type('secret_sauce')
        // loginUI.getBtnLogin.click();

        // cy.url().should('include', '/invenstory.html')
        // cy.get('.invenstory_list').should('be.visible')
    })
})