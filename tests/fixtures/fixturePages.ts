import { test as base } from "@playwright/test";
import {
  HeaderComponent,
  FinancialProductsPage,
  ContactUsPage,
  MainPage,
  MainActions,
} from "../pages/Pages";

type Pages = {
  headerComponent: HeaderComponent;
  financialProductsPage: FinancialProductsPage;
  contactUsPage: ContactUsPage;
  mainPage: MainPage;
  mainActions: MainActions;
};

export const test = base.extend<Pages>({
  headerComponent: ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    use(headerComponent);
  },
  financialProductsPage: ({ page }, use) => {
    const financialProductsPage = new FinancialProductsPage(page);
    use(financialProductsPage);
  },
  contactUsPage: ({ page }, use) => {
    const contactUsPage = new ContactUsPage(page);
    use(contactUsPage);
  },
  mainPage: ({ page }, use) => {
    const mainPage = new MainPage(page);
    use(mainPage);
  },
  mainActions: ({ page }, use) => {
    const mainActions = new MainActions(page);
    use(mainActions);
  },
});
