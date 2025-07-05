import {test} from '@playwright/test';
import { Console } from 'console';

test.describe("", () => {
  test.beforeAll(async () => {
                console.log("Before All Test Cases");
        });
 test.beforeEach(async () => {
                console.log("Before Each Test Case");
        });
 test.afterEach(async () => {
                console.log("After Each Test Case");
        });

test.afterAll(async () => {
                console.log("After All Test Cases");
        });
test("Test Case1", async()=> {
            console.log("Test Case 1 is executed");
    });
    
test("Test Case2", async()=> {
            console.log("Test Case 2 is executed");
    });
    
test("Test Case3", async()=> {
            console.log("Test Case 3 is executed");
    });

   
});