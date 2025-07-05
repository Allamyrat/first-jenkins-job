import { test } from '@playwright/test';

test('Getting the title of a page', async ({ page }) => {
      await page.goto('https://practice.cydeo.com/');
      //pause for 3 seconds to ensure the page fully loads
        await page.waitForTimeout(3000);
      //get the title of the page and print it to the console
      const title = await page.title();
      console.log(`Page title is: ${title}`); 
});

test('Getting the current URL of the page', async ({ page }) => {
  
         await page.goto('https://practice.cydeo.com/');
        //pause for 3 seconds to ensure the page fully loads
        await page.waitForTimeout(3000);
        //get the current URL of the page and print it to the console
        const url = await page.url();
        console.log(`Current URL is: ${url}`);
         
});

test('Set the size of the browser', async ({ page }) => {
      await page.goto('https://practice.cydeo.com/');
      //pause for 3 seconds to ensure the page fully loads
        //await page.waitForTimeout(3000);
      //set the size of the browser to 1280x720 pixels
        //await page.setViewportSize({ width: 1280, height: 720 });
        //get the current size of the browser and print it to the console
       // const size = await page.viewportSize();
        //console.log(`Current viewport size is: ${size.width}x${size.height}`);
  
});