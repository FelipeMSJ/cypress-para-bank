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

    
    it('Realizar novo cadastro', ()=>{
        cy.limparDB() //Comando personalizado para limpar o banco de dados e voltar para a página de registro
        cy.registrarUsuario()
    })

    it('Realizar Cadastro de usuário já existente', ()=>{

    })
})