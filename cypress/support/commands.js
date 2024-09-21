import { faker } from '@faker-js/faker';

Cypress.Commands.add('createAccount', () => {
    // Visitando a página de cadastro
    cy.visit('https://magento2-demo.magebit.com/customer/account/create/');

    // Gerar dados randomicos
    const primeiroNome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    // Preencher os dados para cadastro
    cy.get('#firstname').type(primeiroNome)
    cy.get('#lastname').type(sobrenome)
    cy.get('#is_subscribed').click()
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(password)

    // Enviar o forms e verificar o cadastro com sucesso
     cy.get('button[title="Create an Account"]').click()
     cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')
}) 
