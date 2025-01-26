import Shoppingwebsite from "../support/AmazonPOM.js";

describe('Amazon test', () => {
    const Obj = new Shoppingwebsite();
    let testData; // Declare a variable to hold fixture data

    before(() => {
        // Load fixture data and store it in testData
        cy.fixture('Amazonfixture').then((data) => {
            testData = data;
        });
    });

    it('Register user', () => {
        cy.visit('https://www.amazon.in/');
        cy.viewport(1920,800)
    
        Obj.register();
        
        // Perform assertions for missing fields
        cy.get('#continue').click({ force: true });

        cy.get('#auth-customerName-missing-alert > .a-box-inner > .a-alert-content')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Enter your name');
            });

        cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Enter your password');
            });

        cy.get('#auth-phoneNumber-missing-alert > .a-box-inner > .a-alert-content')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal('Enter your mobile number');
            });

        // Use testData for inputs
        Obj.Yourname().type(testData.Yourname);
        Obj.Phonenumber().type(testData.Mobilenumber);
        Obj.Password().type(testData.ValidPassword);

        cy.get('#continue').eq(0).click({force:true});
        cy.wait(4000)
     //  cy.get('.a-button-input').click()
    });

    it('Search Product and add to cart', ()=> {
        cy.visit('https://www.amazon.in/');
        cy.get('#twotabsearchtextbox').type('allen solly shirt')
        cy.get('#nav-search-submit-button').click({force:true})
        cy.get('[data-cel-widget="search_result_1"] > .s-widget-container > [data-component-type="s-messaging-widget-results-header"] > .a-section > .s-no-outline > .a-size-medium-plus').should('be.visible')
 
        cy.contains("Men's Slim Fit Shirt").should('be.visible')
        cy.contains("Allen Solly").should('be.visible')
        cy.wait(5000)
    //    cy.get('#fb63097d-8637-4736-a928-217a001424d7 > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > [data-cy="asin-faceout-container"] > .a-spacing-base > [data-cy="image-container"] > .s-image-padding > .rush-component > .a-link-normal > .a-section > .s-image').click()
    cy.get('img[alt="Allen Solly Men\'s Slim Fit Shirt"]').eq(0).click({force:true})
 cy.visit('https://www.amazon.in/Allen-Solly-Geometric-Regular-ASSFWMOFO48848_White_39/dp/B07DMZQTNQ/ref=sr_1_1?crid=VFGD4OKKAQJQ&dib=eyJ2IjoiMSJ9.y_Oi9ytFu6cBOl2ILJvaSmabUQmZ1yHNpm8LEuKeX-LJL8I_uyGC1iR7QnWogFcHYi3BM0kMscmvjy20DkUEOKbFEqDnEYZVTuzVgTEaqj75pbCzeHByK9sbjHZvdkFA6OgNeYNGqpOoYo_WOlrX9f3PvS1jeWUO56CFuECwBtN9N5gF-7Co2OuqLnqxRuNAJm-NJkakUDPYyY8ENNdZO2zlAmfc7CvWaJCWruyD_8UtKvESlIW3ZbExhkDgeXEb_Bm8mgYBDSC1MfQE9gW4mdbNKoLU8qMky_M0MPh78a4tCzQCAMlUA_PUGaLoybGoV0LGHBmW2YvDblxMzPUMphJDOJMK0fsk5fqXUgB4HLugNZM3m-a6KLVT9okqiTv73ZV3dplAfN7Dx0G6pwVclvKeuX_TbySYa1_uLq8jhjuo73GKM94W6Q33G5cKnhiF.uMgEi2g8gY_6X5gv04UeUvYovFpIAES-Dri68gnReGQ&dib_tag=se&keywords=allen+solly+shirt&nsdOptOutParam=true&qid=1737880949&sprefix=allen+solly+shi%2Caps%2C572&sr=8-1')
cy.wait(5000)
cy.get('#a-autoid-25-announce').contains('Quantity:1')
cy.get('#add-to-cart-button').click({force:true})
cy.get('.a-size-medium-plus').invoke('text').then((data) => {
expect(data.trim()).to.equal('Added to cart')
})
cy.get('#nav-cart-count').contains('1')
cy.get('#sw-gtc > .a-button-inner > .a-button-text').click({force:true})

cy.get('#sc-subtotal-amount-activecart > .a-size-medium').invoke('text').then((subtotal)=>{
    expect(subtotal.trim().replace(/[^0-9.-]+/g, '')).to.equal('859.00')

})
    })

    it.skip('Login and Logout',()=>{
        cy.visit('https://www.amazon.in/');
        Obj.Login();
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your email or mobile phone number')
        Obj.Email().type(testData.SigninMobilenumber)
        cy.get('.a-button-inner > #continue').click({force:true}) 
        cy.get('.a-button-inner > #continue').click({force:true}) 
       // cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your password')
        cy.wait(15000)
        cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click()
        cy.wait(5000)
        Obj.Logout()
        cy.get('.hmenu-visible > :nth-child(33) > .hmenu-item').click()

    })


});
