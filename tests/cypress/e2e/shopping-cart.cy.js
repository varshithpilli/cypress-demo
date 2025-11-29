describe('Shopping Cart', () => {
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

  it('should display empty cart message when cart is empty', () => {
    cy.visit('/cart.html');
    cy.get('#empty-cart-message').should('be.visible');
    cy.contains('Your cart is empty').should('be.visible');
    cy.contains('Browse Restaurants').should('be.visible');
  });

  it('should display cart items when items are added', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    
    cy.visit('/cart.html');
    cy.get('#empty-cart-message').should('not.be.visible');
    cy.get('#cart-content').should('be.visible');
    cy.get('.cart-table tbody tr').should('have.length.gte', 1);
    cy.get('.cart-table tbody tr').each(($el) => {
      cy.wrap($el).find('img').should('be.visible');
      cy.wrap($el).find('td').eq(0).should('not.be.empty');
      cy.wrap($el).find('td').eq(1).should('not.be.empty');
      cy.wrap($el).find('td').eq(3).should('not.be.empty');
      cy.wrap($el).find('button').contains('Remove').should('be.visible');
    });
  });

  it('should update item quantity in cart', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.visit('/cart.html');
    cy.get('.quantity-control input').first().clear().type('3');
    cy.get('.quantity-control input').first().blur();
    cy.wait(1000);
    cy.get('.cart-table tbody tr').first().find('td').eq(2).find('input').should('have.value', '3');
  });

  it('should remove item from cart', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.visit('/cart.html');
    cy.get('.remove-btn').first().click();
    cy.wait(1000);
    cy.get('#empty-cart-message').should('be.visible');
  });

  it('should calculate cart totals correctly', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').eq(0).contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.get('.menu-item-card').eq(1).contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.visit('/cart.html');
    cy.get('#cart-subtotal').should('not.be.empty');
    cy.get('#delivery-fee').should('not.be.empty');
    cy.get('#tax-amount').should('not.be.empty');
    cy.get('#cart-total').should('not.be.empty');
  });
});