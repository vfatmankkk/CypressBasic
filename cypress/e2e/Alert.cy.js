describe('Button click events', () => {
    beforeEach(() => {
        cy.visit('https://mingo.vn/#');
    });
    // it('should display alert with correct message on button click', () => {
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.equal('This in an alert message');
    //     });
    //     cy.get('#alertButton').click();
    // });
    
    // it('Should handle confirm dialog and check result', () => {
    //     cy.on('window:confirm', (str) => {
    //         expect(str).to.equal('Do you confirm thi action?');
    //         return true;
    //     });
    //     cy.get('#confirmButton').click();
    //     cy.get('#confirmResult').should('have.text', 'Confirm result: true');
    // });

    // it('should handle confirm dialog cancel and check result', () => {
    //     cy.on('window"confirm', (str) => {
    //         expect(str).to.equal('Do you confirm this action?');
    //         return false; // Để hủy confirm dialog
    //     });
    //     cy.get('#confirmButton').click();
    //     cy.get('#confirmResult').should('have.text', 'Confirm result: false');
    // });

    it('should handle prompt dialog and check result', () => {
        cy.window().then((win) => {
            cy.stub(win, 'promt').return('Cypress User');
        });
        cy.get('#promptButton').click();
        cy.get('#promptResult').should('have.text', 'Prompt result: Cypress User');
    });

    it('should take a screenshot on different viewports', () => {
        cy.viewport(1280, 720);
        cy.wait(5000);
        // cy.screenshot('large-screen')

        cy.viewport('iphone-6');
        cy.wait(5000);
    })
})