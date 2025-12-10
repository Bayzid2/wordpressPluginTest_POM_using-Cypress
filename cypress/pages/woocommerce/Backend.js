class Backend{

    visitBackend(){
        cy.visit("https://connectlimit.s2-tastewp.com/wp-admin/admin.php?page=wc-orders");
    }
    clickPreview(){
        cy.xpath("//a[normalize-space()='Preview']").click()
    }
    verifyOrderAddedToTable(){
        cy.xpath("//td[@class='colspanchange']").should('not.exist')
    }
    verifyQuantity(){
        cy.xpath("//td[@class='wc-order-preview-table__column--quantity']").should('have.text','1')
    }
    verifyTotalPrice(){
        cy.xpath("//td[@class='wc-order-preview-table__column--total']").should('have.text','$20.00')
    }

}
export default Backend;