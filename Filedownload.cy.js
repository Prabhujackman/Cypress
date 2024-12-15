describe('File download script', function () {

    it('File Download', () => {

        
        cy.downloadFile('https://practice.expandtesting.com/download/1734171351132_color.txt',
            'cypress/fixtures/Download', 'test.txt')
        cy.readFile('cypress/fixtures/Download/test.txt').should('contain', 'litre')    

        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
            'cypress/fixtures/Download', 'downloadfile.txt')
        cy.readFile('cypress/fixtures/Download/downloadfile.txt').should('contain', 'Lorem ipsum dolor sit amet')    
    })
})

    
    