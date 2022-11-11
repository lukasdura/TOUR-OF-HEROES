// <reference types="cypress" />


describe('check if Dashboard and Heroes are on the page', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/')
         cy.get('[routerlink]')
          .should('contain.text', 'Dashboard')
           .should('be.visible')
            .should('contain.text', 'Heroes')
             .should('be.visible')
              .should('have.length', '2')

        
})   
})