declare namespace Cypress {
 interface Chainable {

/*
* Checking texts, buttons, titles, in heroes page
*/
checkingThings(name:string) : Chainable<Element>


/*
* Delete all nine heroes
*/
deleteAllheroes(name:string) : Chainable<Element>


 }
}