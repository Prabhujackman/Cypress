import store from "C:/Users/DCKLP-105/cypressautomation/cypress/support/register.js";
// cypress/e2e/Readdatafromexcel.cy.js
//import generateJSONFromExcel from 'C:/Users/DCKLP-105/cypressautomation/cypress/support/helpers/helper.js';


Cypress.on('uncaught:exception', (err, runnable) => {
return false
});
/// <reference types="cypress" />

"experimentalSourceRewriting".true;
Cypress.on('uncaught:exception', (err, runnable) => {

 return false
});

describe('Database testing', () => {
const bl= new store()

it('read data from excel file', () => {
//Arrange
cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login")

const excelFilePath =
"C:/Users/DCKLP-105/cypressautomation/cypress/fixtures/Book.xlsx";
const sheetName = "login";
//Act
cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
(user) => {
expect(user[0].Username).equal('prabhukgk35@gmail.com') // assertion for UN 
expect(user[0].Password).equal('12345678') // assertion for PWD
bl.Username().type(user[0].Username); // incorrect UN 
bl.Password().type(user[0].Password); // Incorrect Pwd 
bl.loginbutton().click({force:true})
cy.contains('Login failed! Please ensure the username and password are valid.').should('exist') // verifying the alert
cy.wait(5000)
expect(user[1].Username).equal('John Doe') // assertion for UN 
expect(user[1].Password).equal('ThisIsNotAPassword') // assertion for PWD
bl.Username().type(user[1].Username); // correct UN
bl.Password().type(user[1].Password); // correct Pwd 
bl.loginbutton().click({force:true})
cy.contains('Make Appointment').should('exist')
cy.url().should('include', '/#appointment')
}
);

});

})