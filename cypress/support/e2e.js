// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');
import 'cypress-clipboard';

// cypress/support/e2e.js   ← Cypress 10+ automatically imports this file

// Ignore Tooltipster + other known non-critical errors from FlexTable
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore tooltipster errors
  if (err.message.includes('tooltipster')) {
    return false
  }
  // Ignore jQuery migrate warnings (common in WP)
  if (err.message.includes('JQMIGRATE')) {
    return false
  }
  // Ignore "ResizeObserver loop limit exceeded" (harmless)
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false
  }
  // Let all other errors fail the test normally
  return true
})