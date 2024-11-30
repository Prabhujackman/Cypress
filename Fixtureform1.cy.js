///<reference types="cypress" />


describe('fixture test', function() {


    before(function() {
    cy.fixture('credentials').then(function(data) {
        this.data=data
    })
    })
    
    
    it('Admin login page', function() {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(5000)
    cy.get("input[placeholder='Username']").type(this.data.email)
    cy.get("input[placeholder='Password']").type(this.data.password)
    cy.get("button[type='submit']").click();
    cy.title().should('be.equal','OrangeHRM')  
    
    })
})
    