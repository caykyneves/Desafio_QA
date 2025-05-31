describe("Excluir produto do carrinho", () => {
  beforeEach(() => {
    cy.visit("https://app-hom.cocobambu.com/delivery");
  });

  it("deve adicionar e excluir um produto do carrinho", () => {
    cy.loginComSenhaEOtp("desafio.qa2025@gmail.com", "Teste123@@", "AAAAAA");
    // Adiciona o produto
    cy.contains('span.item-name', 'Camarão Coco Bambu (Inteiro)', { timeout: 20000 })
      .scrollIntoView({ offset: { top: -100, left: 0 } })
      .click({ force: true });

    cy.contains("button", "ADICIONAR").first().click();

    // Abre sacola e remove item
    cy.contains('span.bag-button-items-quantity', 'Ver sacola').click();
    cy.get('ion-button.edit-item-button').first().click({ force: true });

    cy.contains('Remover', {timeout: 20000 }).then($btn => $btn[0].click());
    cy.contains('button.alert-button', 'Sim', { timeout: 20000 }).click({ force: true });
  });
});

