class DashboardPage {
  verifyLoginSuccess() {
    cy.get("#wpadminbar").should("be.visible");
  }
  clickDashboard(){
    cy.xpath("//div[normalize-space()='Dashboard']").click()
  }
  goToPlugins() {
    cy.xpath("//div[normalize-space()='Plugins']").click({force:true})
  }

  goToFlexTable() {
    cy.contains("FlexTable").click();
  }
  gotoPages(){
    cy.contains("Pages").click()
  }
  
}
export default DashboardPage;