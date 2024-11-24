describe('Navigation',()=>{

it('Test case1',()=>{


cy.visit('https://www.freshworks.com/');
cy.get('body > div:nth-child(2) > footer:nth-child(5) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)').click();
cy.go('back')
cy.wait(5000);
    cy.go('forward')

})


})