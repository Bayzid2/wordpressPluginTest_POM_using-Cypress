class EditTable {
  enableTitle() {
    cy.get("#show-title").check({ force: true });
  }
  selectBottom(){
    cy.get('#description-position').select('below');

  }
  enableDescription() {
    cy.get("#show-description").check({ force: true });
  }

  

  enableEntryInfo() {
    cy.get("#hide-entry-info").check({ force: true });
  }

  enablePagination() {
    cy.get("#hide-pagination").check({ force: true });
  }



  openStyling() {
    cy.contains("Styling").click();
  }

  setRowsPerPage() {
    cy.get("#rows-per-page").select("10");
  }

  setTableHeight() {
    cy.get("#table_height").select("500");
  }

  
}
export default EditTable;