//const {test} = require("@playwright/test");

import {test} from '@playwright/test';

test("Simple Google test", async ({page}) => {

    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);
});