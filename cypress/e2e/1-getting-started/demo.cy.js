// describe ('saucedemo', () => {
//     it('passes', () => {
//         cy.visit('https://www.saucedemo.com/')
//         cy.get('#user-name').should('not.be.disabled').should('be.visible').type('standard_user').should('have.value', 'standard_user')
//         cy.get('#password').should('not.be.disabled').should('be.visible').type('secret_sauce').should('have.value', 'secret_sauce')
//         cy.get('#login-button').click()
//     })
// })

describe ('saucedemo', () => {
    it('wrong uesername', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name')
        .should('not.be.disabled')
        .should('be.visible')
        .type('wrong username')
        .should('have.value', 'wrong username')
        cy.get('#password')
        .should('not.be.disabled')
        .should('be.visible')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')
        cy.get('#login-button').click()
        // không hiểu đoạn 'error-message-container h3' trong f12 nó hiện là 'button class='error-button''
        cy.get('.error-message-container h3') 
        .should('not.be.disabled')
        .should('be.visible')
        .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
})