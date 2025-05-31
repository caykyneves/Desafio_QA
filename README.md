✅ Desafio QA - Coco Bambu

Este repositório contém a solução para o desafio de QA proposto pelo Coco Bambu, com foco em automação de testes funcionais em uma plataforma de delivery.

📌 Objetivo

Garantir a qualidade dos principais fluxos de compra na plataforma, validando cenários críticos através de testes automatizados usando Cypress.

🧪 Testes Automatizados

Foram identificados e automatizados os seguintes cenários dentro do Fluxo do Carrinho:

1. Adicionar produto ao carrinho

Arquivo: adicionar_produto_carrinho.cy.js

Valida que o produto é adicionado com sucesso ao carrinho.

2. Editar produto no carrinho

Arquivo: editar_produto_carrinho.cy.js

Altera informações do item no carrinho, como a observação.

3. Excluir produto do carrinho

Arquivo: excluir_produto_carrinho.cy.cy.js

Remove um item previamente adicionado ao carrinho.

4. Finalizar compra com pagamento

Arquivo: pagar_produto_carrinho.cy.js

Simula o fluxo completo: adicionar produto, escolher forma de pagamento e confirmar o pedido.

🔐 Dados de Login

O sistema requer autenticação via e-mail, senha e OTP. Os dados estão armazenados em login.json:

{
  "email": "desafio.qa2025@gmail.com",
  "senha": "Teste123@@",
  "otp": "AAAAAA"
}

A função customizada cy.loginComSenhaEOtp() é usada para autenticar o usuário no sistema antes dos testes.

📁 Estrutura de Pastas

├── cypress
│   └── e2e
│       ├── adicionar_produto_carrinho.cy.js
│       ├── editar_produto_carrinho.cy.js
│       ├── excluir_produto_carrinho.cy.cy.js
│       └── pagar_produto_carrinho.cy.js
├── cypress
│   └── fixtures
│       └── login.json

⚙️ Como rodar o projeto

Instale as dependências:

npm install

Execute os testes com Cypress:

npx cypress open

Escolha o teste desejado para rodar via interface.

Ou rode em modo headless:

npx cypress run

✅ Boas práticas aplicadas

Uso de comandos customizados para login.

Testes independentes e reexecutáveis.

Cobertura de cenários positivos e negativos.

Código limpo, comentado e organizado.

Casos de teste no padrão BDD, descritos claramente.

👨‍💻 Tecnologias

Cypress

JavaScript (ES6)

📌 Considerações finais

A automação foi focada nos principais fluxos de compra, alinhada à proposta do desafio. Todos os testes visam garantir que a experiência de compra no delivery seja estável, funcional e sem impedimentos críticos.

Feito com 💻 por [Seu Nome]

Cayky Vieira
