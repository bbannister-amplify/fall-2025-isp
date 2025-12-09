import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {

    open () {
        return super.open('');
    } 

    async acceptCookies () {
        if ($('.btn.btn-secondary.rhythm-button.toast-close').isDisplayed()) {
        return $('.btn.btn-secondary.rhythm-button.toast-close').click(); }
    }

    async clickLogin () {
        return $('.nav-button.logged-out-navigation__log-in-button').click();
    }

    async loginAsAmplifyUser (username) {
        await $('.white-pill-button.login-option.amplify').click();
        await $('#amplify-login-username-input').addValue(username);
        await $('#amplify-login-password-input').addValue('Demo1234');
        return $('#amplify-login-submit-button').click();
    }
}

export default new StartPage();
