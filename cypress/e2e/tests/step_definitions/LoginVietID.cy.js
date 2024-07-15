import account from '../../../fixtures/dataAcount.json';
import LoginAndChangePass from '../../pages/LoginAndChangePass.js';
import EditProfile from '../../pages/EditProfile.js';


describe('Login VietID',() => {
    it ('TC1_Login', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Nvietanh3299')
        cy.get('button[class="index-login btn center"]').click()
    });

    it('TC2_Change password', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Nvietanh3299')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="thaydoimk"]').click()
        cy.get('input[name="old_password"]').type('Nvietanh3299')
        cy.get('input[name="new_password"]').type('Kingofworld...1')
        cy.get('input[name="confirm_password"]').type('Kingofworld...1')
        cy.get('button[class="btn-changePass btn btngreen center"]').click()
    });

    it('TC3_Login with new password after changePass', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
    });

    it ('TC4_update my information', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="capnhattk"]').click()
        cy.get('input[name="fullname"]').clear().type('Viet Anh')
        cy.get('select[name="gender"]').select('Nam')
        cy.xpath('//input[@placeholder="Ngày sinh"]').clear().type('03-02-1999')
        cy.get('input[name="fullname"]').click()
        cy.xpath('//input[@placeholder="Địa chỉ"]').clear().type('Hồ Tùng Mậu')
        cy.get('input[class="job input"]').clear().type('Free')
        cy.get('button[class="btn btngreen center"]').click()
    });
    
    it ('TC5_Login mybizfly with VietID account', () => {
        cy .visit('https://my.bizfly.vn/embed/login?type_view=&amp;is_login=0')
        cy.get('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]').type('0775613763')
        cy.get('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]').click()
        cy.get('input[placeholder="Nhập mật khẩu của bạn"]').type('Kingofworld...1')
        cy.get('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-enter-pass"]').click()
    });

    it ('TC6_Login VietID but wrong username', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0706198910')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.xpath('//p[@id="err-login"]').should('be.visible')
        cy.xpath("//input[@value='OK']").click()
        cy.xpath('//p[@id="err-login"]').
     should('contain.text', 'Tài khoản không tồn tại. Vui lòng nhập tài khoản khác hoặc ')
        
    });

    it ('TC7_Login VietID but field input username was be blank', () => {
        cy.visit('https://vietid.net/login')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.xpath('//p[@id="err-login"]').should('be.visible')
        cy.xpath("//input[@value='OK']").click()
        cy.xpath('//p[@id="err-login"]').
        should('contain.text', 'Vui lòng nhập email hoặc số điện thoại')
    });

    it ('TC8_Login VietID but wrong password', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Nvietanh3299')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//div[@class="warning error-message"]').should('be.visible')
        cy.xpath("//input[@value='OK']").click()
        cy.xpath('//div[@class="warning error-message"]').
        should('contain.text', 'Mật khẩu không đúng')
    });

    it ('TC9_Login VietID but field password was be blank', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//div[@class="warning error-message"]').should('be.visible')
        cy.xpath("//input[@value='OK']").click()
        cy.xpath('//div[@class="warning error-message"]').
        should('contain.text', 'Vui lòng nhập mật khẩu')
    });

    it ('TC10_Customer want change password but dont remember your old password', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="thaydoimk"]').click()
        cy.get('input[name="old_password"]').type('Nvietanh3299')
        cy.get('input[name="new_password"]').type('Kingofworld...1')
        cy.get('input[name="confirm_password"]').type('Kingofworld...1')
        cy.get('button[class="btn-changePass btn btngreen center"]').click()
        cy.xpath("//p[@id='err-changepass']").should('contain.text', 'Mật khẩu không đúng')
    });

    it ('TC11_Customer want change password but field old password was be blank', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="thaydoimk"]').click()
        cy.get('input[name="old_password"]')
        cy.get('input[name="new_password"]').type('Kingofworld...1')
        cy.get('input[name="confirm_password"]').type('Kingofworld...1')
        cy.get('button[class="btn-changePass btn btngreen center"]').click()
        cy.xpath("//p[@id='err-changepass']").should('contain.text', 'Mật khẩu không đúng')
    });

    it ('TC12_Customer want change password but field new pass was be unexcepted condition', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="thaydoimk"]').click()
        cy.get('input[name="old_password"]').type('Kingofworld...1')
        cy.get('input[name="new_password"]').type('nvietanh3299')
        cy.get('input[name="confirm_password"]').type('nvietanh3299')
        cy.get('button[class="btn-changePass btn btngreen center"]').click()
        cy.xpath("//p[@id='err-changepass']").should('contain.text', 'Mật khẩu cần chứa tối thiểu 1 ký tự viết hoa.')
    });

    it ('TC13_Customer want change password but field new pass was be blank', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="thaydoimk"]').click()
        cy.get('input[name="old_password"]').type('Kingofworld...1')
        cy.get('input[name="new_password"]')
        cy.get('input[name="confirm_password"]')
        cy.get('button[class="btn-changePass btn btngreen center"]').click()
        cy.xpath("//p[@id='err-changepass']").should('contain.text', 'Vui lòng nhập đủ thông tin.')
    });

    it ('TC14_Customer want change password but field confirm password uncorrect', () => {
        cy.visit('https://vietid.net/login')
        cy.get('input[id="account"]').type('0775613763')
        cy.get('button[class="index-login btn-login btn center"]').click()
        cy.get('input[name="password"]').type('Kingofworld...1')
        cy.get('button[class="index-login btn center"]').click()
        cy.xpath('//a[@class="thaydoimk"]').click()
        cy.get('input[name="old_password"]').type('Kingofworld...1')
        cy.get('input[name="new_password"]').type('Nvietanh3299')
        cy.get('input[name="confirm_password"]').type('vietanh3299')
        cy.get('button[class="btn-changePass btn btngreen center"]').click()
        cy.xpath("//p[@id='err-changepass']").should('contain.text', 'Mật khẩu xác nhận không khớp.')
    });

        it ('TC15_Customer want change password but field confirm password was be blank', () => {
            cy.visit('https://vietid.net/login')
            cy.get('input[id="account"]').type('0775613763')
            cy.get('button[class="index-login btn-login btn center"]').click()
            cy.get('input[name="password"]').type('Kingofworld...1')
            cy.get('button[class="index-login btn center"]').click()
            cy.xpath('//a[@class="thaydoimk"]').click()
            cy.get('input[name="old_password"]').type('Kingofworld...1')
            cy.get('input[name="new_password"]').type('Nvietanh3299')
            cy.get('input[name="confirm_password"]')
            cy.get('button[class="btn-changePass btn btngreen center"]').click()
            cy.xpath("//p[@id='err-changepass']").should('contain.text', 'Mật khẩu xác nhận không khớp.')
    });

        it ('TC16_customer want edit personal information but field họ và tên has only 3 letter', () => {
            cy.visit('https://vietid.net/login')
            cy.get('input[id="account"]').type('0775613763')
            cy.get('button[class="index-login btn-login btn center"]').click()
            cy.get('input[name="password"]').type('Kingofworld...1')
            cy.get('button[class="index-login btn center"]').click()
            cy.xpath('//a[@class="capnhattk"]').click()
            cy.get('input[name="fullname"]').clear().type('Ann')
            cy.get('select[name="gender"]').select('Nam')
            cy.xpath('//input[@placeholder="Ngày sinh"]').clear().type('03-02-1999')
            cy.get('input[name="fullname"]').click()
            cy.xpath('//input[@placeholder="Địa chỉ"]').clear().type('Hồ Tùng Mậu')
            // cy.get('input[class="job input"]').clear().type('Free')
            cy.get('button[class="btn btngreen center"]').click()
            cy.xpath("//p[@id='err-update']").should('contain.text', 'Họ tên không hợp lệ (từ 4-50 ký tự).')
        });

        it ('TC17_customer want edit personal information but field họ và tên has only 31 letter',() => {
            cy.visit('https://vietid.net/login')
            cy.get('input[id="account"]').type('0775613763')
            cy.get('button[class="index-login btn-login btn center"]').click()
            cy.get('input[name="password"]').type('Kingofworld...1')
            cy.get('button[class="index-login btn center"]').click()
            cy.xpath('//a[@class="capnhattk"]').click()
            cy.get('input[name="fullname"]').clear().type('Ann')
            cy.get('select[name="gender"]').select('Nam')
            cy.xpath('//input[@placeholder="Ngày sinh"]').clear().type('03-02-1999')
            cy.get('input[name="fullname"]').click()
            cy.xpath('//input[@placeholder="Địa chỉ"]').clear().type('Hồ Tùng Mậu')
            cy.get('input[class="job input"]').clear().type('Free')
            cy.get('button[class="btn btngreen center"]').click()
            cy.xpath("//p[@id='err-update']").should('contain.text', 'Họ tên không hợp lệ (từ 4-50 ký tự).')                
        });

        it ('TC18_customer want edit personal information but field họ và tên has special letter', () => {
            cy.visit('https://vietid.net/login')
            cy.get('input[id="account"]').type('0775613763')
            cy.get('button[class="index-login btn-login btn center"]').click()
            cy.get('input[name="password"]').type('Kingofworld...1')
            cy.get('button[class="index-login btn center"]').click()
            cy.xpath('//a[@class="capnhattk"]').click()
            cy.get('input[name="fullname"]').clear().type('Annnnn*')
            cy.get('select[name="gender"]').select('Nam')
            cy.xpath('//input[@placeholder="Ngày sinh"]').clear().type('12-07-2025')
            cy.get('input[name="fullname"]').click()
            cy.xpath('//input[@placeholder="Địa chỉ"]').clear().type('Hồ Tùng Mậu')
            cy.get('input[class="job input"]').clear().type('Free')
            cy.get('button[class="btn btngreen center"]').click()
            cy.xpath("//p[@id='err-update']").should('contain.text', 'Họ tên không hợp lệ (không có ký tự đặc biệt).')     
        });
            it('TC19_ field birth was be blank', () => {
                cy.visit('https://vietid.net/login')
                cy.get('input[id="account"]').type('0775613763')
                cy.get('button[class="index-login btn-login btn center"]').click()
                cy.get('input[name="password"]').type('Kingofworld...1')
                cy.get('button[class="index-login btn center"]').click()
                cy.xpath('//a[@class="capnhattk"]').click()
                cy.get('input[name="fullname"]').clear().type('Viet Anh')
                cy.get('select[name="gender"]').select('Nam')
                cy.xpath('//input[@placeholder="Ngày sinh"]').clear()
                cy.get('input[name="fullname"]').click()
                cy.xpath('//input[@placeholder="Địa chỉ"]').clear().type('Hồ Tùng Mậu')
                cy.get('input[class="job input"]').clear().type('Free')
                cy.get('button[class="btn btngreen center"]').click()
            });
});