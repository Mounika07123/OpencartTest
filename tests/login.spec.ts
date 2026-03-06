import {test,expect} from "@playwright/test";
import { Home } from "../pages/Homepage";
import { loginpage } from "../pages/login";
import { randomutility } from "../utils/randomtestdatageneartor";

//Click on my account link>Login link
//Enter email adn password>click on login >Verify error message
let home:Home;
let login:loginpage;
test.beforeEach(async({page})=>
{
    await page.goto("https://naveenautomationlabs.com/opencart")
    //navigate to Hompage
    home = new Home(page)
    login = new loginpage(page)

})

test("click on login & verify message",async({page})=>
{
  await home.Accountlink();
  await home.loginlink();
  await login.logindetails(randomutility.email(),randomutility.password())
  await login.clicklogin();
  expect(await login.verifymsg()).toEqual(" Warning: No match for E-Mail Address and/or Password.")
})