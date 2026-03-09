import { Page, expect, Locator } from "@playwright/test"

export class Product {
    private readonly page: Page;
    private readonly checkbox: Locator;
    private readonly textBox: Locator;
    private readonly drpvalue: Locator;
    private readonly textarea: Locator;
    private readonly uploadfile: Locator;
    private readonly datepicker1: Locator;
    private readonly mnthyr: Locator;
    private readonly next: Locator;
    private readonly prev: Locator;
    private readonly date: Locator;
    private readonly insertDate: Locator;
    //constructors
    constructor(page: Page) {
        this.page = page;
        this.checkbox = page.locator("[value='10']")
        this.textBox = page.locator("#input-option208");
        this.drpvalue = page.locator("#input-option217");
        this.textarea = page.getByLabel('Textarea');
        this.uploadfile = page.locator('.fa.fa-upload');
        this.datepicker1 = page.locator(".fa.fa-calendar").nth(0)
        this.mnthyr = page.locator(".picker-switch").nth(0)
        this.next = page.locator(".next").nth(0)
        this.prev = page.locator(".prev").nth(1)
        this.date = page.locator(".datepicker-days td")
        this.insertDate = page.locator("#input-option219");
    }

    //action methods
    async getcheckbox() {
        await this.checkbox.check();

    }
    checkboxselection() {
        return this.checkbox
    }

    async enterText(text: string): Promise<void> {
        return await this.textBox.fill(text)
    }

    async selectOption(): Promise<void> {
        await this.drpvalue.selectOption("3")
    }

    async enterTextArea(text: string): Promise<void> {
        return await this.textarea.fill(text)
    }

    async FileUpload(): Promise<void> {

        const fileChooserPromise = this.page.waitForEvent('filechooser');

        await this.uploadfile.click();

        const fileChooser = await fileChooserPromise;

        await fileChooser.setFiles('testdata/playwrightdoc.txt');

    }

    //Return date value
    async dateval(): Promise<string | null> {

        return await this.insertDate.inputValue();
    }

    //Opens datepicker
    async picker12() {
        await this.datepicker1.click();
    }

    //select the Date

    async datepicker(targetmnthyr: string, targetDate: string, isfuture: Boolean) {
        while (true) {
            const currentMnthyr = await this.mnthyr.textContent();

            if (currentMnthyr === targetmnthyr) {
                break;
            }

            if (isfuture) {
                //future
                await this.next.click();
            }

            else {

                //past
                await this.prev.click();

            }

        }

        const allDates = await this.date.all();
        for (let dt of allDates) {
            const dateText = await dt.innerText();
            if (dateText === targetDate) {
                await dt.click();
                break;
            }
        }



    }


}


