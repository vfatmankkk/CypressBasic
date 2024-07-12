describe('Kiểm tra từ "Hot" trong các phần tử <span>', () => {
    it('Kiểm tra xem có chứa từ "Hot" trong các phần tử <span>', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm');

        // Tìm và kiểm tra xem có chứa từ "Hot" trong các phần tử <span>
        cy.get('span').contains('Hot').should('exist');
    });
});
