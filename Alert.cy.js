const { expect } = require("chai");

describe('alert suite',function(){


    it('Js alert auth', function()
    {
    
        cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.wait(5000);
        cy.get("div[class='example'] p").should('have.contain',"Congratulations");


    })
    it('Js alert auth1', function()
    {
    
        cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: 
                                                                                {
                                                                                username:"admin",
                                                                                password:"admin",
                                                                                }
                                                                            });
        
        cy.wait(5000);
        cy.get("div[class='example'] p").should('have.contain',"Congratulations");

    })

    // 1. Java script alert with text and ok button

    it('Js alert1', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();

       cy.on('window:alert',(t)=>{

           expect(t).to.contains('I am a JS Alert');

      })
    })
      // 2. Java script alert with some text and ok, cancel buttons

      it('Js confirm ok', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();

       cy.on('window:confirm',(t)=>{

           expect(t).to.contains('I am a JS Confirm');
      })
      cy.get('#result').should('have.text','You clicked: Ok')
    })

    // Js confirm alert by clicking the cancel button
    it('Js confirm cancel', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();

       cy.on('window:confirm',(t)=>{

           expect(t).to.contains('I am a JS Confirm');
      })
cy.on('window:confirm',()=>false);

      cy.get('#result').should('have.text','You clicked: Cancel')
    })

    // 3. It will have some text with text box field to enter data along with ok button

it('Js prompt alert', ()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
     //   
    cy.window().then((win)=>{
        cy.stub(win,'prompt').returns('Leo');
    })

    cy.get("button[onclick='jsPrompt()']").click();
    // cypress will automatically close prompted alert - it will have 'ok' button by default

    cy.get('#result').should('have.text','You entered: Leo')
})
})