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

    
    it.only('Realizar novo cadastro', ()=>{
        const teste = require("../../fixtures/registro.json")

        cy.limparDB() //Comando personalizado para limpar o banco de dados e voltar para a página de registro
        cy.registrarUsuario()

        cy.request({
            method: 'POST',
            url: 'https://parabank.parasoft.com/parabank/register.htm;*'
        }).then((resposta)=>{
            expect(resposta.status).to.be.eq(200)
            cy.get(".smallText").should('contain.text', `Welcome ${teste["customer.firstName"]} ${teste["customer.lastName"]}`)
            cy.get(".title").should('contain.text', `Welcome ${teste["customer.username"]}`)
        })
    })

    it('Realizar Cadastro de usuário já existente', ()=>{

    })
})