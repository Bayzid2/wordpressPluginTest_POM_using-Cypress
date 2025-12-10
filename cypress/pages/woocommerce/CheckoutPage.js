class CheckoutPage{
    enterFirstname(name){
        cy.xpath("//input[@id='shipping-first_name']").type(name)
    }

    enterLastName(name){
        cy.xpath("//input[@id='shipping-last_name']").type(name)
    }

    enterAddress(address){
        cy.xpath("//input[@id='shipping-address_1']").type(address)
    }

    enterCityName(city){
        cy.xpath("//input[@id='shipping-city']").type(city)
    }

  enterCardNumber() {
   cy.get('iframe[name^="__privateStripeFrame"]')
    .eq(0)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find('input[name="expiry"], input[placeholder="MM / YY"]')
    .type('4242 4242 4242 4242');

}


    enterExpiryDate(expiry){
        cy.get('iframe[name^="__privateStripeFrame"]')
    .eq(1)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find('input[name="expiry"], input[placeholder="MM / YY"]')
    .type(expiry);
    }

    enterSecCode(cvc){
        cy.get('iframe[name^="__privateStripeFrame"]')
    .eq(2)
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
    .find('input[name="cvc"], input[placeholder="CVC"]')
    .type(cvc);
    }

   clickCOD(){
    cy.xpath("//span[@class='wc-block-components-payment-method-label']").click()
   }
   placeOrder(){
    cy.xpath("//div[@class='wc-block-components-checkout-place-order-button__text']").click()
   }
   verifyOrderPlaced(){
    cy.xpath("//h1[normalize-space()='Order received']").should("have.text","Order received");
   }
}

export default CheckoutPage;