describe("Adicionar produto ao carrinho", () => {
  beforeEach(() => {
    cy.visit("https://app-hom.cocobambu.com/delivery");
  });

  it("deve adicionar um produto com sucesso ao carrinho", () => {
    cy.loginComSenhaEOtp("desafio.qa2025@gmail.com", "Teste123@@", "AAAAAA");

    // Limpar carrinho se necessário
    cy.get('body').then($body => {
      if ($body.find('span.bag-button-items-quantity').length > 0) {
        cy.contains('span.bag-button-items-quantity', 'Ver sacola').click();

        cy.get('body').then($body2 => {
          if ($body2.find('ion-button:contains("Remover")').length > 0) {
            cy.get('ion-button:contains("Remover")').each(() => {
              cy.contains("Remover").click({ force: true });
              cy.contains("Sim").click({ force: true });
              cy.wait(500);
            });
          }
        });
      }
    });

    cy.contains('span.item-name', 'Camarão Coco Bambu (Inteiro)', { timeout: 20000 })
      .scrollIntoView({ offset: { top: -100, left: 0 } })
      .should('be.visible')
      .click({ force: true });

    cy.contains("button", "ADICIONAR").click();

    cy.contains('span.bag-button-items-quantity', 'Ver sacola', { timeout: 10000 })
      .should('be.visible')
      .click();
  });
});




    
