describe('Webdriveruniversity',function(){


it('contact us', function(){

    cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html')

cy.get('.section_header').should('contain.text','CONTACT US')
cy.get('[name="first_name"]').should('be.enabled').type('Prabhu')
cy.get('[name="last_name"]').should('be.enabled').type('Jackman')
cy.get('[name="email"]').should('be.enabled').type('test@gmail.com')
cy.get('textarea.feedback-input').should('be.enabled').type('add comment to the comment box')
cy.get('[type="reset"]').click({force:true})


cy.get('[name="first_name"]').should('have.value', '')
cy.get('[name="last_name"]').should('have.value', '')
cy.get('[name="email"]').should('have.value', '')
cy.get('textarea.feedback-input').should('have.value', '')

cy.get('[name="first_name"]').should('be.enabled').type('ben')
cy.get('[name="last_name"]').should('be.enabled').type('tennyson')
cy.get('[name="email"]').should('be.enabled').type('pk@gmail.com')
cy.get('textarea.feedback-input').should('be.enabled').type('add comment to the comment box')

cy.get('[type="submit"]').click({force:true})

cy.get('h1').should('contains.text','Thank You for your Message')

})

it('web driver login portal', function(){

    cy.visit('http://webdriveruniversity.com/Login-Portal/index.html')

    cy.get('#text').should('be.enabled').type('user')
    cy.get('#password').should('be.enabled').type('Pwd')
   

    cy.window().then((win) => {
        cy.stub(win, 'alert').as('alertStub'); // Stub window.alert
      });
      
      cy.get('#login-button').click({force:true}); // Clicks the login button
      
      cy.get('@alertStub').should('have.been.calledWith', 'validation failed'); // Validate alert text

})

it.only('Click - Buttons', function(){

    cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html')
    cy.xpath("//p[normalize-space()='CLICK ME!']").click({force:true})
    cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain.text','Congratulations')
    cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-body > p').should('contain.text','Well done for successfully using the click() method!')
    cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').should('be.visible').click({force:true})
 //   cy.on('window:alert', (text) =>{
 //       expect(text).to.equal('It’s that Easy!! Well I think it is.....')
//    })

cy.window().then((win) => {
    cy.stub(win, 'alert').callsFake((msg) => {
        expect(msg).to.equal('It’s that Easy!! Well I think it is.....');
    });
});
// Trigger the action that causes the alert
cy.get("#button2").click({force:true})  // Adjust the selector to your scenario
cy.wait(500);
cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').should('be.enabled').click({force:true})

cy.get('#button3').click({force:true}) // open the popup

cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should('contain.text','Well done! the Action Move & Click can become very useful!')

cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click({force:true}) // close the popup

cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-header > .close').click({force:true})

})
















})