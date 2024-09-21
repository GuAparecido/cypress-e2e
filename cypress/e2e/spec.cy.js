var CAMPO_CPF = '#mat-input-0';
var CAMPO_DATA_NASCIMENTO = '#mat-input-1';

describe('Suíte de testes do Google', () => {
  it('Deve acessar a página do Google, e validar o título', () => {
    cy.visit('https://www.google.com');
    cy.title().should('eq', 'Google');
  });
});

describe('Suítes de teste do Integrado', () => {
  it('Deve visitar a página do Integrado, validar o título e validar campos Área do Candidato e Inscreva-se.', () => {
    cy.visit('https://grupointegrado.br')
    cy.title().should('eq', 'Início | Centro Universitário Integrado')
    cy.contains('Área do candidato').should('exist')
    cy.contains('Inscreva-se').should('exist')
  })

  it('Deve clicar na opção área do candidato e validar url', () => {
    cy.visit('https://grupointegrado.br')
    cy.title().should('eq', 'Início | Centro Universitário Integrado')
    // Interagindo com elementos de click.
    cy.contains('Área do candidato').should('exist').first().click()
    // Validando url
    cy.url().should('eq', 'https://www.grupointegrado.br/#area-candidato')
  })

  it('Deve acessar a opção de Graduação e informar CPF, DATA NASCIMENTO.', () => {
    cy.visit('https://portal.apprbs.com.br/ceigraduacao/login')
    // Poderia utilizar a variável para não utilizar toda a descriçao como no campo de nasicmento
    cy.get('#mat-input-0').type('000.000.000-00');
    cy.get(CAMPO_DATA_NASCIMENTO).type('10/10/2000');
    cy.contains('Acessar').should('exist').first().click()

    // Validar mensagens de erro
    // Buscamos no inspecionar na notificação que aparece no erro
    cy.get('.ps-notification-title').should('have.text', 'Não foi possivel fazer o login')
  })
})

describe.only('Suíte de testes Magento.', () => {
  it('Deve acessar o Ecommerce, e validar o título.', () => {
    cy.visit('http://magento2-demo.magebit.com');
    cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
    cy.contains('Create an Account').should('exist').first().click()
    cy.get('#firstname').type('Jorge')
    cy.get('#lastname').type('Davi de Paula')
    cy.get('#is_subscribed').click()
    cy.get('#email_address').type('jorge.davi.depaula@cordeiromaquinas.com.br')
    cy.get('#password').type('LMm0AliYHI')
    cy.get('#password-confirmation').type('LMm0AliYHI')
    cy.get('button[title="Create an Account"]').click()
  });
})

/* 
[
  {
    "nome": "Jorge Davi de Paula",
    "idade": 62,
    "cpf": "238.450.980-23",
    "rg": "16.388.734-2",
    "data_nasc": "13/06/1962",
    "sexo": "Masculino",
    "signo": "Gêmeos",
    "mae": "Jennifer Nina",
    "pai": "Carlos Henrique Henry de Paula",
    "email": "jorge.davi.depaula@cordeiromaquinas.com.br",
    "senha": "LMm0AliYHI",
    "cep": "94465-310",
    "endereco": "Rua Conselheiro Lafayete",
    "numero": 279,
    "bairro": "Planalto",
    "cidade": "Viamão",
    "estado": "RS",
    "telefone_fixo": "(51) 2809-0187",
    "celular": "(51) 98612-6296",
    "altura": "1,69",
    "peso": 58,
    "tipo_sanguineo": "AB-",
    "cor": "roxo"
  },
  {
    "nome": "Josefa Elza Drumond",
    "idade": 30,
    "cpf": "175.422.403-23",
    "rg": "43.397.906-9",
    "data_nasc": "10/01/1994",
    "sexo": "Feminino",
    "signo": "Capricórnio",
    "mae": "Luna Regina",
    "pai": "Kaique Julio Guilherme Drumond",
    "email": "josefa-drumond74@ipk.org.br",
    "senha": "w7oiqQhUJU",
    "cep": "77829-130",
    "endereco": "Quadra 65",
    "numero": 437,
    "bairro": "Loteamento Costa Esmeralda",
    "cidade": "Araguaína",
    "estado": "TO",
    "telefone_fixo": "(63) 3655-6523",
    "celular": "(63) 99366-9116",
    "altura": "1,81",
    "peso": 73,
    "tipo_sanguineo": "AB-",
    "cor": "roxo"
  }
]
 */