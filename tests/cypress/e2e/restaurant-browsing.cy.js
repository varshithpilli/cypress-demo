describe('Restaurant Browsing', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.clear();
    });
    const testUser = [
      { id: 1, name: "John Doe", email: "john@example.com", password: "password123" }
    ];
    cy.window().then((win) => {
      win.localStorage.setItem('users', JSON.stringify(testUser));
    });
  });

  it('should display homepage content correctly', () => {
    cy.visit('/index.html');
    cy.contains('Order Food Online').should('be.visible');
    cy.contains('Discover delicious meals from the best local restaurants delivered to your doorstep.').should('be.visible');
    cy.get('.btn').contains('Order Now').should('be.visible');
    cy.get('.btn').contains('View Restaurants').should('be.visible');
    cy.get('.restaurant-grid').should('be.visible');
  });

  it('should have working navigation links', () => {
    cy.visit('/index.html');
    cy.get('a').contains('Home').click();
    cy.url().should('include', '/index.html');
    cy.get('a').contains('Restaurants').click();
    cy.url().should('include', '/restaurants.html');
    cy.get('a').contains('Cart').click();
    cy.url().should('include', '/login.html');
  });

  it('should display all restaurants on restaurants page', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').should('have.length.gte', 1);
    cy.get('.restaurant-image').should('have.length.gte', 1);
    cy.get('.restaurant-card').each(($el) => {
      cy.wrap($el).find('h3').should('not.be.empty');
      cy.wrap($el).find('.restaurant-cuisine').should('not.be.empty');
      cy.wrap($el).find('.restaurant-rating').should('not.be.empty');
      cy.wrap($el).find('button').contains('View Menu').should('be.visible');
    });
  });

  it('should display restaurant images correctly', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-image').each(($img) => {
      cy.wrap($img).should('have.attr', 'src');
      cy.wrap($img).should('be.visible');
    });
  });

  it('should filter restaurants based on search term', () => {
    cy.visit('/restaurants.html');
    cy.get('#search').type('Pizza');
    cy.wait(1000);
    cy.get('.restaurant-card:visible').should('have.length.gte', 1);
    cy.contains('Pizza Palace').should('be.visible');
  });

  it('should filter restaurants by cuisine', () => {
    cy.visit('/restaurants.html');
    cy.get('#cuisine').select('Italian');
    cy.wait(1000);
    cy.get('.restaurant-card:visible').should('have.length.gte', 1);
    cy.get('.restaurant-card:visible').each(($el) => {
      cy.wrap($el).should('have.attr', 'data-cuisine', 'Italian');
    });
  });

  it('should show all restaurants when clearing filters', () => {
    cy.visit('/restaurants.html');
    cy.get('#search').type('Pizza');
    cy.wait(1000);
    cy.get('.restaurant-card:visible').should('have.length.gte', 1);
    cy.get('#search').clear();
    cy.wait(1000);
    cy.get('.restaurant-card:visible').should('have.length.gte', 1);
    cy.get('#cuisine').select('Italian');
    cy.wait(1000);
    cy.get('.restaurant-card:visible').should('have.length.gte', 1);
    cy.get('#cuisine').select('');
    cy.wait(1000);
    cy.get('.restaurant-card:visible').should('have.length.gte', 1);
  });

  it('should navigate to restaurant detail page', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.url().should('include', '/restaurant-detail.html');
    cy.get('#restaurant-header').should('be.visible');
    cy.get('.menu-grid').should('be.visible');
  });
});