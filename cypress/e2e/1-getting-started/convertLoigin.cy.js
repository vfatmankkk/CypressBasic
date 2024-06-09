describe('Login Page Successfully', () => {
    it('passes', () => {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html')

        let username = "username";
        let password = "passwordtest";
        let comments = "Submit this simple HTML form will POST your details to be processed by another part of the application and shown on a results page";
        
        cy.get('input[name="username"]').type('username').invoke("val", username);
        cy.get('input[name="password"]').type('password').invoke("val", password);
        cy.get('textarea[name="comments"').clear().type('Submit this simple HTML form will POST your details to be processed by another part of the application and shown on a results page');

        // radio button
        cy.get('input[value="cb1"').check()
        cy.get('input[value="cb2"').uncheck()
        cy.get('input[value="cb3"').uncheck()

        // dropdownlist 
        cy.get('select[name="multipleselect[]"').select('ms3')

        cy.get('select[name="dropdown"').select('Drop Down Item 6')

        // click submit button 
        cy.get('input[type="submit"').click();

        // kiểm tra form đã đc submit thành công 
        cy.get('#_valueusername').should('contain.text', username);
        cy.get('#_valuepassword').should('contain.text', password);
        cy.get('#_valuecomments').should('contain.text', 'Submit this simple HTML form will POST your details to be processed by another part of the application and shown on a results page');
    })
})


