describe('Login and creat info customer', () => {
    it('Login successfully', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(5000)
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("class[name='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();
        cy.wait(10000)
    });


})