import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class StartPage extends Page {

    open () {
        return super.open('');
    } 

    acceptCookies () {
        if ($('.btn.btn-secondary.rhythm-button.toast-close').isDisplayed()) {
        return $('.btn.btn-secondary.rhythm-button.toast-close').click(); }
    }
}

export default new StartPage();
