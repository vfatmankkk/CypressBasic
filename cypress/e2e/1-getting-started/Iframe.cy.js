describe('Iframe', () => {

    // it('Get link iframe',() =>  {
    //     cy.visit('https://my.bizdev.vn/login')
    //     cy.get('//div[@input="name"')
    // })

    // it('login mybizfly', () => {

    //     cy.visit('https://my.bizdev.vn/login');
        
    //     let username = "techtest.rd2@gmail.com";
        
    //     let password = "A123456!";
        
    //     cy.get('#embed_login').then(($iframe) => {
        
    //     const iframeDoc = $iframe.contents().find('body');
        
    //     cy.wrap(iframeDoc).xpath(LoginMy_bizfly.getUserName).should("be.enabled") .clear().type(username).should('have.value', username);
        
    //     cy.wrap(iframeDoc).find(LoginMy_bizfly.getNextButton).click()
        
    //     cy.wrap(iframeDoc).xpath(LoginMy_bizfly.getPassword).should("be.enabled") .clear().type(password).should('have.value', password)
        
    //     cy.wrap(iframeDoc).xpath(LoginMy_bizfly.getBTN_Login).click();
        
    //     });
        
    //     })

    it('login mybizfly', () => {

        let username = "techtest.rd2@gmail.com"; let password = "A123456!";
        
        cy.visit('https://my.bizdev.vn/login'); cy.frameLoaded('#embed_login'); // Đảm bảo iframe đã tải
        
        // Sử dụng within() để giới hạn các hành động bên trong iframe cy.iframe('#embed_login').within(() => {
        
        cy.xpath(LoginMy_bizfly.getUserName).should("be.enabled") .clear().type(username).should('have.value', username);
        
        cy.get(LoginMy_bizfly.getNextButton).click();
        
        cy.xpath(LoginMy_bizfly.getPassword).should("be.enabled").clear() .type(password).should('have.value', password);
        
        cy.xpath(LoginMy_bizfly.getBTN_Login).click(); cy.wait(4000);
        
        
        });
});