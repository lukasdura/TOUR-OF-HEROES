
// <reference types="cypress" />


describe('Creating new hero', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/heroes')
         cy.get('#new-hero')
          .click('')
           .type('Spiderman {enter}')
           
         
        cy.get('.add-button')
         .click('')
            
})
})