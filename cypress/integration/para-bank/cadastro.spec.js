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
            url: 'https://parabank.parasoft.com/parabank/register.htm'
        }).then((resposta)=>{
            expect(resposta.status).to.be.eq(200)
            cy.get(".smallText").should('contain.text', `Welcome ${teste["customer.firstName"]} ${teste["customer.lastName"]}`)
            cy.get(".title").should('contain.text', `Welcome ${teste["customer.username"]}`)
        })
    })

    it('Realizar Cadastro de usuário já existente', ()=>{

        //Para esse caso de teste é necessário fazer o registro novamente pois a base de dados é resetada de tempos em tempo, 
        //em outros casos não seria necessária essa etapa.
        cy.limparDB() //Comando personalizado para limpar o banco de dados e voltar para a página de registro
        cy.registrarUsuario()
        //Log out após o cadastro do usuário
        cy.contains('a', 'Log Out').click()
        cy.contains('a', 'Register').click()

        
        cy.registrarUsuario()
        cy.get('span[id="customer.username.errors"]').should('contain.text', 'This username already exists.')

    })
})