import { type Locator, type Page, expect } from "@playwright/test";

export class FinancialProductsPage {
  // veriables
  readonly page: Page;
  readonly title: String;
  readonly url: String;
  readonly heading: Locator;
  //constructor
  constructor(page: Page) {
    this.page = page;
    this.title = "SAP Fioneer | Financial Product Subledger - FPSL";
    this.url =
      "https://www.sapfioneer.com/finance-esg/financial-products-subledger-fpsl/";
    this.heading = page.getByRole("heading", {
      name: "Future-proof accounting and financial steering",
    });
  }
}
