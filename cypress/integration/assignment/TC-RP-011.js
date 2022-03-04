/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Optional Fields", function () {
    //Check by filling some optional fields and leaving some fields empty including an additional registration form as a legal entity

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#RegisterAsCompany").check().should("be.checked");

      cy.get("#Company")
        .type("FIRMA d.o.o.")
        .should("have.value", "FIRMA d.o.o.");
      cy.get("#CompanyOIB")
        .type("74867487000")
        .should("have.value", "74867487000");

      cy.get('label[for="CompanyZipPostalCode"]')
        .siblings('input[type="text"]')
        .type("11000");

      cy.wait(1000);

      cy.get("a").contains("11000 BEOGRAD, Serbia").click();

      cy.get('label[for="CompanyCity"]')
        .siblings('input[type="text"]')
        .should("have.value", "BEOGRAD");

      cy.get("#CompanyCountryId_dropdown")
        .find(":selected")
        .should("contain", "Serbia");

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get('[name="DateOfBirthMonth"]')
        .select("ožujak")
        .should("contain", "ožujak");
      cy.get('[name="DateOfBirthYear"]')
        .select("1992")
        .should("have.value", "1992");

      cy.get("#Email").type(email).should("have.value", email);

      cy.get("#StreetAddress")
        .type("Adresna 22")
        .should("have.value", "Adresna 22");

      cy.get("#Phone")
        .type("00998811222333")
        .should("have.value", "00998811222333");

      cy.get("#Password").type("lozinka");
      cy.get("#ConfirmPassword").type("lozinka");

      cy.get("#register-button").click();

      cy.get(":nth-child(6) > .field-validation-error").should(
        "have.text",
        "Adresa 1 je potrebna."
      );
    });
  });
});
