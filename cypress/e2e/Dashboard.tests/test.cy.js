// <reference types="cypress" />


describe('check if the searchbar works', ()=>{


    it('test only searchbar', ()=>{

        cy.visit('http://localhost:4200/')

        cy.get('#search-box')
         .click()
          .type('a')

        





       
        






})
})

