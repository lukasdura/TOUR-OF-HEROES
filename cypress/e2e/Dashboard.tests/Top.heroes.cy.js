// <reference types="cypress" />


describe('is the title top heroes vissible on tha page', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/')
         .contains('Top Heroes')
          .should('be.visible')

})   
})