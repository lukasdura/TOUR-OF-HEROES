// <reference types="cypress" />


describe('Delete all heroes', ()=>{


    it('', ()=>{
     
        cy.visit('http://localhost:4200/heroes')
     
         cy.get('.delete')
          .click({ multiple: true })

    })
    })