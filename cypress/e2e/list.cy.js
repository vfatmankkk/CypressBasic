describe('kiểm tra 1 giá trị trong danh sách', () => {
    it('Kiểm tra giá trị "Banana" trong danh sách', () => {
        cy.visit('https://mingo.vn/#');

        cy.get(".list-group").contains("Banana").should("have.length", 1)

        cy.get('ul.list-group li').each(($li) => {
            const listItemText = $li.text();
            if (listItemText === 'Banana') {
                expect(listItemText).to.equal('Banana');
            }
        });
    });
});

it('should have Digital Marketing menu item and click on it', () => {
    cy.visit('https://mingo.vn/#')
    cy.get('.nav-item.dropdown')
    .contains('Services')
    .click();

    cy.get('.dropdown-menu')
    .contains('Digital Marketing')
    .should('exist')
    .click();
});