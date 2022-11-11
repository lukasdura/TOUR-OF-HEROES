/// <reference types="cypress" />


describe('page should contain title -Tour of Heroes'  , ()=>{


it('', ()=>{

    cy.visit('http://localhost:4200/')
        
        cy.get('h1')
        .should('contain.text','Tour of Heroes')

})
})