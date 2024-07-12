describe('Customer Login', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Customer Login').should('be.visible').click();
        cy.get('#userSelect').select('Harry Potter');
        cy.get('button[type="submit"]').click();
        cy.contains('Welcome Harry Potter').should('be.visible');
    });

    // it('should log in as a customer', () => {
    //     cy.get('#userSelect').select('Harry Potter');
    //     cy.get('button[type="submit"]').click();
    //     cy.contains('Welcome Harry Potter').should('be.visible');
    // });

    it('should display the account balance', () => {
        cy.contains('Account Number').should('be.visible');
        cy.contains('Balance').should('be.visible');
        cy.contains('Currency').should('be.visible');
    });

    it('should deposit money into the account', () => {
        cy.contains('Deposit').click();
        cy.get('input[ng-model="amount"]').type('1000');
        cy.get('button[type="submit"]').click();
        cy.contains('Deposit Successful').should('be.visible');

        cy.wait(3000)
        cy.contains('Transactions').click();
        cy.get('table').should('be.visible');
        cy.get('table tbody tr').should('have.length.at.least', 1);
    });

    it('should withdraw money from the account', () => {
        cy.contains('Deposit').click();
        cy.get('input[ng-model="amount"]').click().type('1000');
        cy.get('button[type="submit"]').click();
        cy.contains('Deposit Successful').should('be.visible');
        cy.wait(3000)

        cy.contains('Withdrawl').click();
        cy.wait(3000)
        cy.xpath("//input[@placeholder='amount']").type('500');
        cy.xpath("//button[normalize-space()='Withdraw']").click();
        cy.contains('Transaction successful').should('be.visible');
    });

    it('should display the transaction history', () => {
        cy.contains('Deposit').click();
        cy.get('input[ng-model="amount"]').type('1000');
        cy.get('button[type="submit"]').click();
        cy.contains('Deposit Successful').should('be.visible');
        cy.wait(3000)

        cy.contains('Withdrawl').click();
        cy.wait(3000)
        cy.xpath("//input[@placeholder='amount']").type('500');
        cy.xpath("//button[normalize-space()='Withdraw']").click();
        cy.contains('Transaction successful').should('be.visible');

        cy.wait(3000)
        cy.contains('Transactions').click();
        cy.get('table').should('be.visible');
        cy.get('table tbody tr').should('have.length.at.least', 1);
    });
});