✅ Desafio QA
Este repositório contém a solução para o desafio de QA, com foco em automação de testes funcionais em uma plataforma de delivery.

📌 Objetivo
Garantir a qualidade dos principais fluxos de compra na plataforma, validando cenários críticos através de testes automatizados usando Cypress.

🧪 Testes Automatizados
Foram identificados e automatizados os seguintes cenários dentro do Fluxo do Carrinho:

1. Adicionar produto ao carrinho
gherkin
Copiar
Editar
Cenário: Adicionar produto ao carrinho
  Dado que o cliente está logado na plataforma
  Quando ele selecionar um produto e clicar em “Adicionar”
  Então o produto deve aparecer na sacola
Arquivo: adicionar_produto_carrinho.cy.js
Valida que o produto é adicionado com sucesso ao carrinho.

2. Editar produto no carrinho
gherkin
Copiar
Editar
Cenário: Editar produto no carrinho
  Dado que o cliente adicionou um produto ao carrinho
  Quando ele acessar o carrinho e clicar em “Editar”
  E modificar a observação
  Então o carrinho deve refletir a alteração
Arquivo: editar_produto_carrinho.cy.js
Altera informações do item no carrinho, como a observação.

3. Excluir produto do carrinho
gherkin
Copiar
Editar
Cenário: Excluir produto do carrinho
  Dado que o cliente possui itens na sacola
  Quando ele clicar em “Remover”
  Então o item deve ser excluído do carrinho
Arquivo: excluir_produto_carrinho.cy.js
Remove um item previamente adicionado ao carrinho.

4. Finalizar compra com pagamento
gherkin
Copiar
Editar
Cenário: Finalizar pedido com pagamento
  Dado que o cliente adicionou um produto e acessou o carrinho
  Quando ele escolher a forma de pagamento, preencher CPF e telefone
  Então o pedido deve ser finalizado com sucesso
Arquivo: pagar_produto_carrinho.cy.js
Simula o fluxo completo: adicionar produto, escolher forma de pagamento e confirmar o pedido.

🔐 Dados de Login
O sistema requer autenticação via e-mail, senha e OTP. Os dados estão armazenados em login.json:

json
Copiar
Editar
{
  "email": "desafio.qa2025@gmail.com",
  "senha": "Teste123@@",
  "otp": "AAAAAA"
}
A função customizada cy.loginComSenhaEOtp() é usada para autenticar o usuário no sistema antes dos testes.

📁 Estrutura de Pastas
pgsql
Copiar
Editar
├── cypress
│   └── e2e
│       ├── adicionar_produto_carrinho.cy.js
│       ├── editar_produto_carrinho.cy.js
│       ├── excluir_produto_carrinho.cy.js
│       └── pagar_produto_carrinho.cy.js
├── cypress
│   └── fixtures
│       └── login.json
⚙️ Como rodar o projeto
Instale as dependências:
bash
Copiar
Editar
npm install
Execute os testes com Cypress:
bash
Copiar
Editar
npx cypress open
Escolha o teste desejado na interface.

Ou rode em modo headless:
bash
Copiar
Editar
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

Feito por Cayky Vieira
