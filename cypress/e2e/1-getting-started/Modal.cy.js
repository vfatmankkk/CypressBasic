describe('Modal interaction Test', () => {
    
    it ('should open and  interact with modal', () => {
        cy .visit('https://mingo.vn/#')

        // Nhấn nút để mở Modal
        cy.get('#myBtn').click();

        // Kiểm tra modal có hiển thị hay không 
        cy.get('#myModal').should('be.visible');

        // Tương tác với nội dung trong Modal
        cy.get('#myModal').within(() => {
            cy.get('p').should('contain', 'Some text in the Modal')
        })
    })
})