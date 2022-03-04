/// <reference types="Cypress" />

describe("LINKS Project", function () {
  it("Email Validation", function () {
    //Testing for some invalid emails with cases like: without @, without(.), without a domain, without alphabets before @, numbers,  etc.
    //testATgmail.com;  test@gmailcom;  testgmail.com;  @gmail.com;  abrakadabra;  test@gmail;  @gmail;  12344558;  test@;  testatgmail.com;  test;

    cy.visit("https://www.links.hr/hr/register");

    cy.get("#eu-cookie-ok").click();

    cy.get("#FirstName").type("Mitar").should("have.value", "Mitar");
    cy.get("#LastName").type("Miric").should("have.value", "Miric");

    cy.get("#Password").type("lozinka");
    cy.get("#ConfirmPassword").type("lozinka");

    cy.fixture("emails").then((emails) => {
      emails.invalid.forEach((email) => {
        cy.get("#Email").clear().type(email);
        cy.get("#register-button").click();
        cy.get(":nth-child(5) > .field-validation-error").should(
          "have.text",
          "Pogrešan e-mail"
        );
      });
    });
  });
});
