import { Selector } from "testcafe";

export default class  Footer {
    constructor() {
        this.footer = Selector('.site-footer__body');
        this.copyright = Selector('.site-footer__copyright');
        this.footerLogo = Selector('img').withAttribute('src','https://e0.365dm.com/tvlogos/channels/Sky-Sports-Logo.svg');
        this.skysportsItems = Selector('#site-footer-sky-sports-group-0 .site-footer__item');
        this.partnersitems = Selector('#site-footer-sky-sports-group-1 .site-footer__item');
        this.skychannelitems = Selector('#site-footer-sky-sports-group-2 .site-footer__item');
        this.moresitesitems = Selector('#site-footer-sky-sports-group-3 .site-footer__item');
        this.subItemFacebook = Selector('.social-nav__item').nth(1).find('a');
        this.subItemTwitter = Selector('.social-nav__item').nth(0).find('a');
        this.horizontalNavItems = Selector('.site-footer__nav--horizontal-nav');
        this.horizontalNavList = [
            "Terms & Conditions",
            "Privacy & Cookies Notice",
            "Privacy Options",
            "Accessibility Information",
            "Contact Us"
        ];
    }
}     