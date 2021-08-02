import { Selector } from "testcafe";

export default class LoginPage{
    constructor(){
        this.email = Selector('#username');
        this.password = Selector('#password');
        this.signinBtn = Selector('#signinButton');
        this.accountHeader = Selector('.sub-header-one')
        this.errorMsg = Selector ('.globalError').find('li');
    }
}