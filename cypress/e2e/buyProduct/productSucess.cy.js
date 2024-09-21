import { faker } from '@faker-js/faker';

describe('Suíte de testes para inserir / adicionar produtos ao carrinho de compras.', () => {
    
    //gerar dados randomicos
    const primeiroNome = faker.person.firstName();
    const sobrenome = faker.person.lastName();
    const email = faker.internet.email();
    const senha = faker.internet.password();
    
    beforeEach(() => {
        cy.visit('http://magento2-demo.magebit.com')
    })

    it('Deve acessar um determinado produto na página, selecionar as opções disponíveis desse produto.', () => {
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

        //Deve acessar categoria women (mulher)
        cy.get('a[href*="women.html"]').first().click();
        //Outra forma
        //cy.contains('Women').should('exists').first().click();
        cy.get('.product-item-link').first().click();

        //Selecionando tamanho
        cy.get('#option-label-size-157-item-171').first().click();

        //Selecionando a cor do produto
        cy.get('#option-label-color-93-item-50').first().click();

        //Selecionando a quantidade do produto
        cy.get('#qty').clear().type('5');

        //Adicionar produto ao carrinho
        cy.get('#product-addtocart-button').first().click();

        // Abrir outro produto
        cy.get('#product-item_17').first().click();

        //Selecionando a quantidade do produto
        cy.get('#qty').clear().type('3');

        //Adicionar produto ao carrinho
        cy.get('#product-addtocart-button').first().click();
    })
})