import { Page, test, Locator } from "@playwright/test"

export class registration {
    private readonly page: Page;
    // Locators
    private readonly first: Locator;
    private readonly last: Locator;
    private readonly email: Locator;
    private readonly number: Locator;
    private readonly password: Locator;
    private readonly confpassword: Locator;
    private readonly check: Locator;
    private readonly button: Locator;
    private readonly text:Locator

    //Constructor

    constructor(page: Page) {
        this.page = page;
        this.first = page.getByLabel('First Name');
        this.last = page.getByLabel('Last Name');
        this.email = page.getByLabel('E-Mail');
        this.number = page.getByLabel('Telephone');
        this.password = page.locator(`//label[normalize-space()='Password']`);
        this.confpassword = page.getByLabel('Password Confirm');
        this.check = page.locator('[name="agree"]')
        this.button = page.getByRole('button',{name:'Continue'})
        this.text = page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 });

    }

    //Action methods

    //Fill Registration details
    async fillreg(firstname: string, lastname: string, EAddress: string, Telphone: string, NewP: string, ConfirmP: string): Promise<void> {
        await this.first.fill(firstname);
        await this.last.fill(lastname);
        await this.email.fill(EAddress);
        await this.number.fill(Telphone);
        await this.password.fill(NewP);
        await this.confpassword.fill(NewP);

    }

    //click on checkbox
    async checkbox(): Promise<void> {
        await this.check.check();
    }

    //click on Continue 
    async continue():Promise<void>{
        await this.button.click();
    }

    //verify the message
    async message():Promise<string|null>
    {
       return await this.text.textContent();
    }
}