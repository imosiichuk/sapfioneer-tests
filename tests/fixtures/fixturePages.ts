import { test as base } from "@playwright/test";
import { MainActions } from "../components/mainActions";
import { HeaderComponent } from "../components/headerComponent";
import { FinancialProductsPage } from "../pages/financialProductsPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { MainPage } from "../pages/mainPage";

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
