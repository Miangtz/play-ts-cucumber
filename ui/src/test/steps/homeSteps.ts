import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { LoginPage } from "../../pages/loginPage";
import { expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { SignUpPage } from "../../pages/signUpPage";
import { BasePage } from "../../pages/basePage";

setDefaultTimeout(60 * 1000 * 2)


When('I click on Sign Up Button', async function () {
    const homePage = new HomePage(fixture.page);
    await homePage.clickSignUpButton();
})

Given('Given I am on the Sauce Demo Home Page', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Then('I fill out the sign up form with First Name, Last Name, Email Address, and Password', async function() {
    const signUpPage = new SignUpPage(fixture.page);
    await signUpPage.registerNewRandomUser();

})

When('I click on Create Account', async function () {
    const signUpPage = new SignUpPage(fixture.page);
    await signUpPage.clickCreateAccountButton();

})

Then('I see login successful', async function () {
    await fixture.page.waitForSelector("//*[contains(text(), 'not a robot')]");
    await expect(fixture.page.locator("//*[contains(text(), 'not a robot')]")).toBeVisible();
})

When('I click on Customer Login Button', async function ()  {
    const homePage = new HomePage(fixture.page);
    await homePage.clickLoginButton();
})

