class LoginPage{



    visit() {
        cy.visit('/');  
    }
    
    clickLoginButton() {
        cy.contains('Login').click();
    }

    enterEmail(email) {
        cy.get('input[name="email"]').type(email);
    }
    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }
    clickSignInButton() {
        cy.get('button[type="submit"]').click();
    }
    loginSuccess() {
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome back').should('be.visible');
    }
 

}
export default new LoginPage();