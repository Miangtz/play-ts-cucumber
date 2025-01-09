import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class LoginPage {
    page : Page
    basePage : BasePage
    readonly userName : Locator
    readonly password : Locator
    readonly loginButton : Locator
    readonly swagLabsTitle : string

    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.page = page;
        this.userName = this.page.locator("#user-name");
        this.password = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
        this.swagLabsTitle = ".login_wrapper-inner";
    }


    // INSERT YOUR METHODS HERE
    async loginToPage(user: string, password: string) {
        await this.basePage.waitForSelectorVisible(this.swagLabsTitle);
        await this.userName.fill(user);
        await this.password.fill(password);
        await this.loginButton.click();
    }


}