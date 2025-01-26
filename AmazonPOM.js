class Shoppingwebsite {

    register(){
       cy.get('.nav-line-1-container').click()
       cy.wait(6000)
       cy.get('#createAccountSubmit').click()
        return
    }
    Yourname(){
      return  cy.get('#ap_customer_name')
    }
    Phonenumber(){
      return  cy.get('#ap_phone_number')
    }
    Password(){
       return cy.get('#ap_password')
    }

    Login(){
     cy.get('#nav-link-accountList-nav-line-1').click({force:true})
     cy.wait(5000)
  //   cy.get('.a-padding-extra-large > .a-spacing-small').contains('Sign in')    
     cy.get('.a-button-inner > #continue').click({force:true})
      return 
  }

    Email(){
     return cy.get('#ap_email')
    }

    Logout(){
    cy.get('.hm-icon').click()
    cy.get('[data-menu-id="8"]').scrollIntoView();
    cy.get('.hmenu-visible > :nth-child(32) > .hmenu-item').scrollIntoView();

    return
    }








}

export default Shoppingwebsite;