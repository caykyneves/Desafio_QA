✅ Desafio QA

Este repositório contém a solução para o desafio de QA, com foco em automação de testes funcionais e de API em uma plataforma de delivery.

📌 Objetivo

Garantir a qualidade dos principais fluxos de compra na plataforma, validando cenários críticos através de testes automatizados usando Cypress.

🧪 Testes Automatizados

### 🔸 Testes de Interface (UI)

Foram identificados e automatizados os seguintes cenários dentro do Fluxo do Carrinho:

**Adicionar produto ao carrinho**

* **Cenário:** Dado que o cliente está logado na plataforma, quando ele selecionar um produto e clicar em “Adicionar”, então o produto deve aparecer na sacola.
* **Arquivo:** `adicionar_produto_carrinho.cy.js`

**Editar produto no carrinho**

* **Cenário:** Dado que o cliente adicionou um produto ao carrinho, quando ele acessar o carrinho e clicar em “Editar” e modificar a observação, então o carrinho deve refletir a alteração.
* **Arquivo:** `editar_produto_carrinho.cy.js`

**Excluir produto do carrinho**

* **Cenário:** Dado que o cliente possui itens na sacola, quando ele clicar em “Remover”, então o item deve ser excluído do carrinho.
* **Arquivo:** `excluir_produto_carrinho.cy.js`

**Finalizar compra com pagamento**

* **Cenário:** Dado que o cliente adicionou um produto e acessou o carrinho, quando ele escolher a forma de pagamento, preencher CPF e telefone, então o pedido deve ser finalizado com sucesso.
* **Arquivo:** `pagar_produto_carrinho.cy.js`

### 🔸 Testes de API (DummyJSON)

Utilizando a API pública DummyJSON para simular ações de carrinho:

**Adicionar item ao carrinho**

* **Endpoint:** `POST /carts/add`
* **Cenário:** Enviar `userId` e `products`, validar status 201 e existência de `id` no retorno.

**Atualizar item no carrinho**

* **Endpoint:** `PUT /carts/1`
* **Cenário:** Atualizar quantidade de produtos, validar status 200 e nova `totalQuantity`.

**Remover carrinho**

* **Endpoint:** `DELETE /carts/1`

* **Cenário:** Excluir carrinho e validar status 200 e confirmação de exclusão.

* **Arquivo:** `cart_api.cy.js`

* **Técnicas usadas:**

  * Validação de status HTTP (200 e 201)
  * Teste de contrato (validação das propriedades retornadas)
  * Testes positivos e negativos (quando aplicável)

🔐 Dados de Login

O sistema requer autenticação via e-mail, senha e OTP. Os dados estão armazenados em `login.json`:

```json
{
  "email": "desafio.qa2025@gmail.com",
  "senha": "Teste123@@",
  "otp": "AAAAAA"
}
```

A função customizada `cy.loginComSenhaEOtp()` é usada para autenticar o usuário antes dos testes UI.

📁 Estrutura de Pastas

```
├── cypress
│   ├── e2e
│   │   ├── adicionar_produto_carrinho.cy.js
│   │   ├── editar_produto_carrinho.cy.js
│   │   ├── excluir_produto_carrinho.cy.js
│   │   ├── pagar_produto_carrinho.cy.js
│   │   └── cart_api.cy.js
│   └── fixtures
│       └── login.json
├── cypress.config.js
├── package.json
└── README.md
```

⚙️ Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Execute os testes com Cypress:

```bash
npx cypress open
```

Ou em modo headless:

```bash
npx cypress run
```

✅ Boas práticas aplicadas

* Uso de comandos customizados para login.
* Testes independentes e reexecutáveis.
* Cobertura de cenários positivos e negativos.
* Código limpo, comentado e organizado.
* Casos de teste descritos em estilo BDD.

👨‍💻 Tecnologias

* Cypress
* JavaScript (ES6)

📌 Considerações finais

A automação cobre os fluxos mais críticos da jornada do cliente, tanto na interface quanto na API, garantindo que o sistema funcione de ponta a ponta com estabilidade e segurança.

Feito por **Cayky Vieira**

