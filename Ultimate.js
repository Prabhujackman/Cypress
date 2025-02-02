class ultimate {

Email(){
    return    cy.get('#et_pb_contact_email_0')
    
}

Submit(){
    return cy.get('.et_pb_contact_submit')
    
}

Name(){
    return cy.get('#et_pb_contact_name_0')
    
}

Message(){
    return  cy.get('#et_pb_contact_message_0')

}


}

export default ultimate