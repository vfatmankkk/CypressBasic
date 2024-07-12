import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LogoutUI from "../../page/LogoutUI";

const Logout = new LogoutUI();

When("Người dùng chọn tùy chọn button 'Menu'", () => {
    cy.xpath(Logout.getAvatarClick).click();
});

Then("Màn hình hiển thị đầy đủ thông tin của 'Menu'", () => {
    cy.url().should("contain", Logout.getURL);
    cy.xpath(Logout.getInfoName).should("exist");
    cy.xpath(Logout.getInfoEmail).should("exist");
    cy.xpath(Logout.getAddAcc).should("exist");
    cy.xpath(Logout.getLogoutClick).should("exist");
})

When("Người dùng chọn 'Đăng xuất'", () => {
    cy.xpath(Logout.getLogoutClick).click();
});

Then("Tôi nhìn thấy trang Đăng nhập tài khoản", () => {
    cy.url().should("contain", Logout.getChooseAcc);
});

When("Người dùng không chọn 'Đăng xuất'", () => {
    cy.xpath(Logout.getInfoSecurity).click();
});