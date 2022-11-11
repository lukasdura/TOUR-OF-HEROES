/// <reference types="cypress" />

describe('diferent devices/resolution test', () => {


  it('macbook-16 view',()=>{

   
      cy.viewport('macbook-16')
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

    it('samsung-note9 view',()=>{

   
    cy.viewport('samsung-note9')
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


it('1024x768 view',()=>{

   
  cy.viewport(1024, 768)
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



it('1280x720',()=>{

   
  cy.viewport(1280, 720)
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
})

