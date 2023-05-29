/// <reference types="cypress" />
describe('Probando el body', ()=>{

  it('Probar el body 2', function(){
    cy.request('employees/1').its('body').its('first_name').should('be.eq', 'Javier')
    cy.request('employees/1').then((res)=>{
      expect(res.status).to.be.eq(200)
      expect(res.headers['content-type']).to.be.eq('application/json; charset=utf-8')
      expect(res.body.first_name).to.be.eq('Javier')
      expect(res.body.last_name).to.be.eq("Eschweiler")
      expect(res.body.email).to.be.eq('javier@platzi.com')
    })
  })
})