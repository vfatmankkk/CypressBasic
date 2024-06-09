describe('login Xpath',() => {
    it('should login and verify element with xpath', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.xpath('//input[@data-test="user-name"]')
        .type('standard_user')
        .should('have.value', 'standard_user');

        cy.xpath('//input[@data-test="user-name"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce');

        cy.xpath('//input[@data-test="login-button"]')
        .click();

        cy.url().should('include', 'invenstory.html')
        cy.xpath('//div[@class="invenstory_list"]')
        .should('be.visible');
    })
} )