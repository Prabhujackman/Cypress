///<reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });


describe('Custom Suite',function()
{
it('Login test1',function() {
    cy.login('Admin','admin123') //valid credential
cy.title().should('be.equal','OrangeHRM')  
})
it('Login test2',function() {
    cy.login('admin@yourstorecom','admin') //In valid mail id 
cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text','Invalid credentials')
})  
it('Login test3',function() {
    cy.login('admin@yourstore.com','0000') //In valid pwd
    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text','Invalid credentials')
})
it('Login test4',function() {
    cy.login('admin@yourstorecom','admin') //In valid mail id 
cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text','Invalid credentials')
})

it('Add customer',function() {
    cy.login('Admin','admin123') //valid credential
})


it('Edit customer',function() {
    cy.login('Admin','admin123') //valid credential
})  
})
