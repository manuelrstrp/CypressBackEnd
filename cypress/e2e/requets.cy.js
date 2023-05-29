/// <reference types="cypress" />

describe('Probando request', ()=>{
  after(function(){
    cy.request({
      url:`employees/${this.id}`,
      method:'DELETE',
    }).then(res=>{
      expect(res.status).to.eq(200)
      expect(res.body).to.be.empty
    })
  })

  it('Debe de crear un empleado', function(){
    cy.request({
      url:'employees',
      method:'POST',
      body: {
        first_name:"Manuel Prueba",
        last_name:"Restrepo Prueba",
        email:"restrepo@platzi.com"
      }
    }).then((res)=>{
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('id')
      const id = res.body.id
      cy.wrap(id).as('id')
    })
  })
  it('Debe de validar que se haya creado en la base de datos', function(){
    cy.request('GET','employees').then(res => {
      expect(res.body[res.body.length -1].first_name).to.eq('Manuel Prueba')
    })
  })
  it('Debe modificar al empleado con un nuevo correo', function(){
    cy.request({
      url:`employees/${this.id}`,
      method:'PUT',
      body:{
        first_name:"Manuel Prueba",
        last_name:"Restrepo Prueba",
        email:"restrepoPrueba@platzi.com"
      }
    }).then(res =>{
      cy.log(res)
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('id')
    })
  })
})