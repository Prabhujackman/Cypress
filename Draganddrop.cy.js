describe('Drag and drop',()=>{

it('drag and drop 1',()=>{

cy.visit('https://demo.automationtesting.in/Static.html')
cy.get('#angular').drag('#droparea')
cy.wait(4000)
cy.get('#mongo').drag('#droparea')
cy.wait(4000)
cy.get('#node').drag('#droparea')
})

it.only('drag and drop 2',()=>{

    cy.visit('https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html?component=chart&demo=dndSample')



    })
    

})