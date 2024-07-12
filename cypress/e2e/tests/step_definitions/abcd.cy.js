describe('Kiểm tra tính năng đăng nhập', () => {
    
    let username = "techtest.rd2@gmail.com"
    let password = "A123456!"

    it('Đăng nhập thành công', () => {
        cy.visit('https://my.bizdev.vn/login');

        // Thay thế 'your_username' và 'your_password' bằng thông tin đăng nhập thực tế
        cy.get('input[name=username]').type(username);
        cy.get('input[name=password]').type(password);

        // Thay thế 'form' bằng selector chính xác của form đăng nhập nếu cần
        cy.get('form').submit();

        // Kiểm tra xem đã chuyển hướng đến trang chủ sau khi đăng nhập thành công hay chưa
        // Thay thế '/home' bằng path chính xác sau khi đăng nhập thành công
        cy.url().should('include', '/home');
    });
});
