import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("Truy cập vào màn hình trang chủ", function () {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
});

When(`Tôi nhập chuột vào button "Bank Manager Login"`, (buttonText) => {
    cy.url().should("eq","https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager")
});

Then(`Tôi nhấp chuột vào "Add Customer"`, (buttonText) => {
    cy.wait(5000);
    cy.get("button[ng-click='addCust()']").click()
});

Then(`Hiển thị ra màn hình "Add Customer"`, () => {
    cy.url.should("eq","https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust")
});

When(`Nhập đầy đủ thông tin vào Form`, (FirstName, LastName, PostCode) => {
    cy.get("input[ng-model='fName']").type("Nguyễn")
    cy.get("input[ng-model='lName']").type("Việt Anh")
    cy.get("input[ng-model='postCd']").type("321999")
});

Then(`Thông tin được hiển thị đầy đủ trong Form`, () => {
    cy.get("input[ng-model='fName']").should('have.value', "Nguyễn")
    cy.get("input[ng-model='lName']").should('have.value', "Việt Anh")
    cy.get("input[ng-model='postCd']").should('have.value', "321999")
});

When(`Tôi nhập chuột vào button "Add Customer"`, (buttonText) => {
    cy.get("button[class='btn btn-default']").click()
});

Then(`Kiểm tra thêm mới khách hàng thành công`, () => {});

Given('Truy cập trang login', () => {
    cy.visit(`https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login`)
    cy.get("button[ng-click='manager()']").click()
    cy.url().should("eq", "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager");
});

When('Tôi thêm tài khoản có first name là {string} và last name là {string}', (firstName, lastName) => {
    cy.get("button[ng-click='addCust']").click()
    cy.url().should("eq", "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager/addCust")
    cy.get("input[ng-mode='fName']").type(firstName)
    cy.get("input[ng-mode='lName']").type(LastName)
    cy.get("input[ng-mode='postCd']").type("321999")
});

Then('Kiểm tra tài khoản được thêm thành công', () => {
    cy.get("input[ng-mode='fName']").should('have.value',"Nguyễn")
    cy.get("input[ng-mode='lName']").should('have.value',"Việt Anh")
    cy.get("input[ng-mode='postCd']").should('have.value',"321999")
});

When("Tôi thêm tài khoản có first name theo data", function (dataTable) {
    dataTable.hashes().forEach(testData => {
        cy.log("testData", testData.firstName)
        cy.log("testData", testData.lastName)
    });
})

