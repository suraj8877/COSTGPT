/// <reference types="cypress" />



import LoginPage from '../../pageObjects/LoginPage';

describe('CostGPT Pro – Login flow', () => {
 
  const email    = Cypress.env('CGPT_USER');
  const password = Cypress.env('CGPT_PASS');

  beforeEach(() => {
     LoginPage.visit();
     LoginPage.clickLoginButton();
  });

  it('log in successfully with valid credentials', () => {
    cy.intercept('POST', '/api/auth/login').as('loginRequest');
    LoginPage.enterEmail(email);
    LoginPage.enterPassword(password);
    LoginPage.clickSignInButton();
    cy.wait('@loginRequest');
    LoginPage.loginSuccess();


  });
});
