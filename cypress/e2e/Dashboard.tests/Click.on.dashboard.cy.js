// <reference types="cypress" />


describe('Click on dashboard', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/s')
         cy.get('[routerlink="/dashboard"]')
         .click()
         .should('contain.text', 'Dashboard')
        
})   
})