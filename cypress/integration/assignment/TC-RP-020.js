/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Password Validation", function () {
    //Check the password for less value than minimum

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get("#Email").type(email).should("have.value", email);

      cy.fixture("passwords").then((passwords) => {
        passwords.invalid.forEach((password) => {
          cy.get("#Password").type(password).clear().type(password);
          cy.get("#register-button").click();
          cy.get(".left > .field-validation-error > span").should(
            "have.text",
            "Lozinka treba imati najmanje 6 znakova."
          );
        });
      });
    });
  });
});
