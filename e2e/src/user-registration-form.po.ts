import { browser, by, element } from 'protractor';

export class RegistrationPage {
    navigateTo() {
        return browser.get('/#/user/register');
    }

    emailField() {
        return element(by.css('.email-field'));
    }

    passwordField() {
        return element(by.css('.password-field'));
    }

    confirmPasswordField() {
        return element(by.css('.confirm-password-field'));
    }

    nameField() {
        return element(by.css('.name-field'));
    }

    surnameField() {
        return element(by.css('.surname-field'));
    }

    submit() {
        return element(by.css('.submit-button'));
    }

    resultMessage() {
        return element(by.css('.result'));
    }

    navigateToLogin() {
        return browser.get('/#/user/login');
    }

    url() {
        return browser.getCurrentUrl();
    }

}