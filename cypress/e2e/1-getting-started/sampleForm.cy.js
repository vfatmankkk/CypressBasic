describe('Login Page', () => {
    it('Should be able to fill out and submit the form', () => {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

        let username = "testuser";
        let password = "testpassword";
        let comments = "Submit this simple HTML form will POST your details to be processed by another part of the application and shown on a results page.";

        // Nhập dữ liệu vào các trường input
        // cy.get('input[name="hiddenField"]').should('be.visible');
        cy.get('input[name="username"]').type(username).invoke("val", username);
        cy.get('input[name="password"]').type(password).invoke("val", password);
        cy.get('textarea[name="comments"]').clear().type(comments);
        
        // cy.get('input[name="filename"]').selectFile('/Users/thonguyen/Downloads/sampleFile.jpeg')

        cy.get('input[value="cb1"]').check();
        cy.get('input[value="cb2"]').uncheck();
        cy.get('input[value="cb3"]').uncheck();

        cy.get('input[value="rd1"]').check();
        cy.get('input[value="rd2"]').should('not.be.checked');
        cy.get('input[value="rd3"]').should('not.be.checked');
        

        // Chọn giá trị từ dropdown
        cy.get('select[name="multipleselect[]"]').select('ms2');

        cy.get('select[name="dropdown"]').select('dd4');
        

        // Submit form
        cy.get('input[type="submit"]').click();

        // Kiểm tra xem form đã được submit thành công
        cy.get('#_valueusername').should('contain.text', username);
        cy.get('#_valuepassword').should('contain.text', password);
        cy.get('#_valueusername').should('contain.text', comments);


    });
})