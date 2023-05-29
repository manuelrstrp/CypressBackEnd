/// <reference types="cypress" />
describe('Probando Graphql', function(){

  it('debe de hacer una consulta con graphql', function(){
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }`;

    const gqlVariables = {
      limit:20,
      offset:0
    }
  
    cy.request({
      method:'POST',
      url:'https://graphql-pokeapi.graphcdn.app/',
      body:{
        query: gqlQuery,
        variable: gqlVariables
      }
    }).then(res => {
      cy.log(res)
      expect(res.body.data.pokemons.results[0].name).to.eq('ivysaur')
    })
  })
})