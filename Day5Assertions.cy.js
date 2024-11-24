

describe('Assertions', ()=>{


it('Implicit assertions', ()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.url().should('include','orangehrmlive')
cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.url().should('contains','orangehrmlive')

cy.url().should('include','orangehrmlive')
.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.should('contains','orangehrmlive')


cy.url().should('include','orangehrmlive')
.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
.and('contains','orangehrmlive')
.and('not.contains','redhrms')

cy.title().should('include','Orange')
.and('eq','OrangeHRM')
.and('contains','HRM')

cy.get('.orangehrm-login-slot-wrapper').should('be.visible')
.and('exist') // logo exist

cy.xpath('//a').should('have.length','5')   //


cy.get("input[placeholder='Username']").type('Admin')
cy.get("input[placeholder='Username']").should('have.value','Admin')


})

it('Explicit assertions', ()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')

    cy.get("input[placeholder='Username']").then( (x) =>{
        expect(x).to.have.value('Admin');
    })
        
    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)").then((y) => {
        expect(y).to.have.text('Username');
});
})

    })