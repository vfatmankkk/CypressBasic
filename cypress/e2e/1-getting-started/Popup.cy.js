describe('Popup interaction Test', () => {
    it ('should open popup in the same tab', () => {
        Cy .visit('https://mingo.vn/#')
        let url = "https://my.bizdev.vn/login";

        // // Giả lập hành vi mở cửa sổ pop-up trong cùng tab
        // cy.window().then((win) => {
        //     cy.stub(win, 'open').callsfake(('url') => {
        //       cy.  
        //     })
        // })
    })
})