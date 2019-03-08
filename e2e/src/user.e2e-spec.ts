import { browser } from 'protractor';
import { RegistrationPage } from './user-registration-form.po';


describe('cos tam', () => {
    let page: RegistrationPage;

    beforeEach(() => {
        page = new RegistrationPage;
    });

    it('register', () => {
        page.navigateTo();
        page.emailField().sendKeys('asd1@asd.pl');
        page.passwordField().sendKeys('eef');
        page.confirmPasswordField().sendKeys('eef');
        page.nameField().sendKeys('janusz');
        page.surnameField().sendKeys('asd');
        page.submit().click();
        expect(page.resultMessage().getText()).toContain('Dziękujemy');
    });

    it('login', () => {
        page.navigateToLogin();
        page.emailField().sendKeys('asd1@asd.pl');
        page.passwordField().sendKeys('eef');

        page.submit().click();
        expect(page.url()).toContain('profile');
    });
});;;

