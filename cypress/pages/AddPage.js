class AddPage{
    clickAddPage(){
        cy.xpath("//a[@class='page-title-action']").click();
    }
    addTitle(title){
        cy.xpath("//h1[@aria-label='Add title']").type(title);
    }
    clickAddBlock(){
        cy.xpath("//button[@aria-label='Add block']").click()
    }
    clickShortCode(){
        cy.xpath("(//span[@class='block-editor-block-types-list__item-title'])[1]").click()
    }
    clickBrowseall(){
        cy.xpath("//button[normalize-space()='Browse all']").click()
    }
    searchShortCode(){
        cy.xpath("//input[@placeholder='Search']").type('Shortcode')
    }

    enterShortCode(){
        cy.window().then((win) => {
          return win.navigator.clipboard.readText();
            }).then((copiedText) => {

        cy.log("Copied:", copiedText);
        
       cy.xpath("//textarea[@id='blocks-shortcode-input-0']")
        .invoke('val', copiedText)
        .trigger('input');
        });
        cy.xpath("//textarea[@id='blocks-shortcode-input-0']").type('{backspace}')
        cy.xpath("//textarea[@id='blocks-shortcode-input-0']").type(']')
    }
    clickAgain(){
         cy.xpath("//textarea[@id='blocks-shortcode-input-0']").click()
    }
    clickPublish(){
        cy.xpath("//button[normalize-space()='Publish']").click();
    }
    clickConfirmPublish(){
        cy.xpath("//button[@class='components-button editor-post-publish-button editor-post-publish-button__button is-primary is-compact']").click()
    }
    clickViewPage(){
        cy.contains("View Page").click()
    }
    
    clickNevigateLink(){
        cy.xpath("(//a[normalize-space()='table'])[1]").click()
        cy.xpath("//a[@aria-label='View Page']//*[name()='svg']").click()
    }
}
export default AddPage;