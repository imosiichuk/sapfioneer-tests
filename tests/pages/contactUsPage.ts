import { type Locator, type Page, expect } from "@playwright/test";

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
