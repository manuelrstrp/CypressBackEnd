/// <reference types="cypress" />
describe('Probando statuses', ()=>{

  it('Debe de validar el status code exitoso', function(){
    cy.request('employees').its('status').should('eq',200)
  })
  it('Debe de validar el status code fallido', function(){
    cy.request({url: 'employees/4', failOnStatusCode:false}).its('status').should('eq',404)//se pone failOnStatusCode para decirle a cypress q no arroje error antes de nuestra asersion
  })
})