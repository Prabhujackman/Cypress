describe('File upload', function(){


    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get("div[class='example'] h3").should('have.text','File Uploader');
        cy.get("div[class='example'] p")
        .should('have.text','Choose a file on your system and then click upload. Or, drag and drop a file into the area below.');    
    });



it('File upload - scenario 1', function(){

const filename = 'basic.xlsx';
cy.get('#file-upload').should('be.visible').attachFile(filename) // attach file by locating the choose file button
cy.log('Selected file name :', filename)
cy.get('#file-submit').should('be.enabled').click({force:true}) // click on upload button
cy.get('h3').should('contain.text','File Uploaded!')
cy.get('#uploaded-files').should('contain.text','basic')


})

it('File upload scenario 2 - drag and drop', function(){

    const filename = 'basic.xlsx';
    cy.get('#drag-drop-upload').attachFile(filename, { subjectType: 'drag-n-drop' });
        cy.log("Attached file: ", filename);
        cy.get('#drag-drop-upload')
        .invoke('text')
        .should(($text) => {
          const normalizedText = $text.replace(/\s+/g, ' ').trim(); 
          expect(normalizedText).to.include(filename);
        });
})

it('File upload scenario 3 - Rename', function(){

const originalFileName = 'basic.xlsx'; // Name of the file before upload
const expectedRenamedFileName = 'test.xlsx'; // Expected new name after upload

// Upload the file
cy.get('#file-upload').attachFile({ filePath: originalFileName, fileName: expectedRenamedFileName });

cy.get('#file-submit').should('be.visible').click({force:true})     // Upload button
// Wait for upload
cy.wait(3000);

// Validate the renamed file name is displayed in the UI
cy.get('#uploaded-files').invoke('text').then((data) => 
    expect(data.trim()).to.equal(expectedRenamedFileName))

})


})







