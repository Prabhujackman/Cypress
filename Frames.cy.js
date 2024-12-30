import 'cypress-iframe'

describe('Iframes suite',()=>{


it('Test script 1',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')

    let iframe=cy.get('#mce_0_ifr') // locate the ifram
    .its('0.contentDocument.body').should('be.visible') // only one document is present 
    .then(cy.wrap); 

    iframe.type("Welcome {cmd+a}");
    cy.get("[aria-label='Bold']").click()
})

it('Test script 2 using custom command',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')

    cy.getIframe('#mce_0_ifr').type("Welcome {cmd+a}");
    cy.get("[aria-label='Bold']").click()


})

it('Test script 3 using Iframe plugin',()=>{
    cy.visit('https://the-internet.herokuapp.com/iframe')

    cy.frameLoaded('#mce_0_ifr'); // load the frame
    cy.iframe('#mce_0_ifr').type("Welcome {cmd+a}");
    cy.get("[aria-label='Bold']").click()


})



})