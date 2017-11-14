import { browser, by, element } from 'protractor';

export class Authentification {
    navigateTo() {
        return browser.get('/login');
    }
    checkauth() {
        const email = element(by.id('login-email'));
        const password = element(by.id('login-password'));
        const submit = element(by.id('btn-login'));
        email.sendKeys('test@gmail.com');
        password.sendKeys('0000');
        submit.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
        const logout = element(by.id('logout'));
        logout.click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
    }

    checkunauth() {
        const email = element(by.id('login-email'));
        const password = element(by.id('login-password'));
        const submit = element(by.id('btn-login'));
        email.sendKeys('hello@gmail.com');
        password.sendKeys('0000');
        submit.click();
        const alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('!!!!Utilisteur Inconu Veuillez resaisir un Email et Password Valid !!!!');
        browser.sleep(1000);
        alertDialog.accept();
        browser.sleep(1000);
        expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/login');
    }
}
