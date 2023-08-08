context('UX Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should navigate to /meals/Beef, then navigate to /recipes/:id', () => {
    cy.get('[data-cy="view-btn"]').contains('View Meals').eq(0).click();
    cy.url().should('include', '/meals/Beef');
    cy.get('[data-cy="meals"]').contains('Beef and Mustard Pie');

    // Click first View Recipe button, navigate to dynamic page and test page content
    cy.get('[data-cy="view-btn"]').contains('View Recipe').eq(0).click();
    cy.url().should('include', '/recipes/52874');
    cy.get('[data-cy="recipe-page"]').contains('Beef and Mustard Pie');
    cy.get('[data-cy="recipe-image"]')
      .should('be.visible')
      .should('have.attr', 'src');
  });

  it('should search for egg and select first meal, navigating to /recipes/:id', () => {
    cy.get('[data-cy="search-bar"]')
      .as('search-bar')
      .type('egg')
      .type('{enter}');

    // Click View Recipe button, navigate to dynamic page and test page content
    cy.get('[data-cy="view-btn"]').contains('View Recipe').eq(0).click();
    cy.url().should('include', '/recipes/52952');
    cy.get('[data-cy="recipe-page"]').contains('Beef Lo Mein');
    cy.get('[data-cy="recipe-image"]')
      .should('be.visible')
      .should('have.attr', 'src');
  });
});
