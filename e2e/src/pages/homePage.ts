import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class HomePage {
    page : Page
    basePage : BasePage
    readonly addToCartBackpack : Locator
    readonly cartButton : Locator
    readonly catalog : Locator
    readonly addToCartButton : Locator
    readonly checkOutButton : Locator
    readonly myCartToggle : Locator
    readonly checkOutButtonCartPage : Locator
    readonly paymentPage : Locator
    readonly inventoryList : string

    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.page = page;
        this.addToCartBackpack = this.page.locator("#add-to-cart-sauce-labs-backpack");
        this.cartButton = this.page.locator(".shopping_cart_link");
        this.catalog = this.page.locator("//*[text()='Catalog']");
        this.addToCartButton = this.page.locator("//*[@id='add']");
        this.checkOutButton = this.page.locator("#minicart>.checkout");
        this.myCartToggle = this.page.locator("//*[@class='toggle-drawer cart desktop ' and text()='My Cart ']");
        this.checkOutButtonCartPage = this.page.locator("//*[@value='Check Out' and @id='checkout']");
        this.paymentPage = this.page.locator("#checkout-main").nth(0);
        this.inventoryList = '.inventory_list'
    }


    // INSERT YOUR METHODS HERE
    async addToCartAProduct(product : string){
        await this.basePage.waitForSelectorVisible("//*[contains(@id, 'product')]//*[text()='"+product+"']");
        await this.page.locator("//*[contains(@id, 'product')]//*[text()='"+product+"']").click();
    }

    async goToCart(){ await this.cartButton.click();}
    
    async clickCatalogCTA(){
        await this.basePage.waitForSelectorVisible("//*[text()='Catalog']");
        await this.catalog.click();
    }

    async clickAddToCartButton(){
        await this.basePage.waitForSelectorVisible("//*[@id='add']");
        await this.addToCartButton.click();
        await this.basePage.waitForSelectorVisible("//*[@id='cart-target-desktop']/span[text()='(1)']");
    }

    async clickCheckOutButton(){ await this.checkOutButton.click(); }

    async clickMyCartToggle(){ await this.myCartToggle.click(); }

    async clickCheckOutButtonCartPage(){ await this.checkOutButtonCartPage.click(); }

    async validatePaymentPageIsVisible(){
        await this.basePage.waitForSelectorVisible("#checkout-main");
        await expect(this.paymentPage.isVisible()).toBeTruthy();
    }


    
    





}

