describe('Bank Manager Login', () => {
    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.contains('Bank Manager Login').should('be.visible').click();

    });

    it('should add a new customer', () => {
        cy.contains('Add Customer').click();
        cy.get('input[ng-model="fName"]').type('John');
        cy.get('input[ng-model="lName"]').type('Doe');
        cy.get('input[ng-model="postCd"]').type('123456');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Customer added successfully');
        });
    });

    it('should open a new account for an existing customer', () => {
        cy.contains('Add Customer').click();
        cy.get('input[ng-model="fName"]').type('John');
        cy.get('input[ng-model="lName"]').type('Doe');
        cy.get('input[ng-model="postCd"]').type('123456');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Customer added successfully');
        });

        cy.contains('Open Account').click();
        cy.get('#userSelect').select('John Doe');
        cy.get('#currency').select('Dollar');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Account created successfully');
        });
    });

    it('should display the customer list', () => {
        cy.contains('Customers').click();
        cy.get('table').should('be.visible');
        cy.get('table tbody tr').should('have.length.at.least', 1);
    });

    it('should delete a customer', () => {
        cy.contains('Add Customer').click();
        cy.get('input[ng-model="fName"]').type('John');
        cy.get('input[ng-model="lName"]').type('Doe');
        cy.get('input[ng-model="postCd"]').type('123456');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Customer added successfully');
        });

        cy.contains('Customers').click();
        cy.get('table').contains('td', 'John').parent().find('button').click();
        cy.get('table').should('not.contain', 'John Doe');
    });
});