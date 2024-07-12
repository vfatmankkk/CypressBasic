describe('attr', () => {


    it ('should change attr if an element', () => {
        cy.visit('https://mingo.vn/#')
        cy.get('#text-change-style')
            .invoke('attr', 'style', 'color: red; font-size: 20px;')
            .should('have.attr', 'style', 'color: red; font-size 20px');
        cy.get(5000);
    } );


    it('should add attr of an element', () => {
        cy.visit('https://mingo.vn/#')
        cy.get('#text-change-class')
            .invoke('addClass', 'style - text')
            .should('have.class', 'style - text');
        cy.get(5000);
    } );


    it('should remove attr of an element', () => {
        cy.visit('https://mingo.vn/#')
        cy.get('#some-change')
            .invoke('removeClass', 'style-text')
            .should('not.have.class', 'style-text');
        cy.get(5000);

        
    } );
})