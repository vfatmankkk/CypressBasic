describe('login', () => {
    it('login bizDev', () => {
        let username = "techtest.rd2@gmail.com"
        let password = "A123456!"

        cy.visit('https://my.bizdev.vn/login')
        // Cy.frameloaded('#embed_login'); // Đảm bảo iframe đã được tải

        // Sử dụng within để giới hạn hành động bên trong iframe
        cy.iframe('#embed_login').within(() => {
            cy.xpath//input[@placeholder='Nhập Email hoặc SĐT tài khoản VietID của bạn'].getUsername).should("be.enabled")
            .clear().type(username).should('have.value', username);

            cy.get(LoginMy_bizfly.getNextButton).click();

            cy.xpath(LoginMy_bizfly.getPassword).should("be.enabled")
            .clear().type(password).should('have.value', password);

            cy.xpath(LoginMy_bizfly.getBtn_Login).click();
            cy.wait(4000);
        });
    })
})