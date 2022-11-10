
/// <reference types="cypress" />




describe('is it possible to click on Heroes?', ()=>{


it('', ()=>{

    cy.visit('http://localhost:4200/')

    cy.get('[routerlink="/heroes"]')
    .click()

})
})