import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";


export class CartPage {
    page : Page
    basePage : BasePage
    yourCart : string
    cartItems : Locator

    constructor(page: Page) {
        this.basePage = new BasePage(page);
        this.page = page;
        this.yourCart = '//*[text()="Your Cart"]';
        this.cartItems = this.page.locator('.cart_item');
    }


    // INSERT YOUR METHODS HERE
    async validateCartItem(): Promise<number> {
        await this.basePage.waitForSelectorVisible(this.yourCart)
        try {
            const items = await this.cartItems.count();
            return items;
        } catch (error) {
            return null;
        }
    }




}

