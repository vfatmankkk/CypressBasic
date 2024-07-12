const URL = "https://vietid.net/user/profile"
const AVATAR = "//div[@class='user-click user-avatar floatright']"
const LOG_OUT = "//a[@id='logout-click']"
const INFO_NAME = "//li[@class='user-dropdown-first-info-name']"
const INFO_EMAIL = "//li[@class='user-dropdown-first-info-email']"
const ADD_ACC = "//a[contains(text(),'Thêm tài khoản')]"
const CHOOSE_ACC = "https://vietid.net/login/chooseAccount"
const INFO_SECURITY = "//h3[contains(text(),'Thông tin bảo mật')]"

export default class Logout {
    get getURL() {
        return URL;
    }
    get getAvatarClick() {
        return AVATAR;
    }

    get getLogoutClick() {
        return LOG_OUT
    }

    get getInfoName() {
        return INFO_NAME
    }

    get getInfoEmail() {
        return INFO_EMAIL
    }

    get getAddAcc() {
        return ADD_ACC
    }

    get getChooseAcc() {
        return CHOOSE_ACC
    }

    get getInfoSecurity() {
        return INFO_SECURITY
    }
}