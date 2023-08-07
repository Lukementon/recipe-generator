context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should find our home page', () => {
    cy.get('[data-cy="title"]').contains('Recipe Genie');
  });

  it('should find category names', () => {
    cy.get('[data-cy="categories"]').as('categories').contains('Categories');
    cy.get('[data-cy="category-list"]').as('category-list');
    cy.get('@category-list').contains('Beef');
    cy.get('@category-list').contains('Chicken');
    cy.get('@category-list').contains('Vegan');
  });

  it('should navigate to /meals/Beef', () => {
    cy.get('[data-cy="view-btn"]').contains('View Meals').eq(0).click();
    cy.url().should('include', '/meals/Beef');
    cy.get('[data-cy="card"]').eq(0).contains('Beef and Mustard Pie');
  });
});
