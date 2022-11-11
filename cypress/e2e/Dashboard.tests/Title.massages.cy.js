// <reference types="cypress" />


describe('Check if the title *Messages* is vissible  ', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/')
         cy.get(':nth-child(1) > h2')
          .should('contain.text', 'Messages')

})
})