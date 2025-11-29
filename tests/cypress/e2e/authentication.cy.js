describe('User Authentication', () => {
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

  it('should display login page correctly', () => {
    cy.visit('/login.html');
    cy.contains('Login to Your Account').should('be.visible');
    cy.get('#login-email').should('be.visible');
    cy.get('#login-password').should('be.visible');
    cy.get('button[type="submit"]').contains('Login').should('be.visible');
    cy.contains('Register here').should('be.visible');
  });

  it('should allow user to login with valid credentials', () => {
    cy.visit('/login.html');
    cy.get('#login-email').type('john@example.com');
    cy.get('#login-password').type('password123');
    cy.get('form').submit();
    cy.contains('Login successful!', { timeout: 10000 }).should('be.visible');
    cy.url().should('include', '/index.html');
    cy.contains('Welcome, John Doe').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login.html');
    cy.get('#login-email').type('invalid@example.com');
    cy.get('#login-password').type('wrongpassword');
    cy.get('form').submit();
    cy.contains('Invalid email or password. Please try again.').should('be.visible');
  });

  it('should show error for missing fields', () => {
    cy.visit('/login.html');
    cy.get('form').submit();
    cy.contains('Please enter both email and password.').should('be.visible');
  });

  it('should display registration page correctly', () => {
    cy.visit('/register.html');
    cy.contains('Create an Account').should('be.visible');
    cy.get('#reg-name').should('be.visible');
    cy.get('#reg-email').should('be.visible');
    cy.get('#reg-password').should('be.visible');
    cy.get('#confirm-password').should('be.visible');
    cy.get('button[type="submit"]').contains('Register').should('be.visible');
    cy.contains('Login here').should('be.visible');
  });

  it('should allow user to register with valid details', () => {
    cy.visit('/register.html');
    cy.get('#reg-name').type('Jane Smith');
    cy.get('#reg-email').type('jane@example.com');
    cy.get('#reg-password').type('password123');
    cy.get('#confirm-password').type('password123');
    cy.get('form').submit();
    cy.contains('Registration successful! Please login.').should('be.visible');
    cy.url().should('include', '/login.html');
  });

  it('should show error for mismatched passwords', () => {
    cy.visit('/register.html');
    cy.get('#reg-name').type('Jane Smith');
    cy.get('#reg-email').type('jane@example.com');
    cy.get('#reg-password').type('password123');
    cy.get('#confirm-password').type('differentpassword');
    cy.get('form').submit();
    cy.contains('Passwords do not match!').should('be.visible');
  });

  it('should show error for missing registration fields', () => {
    cy.visit('/register.html');
    cy.get('form').submit();
    cy.contains('Please fill in all fields.').should('be.visible');
  });

  it('should prevent registration with existing email', () => {
    cy.visit('/register.html');
    cy.get('#reg-name').type('Another User');
    cy.get('#reg-email').type('john@example.com');
    cy.get('#reg-password').type('password123');
    cy.get('#confirm-password').type('password123');
    cy.get('form').submit();
    cy.contains('User with this email already exists!').should('be.visible');
  });

  it('should allow user to logout', () => {
    cy.visit('/login.html');
    cy.get('#login-email').type('john@example.com');
    cy.get('#login-password').type('password123');
    cy.get('form').submit();
    cy.contains('Login successful!', { timeout: 10000 }).should('be.visible');
    cy.url().should('include', '/index.html');
    cy.contains('Welcome, John Doe', { timeout: 10000 }).should('be.visible');
    cy.wait(1000);
    cy.get('#logout-btn', { timeout: 10000 }).should('be.visible').click();
    cy.contains('You have been logged out.', { timeout: 10000 }).should('be.visible');
    cy.url({ timeout: 10000 }).should('include', '/index.html');
    cy.contains('Login', { timeout: 10000 }).should('be.visible');
  });
});