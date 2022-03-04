/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Password Validation", function () {
    //Check the password and the password confirmation with unmatching data

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get("#Email").type(email).should("have.value", email);

      cy.get("#Password").type("HelloWorld");
      cy.get("#ConfirmPassword").type("WorldHello");

      cy.get("#register-button").click();

      cy.get(".field-validation-error > span").should(
        "have.text",
        "Lozinka i potvrda lozinke se ne podudaraju."
      );
    });
  });
});
