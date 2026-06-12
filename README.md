# QA Practice - Playwright Automation Framework

This repository contains an end-to-end test automation framework built with [Playwright](https://playwright.dev/) and TypeScript, using the Page Object Model (POM) design pattern.

## Tech Stack

- **Playwright** - browser automation framework
- **TypeScript** - language
- **Page Object Model** - design pattern for maintainable test code

## Project Structure

```
.
├── pages/                          # Page Object Model classes
│   ├── AssignLeavePage.ts
│   ├── DashboardPage.ts
│   ├── EmployeeDetailPage.ts
│   ├── EmployeeListPage.ts
│   ├── JobListPage.ts
│   └── LoginPage.ts
│
├── test-data/                      # JSON test data files
│   ├── addEmployeeData.json
│   ├── auth.json
│   └── jobData.json
│
├── tests/
│   ├── pom-tests/                  # Tests built using Page Object Model
│   │   ├── add-employee-flow.spec.ts
│   │   ├── add-job-title-flow.spec.ts
│   │   ├── assign-leave-flow.spec.ts
│   │   └── auth.spec.ts
│   │
│   ├── alerts-popups.spec.ts       # Handling alerts & popups
│   ├── assertions.spec.ts          # Assertion examples
│   ├── auto-waiting.spec.ts        # Auto-waiting behavior
│   ├── built-in-locators.spec.ts   # Built-in locator strategies
│   ├── css-locators.spec.ts        # CSS locator strategies
│   ├── drop-date.spec.ts           # Date picker / dropdown handling
│   ├── iframe.spec.ts              # iFrame interactions
│   ├── keyboard-mouse.spec.ts      # Keyboard & mouse actions
│   ├── multiple-window.spec.ts     # Multi-tab/window handling
│   ├── screenshot.spec.ts          # Screenshot capture
│   └── xpath-filtering-locators.spec.ts  # XPath locator strategies
│
├── playwright-report/              # HTML test reports
├── screenshot/                      # Captured screenshots
├── test-results/                   # Raw test results/artifacts
├── playwright.config.ts            # Playwright configuration
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone <repo-url>
cd qa-practice
npm install
npx playwright install
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npx playwright test tests/pom-tests/add-employee-flow.spec.ts
```

Run tests in headed mode (visible browser):
```bash
npx playwright test --headed
```

Run tests in debug mode:
```bash
npx playwright test --debug
```

Run a specific test by name:
```bash
npx playwright test -g "test name"
```

## Viewing Reports

After a test run, view the HTML report:
```bash
npx playwright show-report
```

## Test Data

Test data is stored in JSON files under `test-data/`:
- `addEmployeeData.json` - data for employee creation flows
- `jobData.json` - data for job title flows
- `auth.json` - stored authentication state for reuse across tests

## Page Object Model

The `pages/` directory contains classes that encapsulate locators and actions for each page of the application under test (Login, Dashboard, Employee List/Detail, Job List, Assign Leave). Tests in `tests/pom-tests/` use these page objects to keep test logic clean and reusable.

## Locator & Feature Examples

The root-level spec files in `tests/` demonstrate various Playwright concepts and locator strategies, including CSS selectors, XPath, built-in locators, iframes, alerts/popups, keyboard & mouse actions, multi-window handling, auto-waiting, and assertions - useful as a learning reference or playground.

## Configuration

Playwright configuration (browsers, timeouts, reporters, base URL, etc.) is defined in `playwright.config.ts`.

## License

This project is for learning/practice purposes.
