import { Page, test, Locator } from "@playwright/test"

export class Home {

    private readonly page: Page;
    //Locators
    private readonly Account: Locator
    private readonly Register: Locator
    private readonly searchBoxtext: Locator
    private readonly searchclick: Locator
    private readonly productstitle : Locator;
    private readonly login :Locator;
    private readonly components:Locator;


    //Constructors

    constructor(page: Page) {

        this.page = page;
        this.Account = page.locator(`span:has-text("My Account")`);;
        this.Register = page.getByRole('link', { name: 'Register' });
        this.searchBoxtext = page.getByRole('textbox', { name: 'Search' });
        this.searchclick = page.locator('.btn.btn-default.btn-lg');
        this.productstitle = page.locator("h4 a")
        this.login = page.locator('ul.dropdown-menu.dropdown-menu-right>li').nth(1)
        this.components = page.getByRole('link', { name: 'Components' });
    }

    //Async methods

    //check homepage exists
    async isHomepageExists() {
        let title: string = await this.page.title();

        if (title) {
            return true
        }
        else return false;
    }

    async searchBox(Pname: string) {
        await this.searchBoxtext.fill(Pname)


    }

    async searchclicktxt(): Promise<void> {
        await this.searchclick.click();
    }

     products():Locator{

        return this.productstitle;
    }
    async Accountlink(): Promise<void> {

        await this.Account.click();

    }

    async Registration(): Promise<void> {

        await this.Register.click();

    }

    async loginlink():Promise<void>{
        await this.login.click();
    }
    
    //click on components link
    async componentstab():Promise<void>
    {
      await this.components.hover();
    }
}