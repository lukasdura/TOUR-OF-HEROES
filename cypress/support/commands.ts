/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('create_new_hero', (name)=>{

    cy.visit('http://localhost:4200/heroes')
     cy.get('#new-hero')
     .click('')
      .type(name ,'{enter}')
  

     cy.get('.add-button')
      .click('')

})

Cypress.Commands.add('checkingThings', ()=>{


    cy.visit('http://localhost:4200/heroes')
    cy.get('h1')
     .should('contain.text', 'Tour of Heroes')
      .should ('be.visible')

   cy.get('[routerlink="/dashboard"]')
    .should('contain.text','Dashboard')
     .should('be.visible')
      .click() 
       cy.go('back')

   cy.get('[routerlink="/heroes"]')    
   .should('contain.text','Heroes')
    .should('be.visible')
     .click() 

   cy.get('app-heroes > h2')
     .should('contain.text','My Heroes')
      .should('be.visible')

   cy.get('label')
   .should('contain.text','Hero name')
    .should('be.visible')


    cy.get('#new-hero')
    .should('be.visible')

    cy.get('.add-button')
     .should('be.visible')
      .should('contain.text','Add hero')

      cy.get('.heroes')
       .children()
        .first().should('be.visible')
         .next().should('be.visible')
          .next().should('be.visible')
           .next().should('be.visible')
            .next().should('be.visible')
             .next().should('be.visible')
              .next().should('be.visible')
               .next().should('be.visible')
                .next().should('be.visible')
                 
                 cy.get('.heroes')
                  .children()
                   .should('have.length', '9')

   cy.get(':nth-child(1) > h2')
    .should('contain.text', 'Messages')
     .should('be.visible')

   cy.get('.clear')  
   .should('contain.text', 'Clear messages')
    .should('be.visible')
     .click()

})

Cypress.Commands.add('deleteAllheroes',()=>{

    cy.visit('http://localhost:4200/heroes')
    cy.get('.delete')
    .click({ multiple: true })



})