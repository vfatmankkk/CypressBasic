const URLACC = "https://vietid.net/login"
const USERNAME = "#account"
const NEXT_BUTTON = ".index-login"
const ERR_ACC = "//p[@id='err-login']"
const URLPASS = "https://vietid.net/login/enterPassword";
const PASSWORD = "input[name='password']"
const ERR_PASS = "//div[@class='warning error-message']"
const BTN_LOGIN = ".index-login"
const LABEL_ONE = "//li[@class='one']"
const LABEL_TWO = "//li[@class='two']"
const URL_PROFILE = "https://vietid.net/user/profile"

export default class Login {
    get getUrlAcc() {
        return URLACC;
    }

    get getUserName() {
        return USERNAME;
    }

    get getNextButton() {
        return NEXT_BUTTON;
    }

    get getErrAcc() {
        return ERR_ACC;
    }

    get getUrlPass() {
        return URLPASS;
    }

    get getPassWord() {
        return PASSWORD;
    }

    get getErrPass() {
        return ERR_PASS;
    }

    get getBtnLogin() {
        return BTN_LOGIN;
    }

    get getLabelOne() {
        return LABEL_ONE;
    }

    get getLabelTwo() {
        return LABEL_TWO;
    }

    get getUrlProfile() {
        return URL_PROFILE;
    }
}
