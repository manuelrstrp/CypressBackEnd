const { defineConfig } = require("cypress");
const mysql = require("mysql")

function queryTestDb(query, config){
  const connection = mysql.createConnection(config.env.db)//al config se le pasan variables de entorno (.env.db) eu en este caso permite añadir el archivo al gitignore para no subir la DB al repositorio
  connection.connect()
  
  return new Promise((resolve,reject) => {
    connection.query(query,(error,results) => {
      if(error) reject(error)
      else{
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = defineConfig({
  component: {
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
  e2e: {
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    setupNodeEvents(on, config) {
      on("task",{
        queryDb: (query)=>{
          return queryTestDb(query,config)
        }
      })
      // implement node event listeners here
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    // pageLoadTimeout: 120000,
    testIsolation: false,
    "baseUrl": "http://localhost:3000",
  },
});
