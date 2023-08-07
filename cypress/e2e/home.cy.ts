context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should find our home page', () => {
    cy.get('h1').contains('Recipe Genie');
  });
});
