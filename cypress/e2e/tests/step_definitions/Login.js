import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginUI from "../../page/LoginUI";

const Login = new LoginUI();
let username;
let password;

Given("Tôi đã mở trang đăng nhập VietID", function () {
  cy.visit(Login.getUrlAcc);
  cy.xpath(Login.getLabelOne).should("be.visible").and("contain", "Chỉ cần duy nhất một tài khoản ViệtID !")
  cy.xpath(Login.getLabelTwo).should("be.visible").and("contain", "Bạn có thể đăng nhập các website & các ứng dụng trên di động")
});

When("Tôi nhập username {string}", (user) => {
  username = user;
  cy.get(Login.getUserName).clear();
  if (username) {
    cy.get(Login.getUserName).should("be.enabled").type(username).should('have.value', username).and('have.value', username);
  }
});

Then("Thông tin vừa nhập được hiển thị vào textbox username", () => {
  cy.url().should("contain", Login.getUrlAcc);
  cy.get(Login.getUserName).should('have.value', username);
});

When("Tôi nhấn nút 'Tiếp tục'", () => {
  cy.get(Login.getNextButton).click();
});

Then("Tôi chuyển sang màn hình hiển thị nhập mật khẩu", () => {
  cy.url().should("contain", Login.getUrlPass);
});

Then("Màn hình hiển thị đầy đủ thông tin để Nhập mật khẩu", () => {
  cy.url().should("contain", Login.getUrlPass);
  cy.xpath(Login.getLabelOne).should("be.visible").and("contain", "Chỉ cần duy nhất một tài khoản ViệtID !")
  cy.xpath(Login.getLabelTwo).should("be.visible").and("contain", "Bạn có thể đăng nhập các website & các ứng dụng trên di động")
  cy.get(Login.getPassWord).should("be.enabled")
  cy.get(Login.getBtnLogin).should("be.visible")

});

When("Tôi nhập mật khẩu {string}", (pass) => {
  password = pass;
  cy.get(Login.getPassWord).clear();
  if (password) {
    cy.get(Login.getPassWord).should("be.enabled").type(password).should('have.value', password).and('have.value', password);
  }
});

Then("Thông tin vừa nhập được hiển thị vào textbox mật khẩu", () => {
  cy.url().should("contain", Login.getUrlPass);
  cy.get(Login.getPassWord).should('have.value', password);
});

When("Tôi nhấn nút 'Đăng nhập'", () => {
  cy.get(Login.getBtnLogin).click();
});

Then("Tôi nhìn thấy trang Profile", () => {
  cy.url().should("contain", Login.getUrlProfile);
});

Then("Tôi nhìn thấy thông báo với lỗi tài khoản không tồn tại {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi tài khoản trống {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập tài khoản có chứa ký tự đặc biệt {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập với email thiếu ký tự '@' {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập với email thiếu tên miền {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập với email không có dấu chấm {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập với số điện thoại thiếu đầu {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập với số điện thoại thiếu cuối {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập với số điện thoại 12 số {string}", (errorMessage) => {
  cy.xpath(Login.getErrAcc).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi mật khẩu trống {string}", (errorMessage) => {
  cy.xpath(Login.getErrPass).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi mật khẩu sai {string}", (errorMessage) => {
  cy.xpath(Login.getErrPass).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi mật khẩu không tồn tại {string}", (errorMessage) => {
  cy.xpath(Login.getErrPass).should("be.visible").contains(errorMessage);
});

Given("Tôi truy cập vào website và login thành công với username = {string} và password = {string}", function (username, password) {
  cy.visit(Login.getUrlAcc);
  cy.get(Login.getUserName).should("be.enabled").clear().type(username).and('have.value', username);
  cy.url().should("contain", Login.getUrlAcc);
  cy.get(Login.getUserName).should('have.value', username);
  cy.get(Login.getNextButton).click();
  cy.url().should("contain", Login.getUrlPass);
  cy.url().should("contain", Login.getUrlPass);
  cy.get(Login.getPassWord).should("be.enabled")
  cy.get(Login.getBtnLogin).should("be.visible")
  cy.get(Login.getPassWord).should("be.enabled").clear().type(password).and('have.value', password);
  cy.url().should("contain", Login.getUrlPass);
  cy.get(Login.getPassWord).should('have.value', password);
  cy.get(Login.getBtnLogin).click();
  cy.url().should("contain", Login.getUrlProfile);
})
