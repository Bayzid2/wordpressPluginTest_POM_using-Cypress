class Frontend{
    verifyDataIndex1_1(data){
        cy.xpath("//td[@data-index='[1,1]']")
        .should('contain.text', data);
    }

     verifyDataIndex2_1(data){
        cy.xpath("//td[@data-index='[2,1]']")
        .should('contain.text', data);
    }

     verifyDataIndex3_1(data){
        cy.xpath("//td[@data-index='[3,1]']")
        .should('contain.text', data);
    }

     verifyDataIndex1_2(data){
        cy.xpath("//td[@data-index='[1,2]']")
        .should('contain.text', data);
    }

     verifyDataIndex3_2(data){
        cy.xpath("//td[@data-index='[3,2]']")
        .should('contain.text', data);
    }
    visitTable(){
        cy.visit("https://connectlimit.s2-tastewp.com/table/");
    }
    verifyTitle(title){
        cy.xpath("//h3[@id='swptls-table-title']").should('contain.text',title)
    }
    verifyDescription(des){
        cy.xpath("//p[@id='swptls-table-description']").should('contain.text',des)
    }
    verifyEntity(){
        cy.xpath("//div[@id='create_tables_info']").should('contain.text','Showing 1 to 10 of 15 entries')
    }
    verifyPaginationVisible(){
        cy.xpath("//div[@id='create_tables_previous']").should('contain.text','Previous')
        cy.xpath("//a[@id='create_tables_next']").should('contain.text','Next')
    }
    checkNextBtn(){
        cy.xpath("//a[@id='create_tables_next']").click()
        cy.xpath("//a[normalize-space()='2']").should('have.class', 'active')
    }
    checkPreviousBtn(){
        cy.xpath("//a[@id='create_tables_previous']").click()
        cy.xpath("//a[normalize-space()='1']").should('have.class', 'active')
    }
    verifyByClass(){
        cy.xpath("//a[normalize-space()='1']").should('have.class', 'active')
        cy.xpath("//p[@id='swptls-table-description']").should('have.class','swptls-table-description')
    }
    verifyRows(){
       cy.get('select[name="create_tables_length"] option:selected').should('have.text', '10');

    }
    verifyTableHeight(){
        cy.xpath("//div[@class='dataTables_scrollBody']").should('have.attr', 'style').and('contain', 'height: 500px');
    }
    verifyTableIsNotExists(){
        cy.xpath("//h5").should('have.text','Table maybe deleted or can’t be loaded.')
    }
}
export default Frontend;