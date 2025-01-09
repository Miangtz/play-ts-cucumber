import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { LoginPage } from "../../pages/loginPage";
import { expect } from "@playwright/test";
setDefaultTimeout(60 * 1000 * 2)

Then('I fill out the login form with Email Address and Password', async function ()  {
    const loginPage = new LoginPage(fixture.page);
    await loginPage.fillLoginForm();
  })

When('I click on Sign In', async function ()  {
    const loginPage = new LoginPage(fixture.page);
    await loginPage.clickSignInButton();
  })


Then('I validate that user signed in', async function () {
    await fixture.page.waitForSelector("//*[contains(text(), 'not a robot')]");
    const userElement = await fixture.page.locator("//*[contains(text(), 'not a robot')]").isVisible();
    await expect(userElement).toBeTruthy();
})





