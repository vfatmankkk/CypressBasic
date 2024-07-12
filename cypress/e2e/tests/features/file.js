import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('Tôi đọc file và kiểm tra nội dung file', () => {
    cy.readFile('cypress/fixture/example.json')
})