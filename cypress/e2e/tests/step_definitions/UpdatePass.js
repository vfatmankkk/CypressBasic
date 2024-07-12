import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import UpdatePassUI from "../../page/UpdatePassUI";

const UpdatePass = new UpdatePassUI();

Then("Màn hình hiển thị đầy đủ thông tin Profile người dùng", () => {
    cy.url().should("contain", UpdatePass.getUrl);
});

When("Người dùng chọn tùy chọn 'Cập nhật'", () => {
    cy.xpath(UpdatePass.getUpdateBtn).click();
});

Then("Màn hình hiển thị đầy đủ thông tin để Cập nhật mật khẩu", () => {
    cy.xpath(UpdatePass.getTitle).should("be.visible").and("contain", "Cập nhật mật khẩu !");
    cy.xpath(UpdatePass.getEnterOldPasswordInput).should("be.enabled").clear()
    cy.xpath(UpdatePass.getNewPasswordInput).should("be.enabled").clear()
    cy.xpath(UpdatePass.getConfirmNewPasswordInput).should("be.enabled").clear()
  
});

When("Tôi nhập mật khẩu cũ với mật khẩu = {string}", (oldPassword) => {
    if (oldPassword) {
        cy.xpath(UpdatePass.getEnterOldPasswordInput).type(oldPassword).and('have.value', oldPassword).should('have.value', oldPassword);
    }
});

When("Tôi nhập mật khẩu mới với mật khẩu = {string}", (newPassword) => {
    if (newPassword) {
        cy.xpath(UpdatePass.getNewPasswordInput).type(newPassword).and('have.value', newPassword).should('have.value', newPassword);
    }
});

When("Tôi nhập xác nhận mật khẩu mới với mật khẩu = {string}", (confirmNewPassword) => {
    if (confirmNewPassword) {
        cy.xpath(UpdatePass.getConfirmNewPasswordInput).type(confirmNewPassword).and('have.value', confirmNewPassword).should('have.value', confirmNewPassword);
    }
});

When("Tôi nhấn nút 'THAY ĐỔI'", () => {
    cy.xpath(UpdatePass.getChangeBtn).click();
});

Then("Tôi nhận được alert thông báo 'Cập nhật mật khẩu thành công'", () => {
        cy.on("window:alert", (text) => {
            expect(text).to.equal("Cập nhật mật khẩu thành công");
        })
        cy.xpath(UpdatePass.getOk).click();
});

When("Tôi nhấn nút 'HỦY BỎ'", () => {
    cy.xpath(UpdatePass.getCancelBtn).click();
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu cũ sai {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu mới với độ dài 7 ký tự {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu mới với độ dài 33 ký tự {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi thấy thông báo với lỗi khi nhập mật khẩu mới và nhập lại mật khẩu mới không khớp {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi không nhập mật khẩu cũ {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi không nhập mật khẩu mới {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi không nhập mật khẩu mới và nhập lại xác nhận mật khẩu mới {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi nhìn thấy thông báo với lỗi khi nhập mật khẩu mới và không nhập lại xác nhận mật khẩu mới {string}", (errorMessage) => {
    cy.xpath(UpdatePass.getErrMsg).should("be.visible").contains(errorMessage);
});

Then("Tôi quay lại trang Profile", () => {
    cy.url().should("contain", "https://vietid.net/user/profile");
});


