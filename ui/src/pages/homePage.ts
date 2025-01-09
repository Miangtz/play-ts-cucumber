import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class HomePage {
    page : Page
    basePage : BasePage
    readonly sauceDemo : string
    readonly loginButton : Locator
    readonly signUpButton : Locator

    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.page = page;
        this.sauceDemo = "#sauce-demo";     
        this.loginButton = this.page.locator('//nav//a[text()="Log In"]');
        this.signUpButton = this.page.locator('#customer_register_link');

    }


    // INSERT YOUR METHODS HERE
    async clickLoginButton(){   await this.loginButton.click(); }
    async clickSignUpButton(){   await this.signUpButton.nth(0).click(); }

    async isHomePageVisible(): Promise<boolean> {
        try {
            await this.basePage.waitForSelectorVisible(this.sauceDemo);
            return true;
        } catch (error) {
            return false;
        }
    }

    async isLogOutButtonVisible(): Promise<boolean> {
        try {
            await this.basePage.waitForSelectorVisible("//*[text()='Log Out']");
            return true;
        } catch (error) {
            return false;
        }
    }


    





}

