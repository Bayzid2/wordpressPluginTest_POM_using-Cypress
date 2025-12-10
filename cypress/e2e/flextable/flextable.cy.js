import LoginPage from "../../pages/loginPage";
import DashboardPage from "../../pages/DashboardPage";
import PluginsPage from "../../pages/PluginsPage";
import CreateTablePage from "../../pages/CreateTablePage";
import EditTable from "../../pages/EditTable";
import FlexDashboardPage from "../../pages/FlexDashboardPage";
import AddPage from "../../pages/AddPage";
import Frontend from "../../pages/Frontend";


describe("FlexTable test suite", () => {
    const loginPage = new LoginPage();
    const dashboard = new DashboardPage();
    const plugins = new PluginsPage();
    const flextableDashboard = new FlexDashboardPage();
    const createTable = new CreateTablePage();
    const addPage = new AddPage();
    const frontEnd = new Frontend()
    const editTable = new EditTable()

 beforeEach(()=>{
  loginPage.visit()
  loginPage.enterUsername("bayzid007")
  loginPage.enterPassword("hKxVkM1mPjw ")
  loginPage.clickLogin()
 
 })

 it("Test Case 1: Verify WordPress Login",()=>{
   dashboard.verifyLoginSuccess();
 })

 it("Test Case 2: Verify FlexTable Plugin Activation", () => {
  dashboard.goToPlugins();
   plugins.searchPlugin("FlexTable");

cy.get('body').then($body => {
    if ($body.find('tr[data-slug="sheets-to-wp-table-live-sync"] .deactivate').length) {
      cy.log('FlexTable already active')
    } else {
      cy.get('tr[data-slug="sheets-to-wp-table-live-sync"] a:contains("Activate")')
        .click({ force: true })
      cy.contains('Plugin activated').should('be.visible')
    }
  })
 

  // Confirm it's active
  plugins.isActive().should('exist')
  })

  it("Test Case 3: Navigate to FlexTable Dashboard",()=>{
    flextableDashboard.verifyDashboardLoaded();
  })

  it("Test Case 4: Create a New Table Using Google Sheet Input",()=>{
    dashboard.goToFlexTable()
    cy.wait(2000)
    flextableDashboard.clickCreateNewTable()
    flextableDashboard.enterSheetLink("https://docs.google.com/spreadsheets/d/11qRH9xUuglOTIZa7JnWTVBYuGMT32ZhFuJ5_xypApGM/edit?gid=0#gid=0")
    flextableDashboard.clickCerateTable()
    createTable.tableTitle("QA Task");
    createTable.tableDescription("Ki description dibo");
    createTable.clickSave();
    dashboard.goToFlexTable();
    flextableDashboard.verifyTableExits("QA Task")
  })

  it("Test Case 5: Verify Table Display Using Shortcode",()=>{
    dashboard.goToFlexTable()
    
    flextableDashboard.copyShortCode();
    cy.wait(2000)
    dashboard.gotoPages();
    addPage.clickAddPage();
    addPage.addTitle("table");
    addPage.clickAddBlock();
    //addPage.clickBrowseall()
    addPage.searchShortCode();
    addPage.clickShortCode();
    addPage.enterShortCode();
    addPage.clickAgain();
    cy.wait(1000)
    addPage.clickPublish();
    cy.wait(1000)
    addPage.clickConfirmPublish()
    //addPage.clickViewPage();
    frontEnd.visitTable()
    frontEnd.verifyDataIndex1_1("Tahsin");
    frontEnd.verifyDataIndex2_1("10");
    frontEnd.verifyDataIndex3_1("CSE");
    frontEnd.verifyDataIndex1_2("Arafat");
    frontEnd.verifyDataIndex3_2("EEE");
  })


  it("Test Case 6: Enable 'Show Table Title' and 'Show Table Description Below Table",()=>{
    dashboard.goToFlexTable();
    flextableDashboard.clickEditBtn();
    createTable.clickTableCustomization();
    editTable.enableTitle()
    editTable.selectBottom()
    editTable.enableDescription()
    dashboard.gotoPages();
    //addPage.clickNevigateLink();
    frontEnd.visitTable()
    frontEnd.verifyTitle("QA Task")
    frontEnd.verifyDescription("Ki description dibo")
  })

  it("Test Case 7: Enable Entry Info & Pagination",()=>{
    dashboard.goToFlexTable()
    flextableDashboard.clickEditBtn();
    createTable.clickTableCustomization()
    editTable.enableEntryInfo()
    editTable.enablePagination()
    createTable.clickSave()
    frontEnd.visitTable()
    frontEnd.verifyEntity()
    frontEnd.verifyPaginationVisible()
    frontEnd.verifyByClass()
    frontEnd.checkNextBtn()
    frontEnd.checkPreviousBtn()
  })

  it("Test Case 8: Update 'Rows Per Page & Table Height'",()=>{
    dashboard.goToFlexTable();
    flextableDashboard.clickEditBtn();
    createTable.clickTableCustomization()
    editTable.openStyling()
    editTable.setRowsPerPage()
    editTable.setTableHeight()
    createTable.clickSave()
    frontEnd.visitTable()
    frontEnd.verifyRows()
    frontEnd.verifyTableHeight()
  })

  it(" Test Case 9: Delete the Table and Verify Frontend Removal",()=>{
    dashboard.goToFlexTable()
    flextableDashboard.clickDeleteBtn()
    flextableDashboard.confirmDeleteBtn()
    flextableDashboard.confrimTableDeleted('QA Task')
    frontEnd.visitTable()
    frontEnd.verifyTableIsNotExists()
  })
});