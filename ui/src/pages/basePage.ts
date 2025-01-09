import { Locator, Page, expect } from "@playwright/test";

/**
    *Base page with commmon methods and functionalioties that can be reused by other POMS are definied
 */
export class BasePage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async loadWeb(url: string){
        await this.page.goto(url);
    }

    async waitForSelectorVisible(selector: string){
        const interval = 1000;

        while (Date.now() - Date.now() < 60000) {
            try {
                await this.page.waitForSelector(selector, { timeout: interval });
                return; 
            } catch (e) {
                
            }
        }

        throw new Error(`the ${selector} was not found`);
    }
    
    async waitForElementToBeVisible(locator: string): Promise<boolean> {
        try {
            await this.page.locator(locator).waitFor({ state: 'visible' });
            return true;
        } catch (error) {
            console.error(`Error waiting for element to be visible: ${error}`);
            return false;
        }
    }

    async expectVisible(selector: Locator){
        await expect(selector).toBeVisible();
    }

}
