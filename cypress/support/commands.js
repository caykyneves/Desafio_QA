Cypress.Commands.add('loginComSenhaEOtp', (email, senha, otpCode) => {
  cy.contains("div.nav-button", "Perfil").click();
  cy.contains("div.option-item.clickable", "Entrar").click();

  cy.get('input[name="username"]').should("be.visible").type(email);
  cy.get('input[name="password"]').should("be.visible").type(senha);
  cy.contains("button", "ENTRAR").click();
  cy.contains("button", "FECHAR").click();

  cy.get("ng-otp-input input.otp-input")
    .should("have.length", 6)
    .each((input, index) => {
      cy.wrap(input).type(otpCode[index]);
    });

  cy.contains("button", "ACESSAR").click();
});
