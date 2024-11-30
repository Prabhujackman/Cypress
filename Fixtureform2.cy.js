describe('Fixtureform2', ()=>{


    before(() => {
       cy.fixture('fixturefile').then((store) => {
         cy.wrap(store).as('store'); // Store fixture data using alias
      });
     });


    it('test case', ()=>{

        cy.visit('https://mytestingthoughts.com/Sample/home.html')
        cy.wait(5000)
        cy.get('@store').then((store) =>{
        cy.get("input[placeholder='First Name']").type(store.firstname);
        cy.get("input[placeholder='Last Name']").type(store.lastname);
        cy.get("input[placeholder='Username']").type(store.username);
        cy.get("input[placeholder='Password']").type(store.password);
        cy.get("input[placeholder='Confirm Password']").type(store.confirmpassword);
        cy.get("input[placeholder='Confirm Password']").type(store.email);
        cy.get("input[placeholder='(639)']").type(store.contactno);
    })


    
    
    }
    )

})