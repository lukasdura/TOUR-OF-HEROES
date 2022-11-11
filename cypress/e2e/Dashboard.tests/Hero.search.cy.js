// <reference types="cypress" />


describe('check if the searchbar works', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/')
         cy.get('#search-box')
          .click()
           .type('magma{enter}')
             cy.get('li > a')
              .click()

})   
})