describe('Add new item in bizDev website', () => {
    it('Login bizDev', () => {
        cy.visit('https://my.bizdev.vn/login')
        cy.get(input["@placeholder='Nhập Email hoặc SĐT tài khoản VietID của bạn'"]).type('techtest.rd2@gmail.com')
        cy.get('div[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]').click()
        cy.get('input[name="password"]').type('A123456!')
        cy.get('div[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-enter-pass"]').click()
        cy.wait(10000)      
    });
} )