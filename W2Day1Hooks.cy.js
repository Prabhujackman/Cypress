const { afterEach } = require("mocha")

describe('hooks',()=>{

before(function() {  // login
    cy.log('before block executed first')


})

beforeEach(function(){ 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(5000)
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click();
cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();

})

after(function(){ //logout
    cy.log('after block executed last')   

    
})

afterEach(function(){ 
    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
cy.contains('Logout').click();


})


it('admin search',()=>{
    cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type('Admin')
    cy.get("button[type='submit']").click();
    cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] span[class='oxd-text oxd-text--span']").should('have.text','(1) Record Found')
})

it('FMLname search',()=>{
    cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type('FMLName')
    cy.get("button[type='submit']").click();
    cy.get("div[class='orangehrm-horizontal-padding orangehrm-vertical-padding'] span[class='oxd-text oxd-text--span']").should('have.text','(1) Record Found')
})

})