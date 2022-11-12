
describe('Run test in diferent browsers', () => {





    it('Run test on chrome', {browser:'chrome'}, ()=>{
  
     
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



  it('Run test on chrome', {browser:'electron'}, ()=>{
   
     
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
})


