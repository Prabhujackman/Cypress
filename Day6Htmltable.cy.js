/// <reference types = "cypress"/> 

describe('Htmltable',()=>{

beforeEach('Login',()=>{

    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
    cy.get('#input-username').clear()
    cy.get('#input-username').type('demo')
    cy.get('#input-password').clear()  
    cy.get('#input-password').type('demo')
  
    cy.get("button[type='submit']").click();
   cy.get(".parent.collapsed[href='#collapse-5']").click();
   cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();

})

    it('No of rows and columns', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','6')
    })

    it("Verifying the values present under email column", ()=>{

        cy.get('tbody tr:nth-child(5) td:nth-child(3)').contains('minhkhoi@gmail.com');
        cy.get('tbody tr:nth-child(9) td:nth-child(3)').should('have.text','sunil1@gmail.com');
    })



})