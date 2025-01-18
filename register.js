 class store{

     Username(){
     
     return cy.get('#txt-username')
     }
     
     Password(){
    return cy.get('#txt-password')
     
     }
     
    loginbutton(){
     return cy.get('#btn-login') 
     
     }
     
     
    }
    
    export default store