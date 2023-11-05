import { test } from "./fixtures/fixturePages";

test.beforeEach(async ({ mainActions }) => {
  await mainActions.goTo("/");
});

test("Bookmarks are shown on the Main page", async ({ headerComponent }) => {
  const bookmarks = [
    headerComponent.bankingBookmark,
    headerComponent.insuranceBookmark,
    headerComponent.servicesBookmark,
    headerComponent.partnersBookmark,
    headerComponent.companyBookmark,
    headerComponent.resourcesBookmark,
    headerComponent.financeBookmark,
  ];

  for (const bookmark of bookmarks) {
    await headerComponent.verifyThatBookmarkIsVisible(bookmark);
  }
});

test("User is redirected to the Financial Control page", async ({
  headerComponent,
  financialProductsPage,
  mainActions,
}) => {
  await headerComponent.clickItemInBookmarkList(
    headerComponent.financeBookmark,
    headerComponent.financeProductsSubledger
  );
  await mainActions.pageIsOpened(
    financialProductsPage.url,
    financialProductsPage.title,
    financialProductsPage.heading
  );
});

test("Validation messages are shown on submitting Contact Us form", async ({
  headerComponent,
  mainActions,
  contactUsPage,
}) => {
  const contactUsFields = [
    contactUsPage.firstNameField,
    contactUsPage.lastNameField,
    contactUsPage.workEmailField,
    contactUsPage.howCanWeHelpYouField,
    contactUsPage.privacyPolicyCheckbox,
  ];

  const validationChecks = [
    {
      locator: contactUsPage.countryDropDown,
      message: "Please select an option from the dropdown menu.",
    },
    {
      locator: contactUsPage.mainErrorMessage,
      message: "Please complete all required fields.",
    },
  ];

  await mainActions.click(headerComponent.getInTouchButton);
  await mainActions.pageIsOpened(
    contactUsPage.url,
    contactUsPage.title,
    contactUsPage.heading
  );
  await contactUsPage.submitContactForm();
  for (const field of contactUsFields) {
    await mainActions.verifyValidationMessages(
      field,
      "Please complete this required field."
    );
  }
  for (const { locator, message } of validationChecks) {
    await mainActions.verifyValidationMessages(locator, message);
  }
});
