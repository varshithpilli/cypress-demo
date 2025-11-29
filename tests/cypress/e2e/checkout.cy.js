describe('Checkout Process', () => {
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

  it('should display empty cart message on checkout when cart is empty', () => {
    cy.visit('/checkout.html');
    cy.contains('Your cart is empty').should('be.visible');
  });

  it('should display order summary when cart has items', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.visit('/checkout.html');
    cy.get('#order-items').should('be.visible');
    cy.get('#order-items ul li').should('have.length.gte', 1);
    cy.get('#order-subtotal').should('not.be.empty');
    cy.get('#order-delivery-fee').should('not.be.empty');
    cy.get('#order-tax').should('not.be.empty');
    cy.get('#order-total').should('not.be.empty');
  });

  it('should show error for missing delivery information', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible');
    cy.visit('/checkout.html');
    cy.get('.place-order-btn').click();
    cy.contains('Please fill in all delivery information.').should('be.visible');
  });

  it('should allow placing order with valid delivery information', () => {
    cy.visit('/restaurants.html');
    cy.get('.restaurant-card').first().contains('View Menu').click();
    cy.get('.menu-item-card').first().contains('Add to Cart').click();
    cy.contains('added to cart!', { timeout: 10000 }).should('be.visible'); 
    cy.visit('/checkout.html');
    cy.get('#fullname').type('John Doe');
    cy.get('#address').type('123 Main Street, City, State');
    cy.get('#phone').type('1234567890');
    cy.get('.place-order-btn').click();
    cy.contains('Order placed successfully!', { timeout: 10000 }).should('be.visible');
    cy.url().should('include', '/order-confirmation.html');
  });
});