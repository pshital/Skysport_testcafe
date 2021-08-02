import { Selector } from "testcafe";

export default class  Header {
    constructor() {
        this.header = Selector('.site-header');
        this.logo = Selector('.site-header__logo');
        this.headerLogo = Selector('img').withAttribute('src','/assets/Sky-Sports-Logo-transparent.svg');
        this.Logolink = Selector('a').withAttribute('href', '/');
        this.login = Selector('.site-login').find('a').nth(1);
        this.LoginLink = Selector('.site-login').find('a').nth(1).withAttribute('href','https://skyid.sky.com/signin/sports?successUrl=https%3A%2F%2Fwww.skysports.com')
    }
}     