describe('Suíte de testes para inserir / adicionar produtos ao carrinho de compras.', () => {

    function adicionaItemCarrinho(quant, categoryProduct){
        //Deve acessar categoria women (mulher)
        cy.contains(categoryProduct).should('exist').first().click();
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
        cy.get('#qty').clear().type(quant);
        //Adicionar produto ao carrinho
        cy.get('#product-addtocart-button').first().click();
    }

    it('Deve cadastrar uma nova conta e adicionar um produto ao carrinho com 6 itens.', () => {
        // Chamando o comando customizado, de cadastrar nova conta
        cy.createAccount();
        adicionaItemCarrinho(5, 'Women');  
    })

    it('Deve cadastrar uma nova conta e adicionar um produto ao carrinho com 6 itens.', () => {
        // Chamando o comando customizado, de cadastrar nova conta
        cy.createAccount();
        adicionaItemCarrinho(10, 'Women');
    })

    it('Deve cadastrar a conta, adicionar produto ao carrinho e verificar produto ao carrinho.', () => {
        cy.createAccount();
        adicionaItemCarrinho(10, 'Women');
        cy.get('.showcart').first().click();
        cy.get('.product-item-name').should('contain', 'Radiant Tee');
    })
})