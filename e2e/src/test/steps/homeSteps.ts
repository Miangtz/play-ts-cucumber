import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import { HomePage } from "../../pages/homePage";
import { expect } from "@playwright/test";

setDefaultTimeout(60 * 1000 * 2)

Given('the user is on the My Account Page', async function () {
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

When('the user clicks on Catalog CTA', async function () {
  const homePage = new HomePage(fixture.page);
  await homePage.clickCatalogCTA();
})

When('the user clicks on {string} product from the Products', async function (s: string) {
  const homePage = new HomePage(fixture.page);
  await homePage.addToCartAProduct(s); 
});

Then('the user should be taken to product detail page for {string}', async function (s: string) {
  await expect(fixture.page.locator(`//*[@id='breadcrumb']/span/a[text()='${s}']`)).toBeVisible();
});

Then('the user clicks on Add to Cart', async function () {
  const homePage = new HomePage(fixture.page);
  await homePage.clickAddToCartButton();
})

Then('the user clicks on Checkout', async function ()  {
  const homePage = new HomePage(fixture.page);
  await homePage.clickCheckOutButton();
})

Then('the user verifies items in the cart', async function () {
  await fixture.page.waitForSelector("//*[@id='page-content']//*[@class='info']/h3/a[contains(text(),'Black heels - S / Red')]");
  await expect(fixture.page.locator("//*[@id='page-content']//*[@class='info']/h3/a[contains(text(),'Black heels - S / Red')]")).toBeVisible();  
});

Then('the user should be taken to Cart page', async function (){
  const homePage = new HomePage(fixture.page);
  await homePage.clickMyCartToggle();
})

Then('the user click on Checkout', async function (){
  const homePage = new HomePage(fixture.page);
  await homePage.clickCheckOutButtonCartPage();
})

Then('user is available to see the payment page', async function () {
  const homePage = new HomePage(fixture.page);
  await homePage.validatePaymentPageIsVisible();
})


