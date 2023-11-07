import { type Locator, type Page, expect } from "@playwright/test";

export class MainPage {
  // veriables
  readonly page: Page;

  //constructor
  constructor(page: Page) {
    this.page = page;
  }
}
