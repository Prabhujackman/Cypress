describe('Multiple file upload', function() {

beforeEach(function(){
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    cy.url().should('include','davidwalsh')
})


    it('Multiple file upload', function(){
        cy.wait(2000)
        cy.get(':nth-child(5) > strong').should('contain.text','Upload Files')
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected')
        cy.get('#fileList > li').should('have.text','No Files Selected')

        const files = ['test.xlsx','testdata.txt','ultimateqa.json']

        cy.get('#filesToUpload').attachFile(files)

        cy.get('#fileList > :nth-child(1)').should('have.text','test.xlsx')
        cy.get('#fileList > :nth-child(2)').should('have.text','testdata.txt')
        cy.get('#fileList > :nth-child(3)').should('have.text','ultimateqa.json')

})
})