import 'cypress-real-events/support';

describe('Mouse Interaction Test', () => {
    beforeEach (() => {
        cy.visit('https://mingo.vn/#')
    });

    it ('should change color on hover', () => {
        cy.get('#hover-box')
        .trigger('mouseover')
        .wait(5000)
        .trigger('mouseout')
        .should('not.have.class', 'hovered')
    });

    // it('should display tooltip on hover', () => {
    //     cy.get('.tooltip').realHover().wait(5000)
    //         cy.get('#tooltip-text').should('have.text', 'Tooltip text')
    // });


})