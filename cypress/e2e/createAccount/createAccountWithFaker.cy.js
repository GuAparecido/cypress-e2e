/*
    - Deve inserir um novo usuário e validar se o usuário já foi cadastrado
        - Quando o usuário informar todos os dados e as validações
        - estiverem de acordo com a funcionalidade, ao clicar em
        - criar uma nova conta então o usuário deverá ser cadastrado 
        - e uma mensagem de sucesso deverá ser apresentado, caso contrário
        - deverá receber uma mensagem de erro e o usuário não será cadastrado.
*/

import { faker } from '@faker-js/faker';

describe('Suíte de Testes Magento - Com uso de biblioteca faker.', () => {
    
    //gerar dados randomicos
    const primeiroNome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    const senha = faker.internet.password();
    
    // Acessar página
    beforeEach(() => {
        cy.visit('http://magento2-demo.magebit.com')
    })

    // Criando uma conta
    it('Quando o usuário cadastrar um novo registro com todos os campos preenchidos corretamente, então o usuário deverá ser cadastrado.', () => {
        // Rodando no beforeEach
        // cy.visit('http://magento2-demo.magebit.com')
        cy.contains('Create an Account').should('exist').first().click()
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/')

        //Inserir valores nos campos
        cy.get('#firstname').type(primeiroNome)
        cy.get('#lastname').type(sobrenome)
        cy.get('#is_subscribed').click()
        cy.get('#email_address').type(email)
        cy.get('#password').type(senha)
        cy.get('#password-confirmation').type(senha)

        //Submeter o forms
        cy.get('button[title="Create an Account"]').click()

        // Apresentar a mensagem de sucesso
        cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')
        
    })

    // Duplicidade de usuário
    it('Validando duplicidade de usuário. Deev retornar uma mensagem de erro', () => {
        // Rodando no beforeEach
        // cy.visit('http://magento2-demo.magebit.com')
        cy.contains('Create an Account').should('exist').first().click()
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/')

        //Inserir valores nos campos
        cy.get('#firstname').type(primeiroNome)
        cy.get('#lastname').type(sobrenome)
        cy.get('#is_subscribed').click()
        cy.get('#email_address').type(email)
        cy.get('#password').type(senha)
        cy.get('#password-confirmation').type(senha)

        //Submeter o forms
        cy.get('button[title="Create an Account"]').click()

        // Apresentar a mensagem de sucesso
        // cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')
        // Apresentar mensagem de erro
        cy.get('.message-error').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
})
