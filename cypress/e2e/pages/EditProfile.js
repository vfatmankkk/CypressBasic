const BTN_EDIT_PROFILE = '//a[@class="capnhattk"]'
const IPUT_FNAME = 'input[name="fullname"]'
const SELCT_GENDER = 'select[name="gender"]'
const IPUT_BIRTH = '//input[@placeholder="Ngày sinh"]'
const IPUT_ADDRESS = '//input[@placeholder="Địa chỉ"]'
const IPUT_JOB = 'input[class="job input"]'
const BTN_SAVE_EDIT = 'button[class="btn btngreen center"]'

export default class EditProfile {
    get getBTN_EDIT_PROFILE () {
        return BTN_EDIT_PROFILE
    };
    get getIPUT_FNAME () {
        return IPUT_FNAME
    };
    get getSELCT_GENDER () {
        return SELCT_GENDER
    };
    get getIPUT_BIRTH () {
        return IPUT_BIRTH
    };
    get getIPUT_ADDRESS () {
        return IPUT_ADDRESS
    };
    get getIPUT_JOB () {
        return IPUT_JOB
    };
    get getBTN_SAVE_EDIT () {
        return BTN_SAVE_EDIT
    };
};
