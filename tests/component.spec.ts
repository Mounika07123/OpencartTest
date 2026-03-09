import { test, expect } from "@playwright/test"
import { Home } from "../pages/Homepage"
import { ComponentModule } from "../pages/Components"
import { Product } from "../pages/Applecinema";

let home: Home;
let component: ComponentModule;
let product: Product;

test.beforeEach(async ({ page }) => {
    await page.goto("https://naveenautomationlabs.com/opencart/")

    home = new Home(page)
    component = new ComponentModule(page)
    product = new Product(page)
    await home.componentstab();
    await component.monitorMenu();
    await component.selectMonitor("Apple Cinema 30");

})

test("Click on Monitor menu & grab the monitor text", async ({ page }) => {
   
    expect(await component.validateproduct().innerText()).toBe('Apple Cinema 30"')

});

test("select the checkbox", async () => {
    await product.getcheckbox();
    await expect(product.checkboxselection()).toBeChecked();
});

test("Enter text in the Textbox", async () => {
    await product.enterText("Mounika")

});

test("Enter text in the Textarea", async () => {
    await product.selectOption()

});

test("Enter text in the TextArea", async () => {
    await product.enterTextArea("Mounika Typescript")
});

test("Upload file & validate the pop up message", async ({ page }) => {
    //File Upload & Validate dialog prompt
    const dialogPromise = page.waitForEvent('dialog');
    await product.FileUpload();
    const dialog = await dialogPromise;
    console.log(dialog.message());
    expect(dialog.message()).toContain("Your file was successfully uploaded!")
    await dialog.accept();

});

test("Select the date & validate the expected date", async () => {
    await product.picker12();//click on date picker icon
    await product.datepicker("June 2025", "12", true)
    const expectedDate = '2025-06-12'
    const actualDate = await product.dateval()
    expect(actualDate).toBe(expectedDate)
});

//test("")


