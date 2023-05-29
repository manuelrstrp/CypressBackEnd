/// <reference types="cypress" />
describe('Pruebas a base de datos', function(){

  it('Select', function(){
    cy.task("queryDb", "SELECT * FROM posts").then(results => {
      cy.log(results)
    })
  })
});