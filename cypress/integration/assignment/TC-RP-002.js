/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Required Fields", function () {
    //Check all required fields by not entering the data

    cy.visit("https://www.links.hr/hr/register");

    cy.get("#eu-cookie-ok").click();

    cy.get("#register-button").click();

    cy.get(
      ":nth-child(3) > .form-fields > :nth-child(2) > .field-validation-error > span"
    ).should("have.text", "Ime je potrebno");
    cy.get(
      ":nth-child(3) > .form-fields > .right > .field-validation-error > span"
    ).should("have.text", "Prezime je potrebno.");
    cy.get(":nth-child(5) > .field-validation-error > span").should(
      "have.text",
      "Elektronska pošta je potrebna"
    );
    cy.get(
      ":nth-child(7) > .form-fields > .left > .field-validation-error > span"
    ).should("have.text", "Lozinka je potrebna.");
    cy.get(
      ":nth-child(7) > .form-fields > .right > .field-validation-error > span"
    ).should("have.text", "Lozinka je potrebna.");
  });
});
