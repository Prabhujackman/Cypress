describe('Restful Booker API Tests', function() {
    const baseUrl = 'https://restful-booker.herokuapp.com';
  
    // 1. Create Token
    it('Creates an auth token', function() {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/auth`,
        body: {
          username: 'admin',
          password: 'password123'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.token).to.exist;
        // Save the token for later use
        cy.wrap(response.body.token).as('authToken');
      });
    });
  
    // 2. Create Booking
    it('Creates a new booking', function() {
      const bookingData = {
        firstname: "Jasprit",
        lastname: "Bumrah",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01"
        },
        additionalneeds: "Breakfast"
      };
  
      cy.request('POST', `${baseUrl}/booking`, bookingData)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.bookingid).to.exist;
          // Store the booking ID for use in later tests
          cy.wrap(response.body.bookingid).as('bookingId');
        });
    });
  
    // 3. Get Booking IDs
    it('Retrieves all booking IDs', function() {
      cy.request(`${baseUrl}/booking`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
          // Optionally log the booking IDs for debugging
          cy.log(JSON.stringify(response.body));
        });
    });
  
    // 4. Get specific data
    it('GET-Get specific data', function () {
      cy.request('GET', `${baseUrl}/booking?firstname=Jasprit&lastname=Bumrah`).then((response) => {  
        expect(response.status).to.eq(200);   
        cy.log(JSON.stringify(response)); // Logs the entire response
      });
    });
  });
  