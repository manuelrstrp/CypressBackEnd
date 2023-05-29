/// <reference types="cypress" />
describe('Probando Headers', function(){

  it('Validar el header y content type', function(){
    cy.request('employees').its('headers').its('content-type').should('include', 'application/json')
  })
})