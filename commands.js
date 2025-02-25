// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types = "cypress"/> 

/// <reference types = "cypress-xpath"/>
import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'
require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error to the console
    console.log(err);
    // Prevent Cypress from failing the test
    return false;
  });

  //Cypress.Commands.add('login', (email, pw) => {
    //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.get("input[placeholder='Username']").type(email)
    //cy.get("input[placeholder='Password']").type(pw)
    //cy.get("button[type='submit']").click();
 // })


Cypress.Commands.add('getIframe', (iframe)=>{
  cy.get(iframe) // locate the ifram
  .its('0.contentDocument.body').should('be.visible') // only one document is present 
  .then(cy.wrap); 

})





 Cypress.Commands.add('loginlockton', () => {
cy.clearCookies();
cy.clearLocalStorage();
 cy.viewport(1920, 1080); 
  cy.visit('http://lockton-qax.unqork.io/auth/login'); 
  cy.wait(5000)
  cy.viewport(1920, 1080);
cy.get('#username').type('gopi.k-x+sysadmin@auxosolutions.io');
cy.get('#password').type('Gopi@Auxo123');
cy.get("input[value='Login']").click();
cy.wait(5000)
cy.visit('http://lockton-qax.unqork.io/app/dashboard')
});

  Cypress.LocalStorage.clear = function () {
    return null;
  };


  Cypress.Commands.add('visiturl', ()=> {
cy.visit('https://codenboxautomationlab.com/practice/')
  })

  Cypress.Commands.add('clicklink', (label) => {
    cy.get('a').contains(label).click();
  })

// Overwrite 'contains' method from custom command - for case-insensitive 
Cypress.Commands.add('containscase', (selector, text) => {
  cy.get(selector).contains(text, { matchCase: false }).click({ force: true });
});

Cypress.Commands.add('Login',(email,password)=>{
  cy.get('#input-username').clear()
  cy.get('#input-password').clear()

  cy.get('#input-username').type(email)
  cy.get('#input-password').type(password)
})
