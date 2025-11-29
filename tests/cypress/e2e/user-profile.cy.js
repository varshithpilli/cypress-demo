describe('User Profile', () => {
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

  it('should display user profile page correctly', () => {
    cy.visit('/profile.html');
    cy.contains('User Profile').should('be.visible');
    cy.get('.profile-header').should('be.visible');
    cy.get('.profile-avatar').should('be.visible');
    cy.get('.profile-header h2').should('contain', 'John Doe');
    cy.get('.profile-header p').should('contain', 'john@example.com');
  });

  it('should display order history section', () => {
    cy.visit('/profile.html');
    cy.get('.profile-section').contains('Order History').should('be.visible');
    cy.get('#order-history').should('be.visible');
    cy.get('#order-history').contains('No order history available.').should('be.visible');
  });

  it('should display delivery addresses section', () => {
    cy.visit('/profile.html');
    cy.get('.profile-section').contains('Delivery Addresses').should('be.visible');
    cy.get('#delivery-addresses').should('be.visible');
    cy.get('#delivery-addresses').contains('No saved addresses.').should('be.visible');
  });

  it('should have working logout button', () => {
    cy.visit('/profile.html');
    cy.get('#logout-btn').should('be.visible');
    cy.get('#logout-btn').click();
    cy.contains('You have been logged out.').should('be.visible');
    cy.url().should('include', '/index.html');
  });
});