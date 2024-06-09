// describe('Kiểm tra hiển thị email ở trong bảng', () => {
//     it('Kiểm tra email "johndoe@example.com" có hiển thị trong bảng không', () => {
//         cy.visit('https://mingo.vn/#')

        
//         cy.get('#dataTable').within(() => {
//             cy.get('.td-mail').contains('johndoe@example.com').should('exist');
//             cy.get('tbody td:nth-child(3)').contains('lanhthilung@example.com').should('exist')
//         })
//     } )
// })

  

it('Kiểm tra email "lanhthilung@example.com có hiển thị trong bảng không', () => {
    let mail = 'lanthilung@example.com';
    // truy cập trang 
    cy.visit('https://mingo.vn/#')
    let haveMail = false;
    cy.get('#dataTable').within(() => {
        cy.get('tbody td:nth-child(3)').each(($td) => {
            let resultsMail = $td.text()
            if (resultsMail === mail) {
                haveMail = true 
                expect(resultsMail).to.equal(mail);
            }
        })
    })

} )

it('tìm kiếm từ khóa và kiểm tra kết quả trả về', () => {
    cy.visit('https://mingo.vn/#')

    let searchTerm = 'Jane';

    cy.get('#searchInput')
        .type('searchTerm');

    cy.get('#Tablebody tr:visible')
    .should('have.length', 0)
        .and ('contain', searchTerm);
})

it('Tìm kiếm từ khóa ngocbich và click vào button của hàng đó', () => {
    cy.visit('https://mingo.vn/#')

    cy.get('#tableBody').contains('tr', 'ngocbich')
    .find('click-btn')
    .click();
} )