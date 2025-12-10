class LoginPage{
    visit() {
    cy.visit("https://connectlimit.s2-tastewp.com/wp-admin");
  }

  enterUsername(username) {
    cy.get("#user_login").type(username);
  }

  enterPassword(password) {
    cy.get("#user_pass").type(password);
  }

  clickLogin() {
    cy.get("#wp-submit").click();
  }
}
export default LoginPage;