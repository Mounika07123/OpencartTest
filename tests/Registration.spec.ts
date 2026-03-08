import { test, expect } from "@playwright/test";
import { Home } from "../pages/Homepage";
import { registration } from "../pages/register"
import { randomutility } from "../utils/randomtestdatageneartor";


let home: Home;
let regis: registration;
test.beforeEach(async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/")

    //Intialize objects
    home = new Home(page)
    regis = new registration(page)

})

test("Click on Registration link", async ({ page }) => {
    await home.Accountlink();
    await home.Registration();
    await regis.fillreg(randomutility.firstame(), randomutility.lastname(), randomutility.email(), randomutility.phone(), randomutility.password(), randomutility.password())
    
    
    //clcik on Checkbox
    await regis.checkbox();
    await regis.continue();
    expect(await regis.message()).toEqual("Your Account Has Been Created!")
    await page.waitForTimeout(5000)

})
