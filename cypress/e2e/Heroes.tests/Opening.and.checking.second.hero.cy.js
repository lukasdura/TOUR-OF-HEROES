// <reference types="cypress" />


describe('Opening and check inside of hero 13', ()=>{


    it('', ()=>{


    cy.visit('http://localhost:4200/heroes')
     cy.get('.heroes > :nth-child(2) > a')
       .click()

    cy.get('h1')
     .should('contain.text', 'Tour of Heroes')

    cy.get('[routerlink="/dashboard"]')
     .should('be.visible')
      .should('contain.text', 'Dashboard')
   
    cy.get('[routerlink="/heroes"]')
     .should('be.visible')
      .should('contain.text', 'Heroes')

    cy.get('app-hero-detail > :nth-child(1) > h2')
      .should('be.visible')
       .should('contain.text','Details')

    cy.get('label')  
     .should('contain.text', 'Hero name:')

    cy.get('#hero-name')
     .click()
       .clear()
        .type('mr.rewritable{enter}')
          cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)')
           .click()
   
   
    cy.get('.heroes > :nth-child(2) > a')  
      .click()

    cy.get('app-hero-detail > :nth-child(1) > :nth-child(4)')
      .click()

    cy.get('.heroes > :nth-child(2) > a')
      .click()

    cy.get('app-messages > :nth-child(1) > h2')
      .should('contain.text','Messages')

    cy.get('.clear') 
     .should('contain.text','Clear messages')
      .click()


    cy.get('app-hero-detail > :nth-child(1) > :nth-child(4)')
     .click()
   
})
})