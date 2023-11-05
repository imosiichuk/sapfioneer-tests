## Setup

**Install Node.js and NPM**

Install NPM on your local machine. Here's the [instruction](https://phoenixnap.com/kb/install-node-js-npm-on-windows) for installation of Node.js and NPM. 
Validate successful installation of Node.js Packet Manager version 
```shell
npm version
```
Install NPX on your local machine. Here's the [instruction](https://www.npmjs.com/package/npx) for installation of NPX. 
Validate successful installation of NPX. 
```shell
npx -v
```

**Run tests in UI mode**
Chrome and Firefox browsers are used for the test exection. Other browsers could be added by changing the `playwright.config.ts` file.

To open tests on your machine run command from `sapfioneer-tests-main` directory.
```shell
npx playwright test --ui    
```
Upon successful completion of this command, the Playwright window launches. You can run each test file one by one by clicking on the file name in the Playwright window or just click the "Run all specs" button.

**Run tests in terminal**

To open tests on your machine run command from `sapfioneer-tests-main` directory.
```shell
npx playwright test --reporter=html
```
Upon successful completion of this command, you can open the HTM report by running command:
```shell
npx playwright show-report
```
You can run tests and see results directly in your console by running the next command:
```shell
npx playwright test --reporter=list
```

### Adding tests
All locators and methods for particular pages or components are stored in `tests\Pages.ts` following the [Page Object models Patern](https://playwright.dev/docs/pom). Furthermore the fraemwork Playwright Test is based on the concept of [test fixtures](https://playwright.dev/docs/test-fixtures). Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. To add a new fixture to the fraemwork use `fixtures\fixturePages.ts` file. 
