<h1 align="center">🎭 Playwright Practice</h1>
 
<p align="center">
  <em>Daily Playwright coding practice — locators, interactions, assertions and more.</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>
---
 
## 📌 What This Repo Is
 
Daily Playwright coding practice — one concept at a time.
 
Each folder covers one Playwright concept with working code examples. Built by practicing on real demo websites.
 
---
 
## 🗂️ Repo Structure
 
```
playwright-practice/
│
├── locators/                          ← locator strategies
│   ├── css-locators.spec.ts
│   ├── role-locators.spec.ts
│   ├── filter-locators.spec.ts
│   ├── nth-locators.spec.ts
│   └── chaining-locators.spec.ts
│
├── interactions/                      ← user interactions
│   ├── fill-and-type.spec.ts
│   ├── click-actions.spec.ts
│   ├── dropdowns.spec.ts
│   ├── checkboxes.spec.ts
│   ├── file-upload.spec.ts
│   ├── drag-and-drop.spec.ts
│   ├── hover.spec.ts
│   ├── keyboard-actions.spec.ts
│   └── scroll.spec.ts
│
├── assertions/                        ← all assertion types
│   ├── text-assertions.spec.ts
│   ├── url-assertions.spec.ts
│   ├── visibility-assertions.spec.ts
│   ├── attribute-assertions.spec.ts
│   └── count-assertions.spec.ts
│
├── waits/                             ← wait strategies
│   ├── auto-wait.spec.ts
│   ├── explicit-wait.spec.ts
│   └── network-wait.spec.ts
│
├── navigation/                        ← page navigation
│   ├── goto-back-forward.spec.ts
│   ├── new-tab.spec.ts
│   └── iframe.spec.ts
│
├── alerts/                            ← browser dialogs
│   └── alerts-dialogs.spec.ts
│
├── screenshots/                       ← screenshots and video
│   └── capture.spec.ts
│
├── codegen/                           ← recorded codegen flows
│   ├── login-flow.codegen.ts
│   └── search-flow.codegen.ts
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
 
---
 
## ⚙️ Setup
 
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/playwright-practice.git
cd playwright-practice
 
# Install dependencies
npm install
 
# Install browsers
npx playwright install
 
# Run all
npx playwright test
 
# Run specific concept
npx playwright test locators/
npx playwright test interactions/
npx playwright test assertions/
 
# Run with UI
npx playwright test --ui
 
# Run headed
npx playwright test --headed
```
 
---
 
## 🛠️ Tech Stack
 
| Tool | Purpose |
|------|---------|
| Playwright | Automation framework |
| TypeScript | Scripting language |
 
---
 
## 🙋 Author
 
**Kikani Hely**
