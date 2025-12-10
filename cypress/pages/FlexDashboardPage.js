class FlexDashboardPage {
  clickCreateNewTable() {
    cy.contains("Create new table").
    click();
  }

  verifyDashboardLoaded() {
    cy.contains("All Tables").
    should("exist");
  }
  
  verifyTableExits(title){
    cy.xpath("//div[@class='table-info']//a[@class='table-edit']").
    should('contain.text',title);
  }

  enterSheetLink(link){
    cy.xpath("//input[@id='sheet-url']").
    type(link);
  }

  clickCerateTable(){
    cy.xpath("//button[normalize-space()='Create table from URL']").
    click();
  }

  copyShortCode(){
    cy.xpath("(//button[@class='copy-shortcode btn-shortcode '])[1]").
    click();
  }

  clickEditBtn(){
    cy.xpath("(//a[contains(@class,'table-edit')])[2]").
    click();
  }

  clickDeleteBtn(){
    cy.xpath("(//button[contains(@class,'table-delete')])[1]").
    click();
  }

  confirmDeleteBtn(){
    cy.xpath("//button[normalize-space()='Delete']").
    click();
  }
  
  confrimTableDeleted(tableName){
    cy.xpath("//div[@class='table-info']//a[@class='table-edit']")
    .should('not.contain.text', tableName);
  }
}
export default FlexDashboardPage;