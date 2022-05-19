/// <reference types="cypress" />

describe ('Casos para cadastro de usuário', ()=>{
    beforeEach(()=>{
        cy.visit('register.htm') //Entra na página de registro - baseUrl no arquivo cypress.json

        //Verifica o método GET retornou 200
        cy.request({
            method: 'GET',
            url:  'register.htm'
        }).then((resposta)=>{
            expect(resposta.status).to.be.eq(200)
        })
    })

    
    it('Realizar cadastro', ()=>{
        const cadastro = require("../../fixtures/registro.json")

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

        cy.request({
            method: 'POST',
            url: 'https://parabank.parasoft.com/parabank/register.htm;*'
        }).then((resposta)=>{
            expect(resposta.status).to.be.eq(200)
            //expect().to.be.eq(`Welcome ${cadastro["customer.username"]}`)
        })

    })
})