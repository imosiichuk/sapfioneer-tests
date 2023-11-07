import { type Locator, type Page, expect } from "@playwright/test";
import { Url } from "url";

export class HeaderComponent {
  // veriables
  readonly page: Page;
  readonly bankingBookmark: Locator;
  readonly companyBookmark: Locator;
  readonly insuranceBookmark: Locator;
  readonly servicesBookmark: Locator;
  readonly resourcesBookmark: Locator;
  readonly financeBookmark: Locator;
  readonly partnersBookmark: Locator;
  readonly financeProductsSubledger: Locator;
  readonly getInTouchButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.bankingBookmark = page
      .locator("#menu-item-29961")
      .getByRole("link", { name: "Banking" });
    this.insuranceBookmark = page
      .locator("#menu-item-29972")
      .getByRole("link", { name: "Insurance" });
    this.servicesBookmark = page
      .locator("#menu-item-29985")
      .getByRole("link", { name: "Services" });
    this.partnersBookmark = page
      .locator("#menu-item-26")
      .getByRole("link", { name: "Partners" });
    this.companyBookmark = page
      .locator("#menu-item-26834")
      .getByRole("link", { name: "Company" });
    this.resourcesBookmark = page
      .locator("#menu-item-26831")
      .getByRole("link", { name: "Resources" });
    this.financeBookmark = page
      .locator("#menu-item-29979")
      .getByRole("link", { name: "Finance & ESG" });
    this.financeProductsSubledger = page.getByRole("link", {
      name: "Financial Products Subledger",
    });
    this.getInTouchButton = page
      .locator("#masthead")
      .getByRole("link", { name: "Get in touch" });
  }

  //methods
  async clickItemInBookmarkList(bookmark, item) {
    await bookmark.hover();
    await item.click();
  }

  async verifyThatBookmarkIsVisible(bookmark) {
    await expect(bookmark).toBeVisible();
  }
}
