/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Required Fields", function () {
    //Check all required fields by entering numbers and symbols where letters should be entered

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#FirstName").type("123456").should("have.value", "123456");
      cy.get("#LastName").type("455-??$$$5").should("have.value", "455-??$$$5");

      cy.get("#Email").type(email).should("have.value", email);

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
