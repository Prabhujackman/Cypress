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

Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error to the console
    console.log(err);
    // Prevent Cypress from failing the test
    return false;
  });

  Cypress.Commands.add('login', (email, pw) => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type(email)
    cy.get("input[placeholder='Password']").type(pw)
    cy.get("button[type='submit']").click();
  })
  