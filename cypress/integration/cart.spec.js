describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('add an item to the shopping cart, remove it, and add two different items', () => {
    cy.visit('/cart');

    cy.get('div [data-cy=cart] > ul')
      .should('exist')
      .get('div [data-cy=cart] > ul > li')
      .should('not.exist');

    cy.visit('/item-list');

    cy.get('[data-cy=item-list] > ul > :nth-child(3) > button').click();

    cy.contains('Go to cart').click();

    cy.get('div [data-cy=cart] > ul')
      .eq(0)
      .contains('Quantity:1')
      .eq(1)
      .should('not.exist');

    cy.get('[data-cy=cart] > ul > :nth-child(1) > button').click();

    cy.get('[data-cy=cart] > ul > :nth-child(1)').should('not.exist');

    cy.visit('/item-list');

    cy.get('[data-cy=item-list] > ul > :nth-child(2) > button').click();
    cy.get('[data-cy=item-list] > ul > :nth-child(1) > button').click();

    cy.contains('Go to cart').click();

    cy.get('div [data-cy=cart] > ul')
      .eq(0)
      .contains('Quantity:1')
      .eq(1)
      .should('Quantity:1')
      .eq(2)
      .should('not.exist');
  });
});
