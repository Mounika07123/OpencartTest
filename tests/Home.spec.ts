import { test, expect } from "@playwright/test";
import { Home } from "../pages/Homepage";


test("navigate to Home page", async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/")
    let home = new Home(page)
    //check if the homepage exists
    expect(home.isHomepageExists).toBeTruthy();

    //Enter the search and click on it
    home.searchBox("MacBook")
    home.searchclicktxt();
    let product = await home.products().all();
    for (let value of product) {
    console.log(await value.innerText())
    }

})