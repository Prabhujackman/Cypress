Cypress.on('uncaught:exception', (err, runnable) => {
     return false
     });
     
     /// <reference types="cypress" />
 
    "experimentalSourceRewriting".true;
    Cypress.on('uncaught:exception', (err, runnable) => {
     
    return false
    });
     
     
    describe(' SQL Database Testing in Cypress', () => {
    
    it('Create a Table', function () {
    cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
    })
    it('Input Entries into the table', function () {
     cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
     (001, "Rajan", "House No. 01", "mayiladuthurai"),
     (002, "Guna", "House No. 02", "kanchipuram"),
     (003, "selvam", "House No. 03", "chennai"),
     (004, "vetri", "House No. 04", "madurai");`).then((result) => {
     expect(result.affectedRows).to.equal(4)
     })
     })
    it('Update an Entry into the table and verify', function () {
    cy.task('queryDb', 'UPDATE Persons SET FirstName = "prabhu" WHERE City="madurai"').then((result) => {
    expect(result.changedRows).to.equal(1)
    })
    cy.task('queryDb', 'SELECT FirstName FROM Persons WHERE City="madurai"').then((result) => {
    expect(result[0].FirstName).to.equal('prabhu')
    })
    })
    it('Verify that there is only one row where the city is chennai', function () {
    cy.task('queryDb', 'SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="chennai"').then((result) => {
    
    expect(result[0].rowCount).to.equal(1)
    })
    })
    it('Delete a Table and Verify', function () {
    cy.task('queryDb', 'DROP TABLE Persons').then((result) => {
    //expect(result.message).to.equal("")
    expect(result).to.not.throw; // Ensure no errors are thrown
    //expect(result).to.be.empty;     
})
    })
    })