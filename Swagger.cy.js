describe('Swagger Pet API Tests', function() {
    const apiUrl = "https://petstore.swagger.io/v2/pet";
    const initialPetId = 78689;
    const modifiedPetId = 10001;  
    const initialName = "Jassie";
    const modifiedName = "Jasprit Bumrah";
    const initialStatus = "Open for Sale";
    const modifiedStatus = "sold";
   
    it("Uploads a file for a pet", function () {
      // Retrieve the file from the fixtures folder as binary data
      cy.fixture("testdata.txt", "binary").then((data) => {
        const fileBlob = Cypress.Blob.binaryStringToBlob(data, "text/plain");
        
        const formPayload = new FormData();
        // The API expects the file under the key "file" with the provided filename
        formPayload.append("file", fileBlob, "testdata.txt");  
        
        cy.request({
          method: "POST",
          url: `${apiUrl}/${initialPetId}/uploadImage`,
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formPayload,
          encoding: "binary"
        }).then((response) => {
          // Validate that the file upload was successful
          expect(response.status).to.eq(200);
          cy.log("File uploaded successfully!");
        });
      });
    });
    
    // POST - Add a new pet record to the store
    it("POST - Create a new pet record", () => {
      cy.request("POST", apiUrl, {
        "id": initialPetId,
        "category": {
          "id": 1,
          "name": "Cat"
        },
        "name": initialName,
        "tags": [
          {
            "id": 2,
            "name": "Hyper"
          }
        ],
        "status": initialStatus
      }).then((response) => {
        // Confirm that the pet record was created as expected
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(initialName);
        expect(response.body.id).to.eq(initialPetId);
        expect(response.body.status).to.eq(initialStatus);
      });
    });

     // GET - Retrieve the pet details
     it("GET - Retrieve pet details", () => {
      cy.request("GET", `${apiUrl}/${initialPetId}`).then((response) => {
        // Validate the retrieved pet details
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(initialPetId);
        expect(response.body.name).to.eq(initialName);
        expect(response.body.status).to.eq(initialStatus);
      });
    });
    
    // PUT - Update an existing pet record
    it("PUT - Update an existing pet", () => {
      cy.request("PUT", apiUrl, {
        "id": modifiedPetId,
        "category": {
          "id": 1,
          "name": "Cat-updated"
        },
        "name": modifiedName,
        "tags": [
          {
            "id": 2,
            "name": "Hyper-updated"
          }
        ],
        "status": modifiedStatus
      }).then((response) => {
        // Validate that the pet record was updated correctly
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(modifiedName);
        expect(response.body.id).to.eq(modifiedPetId);
        expect(response.body.status).to.eq(modifiedStatus);
      });
    });
    
   
    
    // DELETE - Remove the pet record using pet ID
    it("DELETE - Remove the existing pet", function () {
      cy.request("DELETE", `${apiUrl}/${modifiedPetId}`).then((response) => {
        // Validate that the deletion was successful
        expect(response.status).to.eq(200);
        expect(response.body.code).to.eq(200);
      });
    });
  });
  