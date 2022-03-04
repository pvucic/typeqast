/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Optional Fields", function () {
    //Check the optional additional registration form as a legal entity with correct data

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
      cy.get("#CompanyEmail")
        .type("firma@firma.com")
        .should("have.value", "firma@firma.com");
      cy.get("#CompanyTelephone")
        .type("008800022555")
        .should("have.value", "008800022555");
      cy.get("#CompanyContactPerson")
        .type("Kontakt Osoba")
        .should("have.value", "Kontakt Osoba");
      cy.get("#CompanyAddress")
        .type("Adresa Kompanije 22")
        .should("have.value", "Adresa Kompanije 22");

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
