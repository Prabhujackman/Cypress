

describe('Debugging and breakpoints', function() {

    it('debug and breakpoints', function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.wait(10000);
    cy.title().should('eq','OrangeHRM')
    cy.pause()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Username')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Password')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()

    cy.get('.oxd-button').debug().click()
   

    }
    )
    
    })