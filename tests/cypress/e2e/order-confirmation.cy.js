describe('Order Confirmation', () => {
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
  });

  it('should display order confirmation page correctly', () => {
    cy.url().should('include', '/order-confirmation.html');
    cy.get('.confirmation-icon .checkmark').should('be.visible');
    cy.contains('Order Confirmed!').should('be.visible');
    cy.contains('Thank you for your order. Your food is being prepared and will be delivered soon.').should('be.visible');
  });

  it('should display order details correctly', () => {
    cy.get('#order-id').should('not.be.empty');
    cy.get('#delivery-time').should('not.be.empty');
    cy.get('#confirmed-order-items').should('be.visible');
    cy.get('#confirmed-order-items ul li').should('have.length.gte', 1);
    cy.get('#confirmed-order-subtotal').should('not.be.empty');
    cy.get('#confirmed-order-delivery-fee').should('not.be.empty');
    cy.get('#confirmed-order-tax').should('not.be.empty');
    cy.get('#confirmed-order-total').should('not.be.empty');
  });

  it('should have working confirmation actions', () => {
    cy.get('.confirmation-actions .btn').contains('Continue Shopping').should('be.visible');
    cy.get('.confirmation-actions .btn').contains('View Order History').should('be.visible');
  });
});