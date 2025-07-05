
import {test} from '@playwright/test';

test.describe("Practice.cydeo", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        //await page.waitForTimeout(3000);
    });
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });


    test("title of the page", async ({page}) => {
        console.log(`Page title is: ${await page.title()}`);
    });
    test("URL of the page", async ({ page }) => {
        console.log(`Current URL is: ${page.url()}`);
    });
});