describe('customcommands', ()=>{


it('Click links - label', function(){
    cy.visit('https://demo.opencart.com/')
    cy.wait(8000)
    cy.clicklink('iPhone') // calling the created custom command to click the iphone label 
    cy.get("div[class='col-sm'] h1").should('contain.text', 'iPhone')
    cy.url().should('include','iphone');
})


it('Custom command - overwrite', function(){
    cy.visit('https://demo.opencart.com/')
    cy.wait(8000)
    cy.containscase('a','IPHONE') // product name in case insensitive 
    cy.get("div[class='col-sm'] h1").should('contain.text', 'iPhone')
    cy.url().should('include','iphone');
})

it('Custom command - Login', function(){
    cy.visit('https://www.opencart.com/index.php?route=cms/demo')
    cy.wait(8000)
    cy.clicklink('Login') // custom commands to click login link
    cy.visit('https://demo.opencart.com/admin/')
    cy.Login('test@gmail.com','testpwd') // calling the created command by passing the email and password
})













})