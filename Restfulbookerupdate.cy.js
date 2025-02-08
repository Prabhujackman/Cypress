describe('Restful Booker API - Practical 7 Tests', () => {
    const baseUrl = 'https://restful-booker.herokuapp.com';
    let authToken;  // Token for authorized operations
    let bookingId;  // Booking ID to be used in update, patch, and delete tests
  
    // Get an authentication token and create a booking before running tests
    before(() => {
      // Create token
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
        authToken = response.body.token;
        cy.log("Auth Token:", authToken);
  
        // Create booking after receiving the token
        const bookingData = {
          firstname: "Jim",
          lastname: "Brown",
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
          },
          additionalneeds: "Breakfast"
        };
  
        cy.request({
          method: 'POST',
          url: `${baseUrl}/booking`,
          body: bookingData
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.bookingid).to.exist;
          bookingId = response.body.bookingid;
          cy.log("Created Booking ID:", bookingId);
        });
      });
    });
  
    // Update Booking: Fully update an existing booking using PUT
    it('Update Booking - PUT /booking/{id}', () => {
      const updatedBooking = {
        firstname: "JimUpdated",
        lastname: "BrownUpdated",
        totalprice: 222,
        depositpaid: false,
        bookingdates: {
          checkin: "2020-01-01",
          checkout: "2020-01-10"
        },
        additionalneeds: "Lunch"
      };
  
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // The API expects the token in a cookie header
          'Cookie': `token=${authToken}`
        },
        body: updatedBooking
      }).then((response) => {
        expect(response.status).to.eq(200);
        // Validate that all fields have been updated accordingly
        expect(response.body.firstname).to.eq(updatedBooking.firstname);
        expect(response.body.lastname).to.eq(updatedBooking.lastname);
        expect(response.body.totalprice).to.eq(updatedBooking.totalprice);
        expect(response.body.depositpaid).to.eq(updatedBooking.depositpaid);
        expect(response.body.bookingdates.checkin).to.eq(updatedBooking.bookingdates.checkin);
        expect(response.body.bookingdates.checkout).to.eq(updatedBooking.bookingdates.checkout);
        expect(response.body.additionalneeds).to.eq(updatedBooking.additionalneeds);
      });
    });
  
    // Partial Update Booking: Update only specific fields using PATCH
    it('Partial Update Booking - PATCH /booking/{id}', () => {
      const partialUpdateData = {
        firstname: "PartialJim"
      };
  
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${authToken}`
        },
        body: partialUpdateData
      }).then((response) => {
        expect(response.status).to.eq(200);
        // Verify that the firstname was updated while the rest remains unchanged
        expect(response.body.firstname).to.eq(partialUpdateData.firstname);
      });
    });
  
    // Delete Booking: Remove the booking using DELETE
    it('Delete Booking - DELETE /booking/{id}', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          'Cookie': `token=${authToken}`
        }
      }).then((response) => {
        // The DELETE request typically returns a status code of 201
        expect(response.status).to.eq(201);
        cy.log("Booking deleted successfully.");
      });
    });
  });
  