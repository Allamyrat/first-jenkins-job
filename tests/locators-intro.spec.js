import { test } from '@playwright/test';

test('Google search element locating test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.waitForTimeout(2000);

 let searchbox = page.locator("#APjFqb");
 //await searchbox.type('Playwright');
 await searchbox.fill('Playwright'); // use fill() instead of type() to input text into a textarea

 await page.waitForTimeout(2000); // wait for the search results to load
await searchbox.press("Enter"); // press Enter to submit the search query
await page.waitForTimeout(2000); // wait for the search results to load
});

