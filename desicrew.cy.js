Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Ignoring error:', err.message);
    return false;
  });
  
  
describe('desicrew', function(){

    before(function(){
        cy.fixture('Desicrew').then((data) => {
            this.data = data ;

        })
    })

    it('digital services',function(){
        cy.visit('https://desicrew.in/')
        cy.get('.elementor-sticky--active > .elementor-element-4afcd71 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click({force:true})
        // connect with us form
        cy.get('#form-field-first_name').should('be.enabled').type(this.data.firstname)
        cy.get('#form-field-field_c3d76e4').should('be.enabled').type(this.data.Lastname)
        cy.get('#form-field-email').should('be.enabled').type(this.data.email)
        cy.get('#form-field-phone_number').should('be.enabled').type(this.data.phonenumber)       
        cy.get('#form-field-field_a130775').should('be.enabled').select('IT Automation')
        cy.get('#form-field-comapny_name').should('be.enabled').type('IUI')
        cy.get('#form-field-how_can_we_help').should('be.enabled').type(this.data.support)
        cy.get('#form-field-field_66094c6-0').check()
        cy.get('#form-field-field_66094c6-1').check()
        cy.get('#form-field-field_66094c6-2').check()
        cy.get('#form-field-field_66094c6-3').check()
        cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').should('have.text', 'Submit')

        cy.get('.elementor-element-3a4de51 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').scrollIntoView()
        cy.get('.elementor-element-3a4de51 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click({force:true}) // qaoncloud

        cy.get('.elementor-element-cee2b66 > .elementor-widget-container > .elementor-heading-title').should('contain.text', 'QAonCloud')

        cy.get('.elementor-element-2874048e > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').should('contain.text','Visit our Website').click({force:true})

        cy.wait(5000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore specific errors by checking the message
            if (err.message.includes('GET_ELEMENTS')) {
              return false; // Prevent Cypress from failing the test
            }
            return true; // Allow other errors to be thrown
          });
          
      
// Handle cross-origin navigation
cy.origin('https://www.qaoncloud.com', () => {
    cy.visit('https://www.qaoncloud.com/contact-us'); // Visit contact page directly within origin block
    cy.viewport(1920, 1080);
    cy.wait(8000);
    
    cy.get('.elementor-button-text').should('contain.text','Contact Us').click({force:true}) 

    cy.url().should('eq','https://www.qaoncloud.com/contact-us')

 //   cy.get('form > [name="name"]').should('be.enabled').type(this.data.name)
//    cy.get('form > [name="email"]').should('be.enabled').type(this.data.email)
//    cy.get('form > .onlyNumber').should('be.enabled').type(this.data.phonenumber)
//    cy.get('form > [name="companyname"]').should('be.enabled').type(this.data.companyname)
//    cy.get('form > [name="role"]').should('be.enabled').type(this.data.companyname)
//    cy.get('form > textarea.form-control').should('be.enabled').type(this.data.requirements)
 //   cy.get('.contact-send > .btn').should('be.enabled')
    })
})

    it.skip('desicrew hrms', function() {

        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        cy.fixture('desicrewhrms').then((data) =>{
        cy.get("div[id='login-box'] div h4[class='center']").should('contain.text','Login')
        cy.get('#btnLogin').should('be.enabled').click({force:true}) // click on login button

        cy.get('#Username-error').should('contain.text','Enter the username')
        cy.get('#Password-error').should('contain.text','Enter the password')

        cy.get('.forgot-password-link').click({force:true})

        cy.get('#forgot-box > h4.center').should('contain.text','Reset Password')

        cy.get('#forgot-box > p').should('contain.text','Enter your username to Reset Password')

        cy.get('#btnReset').click({force:true}) // click on reset
        cy.contains('Enter the username')

        cy.get('.back-to-login-link').click({force:true}) // back to login page


        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').should('be.enabled').type(data.username)
        cy.get('#Password').should('be.enabled').type(data.password)
        cy.get('#btnLogin').should('be.enabled').click({force:true}) // click on login button

        cy.get('.navbar-brand > small').should('contain.text','DesiCrew Solutions Pvt Ltd') 

        cy.get('#sidebar-shortcuts-mini').should('be.visible');
        cy.get('.menu-icon.fa.fa.fa-home').should('be.visible');       //Home
        cy.get('.menu-icon.fa.fa.fa-calendar').should('be.visible');   //Calendar
        cy.get('.menu-icon.fa.fa-users').should('be.visible')       //EIP
        cy.get('.menu-icon.fa.fa-tasks').should('be.visible')       //Tasks  
        cy.get('.menu-icon.fa.fa-sign-out').should('be.visible');   //Exit
        cy.get('.menu-icon.fa.fa-bullhorn').should('be.visible');   //Grievance
        cy.get('.menu-icon.fa.fa-question').should('be.visible');   //Ticketing
        cy.get('.menu-icon.fa.fa-clock-o').should('be.visible');    //Attendance  
        cy.get('#sidebar-toggle-icon').should('be.visible');

        cy.get('#cardTypeButtons > :nth-child(2) > .btn').should('be.visible').should('contain.text','ESS');;
        cy.get('#cardTypeButtons > :nth-child(3) > .btn').should('be.visible').should('contain.text','MSS');
        cy.get(':nth-child(4) > .btn').should('be.visible').should('contain.text','Information');

        cy.get('.user-info').click({force:true})
        cy.get('.user-menu > :nth-child(7) > a').click({force:true})

    })

    })






})