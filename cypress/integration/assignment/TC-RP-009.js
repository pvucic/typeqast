/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Optional Fields", function () {
    //Check the optional additional registration form as a legal entity without entering any data for the legal entity

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#RegisterAsCompany").check().should("be.checked");

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get("#Email").type(email).should("have.value", email);

      cy.get("#Password").type("lozinka");
      cy.get("#ConfirmPassword").type("lozinka");

      cy.get("#register-button").click();

      cy.get(":nth-child(1) > .field-validation-error").should(
        "have.text",
        "Tvrtka je potrebna."
      );
      cy.get(":nth-child(2) > .field-validation-error").should(
        "have.text",
        "OIB tvrtke je potreban"
      );
      cy.get(":nth-child(6) > .field-validation-error").should(
        "have.text",
        "Adresa 1 je potrebna."
      );
      cy.get(":nth-child(7) > .field-validation-error").should(
        "have.text",
        "Poštanski broj je potreban"
      );
      cy.get(":nth-child(8) > .field-validation-error").should(
        "have.text",
        "Grad je potreban"
      );
      cy.get(":nth-child(10) > .field-validation-error").should(
        "have.text",
        "Država je potrebna."
      );
    });
  });
});
