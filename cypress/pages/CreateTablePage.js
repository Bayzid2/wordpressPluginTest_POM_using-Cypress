class CreateTablePage {
   tableTitle(title) {
    cy.xpath("//input[@id='table-name']").type('{selectall}{backspace}');
    cy.xpath("//input[@id='table-name']").type(title);
  }

 tableDescription(desc) {
    cy.xpath("//textarea[@id='table-description']").type(desc);
  }

  clickSave() {
    cy.xpath("//button[normalize-space()='Save changes']").click();
  }

  clickTableCustomization(){
    cy.xpath("//span[normalize-space()='3. Table customization']").click();
  }
}
export default CreateTablePage;