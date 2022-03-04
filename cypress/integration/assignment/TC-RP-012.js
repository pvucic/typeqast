/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Optional Fields", function () {
    //Check automated Postal Code field

    cy.visit("https://www.links.hr/hr/register");

    cy.get("#eu-cookie-ok").click();

    cy.get('label[for="ZipPostalCode"]')
      .siblings('input[type="text"]')
      .type("11000");

    cy.wait(1000);

    cy.get("a").contains("11000 BEOGRAD, Serbia").click();

    cy.get('label[for="City"]')
      .siblings('input[type="text"]')
      .should("have.value", "BEOGRAD");

    cy.get("#CountryId_dropdown").find(":selected").should("contain", "Serbia");

    //Clear prevous Postal Code input
    cy.get('label[for="ZipPostalCode"]').siblings('input[type="text"]').clear();
    cy.get('label[for="City"]').siblings('input[type="text"]').clear();

    //Second input
    cy.get('label[for="ZipPostalCode"]')
      .siblings('input[type="text"]')
      .type("10000");

    cy.wait(1000);

    cy.get("a").contains("10000 ZAGREB, Croatia").click();

    cy.get('label[for="City"]')
      .siblings('input[type="text"]')
      .should("have.value", "ZAGREB");

    cy.get("#CountryId_dropdown")
      .find(":selected")
      .should("contain", "Croatia");
  });
});
