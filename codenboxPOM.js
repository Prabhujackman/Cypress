class codenboxPOM {

radiobutton(){
   //Radio button 
   cy.get('#radio-btn-example > fieldset > legend').should('contain.text','Radio Button Example')
   cy.get('[for="radio1"] > .radioButton').should('be.enabled').click({force:true})
   cy.get('[for="radio2"] > .radioButton').should('be.enabled').click({force:true})
   cy.get('[for="radio3"] > .radioButton').should('be.enabled').click({force:true})
    return this;
}

dynamicdropdown(data){
    cy.get('#select-class-example > fieldset > legend').should('contain.text','Dynamic Dropdown Example')
    cy.get('#autocomplete').should('be.enabled').type(data.country)
    cy.contains('Sri Lanka').click({force:true})
    cy.get('#autocomplete').clear()
    cy.get('#autocomplete').should('be.enabled').type(data.country1)
    cy.contains('Saudi Arabia').click({force:true})
    return this;
}

staticdropdown(){
    cy.get(':nth-child(8) > :nth-child(3) > fieldset > legend').should('contain.text','Static Dropdown Example')
    cy.get('#dropdown-class-example').select('Selenium')
    cy.get('#dropdown-class-example').select('Appium')
    cy.get('#dropdown-class-example').select('API')
    return this;
}

checkbox(){
    cy.get('#checkbox-example > fieldset > legend').should('contain.text','Checkbox Example')
    cy.get('#checkBoxOption1').should('not.be.checked').check()
    cy.get('#checkBoxOption2').should('not.be.checked').check()
    cy.get('#checkBoxOption3').should('not.be.checked').check()
    return this;
}

openwindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen'); // Stub the window.open function
    });
  
    cy.get('#openwindow').click({ force: true }); // Click the button that opens the popup
  
    cy.get('@windowOpen').should('be.calledWith', 'http://www.codenbox.com/'); // Use the actual URL
  
    cy.get('@windowOpen').then((stub) => {
      const newUrl = stub.args[0][0]; // Get the opened URL
      cy.visit(newUrl); // Manually visit the child window
    });
    return this;
  }
  
  opentab(){
    cy.get('.cen-align > fieldset > legend').should('contain.text','Switch Tab Example')
    cy.get('#opentab').click({force:true}) // click on 'Open tab'
    cy.visit('https://www.youtube.com/@CodenboxAutomationLab')
    return this;
  }

  Switchtoalert(){
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('.alert_example > legend').should('contain.text','Switch To Alert Example')
    cy.get('#name').should('be.enabled').type('Jackman')
    cy.get('#alertbtn').click({force:true}) // click on 'Alert' button
    cy.on('window:alert', (text) => {
        expect(text).to.equal('Hello Jackman, share this practice page who love to learn automation')
    })
    return this;
}

    confirm() {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.reload();
    cy.get('#name').clear()
    cy.get('#name').should('be.enabled').type('Prabhu')
    cy.get('#confirmbtn').click({force:true}) // click on 'confirm' button
    cy.on('window:alert', (text1) => {
        expect(text1).to.equal('Hello Prabhu, Are you sure you want to confirm?')
    })
    return this;
    }

    webtable(data){
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', data.columnheader1)
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', data.columnheader2)
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', data.columnheader3)

        cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', data.Instructor)
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain.text','Selenium Webdriver with Java Basics + Advanced + Interview Guide')
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', '10')

        cy.get('tbody > :nth-child(8) > :nth-child(1)').should('have.text', data.Instructor)
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should('contain.text','QA Expert Course :Software Testing + Bugzilla + SQL + Agile')
        cy.get('tbody > :nth-child(8) > :nth-child(3)').should('have.text','40')

        cy.get('tbody > :nth-child(4) > :nth-child(1)').should('have.text', data.Instructor)
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain.text','Appium (Selenium) – Mobile Automation Testing from Scratch')
        cy.get('tbody > :nth-child(4) > :nth-child(3)').should('have.text','20')


        cy.get('tbody > :nth-child(12) > :nth-child(1)').should('have.text','Total')
        cy.get(':nth-child(12) > :nth-child(3)').should('have.text','297')
        return this;
    }

    element(data){
        cy.get(':nth-child(10) > .right-align > fieldset > legend').should('have.text','Element Displayed Example')
        cy.get('#hide-textbox').click({force:true}) // hide text box
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click({force:true}) // show text box 
        cy.get('#displayed-text').should('be.visible').type(data.field)
        return this;
    }
    enabledisable(data){
        cy.get('#enabled-example-div > fieldset > legend').should('contain.text','Enabled/Disabled Example')
        cy.get('#disabled-button').click({force:true}) // click on 'disable' button
        cy.get('#enabled-example-input').should('be.disabled') 
        cy.get('#enabled-button').click({force:true}) // click on 'enable' button
        cy.get('#enabled-example-input').should('be.enabled').type(data.input) 
        return this;
    }

    mousehover(){
        cy.get(':nth-child(12) > .left-align > fieldset > legend').should('contain.text','Mouse Hover Example')
        cy.get('#mousehover').trigger('mouseover')
        cy.xpath("//a[normalize-space()='Top']").should('contain.text','Top').click({force:true})
        cy.xpath("//a[normalize-space()='Reload']").should('contain.text','Reload').click({force:true})
        return this;
    }

    Calendar(data){
        cy.get(':nth-child(13) > fieldset > legend').should('contain.text','Calendar Example')
        cy.get('fieldset > p > a').click({force:true}) // click on calendar
        cy.visit('https://codenboxautomationlab.com/about/booking/')
        cy.wait(3000)
        cy.get('.sql_date_2025-02-27 > .wpbc-cell-box > .date-cell-content > a').should('be.visible').click({force:true}) // feb 26
        cy.wait(5000)
       // cy.get('#rangetime1').should('be.visible').select('10:00 AM - 11:00 AM', { force: true });
        cy.get('#name1').type(data.firstname)
        cy.get('#secondname1').type(data.lastname)
        cy.get('#email1').type(data.email)
        cy.get('#phone1').type(data.phone)
        cy.get('#details1').type(data.details)   
        cy.get('.wpbc_button_light').click({force:true}) // click on send  
        cy.wait(15000)
        cy.get('.wpbc_ty__message').should('contain.text','Your booking is received. We will confirm it soon. Many thanks!')
        cy.get('.wpbc_ty__header').should('contain.text','Your booking id')

        cy.get('.wpbc_ty__header > strong').invoke('text').then((data) => {
            cy.log("Your booking id :", data);

        })
        return this;
    }

    iFrame(){
        // iFrame
        cy.xpath("//legend[normalize-space()='iFrame Example']").should('contain.text','iFrame Example');
        cy.get('iframe').should('have.attr', 'src', 'https://www.codenbox.com/');  // Ensure src is set
        cy.get('iframe').should('be.visible'); 
        // Get the iframe and extract the src URL
        cy.get('iframe').invoke('attr', 'src').then((iframeUrl) => {
        cy.log("Iframe URL:", iframeUrl);  // Log the iframe URL
        });
        return this;
        }

    downloadapkfile(){
        // Download APK files
        cy.visit('https://codenboxautomationlab.com/practice/')
   
    cy.get('.wp-block-button__link').should('be.visible').and('contain.text','Download Apk files')
    .click({force:true})
    cy.wait(20000);
      // Use cy.task() to get the latest downloaded file in the 'cypress/downloads' folder
    cy.task('getLatestFile', 'cypress/downloads').should('not.be.null').then((latestFile) => {
    cy.log('Latest downloaded file:', latestFile);
      // Validate file name follows expected pattern
    expect(latestFile).to.match(/^APKFiles-\d+\.zip$/);
     //  Verify file exists
      
    cy.readFile(`cypress/downloads/${latestFile}`).should('exist');
      });

    cy.get('.wp-block-button__link').should('be.visible').and('contain.text','Download Apk files').click({ force: true });
    //cy.downloadFile('https://www.codenbox.com/your-apk-file-url', 'cypress/downloads', 'APKFiles-1.zip');  
    return this;
    }
    
}





export default codenboxPOM;