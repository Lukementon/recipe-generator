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
    cy.get('@category-list').contains('Pasta');
    cy.get('@category-list').contains('Starter');
    cy.get('@category-list').contains('Side');
    cy.get('@category-list').contains('Vegetarian');
  });
});
