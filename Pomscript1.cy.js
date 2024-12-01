import LoginPage from "./PageObject/LoginPage"

describe('test script 1',()=>{

it('Login test',()=>{

const test=new LoginPage()
test.visit()
test.fillusername('Admin')
test.fillpwd('admin123')
test.submit()
cy.title().should('be.equal','OrangeHRM')

})





})