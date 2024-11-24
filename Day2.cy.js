

describe('My first test', function() {

it('test case', function(){
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.wait(10000);
cy.title().should('eq','OrangeHRM')
}
)

})