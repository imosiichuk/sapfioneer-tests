import { type Locator, type Page, expect } from "@playwright/test";
import { Url } from "url";

export class MainActions {
  // veriables
  readonly page: Page;

  //constructor
  constructor(page: Page) {
    this.page = page;
  }

  //methods
  async click(locator: Locator) {
    await locator.click();
  }
  async goTo(page) {
    await this.page.goto(page);
  }

  async pageIsOpened(url: Url, title: String, locator: Locator) {
    await expect(this.page).toHaveTitle(title);
    await expect(this.page).toHaveURL(url);
    await expect(locator).toBeVisible();
  }

  async verifyValidationMessages(field: Locator, text) {
    await expect(field).toContainText(text);
  }
}
