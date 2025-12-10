class AddCart{
    visitShop(){
        cy.visit("https://connectlimit.s2-tastewp.com/shop/");
    }
    productAddToCart(){
        cy.xpath("//span[@data-wp-text='state.addToCartText']").click();
    }

    clickCart(){
        cy.wait(1000)
        cy.xpath("//span[@class='wc-block-mini-cart__quantity-badge']").click()
    }

    increaseItem(){
        cy.xpath("//button[contains(text(),'＋')]").click()
    }

    gotoCart(){
        cy.xpath("//div[normalize-space()='View my cart']").click()
    }

    verifySubtotal(subtotal){
        cy.xpath("//span[@class='wc-block-formatted-money-amount wc-block-components-formatted-money-amount wc-block-components-totals-item__value'][normalize-space()='$40.00']").
        should('have.text',subtotal)
    }

    verifyTotalAmount(total){
        cy.xpath("//div[@class='wc-block-components-totals-item__value']").should('have.text',total)
    }

    gotoCheckout(){
        cy.xpath("//div[@class='wc-block-cart__submit-container']").click()
    }


}
export default AddCart;