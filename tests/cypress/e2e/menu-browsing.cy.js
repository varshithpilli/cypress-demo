describe('Menu Browsing', () => {
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
    cy.visit('/login.html');
    cy.get('#login-email').type('john@example.com');
    cy.get('#login-password').type('password123');
    cy.get('form').submit();
    cy.contains('Login successful!', { timeout: 10000 }).should('be.visible');
  });

  it('should display restaurant details and menu items', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.url().should('include', '/restaurant-detail.html');
    cy.get('#restaurant-header').should('be.visible');
    cy.get('.restaurant-header-image').should('be.visible');
    cy.get('.restaurant-header-info h1').should('not.be.empty');
    cy.get('.restaurant-header-info p').should('not.be.empty');
    cy.get('.menu-item-card').should('have.length.gte', 1);
    cy.get('.menu-image').should('have.length.gte', 1);
    cy.get('.menu-item-card').each(($el) => {
      cy.wrap($el).find('h3').should('not.be.empty');
      cy.wrap($el).find('.menu-category').should('not.be.empty');
      cy.wrap($el).find('p').should('not.be.empty');
      cy.wrap($el).find('.menu-price').should('not.be.empty');
      cy.wrap($el).find('button').contains('Add to Cart').should('be.visible');
    });
  });

  it('should filter menu items by category', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.url().should('include', '/restaurant-detail.html');
    cy.get('#category').select('Main Course');
    cy.wait(1000);
    cy.get('.menu-item-card:visible').should('have.length.gte', 1);
    cy.get('.menu-item-card:visible').each(($el) => {
      cy.wrap($el).should('have.attr', 'data-category', 'Main Course');
    });
  });

  it('should add menu item to cart', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.url().should('include', '/restaurant-detail.html');
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.get('.cart-count').should('contain', '1');
  });

  it('should show all menu items when clearing category filter', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.url().should('include', '/restaurant-detail.html');
    cy.get('#category').select('Main Course');
    cy.wait(1000);
    cy.get('.menu-item-card:visible').should('have.length.gte', 1);
    cy.get('#category').select('');
    cy.wait(1000);
    cy.get('.menu-item-card:visible').should('have.length.gte', 1);
  });
});