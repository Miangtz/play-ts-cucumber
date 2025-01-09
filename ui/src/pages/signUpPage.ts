import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class SignUpPage {
    page : Page
    basePage : BasePage
    readonly sauceDemo : string
    readonly firstName : Locator
    readonly lastName : Locator
    readonly email : Locator
    readonly psw : Locator
    readonly createButton : Locator


    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.page = page;
        this.sauceDemo = "#sauce-demo";     
        this.firstName = this.page.locator("//*[@id='first_name' and @type='text']");
        this.lastName = this.page.locator("//*[@id='last_name' and @type='text']");
        this.email = this.page.locator("//*[@id='email' and @type='email']");
        this.psw = this.page.locator("//*[@id='password' and @type='password']");
        this.createButton = this.page.locator("//input[@value='Create' and @type='submit']");


    }


    // INSERT YOUR METHODS HERE
    async registerNewRandomUser(){   
        await this.basePage.waitForSelectorVisible("//*[@id='first_name' and @type='text']");
        await this.firstName.fill("John");
        await this.lastName.fill("Wacy");
        await this.email.fill(Date.now() +"@gmail"+ Math.floor(Math.random() * 100) +".com");
        await this.psw.fill("12345678");
    }

    async clickCreateAccountButton(){  
        await this.createButton.click();
     }

}
