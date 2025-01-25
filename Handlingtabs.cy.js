describe('Handling different tabs', () => {
    it('Open new tab test 1 ', () => {

      cy.visit('https://the-internet.herokuapp.com/windows');
  
      // Open the link in the same tab
      cy.get('.example >a').invoke('removeAttr', 'target')   // removing the target attribute
      .click(); 
      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
      cy.contains('New Window').should('be.visible');

      cy.wait(5000)

     cy.go('back') // go back to parent tab
    });


    it('Open new tab test 2', () => {
        
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example >a').then((e)=>{
          let url = e.prop('href') // Accessing the element property using e.prop
            cy.visit(url);
        })
    cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

    cy.wait(5000)

     cy.go('back') // go back to parent tab

  })
})
  