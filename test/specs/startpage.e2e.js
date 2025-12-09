import { expect } from '@wdio/globals'
import StartPage from '../pageobjects/start.page.js'

describe('Amplify.com: the user should go to ', () => {
    it('the landing page and verify the logo is present and accept cookies', async () => {
        await StartPage.open()
        await expect($('.nav-button.amp-nav-logo.logged-out-navigation__logo').toBeVisible())

        await StartPage.acceptCookies();

        //await StartPage.loginUser('soldbyvolume@hotmail.com');
    })
})

