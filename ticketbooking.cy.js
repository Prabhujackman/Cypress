import Booking from "../support/booking.js";
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test due to uncaught exceptions.
    return false;
  });

describe('ticketbooking',function(){

    before(function(){
        cy.fixture('bookingdetails').then(function(data) {
            this.data = data;
        })


    })

    it('booking test',function(){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#place_order').click({force:true})
        cy.get('[data-id="billing_phone"]')
        .invoke('text')
  .then((text) => {
    expect(text.trim()).to.equal('Billing Phone is a required field.');
  });

        
  cy.get('[data-id="billing_email"]').invoke('text').then((text) =>{
    expect(text.trim()).to.equal('Billing Email address is a required field.');
  })


  cy.get('[data-id="billing_address_1"]').invoke('text').then((text) => {
    expect(text.trim()).to.equal('Billing Street address is a required field.')

  })
  
        cy.get('[data-id="billing_city"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Billing Town / City is a required field.')

        })
        cy.get('[data-id="billing_state"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Billing State / District / Province is a required field.')

        })
        
        cy.get('[data-id="billing_postcode"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Billing Postcode / ZIP / PIN code is a required field.')

        })
    
        cy.get('[data-id="travname"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('First / Given name is a required field.')

        })
        cy.get('[data-id="travlastname"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Last / Surname is a required field.')
        })
        cy.get('[data-id="dob"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Date of birth is a required field.')
        })
        cy.get('[data-id="sex"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Sex is a required field.')
        })
        cy.get('[data-id="fromcity"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('From city / Origin is a required field.')
        })
        cy.get('[data-id="tocity"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('To city. /Dest. is a required field.')
        })
        cy.get('[data-id="departon"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Departure date is a required field.')

        })
        

        const dt = new Booking();
        // add values to the fields

      dt.firstname().type(this.data.Firstname)
      dt.lastname().type(this.data.Lastname)
      dt.dob().click({force:true})
      cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').should('exist').click({force:true})
      dt.gender().check()
      dt.triptype().check()
      dt.fromcity().type(this.data.Fromcity)
      dt.tocity().type(this.data.Tocity)
      dt.departuredate().click({force:true})
      cy.get(':nth-child(5) > :nth-child(5) > .ui-state-default').click({force:true})
      dt.phone().type(this.data.Phone)
       dt.emailaddress().type(this.data.Email)
       dt.country().click({force:true})
cy.get('.select2-search__field').type('Palestinian Territory');
cy.contains('.select2-results__option', 'Palestinian Territory').click({ force: true });
  
 dt.streetaddress().type(this.data.Streetaddress)
       dt.billingcity().type(this.data.Town)
       dt.state().type(this.data.State)
       dt.pincode().type(this.data.Pincode)
       
cy.get('#place_order').click({force:true})
cy.wait(8000)

cy.origin('https://api.payu.in', () => {
cy.get('#amount-impression').should('contain', '990');
cy.get("div[id='quick-dc-1'] div[class='align-center gap-5 inherit']").should('have.text','Pay with MasterCard').click({force:true})

cy.get('#cardNumber').type('1234567890123456777')
cy.get('#cardExpiry').type('0328')
cy.get('#cardCvv').type('678')
cy.get('#cardOwnerName').type('Prabhu jackman')
cy.get("button[type='submit'] div span").click({force:true})
})
cy.wait(8000)

cy.get('.has-text-align-center.has-text-color.wp-block-heading').should('have.text','Thank you. Your order has been received.')


})
});
