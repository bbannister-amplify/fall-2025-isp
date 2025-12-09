import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present and accept cookies', async () => {
        await StartPage.open()
        await expect($('.nav-button.amp-nav-logo.logged-out-navigation__logo').toBeVisible());
        await StartPage.acceptCookies();
    })
        
    it('click the login button at the bottom, log in as an Amplify user, verify logo and url', async () => {
        await StartPage.clickLogin();
        await browser.switchFrame($('iframe[title="Sign In"]'))
        await StartPage.loginAsAmplifyUser('soldbyvolume@hotmail.com');
        await expect($('.nav-button.amp-nav-logo.main-nav__logo').toBeVisible());
        await expect(await browser.getUrl()).toContain('https://classroom.amplify.com/discover');
    })
})

