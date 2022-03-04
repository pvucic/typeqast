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

    for (var i = 0; i < 32; i++) {
      cy.get('[name="DateOfBirthDay"]').select(i).should("have.value", i);
    }

    const months = [
      "siječanj",
      "veljača",
      "ožujak",
      "travanj",
      "svibanj",
      "lipanj",
      "srpanj",
      "kolovoz",
      "rujan",
      "listopad",
      "studeni",
      "prosinac",
    ];

    months.forEach((month) => {
      cy.get('[name="DateOfBirthMonth"]')
        .select(month)
        .find("option:selected")
        .should("have.text", month);
    });
  });
});

