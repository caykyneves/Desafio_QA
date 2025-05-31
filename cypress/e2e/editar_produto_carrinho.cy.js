describe("Editar produto no carrinho", () => {
  beforeEach(() => {
    cy.visit("https://app-hom.cocobambu.com/delivery");
  });

  it("deve adicionar e editar um produto no carrinho", () => {
    // Login via comando customizado
    cy.loginComSenhaEOtp("desafio.qa2025@gmail.com", "Teste123@@", "AAAAAA");

    // Adicionar produto ao carrinho
    cy.contains('span.item-name', 'Camarão Coco Bambu (Inteiro)', { timeout: 20000 })
      .scrollIntoView({ offset: { top: -100, left: 0 } })
      .should('be.visible')
      .click({ force: true });

    cy.contains("button", "ADICIONAR").first().click();

    // Acessar o carrinho
    cy.contains('span.bag-button-items-quantity', 'Ver sacola', { timeout: 10000 }).click();

    // Clicar em editar o item
    cy.get('ion-button.edit-item-button').first().click({ force: true });

    cy.contains('Editar').click({ force: true });

    // Aguardar e preencher observação
    cy.get('textarea[formcontrolname="textInput"]', { timeout: 10000 })
      .should('be.visible')
      .and('not.be.disabled')
      .type('Sem ervilha, por favor');

    // Confirmar edição
    cy.contains("button", "ATUALIZAR").first().click();
  });
});
