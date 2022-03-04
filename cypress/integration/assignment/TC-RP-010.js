/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Optional Fields", function () {
    //Check by filling some optional fields and leaving some fields empty

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#gender-male").check().should("be.checked");

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get('[name="DateOfBirthDay"]').select("26").should("have.value", "26");
      cy.get('[name="DateOfBirthYear"]')
        .select("1992")
        .should("have.value", "1992");

      cy.get("#Email").type(email).should("have.value", email);

      cy.get('label[for="ZipPostalCode"]')
        .siblings('input[type="text"]')
        .type("11000");

      cy.wait(5000);

      cy.get("a").contains("11000 BEOGRAD, Serbia").click();

      cy.get('label[for="City"]')
        .siblings('input[type="text"]')
        .should("have.value", "BEOGRAD");

      cy.get("#CountryId_dropdown")
        .find(":selected")
        .should("contain", "Serbia");

      cy.get("#Newsletter").check().should("be.checked");

      cy.get("#Password").type("lozinka");
      cy.get("#ConfirmPassword").type("lozinka");

      cy.get("#register-button").click();

      cy.get(".result").then(function (element) {
        const actualText = element.text();
        expect(
          actualText.includes(
            "Poslan vam je e-mail koji sadrži upute za aktivaciju članstva."
          )
        ).to.be.true;
      });
    });
  });
});
