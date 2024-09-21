describe('Suíte de testes E2E Magento: Create account.', () => {
    it('Acessando e cadastrando novo usuário', () => {
        cy.visit('http://magento2-demo.magebit.com');
        cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.contains('Create an Account').should('exist').first().click()

        // Verificando se realmente estamos na aba de cadastro
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/')

        // Inserir valores nos campos
        // Jorge
        // cy.get('#firstname').type('Jorge')
        // cy.get('#lastname').type('Davi de Paula')
        // cy.get('#is_subscribed').click()
        // cy.get('#email_address').type('jorge.davi.depaula@cordeiromaquinas.com.br')
        // cy.get('#password').type('LMm0AliYHI')
        // cy.get('#password-confirmation').type('LMm0AliYHI')

        //Josefa
        cy.get('#firstname').type('Josefa')
        cy.get('#lastname').type('Elza Drumond')
        cy.get('#is_subscribed').click()
        cy.get('#email_address').type('josefa-drumond74@ipk.org.br')
        cy.get('#password').type('w7oiqQhUJU')
        cy.get('#password-confirmation').type('w7oiqQhUJU')

        // Submeter o formulário com nome igual de dois buttons
        cy.get('button[title="Create an Account"]').click()

        // Apresentar a mensagem de sucesso
        cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.')

        // Apresentar a mensagem de falha
        cy.get('.message-error').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    })
})