describe('test script', ()=>{

it('Dropdown', ()=>{

cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
cy.get('#dropdowm-menu-1').select('Python')
cy.get('#dropdowm-menu-1').should('have.value','python')
cy.get('#dropdowm-menu-1').select('SQL')
cy.get('#dropdowm-menu-1').should('have.value','sql')

cy.get('#dropdowm-menu-2').select('Maven')
cy.get('#dropdowm-menu-2').should('have.value','maven')

cy.get('#dropdowm-menu-3').select('JavaScript')
cy.get('#dropdowm-menu-3').should('have.value','javascript')
})


it('checkbox',()=>{

cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
cy.get("input[value='option-2']").check();
cy.get("input[value='option-2']").should('be.checked').and('be.enabled');
cy.get("input[value='option-2']").uncheck();
cy.get("input[value='option-2']").should('not.be.checked');


cy.get("input[value='option-1']").check();
cy.get("input[value='option-1']").should('be.checked').and('be.enabled');;

cy.get("input[value='option-4']").should('not.be.checked');
cy.get("input[value='option-4']").check();
})


it('radio button', ()=>{

cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
cy.get("input[value='blue']").should('not.be.checked');
cy.get("input[value='blue']").check();

cy.get("input[value='blue']").should('be.checked');

cy.get("input[value='orange']").should('not.be.checked');
cy.get("input[value='orange']").check();

cy.get("input[value='pumpkin']").check().and('be.enabled');

})



})