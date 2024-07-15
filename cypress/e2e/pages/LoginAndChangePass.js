const URL_LOGIN = "https://vietid.net/login"
const IPUT_ACC = 'input[id="account"]'
const BTN_NEXT = 'button[class="index-login btn-login btn center"]'
const IPUT_PASS = 'input[name="password"]'
const BTN_PASS_NEXT = 'button[class="index-login btn center"]'
const BTN_THAYDOIMK = '//a[@class="thaydoimk"]'
const OLD_PASS = 'input[name="old_password"]'
const NEW_PASS = 'input[name="new_password"]'
const CONFIRM_PASS = 'input[name="confirm_password"]'
const BTN_CHANGE_PASS = 'button[class="btn-changePass btn btngreen center"]'

export default class LoginAndChangePass {
    get getURL_LOGIN () {
        return URL_LOGIN;
    };
    get getIPUT_ACC () {
        return IPUT_ACC;
    };
    get getBTN_NEXT () {
        return BTN_NEXT;
    };
    get getIPUT_PASS () {
        return IPUT_PASS;
    };
    get getBTN_PASS_NEXT () {
        return BTN_PASS_NEXT;
    };
    get getBTN_THAYDOIMK () {
        return BTN_THAYDOIMK;
    };
    get getOLD_PASS () {
        return OLD_PASS;
    };
    get getNEW_PASS () {
        return NEW_PASS;
    };
    get getCONFIRM_PASS () {
        return CONFIRM_PASS;
    };
    get getBTN_CHANGE_PASS () {
        return BTN_CHANGE_PASS;
    };
};