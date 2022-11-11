// <reference types="cypress" />


describe('check if the searchbar works', ()=>{


    it('test only searchbar', ()=>{


        cy.visit('http://localhost:4200/')
         cy.get('#search-box')
          .click()
           .type('magma{enter}')
             cy.get('li > a')
              .click()

})  


it('testing searchbar and the automatically offering a response', ()=>{


  cy.visit('http://localhost:4200/')
   cy.get('#search-box')
    .click()
    .type('t')

  cy.get(':nth-child(4) > a')
   .click()
     
})
})