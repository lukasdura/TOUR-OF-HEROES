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
