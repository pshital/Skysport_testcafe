import { ClientFunction, Selector } from 'testcafe';
import { credentials, location } from '../env/config'
import Footer from '../pages/PageComponents/Footer';
import Header from '../pages/PageComponents/Header';
import LoginPage from '../pages/LoginPage';
import Cookie from '../pages/PageComponents/Cookie';
import HomePage from '../pages/homepage';

const homepage = new HomePage();
const loginPage = new LoginPage();

const getLocation = ClientFunction(() => window.location.href);

fixture('checking header and footer for page')
    .page(location)

    test('Test that site has header logo', async t =>{
        await t
        .expect(homepage.header.headerLogo.exists).ok();
    })
    
    test('Test that skysport logo to go back to homepage', async t =>{
        await t
         .click(homepage.header.Logolink)
         .expect(getLocation()).eql('https://www.skysports.com/')
    })

    test('Test that Login link is correct', async t=>{
        await t
        .expect(homepage.header.login.getAttribute('href'))
        .eql('https://skyid.sky.com/signin/sports?successUrl=https%3A%2F%2Fwww.skysports.com')
       
     })
    
     test('login test', async t =>{
        await t
        .switchToIframe(homepage.cookie.noticeIframe)
        .click(homepage.cookie.acceptButton)
        .switchToMainWindow()
        .click(homepage.header.LoginLink)
        .expect(getLocation()).contains('signin')
        .expect(loginPage.accountHeader.exists).ok()
        .typeText(loginPage.email, credentials.email)
        .typeText(loginPage.password, credentials.password)
        .click(loginPage.signinBtn)
        //.expect(loginPage.errorMsg .innerText).contains('Sorry, we did not recognise either your username or password')
    })

    test('Test that footer has skysport logo', async t =>{
        await t
        .expect(homepage.footer.footerLogo.exists).ok();
    });

    test('test that the skysport copyright notice is visible', async t => {
     
        var currentYear = new Date().getFullYear();
        var copyrightText=" © "+ currentYear +" Sky UK";

        await t
          .expect(homepage.footer.copyright.innerText).eql(copyrightText);
    });

    test('Test that footer has facebook and twitter link', async t =>{
        await t
           .expect(homepage.footer.subItemFacebook.getAttribute('href'))
           .eql('https://www.facebook.com/SkySports')
           .expect(homepage.footer.subItemTwitter.getAttribute('href'))
           .eql('https://twitter.com/SkySports');
    });

    test('Test that sub-footer items are correct', async t =>{
        const horizontalNavItems  = await Selector('.site-footer__nav--horizontal-nav li');
        var Count = await horizontalNavItems .count;
       
        for (let i = 0; i <  Count; i++ )
        {   
            const currentLiItem = await horizontalNavItems .nth(i).find('a').innerText;
            await t.expect(homepage.footer.horizontalNavList).contains(currentLiItem);
        }
    })
    


