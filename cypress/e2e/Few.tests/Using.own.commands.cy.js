/// <reference types="cypress" />


describe('using own commands saved in commands.ts and index.d.ts', () => {

    it('Run own commands', {browser:'chrome'}, ()=>{
    

        cy.visit('http://localhost:4200')

         cy.checkingThings()
          cy.deleteAllheroes()
         
        
    })
    })
