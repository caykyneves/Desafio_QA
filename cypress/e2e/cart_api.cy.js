describe('API - Carrinho de Compras (DummyJSON)', () => {
  const baseUrl = 'https://dummyjson.com/carts';

  it('Deve adicionar item ao carrinho', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/add`,
      body: {
        userId: 1,
        products: [
          {
            id: 1,
            quantity: 2,
          },
        ],
      },
    }).then((response) => {
      
 expect([200, 201]).to.include(response.status);


      expect(response.body).to.have.property('id');
      expect(response.body.products[0].quantity).to.eq(2);
    });
  });

  it('Deve atualizar item no carrinho', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/1`, // carrinho com ID 1
      body: {
        products: [
          {
            id: 1,
            quantity: 5,
          },
        ],
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.totalQuantity).to.eq(5);
    });
  });

  it('Deve remover um carrinho', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/1`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });
});
