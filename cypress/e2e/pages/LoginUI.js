const URl = "https://www.saucedemo.com"
const INPUT_USER_NAME = "#user-name"
const INPUT_PASSWORD = "#password"
const BTN_LOGIN = "#login-button"
const INVENSTORY = "invenstory_list"


export default class LoiginUI {
    get getURL() {
        return URL
    }
    get getElmInputUsername() {
        return INPUT_USER_NAME
    }
    get getElmInputPassword() {
        return INPUT_PASSWORD
    }
    get getBtnLogin() {
        return cy.get(BTN_LOGIN);
    }
    get ElmInvenstoryList() {
        return INVENSTORY_LIST
    }
    get getBtnLogin() {
        return cy.get(BTN_LOGIN);
    }
    get getElmInputUsername() {
        return cy.get(INPUT_USER_NAME);
    }
    get getElmInputPassword() {
        return cy.get(INPUT_PASSWORD);
    }
    get getInvenstoryList() {
        return cy.get(INVENSTORY_LIST);
    }
}