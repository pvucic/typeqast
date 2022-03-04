/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Optional Fields", function () {
    //Verify the date of birth drop-down field

    cy.visit("https://www.links.hr/hr/register");

    cy.get("#eu-cookie-ok").click();

    cy.get('[name="DateOfBirthDay"]').select("26").should("have.value", "26");
    cy.get('[name="DateOfBirthMonth"]')
      .select("ožujak")
      .should("contain", "ožujak");
    cy.get('[name="DateOfBirthYear"]')
      .select("1992")
      .should("have.value", "1992");
  });
});
