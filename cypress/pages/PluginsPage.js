class PluginsPage {
  searchPlugin(name) {
    cy.get("#plugin-search-input").type(name);
  }

 activateFlexTable() {
 
    cy.get('tr[data-slug="sheets-to-wp-table-live-sync"]').within(() => {
      cy.get('a').then($link => {
        if ($link.text().includes('Activate')) {
          cy.contains('Activate').click({ force: true })
          cy.contains('Plugin activated').should('be.visible')
        } else {
          cy.log('FlexTable is already active')
        }
      })
    })
  }

  isActive() {
    return cy.get('tr[data-slug="sheets-to-wp-table-live-sync"] .deactivate')
  }


}
export default PluginsPage;