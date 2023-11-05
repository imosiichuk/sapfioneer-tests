import { type Locator, type Page, expect } from "@playwright/test";

export class MainActions {
  // veriables
  readonly page: Page;

  //constructor
  constructor(page: Page) {
    this.page = page;
  }

  //methods
  async click(locator) {
    await locator.click();
  }
  async goTo(page) {
    await this.page.goto(page);
  }

  async pageIsOpened(url, title, locator) {
    await expect(this.page).toHaveTitle(title);
    await expect(this.page).toHaveURL(url);
    await expect(locator).toBeVisible();
  }

  async verifyValidationMessages(field, text) {
    await expect(field).toContainText(text);
  }
}

export class MainPage {
  // veriables
  readonly page: Page;

  //constructor
  constructor(page: Page) {
    this.page = page;
  }
}

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

export class ContactUsPage {
  // veriables
  readonly page: Page;
  readonly title: String;
  readonly url: String;
  readonly heading: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly workEmailField: Locator;
  readonly countryDropDown: Locator;
  readonly howCanWeHelpYouField: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly mainErrorMessage: Locator;
  readonly submitButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_lastname']");
    this.lastNameField = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_firstname']");
    this.workEmailField = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_email']");
    this.countryDropDown = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_country__new_']");
    this.howCanWeHelpYouField = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_how_can_we_help_you_']");
    this.privacyPolicyCheckbox = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_LEGAL_CONSENT.processing'] > ul");
    this.mainErrorMessage = page
      .frameLocator('iframe[title="Form 0"]')
      .locator("div [class*='hs_error_rollup'] > ul");
    this.submitButton = page
      .frameLocator('iframe[title="Form 0"]')
      .getByRole("button", { name: "Submit" });
    this.title = "SAP Fioneer | Contact | Get in touch!";
    this.url = "https://www.sapfioneer.com/contact/";
    this.heading = page.getByRole("heading", {
      name: "Contact us",
    });
  }

  //methods
  async submitContactForm() {
    await this.submitButton.scrollIntoViewIfNeeded();
    await this.submitButton.click();
  }
}
