/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Phone number validation", function () {
    //Test for input with country code applied

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get("#Email").type(email).should("have.value", email);

      cy.get("#Phone")
        .type("+198 7 654 3210")
        .should("have.value", "+198 7 654 3210");

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
