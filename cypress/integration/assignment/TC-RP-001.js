/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("User Interface", function () {
    //Check all buttons, radio buttons, checkboxes, dropdown menus

    cy.randomEmail().then((email) => {
      cy.visit("https://www.links.hr/hr/register");

      cy.get("#eu-cookie-ok").click();

      cy.get("#RegisterAsCompany").check().should("be.checked");
      cy.get("#RegisterAsCompany").uncheck().should("not.be.checked");

      cy.get("#gender-male")
        .check()
        .should("be.checked")
        .and("have.value", "M");
      cy.get("#gender-female")
        .check()
        .should("be.checked")
        .and("have.value", "F");
      cy.get("#gender-male").check().should("be.checked");

      cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
      cy.get("#LastName").type("Miric").should("have.value", "Miric");

      cy.get('[name="DateOfBirthDay"]').select("26").should("have.value", "26");
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

      //Postal Code input
      cy.get('label[for="ZipPostalCode"]')
        .siblings('input[type="text"]')
        .type("11000");

      cy.wait(1000);

      cy.get("a").contains("11000 BEOGRAD, Serbia").click();

      cy.get('label[for="City"]')
        .siblings('input[type="text"]')
        .should("have.value", "BEOGRAD");

      cy.get("#CountryId_dropdown")
        .find(":selected")
        .should("contain", "Serbia");

      //Clear previous Postal Code input
      cy.get('label[for="ZipPostalCode"]')
        .siblings('input[type="text"]')
        .clear();
      cy.get('label[for="City"]').siblings('input[type="text"]').clear();

      //City input
      cy.get('label[for="City"]')
        .siblings('input[type="text"]')
        .type("Beograd");

      cy.wait(1000);

      cy.get("a").contains("11000 BEOGRAD, Serbia").click();

      cy.get('label[for="ZipPostalCode"]')
        .siblings('input[type="text"]')
        .should("have.value", "11000");

      cy.get("#CountryId_dropdown")
        .find(":selected")
        .should("contain", "Serbia");

      //Rest
      cy.get("#Phone")
        .type("00998811222333")
        .should("have.value", "00998811222333");

      cy.get("#Newsletter").check().should("be.checked");
      cy.get("#Newsletter").uncheck().should("not.be.checked");

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
