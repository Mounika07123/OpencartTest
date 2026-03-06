import{Page,test,Locator} from "@playwright/test"

export class loginpage{
    private readonly page:Page;
    //Locators

    private readonly email :Locator
    private readonly password:Locator
    private readonly lgnbutton:Locator
    private readonly warningmsg:Locator
    //Constructor
    constructor(page:Page)
    {
        this.page = page;
        this.email = page.getByLabel('E-Mail Address');
        this.password = page.getByLabel('Password');
        this.lgnbutton = page.getByRole('button', { name: 'Login' });
        this.warningmsg = page.locator('.alert.alert-danger.alert-dismissible');

    }

    //Action Methods
    async logindetails(Address:string,pwd:string):Promise<void>{
        await this.email.fill(Address)
        await this.password.fill(pwd)
    }
   

    async clicklogin():Promise<void>
    {
        await this.lgnbutton.click();
    }
    async verifymsg():Promise<string|null>
    {
        return await this.warningmsg.textContent();
    }

}