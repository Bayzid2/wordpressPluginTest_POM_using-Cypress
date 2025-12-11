# Cypress Automation Test Suite – FlexTable Plugin & WooCommerce Checkout


Cypress E2E test suite using **Page Object Model (POM)** covering:

- **Part A**: All 9 FlexTable plugin test cases  
- **Part B**: Both WooCommerce scenarios (End-to-End Checkout + Order History)  

Includes **Mochawesome HTML reporting** and stable handling of Stripe/WooPayments iframes.

## Project Structure

```plaintext
cypress/
├── e2e/
│   ├── flextable/
│   │   └── flextable.cy.js          # All 9 FlexTable test cases
│   └── woocommerce/
│       └── woocommerce.cy.js        # WooCommerce checkout & order history scenarios
├── fixtures/
│   └── user.json                    # Test user data and credentials
├── pages/
│   └── woocommerce/
│       ├── AddCart.js
│       ├── Backend.js
│       ├── CheckoutPage.js
│       ├── MyAccount.js
│       ├── AddPage.js
│       ├── CreateTablePage.js
│       ├── DashboardPage.js
│       ├── EditTable.js
│       ├── FlexDashboardPage.js
│       ├── Frontend.js
│       ├── LoginPage.js
│       └── PluginsPage.js           # Page Object Model classes
├── support/
│   ├── commands.js                  # Custom Cypress commands (fillStripeCard, pasteFromClipboard, etc.)
│   └── e2e.js                       # Global hooks and configuration
├── report/                          # Generated HTML reports (Mochawesome)
└── cypress.config.js                # Cypress configuration (baseUrl, env vars, reporter)
```
## Completed Requirements

### Part A – FlexTable (All 9 Test Cases Done)
1. WordPress Login  
2. Plugin Activation  
3. Navigate to FlexTable Dashboard  
4. Create Table from Google Sheet  
5. Insert & Verify Shortcode on Frontend (with real clipboard paste)  
6. Enable Title & Description  
7. Enable Entry Info & Pagination  
8. Update Rows Per Page & Table Height  
9. Delete Table & Verify Removal  

### Part B – WooCommerce (Both Scenarios Done)
1. End-to-End Checkout Flow  
   - Add to cart → Billing →  Place order → Verify in admin  
2. User Account Order History  
   - Registered user views completed orders → Details match backend  
## Prerequisites for Running Cypress with JavaScript
To set up and run Cypress (JavaScript-based E2E testing) on your machine, you need the following:
1. Node.js and npm
Required version: Node.js v18+ or v20+ (v20 LTS recommended in 2025)
Cypress v13+ officially supports Node.js 18+, 20+, and 22+
npm comes bundled with Node.js
```bash
node --version   # Should show v18.0.0 or higher
npm --version    # Should show 9.0.0 or higher
```
## Quick Setup Command (One-Time)
```bash
# Initialize npm (creates package.json)
npm init -y

# Install Cypress as dev dependency
npm install cypress --save-dev
```
## Verify Installation
```bash
# Open Cypress Test Runner
npx cypress open

# Or run headlessly
npx cypress run
```
## Mochawesome Reporting (Included)

### Install Reporter
```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```
### Run Tests
```bash
npx cypress open                  # Interactive runner
npx cypress run                   # Headless
npm run test:report               # Full suite + HTML report
