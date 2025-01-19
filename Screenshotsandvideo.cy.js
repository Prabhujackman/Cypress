describe('screenshotandvideo',function(){

    it('screenshotandscreenrecord',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.screenshot("Login page");
       cy.get('.orangehrm-login-branding > img').screenshot("Image");
       cy.get('.orangehrm-login-logo > img').screenshot("Logo");

        cy.get("input[placeholder='Username']").type('Wdmin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get('.oxd-button').click()

        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
      
    



    })


})