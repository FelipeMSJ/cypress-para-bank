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
    cy.get('input[id="customer.firstName"]')
        .clear()
        .type(cadastro["customer.firstName"])
        .invoke('val')
        .should('match', /^[a-zA-Z\s]*$/)
    
    cy.get('input[id="customer.lastName"]')
        .clear()
        .type(cadastro["customer.lastName"])

    cy.get('input[id="customer.address.street"]')
        .clear()
        .type(cadastro["customer.address.state"])

    cy.get('input[id="customer.address.city"]')
        .clear()
        .type(cadastro["customer.address.city"])

    cy.get('input[id="customer.address.state"]')
        .clear()
        .type(cadastro["customer.address.state"])

    cy.get('input[id="customer.address.zipCode"]')
        .clear()
        .type(cadastro["customer.address.zipCode"])

    cy.get('input[id="customer.phoneNumber"]')
        .clear()
        .type(cadastro["customer.phoneNumber"])
        .invoke('val')
        .should('have.length', 15)  //Telefone deve ter tamanho 15
        .and('match', /^[\d]*$/)   //Telefone deve conter somente números

    cy.get('input[id="customer.ssn"]')
        .clear()
        .type(cadastro["customer.ssn"])

    //Preenchimento de Usuário e Senha
    cy.get('input[id="customer.username"]').clear().type(cadastro["customer.username"])
    cy.get('input[id="customer.password"]').clear().type(cadastro["customer.password"])
    cy.get('input[id="repeatedPassword"]').clear().type(cadastro["customer.password"])

    //Botão de registro
    cy.get('input[value="Register"]').click()

})