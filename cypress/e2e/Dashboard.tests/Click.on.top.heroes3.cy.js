// <reference types="cypress" />


describe('Click on the third top hero and check the inside if its all OK ', ()=>{


    it('', ()=>{


        cy.visit('http://localhost:4200/')
         cy.get('[ng-reflect-router-link="/detail/15"]')
          .click()

           cy.contains('Details')
            cy.contains('id:')
             cy.contains('Hero name')
              cy.contains('Messages')
               cy.contains('HeroService')

               
        cy.get('.clear')
        .click()
  
          cy.get('#hero-name')
           .click()
            .clear()
             .type('Sigmund{enter}')
               cy.get('app-hero-detail > :nth-child(1) > :nth-child(5)')
               .click()



          cy.visit('http://localhost:4200/')
           cy.get('[ng-reflect-router-link="/detail/15"]')
            .click()

          cy.get('app-hero-detail > :nth-child(1) > :nth-child(4)')
           .click()

})   
})
