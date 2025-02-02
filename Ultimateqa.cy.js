import ultimate from '../support/Ultimate.js';


describe('Ultimateqa', () => {
    before(function () {
        cy.fixture('ultimateqa').then((data) => {
            this.data = data;
        });
    });

    it('About section', function () {

        const qa = new ultimate();

        cy.visit('https://ultimateqa.com/');
        cy.url().should('include', 'ultimateqa.com');

        // Click on the About section
        cy.get('#menu-main-menu > #menu-item-217940 > a')
            .should('have.text', 'About')
            .click({ force: true });

        // Scroll to and click the contact form submit button
        cy.get('.et_pb_contact_submit').scrollIntoView();
        cy.get('.et_pb_contact_submit').click();

        // Verify form labels
        cy.get('.et_pb_section_6 > .et_pb_row > .et_pb_column > .et_pb_text > .et_pb_text_inner > h2 > strong')
            .should('have.text', 'Get in touch with us!');

        cy.get('.et-pb-contact-message > :nth-child(2) > :nth-child(1)')
            .should('have.text', 'Name');
        cy.get('.et-pb-contact-message > :nth-child(2) > :nth-child(2)')
            .should('have.text', 'Your Email Address');
        cy.get('.et-pb-contact-message > :nth-child(2) > :nth-child(3)')
            .should('have.text', 'Message');

        // Enter an invalid email and verify error message
        qa.Email().type(this.data.Email);
        qa.Submit().click({ force: true });

        cy.get( 'body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > article:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(1)'
        ).should('have.text', 'Invalid email');

        // Clear and enter a valid email
        qa.Email().clear().type(this.data.ValidEmail);
        qa.Name().type(this.data.Name);
        qa.Message().type(this.data.Message);

        // Submit form and verify CAPTCHA validation message
        qa.Submit().click();
        cy.get('.et_pb_contact_error_text').should('have.text', 'You must be a human to submit this form.');
    });
});
