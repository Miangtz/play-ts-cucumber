import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class LoginPage {
    page : Page
    basePage : BasePage
    readonly loginForm : string
    readonly email : Locator
    readonly psw : Locator
    readonly signInButton : Locator

    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.page = page;
        this.loginForm = "#create-account";
        this.email = this.page.locator("#customer_email");
        this.psw = this.page.locator("#customer_password");
        this.signInButton = this.page.locator("//input[@value='Sign In']");
    }


    // INSERT YOUR METHODS HERE

    async isLoginFormVisible() { 
        try {
            await this.basePage.waitForSelectorVisible(this.loginForm);
            return true;
        } catch (error) {
            return false;
        }
    }

    async fillLoginForm(){
        await this.page.waitForSelector("//*[text()='Customer Login']");
        await this.email.fill("userfortests@utaf.com")
        await this.psw.fill("123456")
        await this.page.keyboard.press('Enter');
    }
    
    async clickSignInButton(){    await this.signInButton.click(); }

    async isUserVisibleOnPage(){
        await this.basePage.waitForSelectorVisible("//*[text()='']");
    }

}