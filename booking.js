class Booking {
    firstname(){
      return cy.get('#travname');
    }
  
    lastname(){
      return cy.get('#travlastname');
    }
  
    dob(){
      return cy.get('#dob');
    }
  
    gender(){
      return cy.get('#sex_1');
    }
  
    triptype(){
      return cy.get('#traveltype_1');
    }
  
    fromcity(){
      return cy.get('#fromcity');
    }
  
    tocity(){
      return cy.get('#tocity');
    }
  
    departuredate(){
      return cy.get('#departon');
    }
  
    phone(){
      return cy.get('#billing_phone');
    }
  
    emailaddress(){
      return cy.get('#billing_email');
    }
  
    country(){
      return cy.get('#select2-billing_country-container');
    }
  
    streetaddress(){
      return cy.get('#billing_address_1');
    }
  
    billingcity(){
      return cy.get('#billing_city');
    }
  
    state(){
      return cy.get('#billing_state');
    }
  
    pincode(){
      return cy.get('#billing_postcode');
    }
  }
  
  export default Booking;
  