class MyAccount{
    clickMyAccount(){
        cy.xpath("//a[normalize-space()='My account']").click();
    }
    clickOrders(){
        cy.xpath("//a[normalize-space()='Orders']").click()
    }
    orderDetails(){
        cy.xpath("//a[normalize-space()='View']").click()
    }
    verifyTotalPrice(){
        cy.xpath("(//span[@class='woocommerce-Price-amount amount'])[4]").should('have.text','$21.00')
    }
    
}
export default MyAccount;