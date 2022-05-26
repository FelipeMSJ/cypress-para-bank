// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('limparDB', ()=>{
    cy.contains('a', 'Admin Page').click()
    cy.contains('button', "Clean").click()
    cy.visit('register.htm')
})

Cypress.Commands.add('registrarUsuario', ()=>{
    const cadastro = require("../../cypress/fixtures/registro.json")

    //Preenchimento do formulário de registro
    cy.get('input[id="customer.firstName"]').type(cadastro["customer.firstName"])
    cy.get('input[id="customer.lastName"]').type(cadastro["customer.lastName"])
    cy.get('input[id="customer.address.street"]').type(cadastro["customer.address.state"])
    cy.get('input[id="customer.address.city"]').type(cadastro["customer.address.city"])
    cy.get('input[id="customer.address.state"]').type(cadastro["customer.address.state"])
    cy.get('input[id="customer.address.zipCode"]').type(cadastro["customer.address.zipCode"])
    cy.get('input[id="customer.phoneNumber"]').type(cadastro["customer.phoneNumber"])
    cy.get('input[id="customer.ssn"]').type(cadastro["customer.ssn"])

    //Preenchimento de Usuário e Senha
    cy.get('input[id="customer.username"]').type(cadastro["customer.username"])
    cy.get('input[id="customer.password"]').type(cadastro["customer.password"])
    cy.get('input[id="repeatedPassword"]').type(cadastro["customer.password"])

    //Botão de registro
    cy.get('input[value="Register"]').click()

})