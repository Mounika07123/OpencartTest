import { Page, Locator } from "@playwright/test";

export class ComponentModule {

  private readonly page: Page;
  private readonly monitor: Locator;
  private readonly monitorNames: Locator;
  private readonly product:Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.monitor = page.getByRole('link', { name: 'Monitors (2)' });
    this.monitorNames = page.locator('h4');
    this.product = page.locator('h1');
    
  }

  // open monitor menu
  async monitorMenu(): Promise<void> {
    await this.monitor.click();
  }

  // return locator instead of array
  monitorText(): Locator {
    return this.monitorNames;
  }

  // select monitor by name
  async selectMonitor(name: string): Promise<void> {
    await this.monitorNames
      .filter({ hasText: name })
      .first()
      .click();
  }

   validateproduct():Locator{
    return this.product;
   }
}