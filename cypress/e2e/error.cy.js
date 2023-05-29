/// <reference types="cypress" />
describe('Probando errores', ()=>{

  it('Debe validar el status code fallido y el mensaje de error', function(){
    cy.request({url:'https://pokeapi.co/api/v2/4545', failOnStatusCode:false}).then(res => {
      expect(res.status).to.eq(404)
      expect(res.body).to.be.eq('Not Found')
    })
  })
  it('Debe validar el status code fallido y el mensaje de error de rick and morty', function(){
    cy.request({url:'https://rickandmortyapi.com/api/location/3434', failOnStatusCode:false}).then(res => {
      expect(res.status).to.eq(404)
      expect(res.body).to.have.property('error','Location not found')
    })
  })
  it('Debe validar el status code fallido y el mensaje de error vacio', function(){
    cy.request({url:'/employees/4', failOnStatusCode:false}).then(res => {
      expect(res.status).to.eq(404)
      expect(res.body).to.be.empty
    })
  })
})