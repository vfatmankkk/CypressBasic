import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginMy_bizflyUI from "../../page/LoginMy_bizflyUI";

const LoginMy_bizfly = new LoginMy_bizflyUI();

Given("Tôi đã mở trang đăng nhập My_bizfly", function () {
  cy.visit(LoginMy_bizfly.getURL);
});

When("Tôi login thành công vào trang My_bizfly với tài khoản {string} và mật khẩu {string}", (username, password) => {
  if (username) {
    cy.xpath(LoginMy_bizfly.getUserName).should("be.enabled").clear().type(username).should('have.value', username).and('have.value', username);
  }
  cy.get(LoginMy_bizfly.getNextButton).click();
  if (password) {
    cy.xpath(LoginMy_bizfly.getPassWord).should("be.enabled").clear().type(password).should('have.value', password).and('have.value', password);
  }
})

Then("Tôi đăng nhập vào tài khoản thành công", () => {
    cy.xpath(LoginMy_bizfly.getBtnLogin).click();
    cy.wait(4000);
    cy.visit(LoginMy_bizfly.getUrlMybizfly);
    cy.get('.btn_action').contains("Bắt đầu").click({force:true});
})

Then("Tôi nhìn thấy msg với lỗi tài khoản không tồn tại {string}", (errorMessage) => {
  cy.xpath(LoginMy_bizfly.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy msg với lỗi mật khẩu không tồn tại {string}", (errorMessage) => {
  cy.xpath(LoginMy_bizfly.getBtnLogin).click();
  cy.xpath(LoginMy_bizfly.getErrPass).should("be.visible").contains(errorMessage);
});