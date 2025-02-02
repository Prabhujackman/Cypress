class saucedemologin {

    login(){

        cy.visit('https://www.saucedemo.com/',{timeout : 120000})

        cy.get('#login-button').click({force:true}) 
        cy.get("h3[data-test='error']").contains('Username is required')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('#login-button').click({force:true}) 
        cy.get("h3[data-test='error']").contains('Epic sadface: Sorry, this user has been locked out.')

        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').clear()
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        
        cy.get('#login-button').click({force:true}) 
       
       
    }







}

export default saucedemologin 