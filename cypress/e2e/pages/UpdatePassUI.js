const URL = "https://vietid.net/user/profile";
const UPDATE_BTN = "//a[contains(text(),'Cập nhật')]";
const ENTER_OLD_PASSWORD_INPUT = "//input[@name='old_password']";
const NEW_PASSWORD_INPUT = "//input[@id='new_password']";
const CONFIRM_NEW_PASSWORD_INPUT = "//input[@id='confirm_password']";
const CHANGE_BTN = "//button[contains(text(),'THAY ĐỔI')]";
const CANCEL_BTN = "//button[contains(text(),'HỦY BỎ')]"
const ERR_MSG = "//p[@id='err-changepass']"
const OK = "//input[@value='OK']"
const TITLE = "//div[@class='title']"

export default class UpdatePass {
    get getUrl() {
        return URL;
    }

    get getUpdateBtn() {
        return UPDATE_BTN
    }

    get getEnterOldPasswordInput() {
        return ENTER_OLD_PASSWORD_INPUT
    }

    get getNewPasswordInput() {
        return NEW_PASSWORD_INPUT
    }

    get getConfirmNewPasswordInput() {
        return CONFIRM_NEW_PASSWORD_INPUT
    }

    get getChangeBtn() {
        return CHANGE_BTN
    }

    get getCancelBtn() {
        return CANCEL_BTN
    }

    get getErrMsg() {
        return ERR_MSG
    }

    get getOk() {
        return OK
    }

    get getTitle() {
        return TITLE
    }
}
