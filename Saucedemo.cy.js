import saucedemologin from "../support/Saucedemologin";

describe('Saucedemo', () => {

    beforeEach(function() {
        cy.clearCookies();
        cy.clearLocalStorage();

        // Store the object in `this`
        this.sd = new saucedemologin();
    });

    it('Swag Labs Login page', function() {
        this.sd.login(); // Access the stored object
        cy.get('.title').should('have.text', 'Products'); // validate the page title
    });

    it('Add products to cart', function() {
        this.sd.login(); // Access the stored object
        // Add logic to add products to the cart
        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name ']").should('have.text','Sauce Labs Backpack')
        cy.get("div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)")
        .contains('29.99')
        cy.get("#add-to-cart-sauce-labs-backpack").should('have.text','Add to cart')
        cy.get("#add-to-cart-sauce-labs-backpack").click({force:true}) // product added to the cart
        cy.get(".shopping_cart_badge").should('have.text','1')

        cy.get("#remove-sauce-labs-backpack").should('have.text','Remove').click({force:true}) // remove the added product from cart
        
        cy.get("a[id='item_0_title_link'] div[class='inventory_item_name ']").should('have.text','Sauce Labs Bike Light')

        cy.get("div[id='inventory_container'] div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1)").contains('9.99')

        cy.get('#add-to-cart-sauce-labs-bike-light').click({force:true}) // add the product to cart

        //sort the product based on Price high to low
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get("a[id='item_5_title_link'] div[class='inventory_item_name ']").contains('Sauce Labs Fleece Jacket')
        cy.get("div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)").contains('49.99')


        cy.get("#add-to-cart-sauce-labs-fleece-jacket").click({force:true})
        cy.get(".shopping_cart_badge").should('have.text','2')

        cy.get(".shopping_cart_link").click()

        cy.get(".title").should('have.text','Your Cart') // verify the cart page

        cy.get("#checkout").click() // click on checkout button

        cy.get(".title").should('have.text','Checkout: Your Information')

        cy.get('#first-name').type('Prabhu')
        cy.get('#last-name').type('Jackman')
        cy.get('#postal-code').type('123456')
        cy.get('#continue').click() 

        cy.get('.title').should('have.text','Checkout: Overview')

        cy.get('#finish').scrollIntoView()
        cy.get('.summary_total_label').contains('64.78')

        cy.get('#finish').click({force:true})

        cy.get('.complete-header').should('have.text','Thank you for your order!')

    });

});
