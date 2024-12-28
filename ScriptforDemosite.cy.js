describe('testsuite',()=> {


it('demo site', ()=>{


cy.visit('https://demo.automationtesting.in/Register.html')
cy.url().should('contain','Register')
cy.get('h2').contains('Register')

cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.enabled').type('Nitish')
.should('have.value','Nitish')

cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.enabled').type('kumar')
cy.get('.col-md-8 > .form-control').should('be.enabled').type('24, brisbane')

cy.get(':nth-child(3) > .col-md-3').contains('Email address')
cy.get('#eid > .form-control').type('kgk@gmail.com')

cy.get(':nth-child(4) > .col-md-3').should('have.text','Phone*')
cy.get(':nth-child(4) > .col-md-4 > .form-control').type('8273828192') // adding phone number


cy.get(':nth-child(5) > .col-md-4 > :nth-child(1) > input').click({force:true})// select checkbox

cy.get('#checkbox1').click().should('be.checked') // Cricket
cy.get('#checkbox2').click().should('be.checked') // Movies
cy.get('#checkbox3').click().should('be.checked') // hockey

cy.get(':nth-child(8) > .col-md-3').should('have.text','Skills')
cy.get('#Skills').select('AutoCAD').should('have.value','AutoCAD')

cy.get('.select2-selection') // Locate the dropdown trigger
  .click(); // Click to open the dropdown

cy.get('.select2-search__field') // Locate the search input field
  .type('United States'); // Type the value

cy.get('.select2-results__option') // Locate the filtered options
  .first() // Select the first match
  .click(); // Click the desired option

  cy.get('#yearbox').select('1996')
  cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('August')
  cy.get('#daybox').select('7')

  cy.get('#firstpassword').should('be.enabled').type('12345678')
  cy.get('#secondpassword').should('be.enabled').type('12345678')
  cy.get('#submitbtn').click()

  const upload = 'images.png'
  cy.get('#imagesrc').should('be.enabled').attachFile(upload)

  cy.get('#imagesrc').should('contain','images')

})
})