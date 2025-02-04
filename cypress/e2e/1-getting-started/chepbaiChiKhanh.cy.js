import sauceCodeDemo from "../fixtures/sauceCodeDemo"

Given('Truy cập vào màn hình đăng nhập', () => {
    cy.visit('https://www.saucedemo.com/')
})
   
        When('Tôi login với tài khoản standard_user', () => {
            cy.fixture('#sauceCodeDemo').
        then((account) => {
            cy.get('#user-name').type(account.standard_user.name)
            cy.get('#password').type('account.password')
            cy.get('#login-button').click();
        })
       
    //     cy.get('#password')
    //     .should('not.be.disabled')
    //     .should('be.visible')
    //     .type('secret_sauce')
    //     .should('have.value', 'secret_sauce');

    //     cy.get('#login-button')
    //     .click();
    // })
    // it('wrong password',() => {
    //     cy.visit('https://www.saucedemo.com/')
    //     cy.get('#user-name')
    //     .should('not.be.disabled')
    //     .should('be.visible')
    //     .type('standard_user')
    //     .should('have.value', 'standard_user');

    //     cy.get('#password')
    //     .should('not.be.disabled')
    //     .should('be.visible')
    //     .type('wrong password')
    //     .should('have.value', 'wrong password')

    //     cy.get('#login-button').click();

    //     cy.get('.error-message-container h3')
    //     .should('be.visible')
    //     .should('contain.text', 'Username and psasword do not match');
    // })
    // it('locked_out_user', () => {
    //     cy.visit('https://www.saucedemo.com/')
    //     cy.get('#user-name')
    //     .should('not.be.disabled')
    //     .should('be.visible')
    //     .type('locked_out_user')
    //     .should('have.value', 'locked_out_user')

    //     cy.get('#password')
    //     .should('not.be.disabled')
    //     .should('be.visible')
    //     .type('secret_sauce')
    //     .should('have.value', 'secret_sauce')

    //     cy.get('#login-button').click();

    //     cy.get('')
    // })
})