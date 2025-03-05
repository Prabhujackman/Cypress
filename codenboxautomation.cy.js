import codenboxPOM from "../support/codenboxPOM"

describe('codenboxautomation', function(){



    beforeEach(function(){
       // cy.visit('https://codenboxautomationlab.com/practice/')
    cy.visiturl();
    cy.log('visiting the url using custom command')
    })

it('codenbox', function(){
    cy.viewport(1920, 1080)    
    cy.wait(4000)
    const code = new codenboxPOM(); // obj creation to access the methods in class file
    cy.fixture('codebox').then((data) => {
    code.radiobutton();
    code.dynamicdropdown(data);
    code.staticdropdown();
    code.checkbox();
    code.openwindow();
    code.opentab();
    code.Switchtoalert();
    code.confirm();
    code.webtable(data);
    code.element(data);
    code.enabledisable(data);
    code.mousehover();
    code.Calendar(data);
    code.iFrame();
    code.downloadapkfile();

  })
})
})