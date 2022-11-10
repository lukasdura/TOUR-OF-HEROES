/// <reference types="cypress" />


describe('page should contain necessary texts', ()=>{


it('', ()=>{

    cy.visit('http://localhost:4200/')
        
        cy.get('h1')
        .should('contain.text','Tour of Heroes')

        cy.get('[ng-reflect-router-link="/detail/13"]')
        .should('contain.text','Tour of Heroes')




})




})