describe("Adicionar produto ao carrinho", () => {
  beforeEach(() => {
    cy.visit("https://app-hom.cocobambu.com/delivery");
  });

  it("deve adicionar um produto com sucesso ao carrinho", () => {
    cy.loginComSenhaEOtp("desafio.qa2025@gmail.com", "Teste123@@", "AAAAAA");

    cy.contains('span.item-name', 'Camarão Coco Bambu (Inteiro)', { timeout: 20000 })
      .scrollIntoView({ offset: { top: -100, left: 0 } })
      .should('be.visible')
      .click({ force: true });

    cy.contains("button", "ADICIONAR").click();

    cy.contains('span.bag-button-items-quantity', 'Ver sacola', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains('button', 'SELECIONE FORMA DE PAGAMENTO', { timeout: 20000 }).click({ force: true });
    
    cy.contains('div.pix-payment', 'Google Pay', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });



    
  cy.contains('span.confirm-label', 'INFORME SEU CPF', { timeout: 10000 })
  .should('be.visible')
  .click({ force: true });


    cy.get('input#cpf').type('457.607.900-05');
    cy.get('#phone').type('11912345678'); 
    cy.contains('button', 'SALVAR').click();
    cy.contains('button', 'CONFIRMAR PEDIDO').click();
    cy.wait(1000); // opcional
cy.contains('button', 'CONFIRMAR E FAZER PEDIDO', { timeout: 10000 }).click({ force: true });

  });
});




    
